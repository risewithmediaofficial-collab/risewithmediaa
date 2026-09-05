import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import ScrollSection, { ScrollText } from "../components/ScrollSection";

const EMAILJS_SERVICE_ID = "service_s15r115";
const EMAILJS_TEMPLATE_ID = "template_hpylv7f";
const EMAILJS_PUBLIC_KEY = "srGKTSrmIkawAjpyy";

const servicesList = [
  "Branding",
  "SEO",
  "Social Media",
  "Website Development",
  "Performance Marketing",
  "Content Creation",
  "CRM & SaaS",
  "Design & Creative",
];

const referralSources = [
  "Through Google",
  "Someone Referred",
  "Instagram & Social",
  "A Work We Did",
];

export default function Contact({ initialService = "" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    challenge: "",
    selectedServices: initialService ? [initialService] : [],
    referral: "",
  });

  const [prevService, setPrevService] = useState(initialService);
  if (prevService !== initialService) {
    setPrevService(initialService);
    if (initialService && !formData.selectedServices.includes(initialService)) {
      setFormData((prev) => ({
        ...prev,
        selectedServices: [...prev.selectedServices, initialService],
      }));
    }
  }

  const [status, setStatus] = useState("idle");

  const toggleService = (srv) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(srv);
      return {
        ...prev,
        selectedServices: exists
          ? prev.selectedServices.filter((s) => s !== srv)
          : [...prev.selectedServices, srv],
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      phone: formData.phone,
      company: formData.businessName,
      message: `Challenge: ${formData.challenge} | Services: ${formData.selectedServices.join(", ")} | Heard via: ${formData.referral}`,
    };

    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          businessName: "",
          challenge: "",
          selectedServices: [],
          referral: "",
        });
      })
      .catch((err) => {
        console.error("Submission failed:", err);
        setStatus("error");
      });
  };

  return (
    <main className="bg-white pt-20 sm:pt-[88px]">
      
      {/* ─────────────────────────────────────────────────────────────────
          HEADER (The Rush Republic Contact Header)
      ───────────────────────────────────────────────────────────────── */}
      <ScrollSection className="bg-white pt-16 pb-12 border-b border-[#eaeaea]">
        <div className="rush-container text-center max-w-4xl">
          <ScrollText as="span" direction="up" delay={0} className="tag-bubble-cyan mb-4 inline-block">
            Let's Talk Business
          </ScrollText>
          <ScrollText as="h1" direction="up" delay={0.08} className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#000000] font-['Varela_Round'] mb-3">
            Help Us Help You in a <span className="text-[#12b7d4]">Big Way!</span>
          </ScrollText>
          <ScrollText as="p" direction="up" delay={0.18} className="font-script text-2xl sm:text-3xl text-[#12b7d4]">
            Tell us a little about your brand and we’ll bring big ideas to the table.
          </ScrollText>
        </div>
      </ScrollSection>

      {/* ─────────────────────────────────────────────────────────────────
          MAIN FORM & CONTACT INFO SECTION
      ───────────────────────────────────────────────────────────────── */}
      <ScrollSection className="bg-white py-16 lg:py-24">
        <div className="rush-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left 7 Columns: The Rush Republic Form */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.05 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name */}
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-black mb-2">
                    Name: (Who are we talking to?) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#fcfcfc] border border-[#eaeaea] rounded-xl px-5 py-4 text-sm text-black placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-black mb-2">
                      Email: (How do we reach you?) *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#fcfcfc] border border-[#eaeaea] rounded-xl px-5 py-4 text-sm text-black placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-black mb-2">
                      Phone: (Let's talk business) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#fcfcfc] border border-[#eaeaea] rounded-xl px-5 py-4 text-sm text-black placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors"
                    />
                  </div>
                </div>

                {/* Business Name */}
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-black mb-2">
                    Your Business Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Brand or Enterprise Name"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    className="w-full bg-[#fcfcfc] border border-[#eaeaea] rounded-xl px-5 py-4 text-sm text-black placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                {/* Challenge in One Sentence */}
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-black mb-2">
                    Your Challenge in One Sentence
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Write one line about your business challenge or goals..."
                    value={formData.challenge}
                    onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                    className="w-full bg-[#fcfcfc] border border-[#eaeaea] rounded-xl px-5 py-4 text-sm text-black placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                {/* Services Checkboxes */}
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-black mb-3">
                    Select Services Needed:
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {servicesList.map((srv) => {
                      const isChecked = formData.selectedServices.includes(srv);
                      return (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => toggleService(srv)}
                          className={`px-4 py-2 rounded-full text-xs font-bold border transition-all cursor-pointer ${
                            isChecked
                              ? "bg-[#000000] text-white border-black"
                              : "bg-[#ffffff] text-black border-[#eaeaea] hover:border-black"
                          }`}
                        >
                          {isChecked ? "✓ " : "+ "}
                          {srv}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* How Did You Hear About Us? */}
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-black mb-3">
                    How did you hear about us?
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {referralSources.map((source) => {
                      const isSelected = formData.referral === source;
                      return (
                        <button
                          key={source}
                          type="button"
                          onClick={() => setFormData({ ...formData, referral: source })}
                          className={`px-4 py-2 rounded-full text-xs font-bold border transition-all cursor-pointer ${
                            isSelected
                              ? "bg-[#12b7d4] text-white border-[#12b7d4]"
                              : "bg-[#ffffff] text-black border-[#eaeaea] hover:border-black"
                          }`}
                        >
                          {source}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Submit Action */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn-rush-cyan w-full py-4 text-sm uppercase tracking-wider font-black cursor-pointer shadow-md"
                  >
                    {status === "submitting" ? "Submitting..." : "Let's Dominate"}
                  </button>
                </div>

                {/* Feedback status */}
                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-5 rounded-xl bg-emerald-50 border border-emerald-400 text-emerald-900 text-center font-bold text-sm"
                    >
                      Thank you! <br />Your submission has been received! Our team will reach out within 24 hours.
                    </motion.div>
                  )}
                  {status === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-5 rounded-xl bg-rose-50 border border-rose-400 text-rose-900 text-center font-bold text-sm"
                    >
                      Oops! Something went wrong. Please connect with us directly on WhatsApp or call +91 9345254648.
                    </motion.div>
                  )}
                </AnimatePresence>

              </form>
            </motion.div>

            {/* Right 5 Columns: Direct Contact Details & Agency Info */}
            <motion.div
              className="lg:col-span-5 flex flex-col justify-between space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.05 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              
              <div className="rounded-3xl border border-[#eaeaea] p-8 bg-[#fcfcfc]">
                <h3 className="text-xl font-black uppercase text-black font-['Varela_Round'] mb-6">
                  Direct Line
                </h3>

                <div className="space-y-6 text-sm">
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-[#888888] mb-1">
                      Phone & Business
                    </span>
                    <a
                      href="tel:+919345254648"
                      className="text-base font-black text-black hover:text-[#12b7d4] transition-colors"
                    >
                      +91 93452 54648
                    </a>
                  </div>

                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-[#888888] mb-1">
                      Email
                    </span>
                    <a
                      href="mailto:hello@risewithmedia.com"
                      className="text-base font-black text-black hover:text-[#12b7d4] transition-colors"
                    >
                      hello@risewithmedia.com
                    </a>
                  </div>

                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-[#888888] mb-1">
                      Agency Headquarters
                    </span>
                    <p className="font-bold text-black">
                      Krishnagiri, Tamil Nadu, India (Serving South India & Global Remote)
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#eaeaea]">
                  <a
                    href="https://wa.me/919345254648"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-rush-black w-full text-center text-xs uppercase tracking-wider py-3.5"
                  >
                    Quick Chat on WhatsApp →
                  </a>
                </div>
              </div>

              {/* Rush Republic Guarantee Badge */}
              <div className="rounded-3xl bg-black text-white p-8">
                <span className="tag-bubble-cyan mb-3">
                  Our Promise
                </span>
                <h4 className="text-xl font-black uppercase tracking-tight text-white mb-2 font-['Varela_Round']">
                  Speed, Clarity & Zero Fluff
                </h4>
                <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                  We review your market positioning, outline high-impact execution gaps, and provide honest answers. No long lock-in contracts.
                </p>
              </div>

            </motion.div>

          </div>
        </div>
      </ScrollSection>

    </main>
  );
}
