"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Sparkles, Code2, LineChart, Database, X } from "lucide-react";

const HIGHLIGHTS = [
  { icon: LineChart, label: "Business Analytics" },
  { icon: Database, label: "Data Architect" },
  { icon: Code2, label: "Web Developer" },
  { icon: Sparkles, label: "UI/UX Designer" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <>
      <section id="about" className="section-pad relative">
        <div className="max-w-5xl mx-auto" ref={ref}>
          {/* Section label */}
          <motion.p
            className="text-xs font-mono tracking-widest text-[var(--secondary)] uppercase mb-3"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            01 — About
          </motion.p>

          <motion.h2
            className="font-display font-extrabold text-4xl md:text-5xl text-[var(--text)] mb-12"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Who I Am
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Bio text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="text-[var(--secondary)] text-lg leading-relaxed mb-6">
                I am an Information Technology graduate majoring in{" "}
                <span className="gradient-text font-semibold">Business Analytics</span> from{" "}
                <span className="text-[var(--text)] font-semibold">Batangas State University</span>{" "}
                (The National Engineering University - JPLPC Malvar Campus).
              </p>
              <p className="text-[var(--secondary)] text-base leading-relaxed mb-6">
                My core expertise lies in transforming raw data into meaningful business solutions. However, I believe numbers tell a better story when beautifully presented—which is why I spend my spare time diving deep into web development, building intuitive tools that bridge data with user experience.
              </p>
              <p className="text-[var(--secondary)] text-base leading-relaxed">
                Continuously learning and expanding my technical stack, I thrive at the crossroads of data pipeline engineering, predictive analytics, and interactive web technologies.
              </p>
            </motion.div>

            {/* Highlight chips */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {HIGHLIGHTS.map((item, i) => (
                <motion.div
                  key={item.label}
                  className="glass rounded-xl p-5 flex flex-col gap-3 hover:border-[var(--accent)] border border-transparent transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, #8B5CF622, #06B6D422)" }}
                  >
                    <item.icon size={20} className="text-[var(--accent)]" />
                  </div>
                  <p className="font-semibold text-sm text-[var(--text)]">{item.label}</p>
                </motion.div>
              ))}

              {/* View CV button (Changed from <a> to <button>) */}
              <motion.button
                onClick={() => setIsModalOpen(true)}
                className="col-span-2 py-4 rounded-xl font-semibold text-sm text-center text-white transition-all duration-300 hover:scale-[1.02] active:scale-95"
                style={{ background: "linear-gradient(135deg, #8B5CF6, #06B6D4)" }}
                whileHover={{ boxShadow: "0 0 25px rgba(139,92,246,0.5)" }}
              >
                View CV →
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CV Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl h-[85vh] bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-10"
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center px-6 py-4 border-b border-white/10 bg-[#0a0a0a]">
                <h3 className="text-white font-semibold flex items-center gap-2">
                  <span className="text-[var(--secondary)]">CV</span> / Diasanta
                </h3>

                <div className="flex items-center gap-4">
                  {/* Optional: Add a direct download link here if they still want to save it */}
                  <a
                    href="/Diasanta - Resume.pdf"
                    download
                    className="text-xs font-semibold text-[var(--accent)] hover:underline"
                  >
                    Download PDF
                  </a>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-2 text-[var(--secondary)] hover:text-white transition-colors rounded-lg hover:bg-white/10"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* PDF Viewer */}
              <div className="relative w-full flex-1" style={{ height: "80vh" }}>
                <div className="absolute inset-0 flex items-center justify-center text-[var(--secondary)] text-sm">
                  Loading CV...
                </div>
                <iframe
                  src={`https://docs.google.com/viewer?url=${encodeURIComponent("https://portfolio-dlarx.vercel.app/Diasanta - Resume.pdf")}&embedded=true`}
                  className="absolute inset-0 w-full h-full"
                  style={{ border: "none" }}
                  title="Gerald Diasanta CV"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}