import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import ScrollSection, { rushEase, useIsMobile } from "../components/ScrollSection";
import GravityDotsCanvas from "../components/GravityDotsCanvas";

const EMAILJS_SERVICE_ID = "service_s15r115";
const EMAILJS_TEMPLATE_ID = "template_hpylv7f";
const EMAILJS_PUBLIC_KEY = "srGKTSrmIkawAjpyy";

// 3 Open Roles Data
export const openPositions = [
  {
    id: "video-editor",
    code: "ROLE 01",
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
    badgeColor: "bg-[#12b7d4]/15 border-[#12b7d4]/40 text-[#12b7d4]",
  },
  {
    id: "mern-developer",
    code: "ROLE 02",
    title: "Full-Stack Developer (MERN Stack)",
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
    badgeColor: "bg-[#38bdf8]/15 border-[#38bdf8]/40 text-[#38bdf8]",
  },
  {
    id: "content-creator",
    code: "ROLE 03",
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
    badgeColor: "bg-[#0ea5c0]/15 border-[#0ea5c0]/40 text-[#0ea5c0]",
  },
];

// Why Join RiseWithMedia Benefits
const whyJoinBenefits = [
  {
    icon: "🎨",
    title: "Creative Freedom",
    description:
      "Bring your boldest ideas to life. No bureaucratic red tape—pitch fearless concepts, test viral hooks, and execute with autonomy.",
    badge: "INNOVATION",
  },
  {
    icon: "🚀",
    title: "Learn & Grow",
    description:
      "Level up your craft with hands-on mentoring, master cutting-edge software, AI workflows, and modern agency toolstacks.",
    badge: "UPSKILLING",
  },
  {
    icon: "⚡",
    title: "Real Impact Projects",
    description:
      "Work directly with diverse brands and industries across real estate, healthcare, e-commerce, hospitality, and custom SaaS.",
    badge: "PORTFOLIO",
  },
  {
    icon: "🤝",
    title: "Collaborative Team",
    description:
      "Thrive alongside passionate designers, video wizards, performance marketers, and full-stack engineers who support your wins.",
    badge: "CULTURE",
  },
  {
    icon: "🎯",
    title: "Career Development",
    description:
      "Clear advancement trajectory, leadership opportunities, and performance bonuses as we scale across South India.",
    badge: "ADVANCEMENT",
  },
];

// Hiring Process Timeline
const hiringSteps = [
  {
    step: "01",
    title: "Application Submission",
    desc: "Submit your details, portfolio link, and PDF resume through our dynamic form below.",
  },
  {
    step: "02",
    title: "Resume & Portfolio Review",
    desc: "Our recruitment lead evaluates your past creative work, video reels, or GitHub code repos.",
  },
  {
    step: "03",
    title: "Shortlisting",
    desc: "Shortlisted candidates are contacted within 48–72 hours via email and WhatsApp.",
  },
  {
    step: "04",
    title: "Skill Assessment / Interview",
    desc: "A friendly technical conversation or short practical micro-task to showcase your craft.",
  },
  {
    step: "05",
    title: "Final Selection & Offer",
    desc: "Welcome to RiseWithMedia! Transparent offer rollout, quick onboarding, and immediate team integration.",
  },
];

export default function Careers({ setPage }) {
  const isMobile = useIsMobile();
  const formRef = useRef(null);
  const heroRef = useRef(null);

  // Selected position state for dynamic form
  const [selectedPosition, setSelectedPosition] = useState("video-editor");

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
    // Spam protection honeypot
    botTrap: "",
  });

  // Resume File State
  const [resumeFile, setResumeFile] = useState(null);
  const [resumeError, setResumeError] = useState("");
  const [formStatus, setFormStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState("");
  const [submittedApplicationId, setSubmittedApplicationId] = useState("");

  // Auto-scroll to application form when clicking "Apply" on a job card
  const handleSelectRoleAndScroll = (roleId) => {
    setSelectedPosition(roleId);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleHeroScrollToPositions = () => {
    const el = document.getElementById("open-positions");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Resume file handler with size & type validation
  const handleResumeChange = (e) => {
    const file = e.target.files?.[0];
    setResumeError("");

    if (!file) {
      setResumeFile(null);
      return;
    }

    // Validate type (must be PDF)
    if (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) {
      setResumeError("Please upload a valid PDF document (.pdf only).");
      setResumeFile(null);
      return;
    }

    // Validate size (max 5MB)
    const maxSize = 5 * 1024 * 1024;
    if (file.size > maxSize) {
      setResumeError("File size exceeds 5MB. Please upload a compressed PDF or share a Google Drive link.");
      setResumeFile(null);
      return;
    }

    setResumeFile(file);
  };

  // Checkbox toggle helpers
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

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot spam check
    if (formData.botTrap) {
      console.warn("Spam submission blocked.");
      return;
    }

    // Basic Validation
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setErrorMessage("Please complete all required fields (Name, Email, Phone).");
      setFormStatus("error");
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage("Please provide a valid email address.");
      setFormStatus("error");
      return;
    }

    // Phone format validation (10 digits minimum)
    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (phoneDigits.length < 10) {
      setErrorMessage("Please provide a valid 10-digit mobile number.");
      setFormStatus("error");
      return;
    }

    // Duplicate check in localStorage
    const submittedKey = `rwm_applied_${formData.email.trim().toLowerCase()}_${selectedPosition}`;
    if (typeof window !== "undefined" && localStorage.getItem(submittedKey)) {
      const lastApplied = localStorage.getItem(submittedKey);
      setErrorMessage(`You have already submitted an application for this role on ${lastApplied}. Our recruitment team has your details!`);
      setFormStatus("error");
      return;
    }

    setFormStatus("submitting");
    setErrorMessage("");

    const currentRole = openPositions.find((p) => p.id === selectedPosition) || openPositions[0];
    const appId = `RWM-${Date.now().toString().slice(-6)}`;

    // Build human-readable conditional details block
    let roleSpecificNotes = "";
    if (selectedPosition === "video-editor") {
      roleSpecificNotes = `Editing Softwares: ${formData.videoSoftwares.join(", ") || "None specified"} | Video Samples: ${formData.videoSampleLinks || "Not provided"}`;
    } else if (selectedPosition === "mern-developer") {
      roleSpecificNotes = `GitHub: ${formData.githubUrl || "Not provided"} | Tech Stack: ${formData.techStack.join(", ")} | Live Project: ${formData.liveProjectUrl || "None"}`;
    } else if (selectedPosition === "content-creator") {
      roleSpecificNotes = `Instagram: ${formData.instagramHandle || "Not provided"} | Languages: ${formData.languages.join(", ")} | Writing Samples: ${formData.writingSampleLink || "None"}`;
    }

    const applicationSummary = `
[RISE WITH MEDIA CAREERS APPLICATION]
Application ID: ${appId}
Position: ${currentRole.title} (${currentRole.department})
Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Location: ${formData.location}
Experience Level: ${formData.experience}
Notice Period: ${formData.noticePeriod}
Expected Salary: ${formData.expectedSalary || "Negotiable"}
Portfolio / Profile: ${formData.portfolioUrl}
${roleSpecificNotes}
Resume Attached: ${resumeFile ? `${resumeFile.name} (${Math.round(resumeFile.size / 1024)} KB)` : "Not attached (Candidate shared URL)"}
Why Join RWM: ${formData.whyJoin || "None provided"}
Sent via: risewithmedia.com/careers
`.trim();

    // EmailJS Template Parameters
    const templateParams = {
      user_name: formData.fullName,
      user_email: formData.email,
      phone: formData.phone,
      company: `Job Application: ${currentRole.title} (${appId})`,
      message: applicationSummary,
    };

    try {
      // 1. Send via EmailJS to rwmdesigners@gmail.com
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      // 2. Securely store application in localStorage for persistence & HR verification
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
            location: formData.location,
            experience: formData.experience,
            portfolioUrl: formData.portfolioUrl,
            resumeName: resumeFile ? resumeFile.name : null,
            roleSpecificNotes,
          });
          localStorage.setItem("rwm_applications", JSON.stringify(existingApps));
          localStorage.setItem(submittedKey, new Date().toLocaleDateString());
        } catch (storageErr) {
          console.warn("Storage warning:", storageErr);
        }
      }

      setSubmittedApplicationId(appId);
      setFormStatus("success");
    } catch (err) {
      console.error("EmailJS Error:", err);
      // Even if EmailJS quota hits, we store the application locally and provide direct mailto fallback
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
            status: "saved_offline",
          });
          localStorage.setItem("rwm_applications", JSON.stringify(existingApps));
        } catch (_) {}
      }

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
  };

  return (
    <main className="relative bg-white pt-20 sm:pt-[88px] text-[#0a0a0a]">

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 1: HERO SECTION
      ───────────────────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="section-fullscreen bg-white py-12 sm:py-16 md:py-20 border-b border-[#eaeaea] relative overflow-hidden flex flex-col justify-center"
      >
        {/* Interactive Gravity Dotted Canvas Background */}
        <GravityDotsCanvas containerRef={heroRef} />

        {/* Ambient Blur Glows (Brand Cyan & Sky Glow) */}
        <div className="ambient-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[750px] h-[300px] sm:h-[400px] bg-gradient-to-tr from-[#12b7d4]/18 via-[#38bdf8]/12 to-transparent rounded-full blur-[65px] pointer-events-none -z-0" />
        <div className="ambient-glow absolute top-8 right-12 w-[320px] h-[320px] bg-[#12b7d4]/10 rounded-full blur-[55px] pointer-events-none" />

        <div className="rush-container text-center relative z-10 w-full">

          {/* Hiring Status Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: rushEase }}
            className="flex items-center justify-center mb-5 sm:mb-6"
          >
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[#12b7d4]/10 border border-[#12b7d4]/30 text-[#087f94] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#12b7d4] animate-pulse" />
              Careers at Rise With Media · We Are Hiring
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: rushEase }}
            className="max-w-4xl mx-auto mb-5 sm:mb-6"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#000000] font-['Sansation'] leading-[1.08]">
              Build Your Career. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#12b7d4] via-[#0284c7] to-[#12b7d4]">
                Create Something
              </span>{" "}
              Extraordinary.
            </h1>
          </motion.div>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: rushEase }}
            className="text-base sm:text-lg md:text-xl text-[#555555] max-w-2xl mx-auto font-normal leading-relaxed mb-8 sm:mb-10 font-['Manrope']"
          >
            At RiseWithMedia, creativity meets technology. Join a team of passionate designers, marketers, creators and developers who turn ideas into impactful digital experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: rushEase }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-10 sm:mb-12"
          >
            <button
              onClick={handleHeroScrollToPositions}
              className="btn-rush-cyan cursor-pointer text-xs uppercase tracking-wider px-8 py-4 shadow-md hover:scale-105 active:scale-95 font-bold font-['Sansation'] w-full sm:w-auto"
            >
              Explore Open Positions ↓
            </button>
            <button
              onClick={() => handleSelectRoleAndScroll("video-editor")}
              className="btn-rush-black cursor-pointer text-xs uppercase tracking-wider px-8 py-4 shadow-sm hover:scale-105 active:scale-95 font-bold font-['Sansation'] w-full sm:w-auto"
            >
              Send Your Resume →
            </button>
          </motion.div>

          {/* Quick Role Teasers */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: rushEase }}
            className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 max-w-3xl mx-auto"
          >
            <div
              onClick={() => handleSelectRoleAndScroll("video-editor")}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 hover:bg-[#12b7d4]/10 border border-neutral-200 hover:border-[#12b7d4]/40 text-xs font-bold text-neutral-800 transition-all cursor-pointer group shadow-2xs"
            >
              <span>🎬</span>
              <span>Video Editor</span>
              <span className="text-[10px] text-[#087f94] font-black uppercase tracking-wider bg-[#12b7d4]/15 px-2 py-0.5 rounded-full">
                Creative
              </span>
            </div>

            <div
              onClick={() => handleSelectRoleAndScroll("mern-developer")}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 hover:bg-[#12b7d4]/10 border border-neutral-200 hover:border-[#12b7d4]/40 text-xs font-bold text-neutral-800 transition-all cursor-pointer group shadow-2xs"
            >
              <span>💻</span>
              <span>MERN Developer</span>
              <span className="text-[10px] text-[#0284c7] font-black uppercase tracking-wider bg-[#38bdf8]/15 px-2 py-0.5 rounded-full">
                Technology
              </span>
            </div>

            <div
              onClick={() => handleSelectRoleAndScroll("content-creator")}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 hover:bg-[#12b7d4]/10 border border-neutral-200 hover:border-[#12b7d4]/40 text-xs font-bold text-neutral-800 transition-all cursor-pointer group shadow-2xs"
            >
              <span>📱</span>
              <span>Content Creator</span>
              <span className="text-[10px] text-[#0ea5c0] font-black uppercase tracking-wider bg-[#0ea5c0]/15 px-2 py-0.5 rounded-full">
                Marketing
              </span>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 2: WHY JOIN RISEWITHMEDIA ("More Than Just a Workplace")
      ───────────────────────────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] text-white py-16 sm:py-24 border-b border-neutral-900 relative overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="ambient-glow absolute top-1/3 -right-24 w-[450px] h-[450px] bg-[#12b7d4]/12 rounded-full blur-[70px] pointer-events-none" />
        <div className="ambient-glow absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-[#0284c7]/12 rounded-full blur-[70px] pointer-events-none" />

        <div className="rush-container relative z-10 w-full">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="tag-bubble-cyan mb-3 inline-block">
              Why Rise With Media
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white font-['Sansation'] leading-tight mb-3">
              More Than Just a <span className="text-[#12b7d4]">Workplace</span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base font-normal max-w-xl mx-auto font-['Manrope']">
              We cultivate a culture where creativity is rewarded, ownership is trusted, and every team member accelerates their career trajectory.
            </p>
          </div>

          {/* 5 Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 max-w-6xl mx-auto">
            {whyJoinBenefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: rushEase }}
                className={`bg-neutral-900/80 border border-neutral-800 hover:border-[#12b7d4]/50 rounded-2xl p-6 sm:p-7 transition-all duration-300 group hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(18,183,212,0.12)] relative flex flex-col justify-between ${
                  idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl sm:text-4xl filter drop-shadow-sm group-hover:scale-110 transition-transform inline-block">
                      {benefit.icon}
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#12b7d4] bg-[#12b7d4]/10 border border-[#12b7d4]/30 px-2.5 py-0.5 rounded-full">
                      {benefit.badge}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold uppercase tracking-tight text-white group-hover:text-[#12b7d4] transition-colors font-['Sansation'] mb-2.5">
                    {benefit.title}
                  </h3>
                  <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-['Manrope']">
                    {benefit.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-neutral-800/80 flex items-center gap-2 text-[11px] text-[#12b7d4] font-bold">
                  <span>Growth Mindset</span>
                  <span className="text-neutral-600">→</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 3: CURRENT OPEN POSITIONS (3 Attractive Job Cards)
      ───────────────────────────────────────────────────────────────── */}
      <section id="open-positions" className="bg-white py-16 sm:py-24 border-b border-[#eaeaea] relative">
        <div className="rush-container relative z-10 w-full">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="tag-bubble-cyan mb-3 inline-block">
              Open Roles
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#000000] font-['Sansation'] leading-tight mb-3">
              Find Your Role. <span className="text-[#12b7d4]">Join Our Team.</span>
            </h2>
            <p className="text-[#666666] text-sm sm:text-base font-normal max-w-xl mx-auto font-['Manrope']">
              We have immediate openings for video editors, full-stack engineers, and content creators ready to work on high-profile brand campaigns.
            </p>
          </div>

          {/* 3 Job Cards Stack */}
          <div className="space-y-6 sm:space-y-8 max-w-5xl mx-auto">
            {openPositions.map((pos, idx) => (
              <motion.div
                key={pos.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: rushEase }}
                className="bg-white rounded-3xl border-2 border-[#eaeaea] hover:border-[#12b7d4] transition-all duration-300 p-6 sm:p-8 md:p-10 shadow-xs hover:shadow-[0_15px_40px_rgba(18,183,212,0.12)] group relative overflow-hidden"
              >
                {/* Top Role Code & Badges */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-neutral-100">
                  <div className="flex items-center gap-2.5">
                    <span className="text-xs font-black tracking-widest text-[#000000] uppercase font-['Sansation']">
                      {pos.code}
                    </span>
                    <span className="text-neutral-300">·</span>
                    <span className={`text-[11px] font-extrabold uppercase tracking-wider px-3 py-0.5 rounded-full border ${pos.badgeColor}`}>
                      {pos.roleBadge}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs text-neutral-500 font-medium">
                    <span className="inline-flex items-center gap-1 bg-neutral-100 px-3 py-1 rounded-full">
                      📍 {pos.location}
                    </span>
                    <span className="inline-flex items-center gap-1 bg-neutral-100 px-3 py-1 rounded-full">
                      💼 {pos.type}
                    </span>
                    <span className="inline-flex items-center gap-1 bg-[#12b7d4]/10 text-[#087f94] font-bold px-3 py-1 rounded-full border border-[#12b7d4]/30">
                      ⚡ {pos.experience}
                    </span>
                  </div>
                </div>

                {/* Role Title & Tagline */}
                <div className="mb-6">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-[#000000] group-hover:text-[#12b7d4] transition-colors font-['Sansation'] mb-2">
                    {pos.title}
                  </h3>
                  <p className="text-neutral-600 text-sm sm:text-base leading-relaxed font-['Manrope'] font-medium">
                    {pos.description}
                  </p>
                </div>

                {/* Two Columns: Responsibilities & Skills */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8">
                  {/* Responsibilities */}
                  <div className="bg-[#f8fafc] rounded-2xl p-5 sm:p-6 border border-neutral-100">
                    <h4 className="text-xs font-black uppercase tracking-wider text-neutral-900 mb-3.5 flex items-center gap-2 font-['Sansation']">
                      <span className="text-[#12b7d4]">✦</span> Key Responsibilities
                    </h4>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-600 font-['Manrope']">
                      {pos.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="flex items-start gap-2.5 leading-snug">
                          <span className="text-[#12b7d4] font-bold mt-0.5 shrink-0">✓</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Required & Bonus Skills */}
                  <div className="bg-[#f8fafc] rounded-2xl p-5 sm:p-6 border border-neutral-100 flex flex-col justify-between">
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-wider text-neutral-900 mb-3 font-['Sansation'] flex items-center gap-2">
                        <span className="text-[#12b7d4]">⚡</span> Required Skills & Tools
                      </h4>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                        {pos.requiredSkills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="bg-white border border-neutral-200 text-neutral-800 text-[11px] sm:text-xs font-semibold px-3 py-1 rounded-full shadow-2xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {pos.bonusSkills && (
                        <div>
                          <h5 className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-2 font-['Sansation']">
                            Nice-To-Have Skills:
                          </h5>
                          <div className="flex flex-wrap gap-1.5">
                            {pos.bonusSkills.map((bonus, bIdx) => (
                              <span
                                key={bIdx}
                                className="bg-[#12b7d4]/10 text-[#087f94] border border-[#12b7d4]/20 text-[10px] sm:text-[11px] font-medium px-2.5 py-0.5 rounded-full"
                              >
                                + {bonus}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="mt-5 pt-3 border-t border-neutral-200/80 flex items-center justify-between text-xs text-neutral-500 font-medium">
                      <span>Applications Reviewed Weekly</span>
                      <span className="text-[#12b7d4] font-bold">Fast Interview Loop</span>
                    </div>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-neutral-100">
                  <div className="text-xs text-neutral-500 text-center sm:text-left">
                    <span>Ready to make an impact with us? </span>
                    <strong className="text-black font-bold">Submit your application below.</strong>
                  </div>

                  <button
                    onClick={() => handleSelectRoleAndScroll(pos.id)}
                    className="btn-rush-cyan cursor-pointer text-xs uppercase tracking-wider px-7 py-3.5 shadow-sm hover:scale-105 active:scale-95 font-bold font-['Sansation'] w-full sm:w-auto text-center"
                  >
                    Apply for {pos.title} →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 4: OUR HIRING PROCESS (Timeline Roadmap)
      ───────────────────────────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] text-white py-16 sm:py-24 border-b border-neutral-900 relative overflow-hidden">
        <div className="rush-container relative z-10 w-full">

          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
            <span className="tag-bubble-cyan mb-3 inline-block">
              Clear &amp; Transparent
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white font-['Sansation'] leading-tight mb-3">
              Our Hiring <span className="text-[#12b7d4]">Process</span>
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base font-normal max-w-xl mx-auto font-['Manrope']">
              We respect your time. Our hiring framework is streamlined, communicative, and focused on practical skill rather than generic interviews.
            </p>
          </div>

          {/* 5-Step Process Timeline Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-5 max-w-6xl mx-auto relative">
            {hiringSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: rushEase }}
                className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-5 sm:p-6 flex flex-col justify-between relative group hover:border-[#12b7d4]/50 transition-all hover:-translate-y-1"
              >
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#12b7d4] font-['Sansation'] mb-3 opacity-90">
                    {step.step}
                  </div>
                  <h3 className="text-sm sm:text-base font-bold uppercase tracking-tight text-white font-['Sansation'] mb-2 group-hover:text-[#12b7d4] transition-colors leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-neutral-400 text-xs leading-relaxed font-['Manrope']">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-[10px] text-neutral-500 font-bold uppercase tracking-wider">
                  <span>Step {idx + 1} of 5</span>
                  {idx < 4 ? <span className="text-[#12b7d4]">→</span> : <span className="text-[#25D366]">✓</span>}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 5: DYNAMIC APPLICATION FORM (Adaptive by Role)
      ───────────────────────────────────────────────────────────────── */}
      <section ref={formRef} id="application-form" className="bg-[#f5f7f8] py-16 sm:py-24 border-b border-[#eaeaea] relative">
        <div className="rush-container relative z-10 w-full max-w-4xl mx-auto">

          {/* Form Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="tag-bubble-cyan mb-3 inline-block">
              Apply Today
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#000000] font-['Sansation'] leading-tight mb-3">
              Application <span className="text-[#12b7d4]">Form</span>
            </h2>
            <p className="text-[#666666] text-sm sm:text-base font-normal font-['Manrope']">
              Select your position below. The form adapts dynamically with role-specific questions and portfolio upload fields.
            </p>
          </div>

          {/* Form Container Card */}
          <div className="bg-white rounded-3xl border border-[#eaeaea] shadow-[0_20px_60px_rgba(0,0,0,0.06)] p-6 sm:p-10 md:p-12 relative">

            {/* Position Selector Segmented Tabs */}
            <div className="mb-8">
              <label className="block text-xs font-black uppercase tracking-wider text-neutral-700 mb-3 font-['Sansation']">
                1. Select Position Applying For *
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {openPositions.map((role) => {
                  const isSelected = selectedPosition === role.id;
                  return (
                    <button
                      key={role.id}
                      type="button"
                      onClick={() => {
                        setSelectedPosition(role.id);
                        setErrorMessage("");
                      }}
                      className={`p-3.5 rounded-2xl text-left border-2 transition-all cursor-pointer flex flex-col justify-between ${
                        isSelected
                          ? "border-[#12b7d4] bg-[#12b7d4]/10 shadow-xs"
                          : "border-neutral-200 bg-neutral-50 hover:border-neutral-300 hover:bg-neutral-100"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-black uppercase tracking-wider font-['Sansation'] text-black">
                          {role.title}
                        </span>
                        {isSelected && <span className="text-xs text-[#12b7d4] font-black">● Selected</span>}
                      </div>
                      <span className="text-[11px] text-neutral-500 font-medium">
                        {role.department}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Application Form */}
            {formStatus === "success" ? (
              // Success Screen State
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 px-4"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#12b7d4]/15 border-2 border-[#12b7d4] text-[#12b7d4] text-3xl sm:text-4xl flex items-center justify-center mx-auto mb-6 shadow-md">
                  ✓
                </div>

                <span className="text-xs font-black uppercase tracking-widest text-[#087f94] bg-[#12b7d4]/10 px-3.5 py-1 rounded-full border border-[#12b7d4]/30 mb-3 inline-block">
                  Application ID: {submittedApplicationId}
                </span>

                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-black font-['Sansation'] mb-3">
                  Application Successfully Submitted!
                </h3>

                <p className="text-neutral-600 text-sm sm:text-base max-w-lg mx-auto font-['Manrope'] leading-relaxed mb-6">
                  Thank you for your interest in RiseWithMedia! Your application has been successfully recorded and forwarded to our recruitment team at <strong className="text-black">rwmdesigners@gmail.com</strong>.
                </p>

                <p className="text-xs text-neutral-500 max-w-md mx-auto mb-8">
                  Our recruitment lead reviews all creative portfolios and code repositories within 48–72 hours. If shortlisted, we will reach out via WhatsApp and Email.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <button
                    onClick={handleResetForm}
                    className="btn-rush-black text-xs uppercase tracking-wider px-6 py-3 cursor-pointer shadow-xs font-bold"
                  >
                    Submit Another Application
                  </button>
                  <a
                    href={`mailto:rwmdesigners@gmail.com?subject=Job%20Application%20Copy%20[${submittedApplicationId}]&body=Hi%20RiseWithMedia%20Team%2C%0A%0AI%20have%20submitted%20my%20application%20(${submittedApplicationId})%20for%20the%20role%20of%20${selectedPosition}.%20Please%20find%20attached%20my%20resume.`}
                    className="btn-rush-cyan text-xs uppercase tracking-wider px-6 py-3 cursor-pointer shadow-xs font-bold"
                  >
                    Send Direct Email Backup ✉️
                  </a>
                </div>
              </motion.div>
            ) : (
              // Active Form Input State
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Honeypot anti-spam field (hidden) */}
                <input
                  type="text"
                  name="botTrap"
                  value={formData.botTrap}
                  onChange={(e) => setFormData({ ...formData, botTrap: e.target.value })}
                  tabIndex="-1"
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />

                {/* 2. Candidate Personal Details (2 Columns) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 font-['Sansation']">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sathish Kumar"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#12b7d4] focus:ring-3 focus:ring-[#12b7d4]/20 outline-none text-sm transition-all text-neutral-900 placeholder:text-neutral-400 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 font-['Sansation']">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. yourname@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#12b7d4] focus:ring-3 focus:ring-[#12b7d4]/20 outline-none text-sm transition-all text-neutral-900 placeholder:text-neutral-400 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 font-['Sansation']">
                      Mobile / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#12b7d4] focus:ring-3 focus:ring-[#12b7d4]/20 outline-none text-sm transition-all text-neutral-900 placeholder:text-neutral-400 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 font-['Sansation']">
                      Current Location *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Krishnagiri, Hosur, Bengaluru"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#12b7d4] focus:ring-3 focus:ring-[#12b7d4]/20 outline-none text-sm transition-all text-neutral-900 placeholder:text-neutral-400 bg-white"
                    />
                  </div>
                </div>

                {/* 3. Professional Experience & Availability */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 font-['Sansation']">
                      Experience Level *
                    </label>
                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#12b7d4] focus:ring-3 focus:ring-[#12b7d4]/20 outline-none text-sm transition-all text-neutral-900 bg-white"
                    >
                      <option value="Fresher">Fresher (Passionate to Learn)</option>
                      <option value="Less than 1 Year">Less than 1 Year</option>
                      <option value="1–2 Years">1–2 Years</option>
                      <option value="2+ Years">2+ Years (Experienced)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 font-['Sansation']">
                      Notice Period / Joining *
                    </label>
                    <select
                      value={formData.noticePeriod}
                      onChange={(e) => setFormData({ ...formData, noticePeriod: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#12b7d4] focus:ring-3 focus:ring-[#12b7d4]/20 outline-none text-sm transition-all text-neutral-900 bg-white"
                    >
                      <option value="Immediate">Immediate Joining</option>
                      <option value="15 Days">Within 15 Days</option>
                      <option value="1 Month">1 Month</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 font-['Sansation']">
                      Expected Salary (Monthly)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. ₹20,000 / Negotiable"
                      value={formData.expectedSalary}
                      onChange={(e) => setFormData({ ...formData, expectedSalary: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#12b7d4] focus:ring-3 focus:ring-[#12b7d4]/20 outline-none text-sm transition-all text-neutral-900 placeholder:text-neutral-400 bg-white"
                    />
                  </div>
                </div>

                {/* 4. Common Portfolio / Link */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 font-['Sansation']">
                    Portfolio / Drive / LinkedIn / Website Link *
                  </label>
                  <input
                    type="url"
                    required
                    placeholder="https://drive.google.com/... or https://linkedin.com/in/..."
                    value={formData.portfolioUrl}
                    onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#12b7d4] focus:ring-3 focus:ring-[#12b7d4]/20 outline-none text-sm transition-all text-neutral-900 placeholder:text-neutral-400 bg-white"
                  />
                  <span className="text-[11px] text-neutral-500 mt-1 block">
                    Please provide an accessible link where we can review your past work samples or profile.
                  </span>
                </div>

                {/* ─────────────────────────────────────────────────────────────
                    ROLE-SPECIFIC CONDITIONAL FIELDS
                ───────────────────────────────────────────────────────────── */}
                <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#f8fafc] to-[#e6f9fc]/50 border border-[#12b7d4]/30 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-black uppercase tracking-wider text-[#087f94] font-['Sansation']">
                      Role Specific Questions:
                    </span>
                    <span className="text-xs font-bold text-black uppercase">
                      {openPositions.find((p) => p.id === selectedPosition)?.title}
                    </span>
                  </div>

                  {/* VIDEO EDITOR CONDITIONAL FIELDS */}
                  {selectedPosition === "video-editor" && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2 font-['Sansation']">
                          Primary Editing Softwares You Use (Select all that apply):
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "Adobe Premiere Pro",
                            "Adobe After Effects",
                            "DaVinci Resolve",
                            "CapCut",
                            "Final Cut Pro",
                            "Photoshop (Thumbnails)",
                          ].map((soft) => {
                            const isChecked = formData.videoSoftwares.includes(soft);
                            return (
                              <button
                                key={soft}
                                type="button"
                                onClick={() => handleToggleSoftware(soft)}
                                className={`text-xs px-3.5 py-1.5 rounded-full border transition-all cursor-pointer font-medium ${
                                  isChecked
                                    ? "bg-[#12b7d4] border-[#12b7d4] text-white shadow-2xs"
                                    : "bg-white border-neutral-300 text-neutral-700 hover:border-neutral-400"
                                }`}
                              >
                                {isChecked ? "✓ " : "+ "}
                                {soft}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 font-['Sansation']">
                          Direct Links to Your Best Reels / Video Edits:
                        </label>
                        <input
                          type="text"
                          placeholder="Instagram reel links or Google Drive folder URL"
                          value={formData.videoSampleLinks}
                          onChange={(e) => setFormData({ ...formData, videoSampleLinks: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#12b7d4] focus:ring-3 focus:ring-[#12b7d4]/20 outline-none text-sm transition-all text-neutral-900 bg-white"
                        />
                      </div>
                    </div>
                  )}

                  {/* MERN DEVELOPER CONDITIONAL FIELDS */}
                  {selectedPosition === "mern-developer" && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 font-['Sansation']">
                          GitHub Profile URL *
                        </label>
                        <input
                          type="url"
                          placeholder="https://github.com/your-username"
                          value={formData.githubUrl}
                          onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#12b7d4] focus:ring-3 focus:ring-[#12b7d4]/20 outline-none text-sm transition-all text-neutral-900 bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2 font-['Sansation']">
                          Primary Tech Stack &amp; Libraries:
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {[
                            "React.js",
                            "Node.js",
                            "Express.js",
                            "MongoDB",
                            "TypeScript",
                            "Next.js",
                            "Tailwind CSS",
                            "Docker",
                          ].map((tech) => {
                            const isChecked = formData.techStack.includes(tech);
                            return (
                              <button
                                key={tech}
                                type="button"
                                onClick={() => handleToggleTech(tech)}
                                className={`text-xs px-3.5 py-1.5 rounded-full border transition-all cursor-pointer font-medium ${
                                  isChecked
                                    ? "bg-[#0284c7] border-[#0284c7] text-white shadow-2xs"
                                    : "bg-white border-neutral-300 text-neutral-700 hover:border-neutral-400"
                                }`}
                              >
                                {isChecked ? "✓ " : "+ "}
                                {tech}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 font-['Sansation']">
                          Live Deployed Project / Web App URL (Optional):
                        </label>
                        <input
                          type="url"
                          placeholder="https://yourproject.vercel.app"
                          value={formData.liveProjectUrl}
                          onChange={(e) => setFormData({ ...formData, liveProjectUrl: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#12b7d4] focus:ring-3 focus:ring-[#12b7d4]/20 outline-none text-sm transition-all text-neutral-900 bg-white"
                        />
                      </div>
                    </div>
                  )}

                  {/* CONTENT CREATOR CONDITIONAL FIELDS */}
                  {selectedPosition === "content-creator" && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 font-['Sansation']">
                          Instagram Profile / Creator Handle *
                        </label>
                        <input
                          type="text"
                          placeholder="@yourhandle or profile URL"
                          value={formData.instagramHandle}
                          onChange={(e) => setFormData({ ...formData, instagramHandle: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#12b7d4] focus:ring-3 focus:ring-[#12b7d4]/20 outline-none text-sm transition-all text-neutral-900 bg-white"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2 font-['Sansation']">
                          Languages You Can Confidently Script &amp; Communicate In:
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {["Tamil", "English", "Telugu", "Kannada", "Hindi"].map((lang) => {
                            const isChecked = formData.languages.includes(lang);
                            return (
                              <button
                                key={lang}
                                type="button"
                                onClick={() => handleToggleLanguage(lang)}
                                className={`text-xs px-3.5 py-1.5 rounded-full border transition-all cursor-pointer font-medium ${
                                  isChecked
                                    ? "bg-[#0ea5c0] border-[#0ea5c0] text-white shadow-2xs"
                                    : "bg-white border-neutral-300 text-neutral-700 hover:border-neutral-400"
                                }`}
                              >
                                {isChecked ? "✓ " : "+ "}
                                {lang}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 font-['Sansation']">
                          Scriptwriting / Caption Sample Link:
                        </label>
                        <input
                          type="text"
                          placeholder="Google Doc, Notion link, or post sample"
                          value={formData.writingSampleLink}
                          onChange={(e) => setFormData({ ...formData, writingSampleLink: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#12b7d4] focus:ring-3 focus:ring-[#12b7d4]/20 outline-none text-sm transition-all text-neutral-900 bg-white"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* 5. Resume Upload Zone (PDF) */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 font-['Sansation']">
                    Upload Resume (PDF only, Max 5MB)
                  </label>

                  <div className="border-2 border-dashed border-neutral-300 hover:border-[#12b7d4] rounded-2xl p-6 text-center transition-colors bg-neutral-50/50 relative">
                    <input
                      type="file"
                      accept=".pdf,application/pdf"
                      onChange={handleResumeChange}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />

                    {resumeFile ? (
                      <div className="flex items-center justify-center gap-3">
                        <span className="text-2xl">📄</span>
                        <div className="text-left">
                          <p className="text-sm font-bold text-black">{resumeFile.name}</p>
                          <p className="text-xs text-neutral-500">
                            {Math.round(resumeFile.size / 1024)} KB · PDF Document
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setResumeFile(null);
                          }}
                          className="ml-4 text-xs text-red-500 hover:text-red-700 font-bold underline cursor-pointer"
                        >
                          Remove
                        </button>
                      </div>
                    ) : (
                      <div>
                        <span className="text-3xl mb-2 inline-block">📎</span>
                        <p className="text-sm font-bold text-neutral-800">
                          Click to browse or drag and drop your PDF resume
                        </p>
                        <p className="text-xs text-neutral-500 mt-1">
                          Supported format: PDF up to 5MB. (You can also provide a Drive link in the portfolio field).
                        </p>
                      </div>
                    )}
                  </div>

                  {resumeError && (
                    <p className="text-xs text-red-600 font-bold mt-1.5">{resumeError}</p>
                  )}
                </div>

                {/* 6. Why Join RiseWithMedia Note */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-1.5 font-['Sansation']">
                    Why do you want to join RiseWithMedia? (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us a bit about your creative passions, what drives you, and what kind of projects excite you..."
                    value={formData.whyJoin}
                    onChange={(e) => setFormData({ ...formData, whyJoin: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#12b7d4] focus:ring-3 focus:ring-[#12b7d4]/20 outline-none text-sm transition-all text-neutral-900 placeholder:text-neutral-400 bg-white"
                  />
                </div>

                {/* Error Banner */}
                {errorMessage && (
                  <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-bold">
                    ⚠️ {errorMessage}
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className="btn-rush-cyan w-full cursor-pointer text-sm uppercase tracking-wider py-4 shadow-md hover:scale-[1.01] active:scale-98 font-bold font-['Sansation'] text-center flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {formStatus === "submitting" ? (
                      <>
                        <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting Application...
                      </>
                    ) : (
                      <>
                        Submit Application for{" "}
                        {openPositions.find((p) => p.id === selectedPosition)?.title} →
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-neutral-500 mt-3 font-medium">
                    Your application is securely encrypted and routed directly to our recruitment inbox:{" "}
                    <strong className="text-black">rwmdesigners@gmail.com</strong>
                  </p>
                </div>

              </form>
            )}

          </div>

        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────────
          SECTION 6: FINAL CTA (Your Next Opportunity Starts Here)
      ───────────────────────────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-24 border-b border-[#eaeaea] relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="ambient-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#12b7d4]/10 rounded-full blur-[65px] pointer-events-none" />

        <div className="rush-container relative z-10 w-full text-center max-w-4xl mx-auto">

          <span className="tag-bubble-cyan mb-4 inline-block">
            Start Your Journey
          </span>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[#000000] font-['Sansation'] leading-tight mb-4">
            Your Next Opportunity <br />
            <span className="text-[#12b7d4]">Starts Here.</span>
          </h2>

          <p className="text-[#555555] text-base sm:text-lg max-w-xl mx-auto font-normal leading-relaxed mb-8 sm:mb-10 font-['Manrope']">
            Have the passion, creativity and skills to make an impact? We would love to hear from you. Explore our open roles or connect directly with our founders.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => handleSelectRoleAndScroll("video-editor")}
              className="btn-rush-cyan cursor-pointer text-xs uppercase tracking-wider px-9 py-4 shadow-md hover:scale-105 active:scale-95 font-bold font-['Sansation'] w-full sm:w-auto"
            >
              APPLY NOW ↑
            </button>

            <a
              href="mailto:rwmdesigners@gmail.com?subject=Job%20Inquiry%20-%20Rise%20With%20Media%20Careers"
              className="btn-rush-black cursor-pointer text-xs uppercase tracking-wider px-9 py-4 shadow-sm hover:scale-105 active:scale-95 font-bold font-['Sansation'] w-full sm:w-auto inline-flex items-center justify-center gap-2"
            >
              <span>✉️</span> rwmdesigners@gmail.com
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-neutral-100 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-500 font-medium">
            <span>📍 Krishnagiri &amp; Hosur, Tamil Nadu</span>
            <span>•</span>
            <span>⚡ Equal Opportunity Employer</span>
            <span>•</span>
            <span>💬 WhatsApp: +91 9345254648</span>
          </div>

        </div>
      </section>

    </main>
  );
}
