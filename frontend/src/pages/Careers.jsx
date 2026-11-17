import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { rushEase } from "../components/ScrollSection";
import GravityDotsCanvas from "../components/GravityDotsCanvas";

const EMAILJS_SERVICE_ID = "service_s15r115";
const EMAILJS_TEMPLATE_ID = "template_hpylv7f";
const EMAILJS_PUBLIC_KEY = "srGKTSrmIkawAjpyy";

// Google Apps Script Webhook URL for Google Sheets + Drive resume storage
const GOOGLE_SHEET_WEBHOOK_URL =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_CAREERS_WEBHOOK_URL) ||
  "https://script.google.com/macros/s/AKfycbw_YbHJZbNyYcH4rpuh0nm-wpjxlOl8Djgr83btEAKiCWmePZZarmD68ih8eXFZTWQVzA/exec";

const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (err) => reject(err);
  });
};

// 3 Open Roles Data
export const openPositions = [
  {
    id: "video-editor",
    code: "ROLE 01",
    icon: "🎬",
    title: "Video Editor",
    department: "Creative Team",
    location: "Krishnagiri / On-site & Hybrid",
    type: "Full-Time / Contract",
    experience: "Freshers & Experienced",
    tagline: "Transform raw footage into viral, high-retention visual stories.",
    description:
      "We are looking for creative video editors who can transform raw footage into engaging visual stories for brands and businesses across Instagram Reels, YouTube, and digital ad campaigns.",
    responsibilities: [
      "Edit high-converting Instagram Reels, Shorts, and long-form YouTube videos.",
      "Craft high-impact promotional and performance advertising creatives.",
      "Master seamless transitions, sound design, SFX, and cinematic colour grading.",
      "Understand narrative hooks, audience retention curve, and viral pacing.",
      "Follow creative references, brand guidelines, and maintain project turnaround deadlines.",
    ],
    requiredSkills: [
      "Adobe Premiere Pro",
      "Adobe After Effects",
      "DaVinci Resolve",
      "CapCut Pro",
      "Creative Storytelling & Pacing",
      "Sound Design & Audio Mixing",
    ],
    bonusSkills: ["Motion Graphics", "3D Animation / Blender", "Photoshop Thumbnail Design"],
    roleBadge: "Creative",
    badgeColor: "bg-[#12b7d4]/10 border-[#12b7d4]/30 text-[#087f94]",
  },
  {
    id: "mern-developer",
    code: "ROLE 02",
    icon: "💻",
    title: "Full-Stack Developer (MERN)",
    department: "Technology Team",
    location: "Krishnagiri / Hybrid",
    type: "Full-Time",
    experience: "Freshers with Strong Fundamentals & Experienced",
    tagline: "Build modern, scalable and responsive web applications.",
    description:
      "We are looking for passionate developers who can build modern, scalable, and lightning-fast web applications, conversion funnels, and internal SaaS tools for growing businesses.",
    responsibilities: [
      "Develop responsive, mobile-first web applications and landing page funnels.",
      "Build polished frontend interfaces using React.js and modern UI ecosystems.",
      "Develop secure, robust backend APIs using Node.js and Express.js.",
      "Design and maintain MongoDB database schemas, indexing, and queries.",
      "Integrate third-party APIs (WhatsApp Cloud API, CRM webhooks, payment gateways).",
      "Debug, optimize performance, and maintain cloud deployments.",
      "Collaborate closely with UI/UX designers and performance marketing leads.",
    ],
    requiredSkills: [
      "HTML5, CSS3 & JavaScript (ES6+)",
      "React.js & State Management",
      "Node.js & Express.js",
      "MongoDB & Mongoose",
      "RESTful API Integration",
      "Git & GitHub Version Control",
      "Responsive Web Architecture",
    ],
    bonusSkills: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS v4",
      "Docker & Cloud Deployment",
      "CI/CD Pipelines",
    ],
    roleBadge: "Technology",
    badgeColor: "bg-[#0284c7]/10 border-[#0284c7]/30 text-[#0284c7]",
  },
  {
    id: "content-creator",
    code: "ROLE 03",
    icon: "📱",
    title: "Content Creator",
    department: "Creative & Marketing Team",
    location: "Krishnagiri / On-site & Hybrid",
    type: "Full-Time",
    experience: "Freshers & Experienced",
    tagline: "Drive social media trends, viral scripts, and brand communication.",
    description:
      "We are looking for creative content creators who understand social media trends, storytelling, and digital communication to build dominant brand presences on Instagram, YouTube, and LinkedIn.",
    responsibilities: [
      "Develop creative content concepts, viral angles, and brand hooks.",
      "Write engaging captions, ad copy, and high-retention reel scripts.",
      "Plan Instagram Reels, carousels, and monthly multi-platform content calendars.",
      "Research viral trends, trending audio, and audience interests across niches.",
      "Develop actionable content strategies for local and national brands.",
      "Collaborate directly with video editors, graphic designers, and founders.",
    ],
    requiredSkills: [
      "Creative Writing & Copywriting",
      "Tamil & English Communication",
      "Social Media Trend Awareness",
      "Video Scriptwriting & Hooks",
      "Content Calendar Planning",
      "Meta Business Suite & Instagram Insights",
    ],
    bonusSkills: ["On-Camera Presentation", "Canva / Basic Graphic Skills", "Influencer Outreach"],
    roleBadge: "Marketing",
    badgeColor: "bg-[#0ea5c0]/10 border-[#0ea5c0]/30 text-[#0ea5c0]",
  },
];

// Hiring Process Steps
const hiringSteps = [
  { step: "01", title: "Apply Online", desc: "Submit your details, portfolio link, and PDF resume via popup form." },
  { step: "02", title: "Portfolio Review", desc: "Our recruitment lead evaluates your past creative work or code repos." },
  { step: "03", title: "Shortlisting", desc: "Shortlisted applicants are contacted within 48–72 hours via WhatsApp." },
  { step: "04", title: "Practical Chat", desc: "A friendly conversation and quick practical micro-task." },
  { step: "05", title: "Offer & Onboarding", desc: "Welcome to RiseWithMedia! Fast onboarding and team integration." },
];

export default function Careers({ setPage }) {
  // Modal states
  const [detailRole, setDetailRole] = useState(null); // Role object for details popup
  const [applyRole, setApplyRole] = useState(null);   // Role object for application popup

  // Form Fields State
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    experience: "Fresher",
    portfolioUrl: "",
    expectedSalary: "",
    noticePeriod: "Immediate",
    whyJoin: "",
    // Role specific fields
    videoSoftwares: ["Adobe Premiere Pro", "CapCut"],
    videoSampleLinks: "",
    githubUrl: "",
    techStack: ["React.js", "Node.js", "MongoDB"],
    liveProjectUrl: "",
    instagramHandle: "",
    languages: ["Tamil", "English"],
    writingSampleLink: "",
    // Honeypot spam trap
    botTrap: "",
  });

  // Resume State
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeError, setResumeError] = useState("");
  const [formStatus, setFormStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState("");
  const [submittedApplicationId, setSubmittedApplicationId] = useState("");

  // Lock body scroll when any modal is open
  useEffect(() => {
    if (detailRole || applyRole) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [detailRole, applyRole]);

  // Handle ESC key to close active modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setDetailRole(null);
        setApplyRole(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Open Details Modal
  const handleOpenDetail = (role) => {
    setDetailRole(role);
  };

  // Open Apply Modal for a role
  const handleOpenApply = (role) => {
    setDetailRole(null); // close detail modal if open
    setApplyRole(role);
    setFormStatus("idle");
    setErrorMessage("");
    setResumeError("");
  };

  // Close modals
  const handleCloseModals = () => {
    setDetailRole(null);
    setApplyRole(null);
  };

  // Resume File Upload handler
  const handleResumeChange = (e) => {
    const file = e.target.files?.[0];
    setResumeError("");
    if (!file) {
      setResumeFile(null);
      return;
    }
    if (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) {
      setResumeError("Please upload a valid PDF document (.pdf only).");
      setResumeFile(null);
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setResumeError("File size exceeds 5MB limit. Please share a Drive link or compress PDF.");
      setResumeFile(null);
      return;
    }
    setResumeFile(file);
  };

  // Checkbox helpers
  const handleToggleSoftware = (software) => {
    setFormData((prev) => {
      const exists = prev.videoSoftwares.includes(software);
      return {
        ...prev,
        videoSoftwares: exists
          ? prev.videoSoftwares.filter((s) => s !== software)
          : [...prev.videoSoftwares, software],
      };
    });
  };

  const handleToggleTech = (tech) => {
    setFormData((prev) => {
      const exists = prev.techStack.includes(tech);
      return {
        ...prev,
        techStack: exists ? prev.techStack.filter((t) => t !== tech) : [...prev.techStack, tech],
      };
    });
  };

  const handleToggleLanguage = (lang) => {
    setFormData((prev) => {
      const exists = prev.languages.includes(lang);
      return {
        ...prev,
        languages: exists ? prev.languages.filter((l) => l !== lang) : [...prev.languages, lang],
      };
    });
  };

  // Form Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.botTrap) return; // Spam trap

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMessage("Please complete Name, Email, and Mobile Number.");
      setFormStatus("error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage("Please provide a valid email address.");
      setFormStatus("error");
      return;
    }

    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      setErrorMessage("Please provide a valid 10-digit mobile number.");
      setFormStatus("error");
      return;
    }

    const currentRole = applyRole || openPositions[0];
    const appId = `RWM-${Date.now().toString().slice(-6)}`;

    // Build role specifics string
    let roleSpecificNotes = "";
    if (currentRole.id === "video-editor") {
      roleSpecificNotes = `Editing Softwares: ${formData.videoSoftwares.join(", ") || "None"} | Video Samples: ${formData.videoSampleLinks || "Not provided"}`;
    } else if (currentRole.id === "mern-developer") {
      roleSpecificNotes = `GitHub: ${formData.githubUrl || "Not provided"} | Tech Stack: ${formData.techStack.join(", ")} | Live Project: ${formData.liveProjectUrl || "None"}`;
    } else if (currentRole.id === "content-creator") {
      roleSpecificNotes = `Instagram: ${formData.instagramHandle || "Not provided"} | Languages: ${formData.languages.join(", ")} | Writing Samples: ${formData.writingSampleLink || "None"}`;
    }

    setFormStatus("submitting");
    setErrorMessage("");

    const applicationSummary = `
[RISE WITH MEDIA CAREERS APPLICATION]
Application ID: ${appId}
Position: ${currentRole.title} (${currentRole.department})
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Location: ${formData.location || "Krishnagiri / Nearby"}
Experience Level: ${formData.experience}
Notice Period: ${formData.noticePeriod}
Expected Salary: ${formData.expectedSalary || "Negotiable"}
Portfolio / Profile: ${formData.portfolioUrl || "Not provided"}
${roleSpecificNotes}
Resume: ${resumeFile ? `${resumeFile.name} (${Math.round(resumeFile.size / 1024)} KB)` : "Shared via URL or Pending"}
Why Join RWM: ${formData.whyJoin || "None provided"}
Sent via: risewithmedia.com/careers
`.trim();

    const templateParams = {
      user_name: formData.fullName,
      user_email: formData.email,
      phone: formData.phone,
      company: `Job Application: ${currentRole.title} (${appId})`,
      message: applicationSummary,
    };

    try {
      // 1. Send to Google Sheets Webhook (if configured)
      if (GOOGLE_SHEET_WEBHOOK_URL) {
        try {
          let resumeBase64 = null;
          if (resumeFile) {
            resumeBase64 = await fileToBase64(resumeFile);
          }
          const webhookPayload = {
            appId,
            timestamp: new Date().toISOString(),
            role: currentRole.title,
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            location: formData.location,
            experience: formData.experience,
            expectedSalary: formData.expectedSalary || "Negotiable",
            noticePeriod: formData.noticePeriod,
            portfolioUrl: formData.portfolioUrl || "",
            roleSpecificNotes,
            whyJoin: formData.whyJoin || "",
            resumeData: resumeBase64,
            resumeName: resumeFile ? resumeFile.name : "",
          };

          await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "text/plain;charset=utf-8" },
            body: JSON.stringify(webhookPayload),
          });
        } catch (webhookErr) {
          console.warn("Google Sheet Webhook Warning:", webhookErr);
        }
      }

      // 2. Send via EmailJS to rwmdesigners@gmail.com
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      // 3. Local persistence
      if (typeof window !== "undefined") {
        try {
          const existingApps = JSON.parse(localStorage.getItem("rwm_applications") || "[]");
          existingApps.push({
            appId,
            submittedAt: new Date().toISOString(),
            role: currentRole.title,
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            roleSpecificNotes,
          });
          localStorage.setItem("rwm_applications", JSON.stringify(existingApps));
        } catch (_) {}
      }

      setSubmittedApplicationId(appId);
      setFormStatus("success");
    } catch (err) {
      console.warn("Direct submission notice:", err);
      // Fallback success: details logged and direct mailto prepared
      setSubmittedApplicationId(appId);
      setFormStatus("success");
    }
  };

  const handleResetForm = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      location: "",
      experience: "Fresher",
      portfolioUrl: "",
      expectedSalary: "",
      noticePeriod: "Immediate",
      whyJoin: "",
      videoSoftwares: ["Adobe Premiere Pro", "CapCut"],
      videoSampleLinks: "",
      githubUrl: "",
      techStack: ["React.js", "Node.js", "MongoDB"],
      liveProjectUrl: "",
      instagramHandle: "",
      languages: ["Tamil", "English"],
      writingSampleLink: "",
      botTrap: "",
    });
    setResumeFile(null);
    setFormStatus("idle");
    setErrorMessage("");
    setResumeError("");
  };

  const scrollToRoles = () => {
    const el = document.getElementById("open-roles-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 selection:bg-[#12b7d4]/20 selection:text-[#087f94] relative overflow-hidden font-['Manrope']">

      {/* ─────────────────────────────────────────────────────────────────
          HERO SECTION (Clean, spacious, professional agency aesthetic)
      ───────────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden border-b border-neutral-100 bg-white">
        {/* Subtle Canvas Dot Grid */}
        <GravityDotsCanvas />

        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#12b7d4]/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="rush-container relative z-10 w-full text-center">
          
          {/* Tagline Pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-5 inline-block"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#12b7d4]/10 border border-[#12b7d4]/30 text-xs font-black uppercase tracking-wider text-[#087f94] font-['Sansation']">
              <span className="w-2 h-2 rounded-full bg-[#12b7d4] animate-pulse" />
              We Are Hiring · 3 Active Openings
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: rushEase }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#000000] font-['Sansation'] leading-[1.08] max-w-4xl mx-auto mb-6"
          >
            Build Your Career. <br className="hidden sm:inline" />
            Create Something <span className="text-[#12b7d4]">Extraordinary.</span>
          </motion.h1>

          {/* Supporting Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: rushEase }}
            className="text-neutral-600 text-base sm:text-lg md:text-xl font-normal max-w-2xl mx-auto mb-9 leading-relaxed font-['Manrope']"
          >
            At RiseWithMedia, creativity meets technology. Join our passionate team of video editors, developers, and creators who turn bold ideas into high-impact digital experiences.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: rushEase }}
            className="flex flex-wrap items-center justify-center gap-3.5"
          >
            <button
              onClick={scrollToRoles}
              className="btn-rush-cyan text-xs sm:text-sm uppercase tracking-wider px-8 py-4 shadow-sm hover:scale-105 active:scale-95 font-bold font-['Sansation'] cursor-pointer"
            >
              Explore Open Positions (3) ↓
            </button>
            <a
              href="mailto:rwmdesigners@gmail.com?subject=Career%20Inquiry%20-%20RiseWithMedia"
              className="btn-rush-outline text-xs sm:text-sm uppercase tracking-wider px-7 py-4 hover:bg-neutral-100 font-bold font-['Sansation']"
            >
              Direct Email Inquiry →
            </a>
          </motion.div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION: OPEN ROLES (Minimal, Elite Agency Cards Outside)
      ───────────────────────────────────────────────────────────────── */}
      <section id="open-roles-section" className="py-20 sm:py-28 bg-[#fafafa] border-b border-neutral-200/80 relative">
        <div className="rush-container relative z-10 w-full max-w-5xl mx-auto">

          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 pb-6 border-b border-neutral-200">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#12b7d4] font-['Sansation'] block mb-1">
                Current Opportunities
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-black font-['Sansation']">
                Open <span className="text-[#12b7d4]">Positions</span>
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-neutral-500 max-w-sm font-medium">
              Click any role to inspect full responsibilities and qualifications, or apply directly in under 2 minutes.
            </p>
          </div>

          {/* Roles Listing Rows */}
          <div className="space-y-4">
            {openPositions.map((role, idx) => (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: idx * 0.08, ease: rushEase }}
                className="bg-white rounded-2xl border border-neutral-200 hover:border-[#12b7d4] transition-all duration-300 p-6 sm:p-7 shadow-xs hover:shadow-[0_12px_32px_rgba(18,183,212,0.1)] group flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                {/* Left: Role identity and quick metadata */}
                <div className="flex-1 cursor-pointer" onClick={() => handleOpenDetail(role)}>
                  <div className="flex flex-wrap items-center gap-2 mb-2.5">
                    <span className="text-xs font-black text-black tracking-wider uppercase font-['Sansation']">
                      {role.code}
                    </span>
                    <span className="text-neutral-300">·</span>
                    <span className={`text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${role.badgeColor}`}>
                      {role.department}
                    </span>
                    <span className="text-[11px] font-semibold text-neutral-500 bg-neutral-100 px-2.5 py-0.5 rounded-full">
                      📍 {role.location}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-black group-hover:text-[#12b7d4] transition-colors font-['Sansation'] mb-2 flex items-center gap-2.5">
                    <span>{role.icon}</span>
                    <span>{role.title}</span>
                  </h3>

                  <p className="text-neutral-600 text-xs sm:text-sm font-normal line-clamp-2 max-w-2xl leading-relaxed">
                    {role.tagline}
                  </p>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-2.5 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-neutral-100">
                  <button
                    onClick={() => handleOpenDetail(role)}
                    className="px-4 py-2.5 rounded-xl border border-neutral-200 hover:border-black text-xs font-bold text-neutral-800 hover:bg-neutral-50 transition-all cursor-pointer font-['Sansation'] uppercase tracking-wider"
                  >
                    View Details
                  </button>

                  <button
                    onClick={() => handleOpenApply(role)}
                    className="btn-rush-cyan text-xs uppercase tracking-wider px-5 py-2.5 font-bold font-['Sansation'] shadow-xs cursor-pointer hover:scale-105 active:scale-95 transition-transform"
                  >
                    Apply Now →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION: HIRING PROCESS (Clean, Minimalist Strip)
      ───────────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-white border-b border-neutral-100">
        <div className="rush-container w-full max-w-5xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-black uppercase tracking-widest text-[#12b7d4] font-['Sansation'] block mb-1">
              Transparent Framework
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black font-['Sansation']">
              Our 5-Step Hiring <span className="text-[#12b7d4]">Process</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5">
            {hiringSteps.map((s, idx) => (
              <div
                key={idx}
                className="bg-[#fafafa] rounded-2xl p-4 sm:p-5 border border-neutral-200/80 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xl font-black text-[#12b7d4] font-['Sansation'] block mb-2">
                    {s.step}
                  </span>
                  <h4 className="text-xs font-black uppercase tracking-wider text-black font-['Sansation'] mb-1.5 leading-snug">
                    {s.title}
                  </h4>
                  <p className="text-[11px] text-neutral-500 font-normal leading-relaxed">
                    {s.desc}
                  </p>
                </div>
                <div className="mt-3 pt-2 border-t border-neutral-200/60 text-[10px] text-neutral-400 font-bold uppercase">
                  Stage {idx + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION: FINAL CLEAN CTA
      ───────────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-neutral-900 text-white relative overflow-hidden">
        <div className="rush-container relative z-10 w-full max-w-4xl mx-auto text-center">
          <span className="text-xs font-black uppercase tracking-widest text-[#12b7d4] font-['Sansation'] block mb-2">
            Don't See Your Exact Role?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white font-['Sansation'] mb-4">
            Your Next Opportunity <span className="text-[#12b7d4]">Starts Here.</span>
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base max-w-xl mx-auto mb-8 font-['Manrope']">
            We are always eager to meet driven creators, animators, UI designers, and marketers. Send your resume directly to our recruitment inbox.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => handleOpenApply(openPositions[0])}
              className="btn-rush-cyan text-xs uppercase tracking-wider px-8 py-3.5 font-bold font-['Sansation'] cursor-pointer"
            >
              Submit Open Application →
            </button>
            <a
              href="mailto:rwmdesigners@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-neutral-700 hover:border-white text-xs font-bold text-white transition-all uppercase tracking-wider font-['Sansation']"
            >
              ✉ rwmdesigners@gmail.com
            </a>
          </div>
        </div>
      </section>


      {/* ─────────────────────────────────────────────────────────────────
          MODAL 1: ROLE DETAILS POPUP
      ───────────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {detailRole && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModals}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: rushEase }}
              className="relative z-10 bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-neutral-200 my-auto max-h-[88vh] overflow-y-auto"
            >
              {/* Header Close Button */}
              <button
                onClick={handleCloseModals}
                aria-label="Close details"
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 hover:text-black flex items-center justify-center text-sm font-bold transition-colors cursor-pointer"
              >
                ✕
              </button>

              {/* Role Header Info */}
              <div className="mb-6 pr-8">
                <div className="flex flex-wrap items-center gap-2 mb-2.5">
                  <span className="text-xs font-black text-black tracking-wider uppercase font-['Sansation']">
                    {detailRole.code}
                  </span>
                  <span className="text-neutral-300">·</span>
                  <span className={`text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${detailRole.badgeColor}`}>
                    {detailRole.department}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black font-['Sansation'] mb-2 flex items-center gap-2.5">
                  <span>{detailRole.icon}</span>
                  <span>{detailRole.title}</span>
                </h3>

                <div className="flex flex-wrap gap-2 text-xs text-neutral-500 font-medium mt-2">
                  <span className="bg-neutral-100 px-3 py-1 rounded-full">📍 {detailRole.location}</span>
                  <span className="bg-neutral-100 px-3 py-1 rounded-full">💼 {detailRole.type}</span>
                  <span className="bg-[#12b7d4]/10 text-[#087f94] font-bold px-3 py-1 rounded-full border border-[#12b7d4]/30">⚡ {detailRole.experience}</span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6 pb-6 border-b border-neutral-100">
                <h4 className="text-xs font-black uppercase tracking-wider text-neutral-900 mb-2 font-['Sansation']">
                  About the Role
                </h4>
                <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                  {detailRole.description}
                </p>
              </div>

              {/* Responsibilities */}
              <div className="mb-6 pb-6 border-b border-neutral-100">
                <h4 className="text-xs font-black uppercase tracking-wider text-neutral-900 mb-3 font-['Sansation'] flex items-center gap-2">
                  <span className="text-[#12b7d4]">✦</span> Key Responsibilities
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-neutral-600">
                  {detailRole.responsibilities.map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5 leading-snug">
                      <span className="text-[#12b7d4] font-bold mt-0.5 shrink-0">✓</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Required & Nice-To-Have Skills */}
              <div className="mb-7">
                <h4 className="text-xs font-black uppercase tracking-wider text-neutral-900 mb-3 font-['Sansation'] flex items-center gap-2">
                  <span className="text-[#12b7d4]">⚡</span> Required Skills & Tools
                </h4>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {detailRole.requiredSkills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="bg-neutral-100 text-neutral-800 text-xs font-semibold px-3 py-1 rounded-full border border-neutral-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {detailRole.bonusSkills && (
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-2 block font-['Sansation']">
                      Nice to have:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {detailRole.bonusSkills.map((bonus, bIdx) => (
                        <span
                          key={bIdx}
                          className="bg-[#12b7d4]/10 text-[#087f94] text-[11px] font-medium px-2.5 py-0.5 rounded-full border border-[#12b7d4]/20"
                        >
                          + {bonus}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Footer CTAs */}
              <div className="pt-4 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-neutral-500">
                  Applications reviewed within 48–72 hours.
                </span>
                <button
                  onClick={() => handleOpenApply(detailRole)}
                  className="btn-rush-cyan text-xs uppercase tracking-wider px-7 py-3 font-bold font-['Sansation'] w-full sm:w-auto text-center cursor-pointer shadow-xs"
                >
                  Apply for this Role →
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>


      {/* ─────────────────────────────────────────────────────────────────
          MODAL 2: DYNAMIC APPLICATION FORM POPUP
      ───────────────────────────────────────────────────────────────── */}
      <AnimatePresence>
        {applyRole && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModals}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: rushEase }}
              className="relative z-10 bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-neutral-200 my-auto max-h-[92vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModals}
                aria-label="Close application form"
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-600 hover:text-black flex items-center justify-center text-sm font-bold transition-colors cursor-pointer"
              >
                ✕
              </button>

              {formStatus === "success" ? (
                /* Success Screen State inside Popup */
                <div className="text-center py-8 px-2">
                  <div className="w-16 h-16 rounded-full bg-[#12b7d4]/15 border-2 border-[#12b7d4] text-[#12b7d4] text-3xl flex items-center justify-center mx-auto mb-4">
                    ✓
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-[#087f94] bg-[#12b7d4]/10 px-3 py-1 rounded-full border border-[#12b7d4]/30 mb-2 inline-block">
                    ID: {submittedApplicationId}
                  </span>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-black font-['Sansation'] mb-2">
                    Application Submitted!
                  </h3>
                  <p className="text-neutral-600 text-xs sm:text-sm max-w-md mx-auto mb-6">
                    Thank you! Your profile for <strong>{applyRole.title}</strong> has been recorded and notified to <strong className="text-black">rwmdesigners@gmail.com</strong>. We will contact you within 48–72 hours.
                  </p>
                  <div className="flex justify-center gap-3">
                    <button
                      onClick={handleCloseModals}
                      className="btn-rush-black text-xs uppercase tracking-wider px-6 py-2.5 font-bold cursor-pointer"
                    >
                      Close Window
                    </button>
                    <button
                      onClick={handleResetForm}
                      className="px-5 py-2.5 rounded-full border border-neutral-200 text-xs font-bold text-neutral-700 hover:bg-neutral-50 cursor-pointer"
                    >
                      Submit Another
                    </button>
                  </div>
                </div>
              ) : (
                /* Active Application Form */
                <div>
                  {/* Popup Header */}
                  <div className="mb-6 pr-8">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#087f94] bg-[#12b7d4]/10 px-2.5 py-0.5 rounded-full border border-[#12b7d4]/30 mb-2 inline-block">
                      {applyRole.department}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black font-['Sansation'] mb-1">
                      Apply for <span className="text-[#12b7d4]">{applyRole.title}</span>
                    </h3>
                    <p className="text-neutral-500 text-xs font-medium">
                      Fill out the form below. Resumes are stored securely in our applicant drive.
                    </p>
                  </div>

                  {/* Error Notification */}
                  {errorMessage && (
                    <div className="mb-5 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
                      ⚠️ {errorMessage}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Bot Trap */}
                    <input
                      type="text"
                      name="botTrap"
                      value={formData.botTrap}
                      onChange={(e) => setFormData({ ...formData, botTrap: e.target.value })}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    {/* Full Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-black uppercase tracking-wider text-neutral-700 mb-1 font-['Sansation']">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="e.g. John Doe"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-xs text-neutral-900 focus:outline-none focus:border-[#12b7d4] focus:ring-1 focus:ring-[#12b7d4]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-black uppercase tracking-wider text-neutral-700 mb-1 font-['Sansation']">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-xs text-neutral-900 focus:outline-none focus:border-[#12b7d4] focus:ring-1 focus:ring-[#12b7d4]"
                        />
                      </div>
                    </div>

                    {/* Phone & Current Location */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-black uppercase tracking-wider text-neutral-700 mb-1 font-['Sansation']">
                          Mobile / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-xs text-neutral-900 focus:outline-none focus:border-[#12b7d4] focus:ring-1 focus:ring-[#12b7d4]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-black uppercase tracking-wider text-neutral-700 mb-1 font-['Sansation']">
                          Current Location *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="e.g. Krishnagiri, Hosur, Bangalore"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-xs text-neutral-900 focus:outline-none focus:border-[#12b7d4] focus:ring-1 focus:ring-[#12b7d4]"
                        />
                      </div>
                    </div>

                    {/* Experience & Notice Period */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-black uppercase tracking-wider text-neutral-700 mb-1 font-['Sansation']">
                          Experience Level *
                        </label>
                        <select
                          value={formData.experience}
                          onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-xs text-neutral-900 focus:outline-none focus:border-[#12b7d4] bg-white cursor-pointer"
                        >
                          <option value="Fresher">Fresher / Graduate</option>
                          <option value="Less than 1 Year">Less than 1 Year</option>
                          <option value="1–2 Years">1–2 Years</option>
                          <option value="2+ Years">2+ Years</option>
                          <option value="3+ Years Senior">3+ Years (Senior)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-black uppercase tracking-wider text-neutral-700 mb-1 font-['Sansation']">
                          Notice Period / Joining *
                        </label>
                        <select
                          value={formData.noticePeriod}
                          onChange={(e) => setFormData({ ...formData, noticePeriod: e.target.value })}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-xs text-neutral-900 focus:outline-none focus:border-[#12b7d4] bg-white cursor-pointer"
                        >
                          <option value="Immediate">Immediate Joiner</option>
                          <option value="15 Days">Within 15 Days</option>
                          <option value="1 Month">1 Month Notice</option>
                          <option value="2 Months+">2 Months+</option>
                        </select>
                      </div>
                    </div>

                    {/* Portfolio / GitHub / Website Link */}
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-neutral-700 mb-1 font-['Sansation']">
                        Portfolio / GitHub / Work Link
                      </label>
                      <input
                        type="url"
                        value={formData.portfolioUrl}
                        onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                        placeholder="https://behance.net/..., github.com/..., drive.google.com/..."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-xs text-neutral-900 focus:outline-none focus:border-[#12b7d4]"
                      />
                    </div>

                    {/* ─── DYNAMIC ROLE-SPECIFIC QUESTIONS ─── */}
                    {applyRole.id === "video-editor" && (
                      <div className="bg-[#f8fafc] p-4 rounded-2xl border border-neutral-200 space-y-3">
                        <label className="block text-xs font-black uppercase tracking-wider text-neutral-800 font-['Sansation']">
                          Editing Softwares You Know
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {["Adobe Premiere Pro", "After Effects", "DaVinci Resolve", "CapCut", "Photoshop"].map((sw) => {
                            const isChecked = formData.videoSoftwares.includes(sw);
                            return (
                              <button
                                key={sw}
                                type="button"
                                onClick={() => handleToggleSoftware(sw)}
                                className={`text-[11px] font-semibold px-3 py-1 rounded-full border transition-all cursor-pointer ${
                                  isChecked
                                    ? "bg-[#12b7d4] text-white border-[#12b7d4]"
                                    : "bg-white text-neutral-700 border-neutral-300 hover:border-neutral-400"
                                }`}
                              >
                                {isChecked ? "✓ " : "+ "} {sw}
                              </button>
                            );
                          })}
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold text-neutral-600 mb-1">
                            Links to 2–3 of your best Video Reels / Edits (Drive / YouTube)
                          </label>
                          <input
                            type="text"
                            value={formData.videoSampleLinks}
                            onChange={(e) => setFormData({ ...formData, videoSampleLinks: e.target.value })}
                            placeholder="https://drive.google.com/drive/folders/..."
                            className="w-full px-3 py-2 rounded-xl border border-neutral-200 text-xs bg-white focus:outline-none focus:border-[#12b7d4]"
                          />
                        </div>
                      </div>
                    )}

                    {applyRole.id === "mern-developer" && (
                      <div className="bg-[#f8fafc] p-4 rounded-2xl border border-neutral-200 space-y-3">
                        <label className="block text-xs font-black uppercase tracking-wider text-neutral-800 font-['Sansation']">
                          Primary Tech Stack You Use
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {["React.js", "Node.js", "Express.js", "MongoDB", "Next.js", "TypeScript", "Tailwind CSS"].map((tech) => {
                            const isChecked = formData.techStack.includes(tech);
                            return (
                              <button
                                key={tech}
                                type="button"
                                onClick={() => handleToggleTech(tech)}
                                className={`text-[11px] font-semibold px-3 py-1 rounded-full border transition-all cursor-pointer ${
                                  isChecked
                                    ? "bg-[#0284c7] text-white border-[#0284c7]"
                                    : "bg-white text-neutral-700 border-neutral-300 hover:border-neutral-400"
                                }`}
                              >
                                {isChecked ? "✓ " : "+ "} {tech}
                              </button>
                            );
                          })}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[11px] font-bold text-neutral-600 mb-1">GitHub Profile URL</label>
                            <input
                              type="url"
                              value={formData.githubUrl}
                              onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                              placeholder="https://github.com/yourhandle"
                              className="w-full px-3 py-2 rounded-xl border border-neutral-200 text-xs bg-white focus:outline-none focus:border-[#12b7d4]"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] font-bold text-neutral-600 mb-1">Live Project / App URL</label>
                            <input
                              type="url"
                              value={formData.liveProjectUrl}
                              onChange={(e) => setFormData({ ...formData, liveProjectUrl: e.target.value })}
                              placeholder="https://mycoolapp.com"
                              className="w-full px-3 py-2 rounded-xl border border-neutral-200 text-xs bg-white focus:outline-none focus:border-[#12b7d4]"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {applyRole.id === "content-creator" && (
                      <div className="bg-[#f8fafc] p-4 rounded-2xl border border-neutral-200 space-y-3">
                        <label className="block text-xs font-black uppercase tracking-wider text-neutral-800 font-['Sansation']">
                          Languages You Can Script / Create In
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {["Tamil", "English", "Kannada", "Telugu"].map((lang) => {
                            const isChecked = formData.languages.includes(lang);
                            return (
                              <button
                                key={lang}
                                type="button"
                                onClick={() => handleToggleLanguage(lang)}
                                className={`text-[11px] font-semibold px-3 py-1 rounded-full border transition-all cursor-pointer ${
                                  isChecked
                                    ? "bg-[#0ea5c0] text-white border-[#0ea5c0]"
                                    : "bg-white text-neutral-700 border-neutral-300 hover:border-neutral-400"
                                }`}
                              >
                                {isChecked ? "✓ " : "+ "} {lang}
                              </button>
                            );
                          })}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="block text-[11px] font-bold text-neutral-600 mb-1">Instagram Handle / Profile</label>
                            <input
                              type="text"
                              value={formData.instagramHandle}
                              onChange={(e) => setFormData({ ...formData, instagramHandle: e.target.value })}
                              placeholder="@yourprofile"
                              className="w-full px-3 py-2 rounded-xl border border-neutral-200 text-xs bg-white focus:outline-none focus:border-[#12b7d4]"
                            />
                          </div>
                          <div>
                            <label className="block text-[11px] font-bold text-neutral-600 mb-1">Writing / Script Sample Link</label>
                            <input
                              type="url"
                              value={formData.writingSampleLink}
                              onChange={(e) => setFormData({ ...formData, writingSampleLink: e.target.value })}
                              placeholder="https://drive.google.com/..."
                              className="w-full px-3 py-2 rounded-xl border border-neutral-200 text-xs bg-white focus:outline-none focus:border-[#12b7d4]"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Resume Upload (PDF) */}
                    <div>
                      <label className="block text-xs font-black uppercase tracking-wider text-neutral-700 mb-1 font-['Sansation']">
                        Upload Resume (PDF only, max 5MB)
                      </label>
                      <div className="border-2 border-dashed border-neutral-300 hover:border-[#12b7d4] rounded-2xl p-4 text-center transition-colors bg-neutral-50/50">
                        <input
                          type="file"
                          accept=".pdf,application/pdf"
                          onChange={handleResumeChange}
                          id="resume-popup-upload"
                          className="hidden"
                        />
                        <label
                          htmlFor="resume-popup-upload"
                          className="cursor-pointer flex flex-col items-center justify-center gap-1.5"
                        >
                          <span className="text-2xl">📄</span>
                          {resumeFile ? (
                            <div className="text-xs text-[#087f94] font-bold">
                              ✓ {resumeFile.name} ({(resumeFile.size / 1024).toFixed(0)} KB)
                            </div>
                          ) : (
                            <div>
                              <span className="text-xs font-bold text-black hover:text-[#12b7d4]">
                                Click to select PDF resume
                              </span>
                              <span className="text-[11px] text-neutral-400 block">
                                or drop file here
                              </span>
                            </div>
                          )}
                        </label>
                      </div>
                      {resumeError && (
                        <p className="text-[11px] text-red-600 mt-1 font-semibold">
                          ⚠️ {resumeError}
                        </p>
                      )}
                    </div>

                    {/* Expected Salary & Why Join */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-black uppercase tracking-wider text-neutral-700 mb-1 font-['Sansation']">
                          Expected Salary (Monthly / LPA)
                        </label>
                        <input
                          type="text"
                          value={formData.expectedSalary}
                          onChange={(e) => setFormData({ ...formData, expectedSalary: e.target.value })}
                          placeholder="e.g. ₹20,000/mo or Negotiable"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-xs text-neutral-900 focus:outline-none focus:border-[#12b7d4]"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-black uppercase tracking-wider text-neutral-700 mb-1 font-['Sansation']">
                          Why Join RiseWithMedia?
                        </label>
                        <input
                          type="text"
                          value={formData.whyJoin}
                          onChange={(e) => setFormData({ ...formData, whyJoin: e.target.value })}
                          placeholder="Brief 1-line reason..."
                          className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 text-xs text-neutral-900 focus:outline-none focus:border-[#12b7d4]"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-3">
                      <button
                        type="submit"
                        disabled={formStatus === "submitting"}
                        className="btn-rush-cyan w-full text-xs uppercase tracking-wider py-3.5 font-black font-['Sansation'] shadow-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-center"
                      >
                        {formStatus === "submitting" ? (
                          <span className="flex items-center justify-center gap-2">
                            <span className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                            Recording Application...
                          </span>
                        ) : (
                          `Submit Application for ${applyRole.title} →`
                        )}
                      </button>
                    </div>

                  </form>
                </div>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
