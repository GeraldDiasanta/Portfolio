"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Award, ExternalLink, X } from "lucide-react";

const CERTIFICATIONS = [
  {
    title: "Introduction to Data Science",
    org: "CISCO Networking Academy",
    date: "February 2026",
    badge: "📊",
    color: "#007696",
    image: "/images/certs/intro-data-science.png",
  },
  {
    title: "Data Analytics Essentials",
    org: "CISCO Networking Academy",
    date: "March 2026",
    badge: "📈",
    color: "#007696",
    image: "/images/certs/data-analytics-essentials.png",
  },
  {
    title: "Batangas Information Technology Conference (BITCON 2025)",
    org: "BITCON",
    date: "April 2025",
    badge: "⚡",
    color: "#6366F1",
    image: "/images/certs/bitcon.png",
  },
  {
    title: "Language Legacy: Python Programming and Figma Design",
    org: "Tech Workshop Series",
    date: "January 2023",
    badge: "🐍",
    color: "#3776AB",
    image: "/images/certs/python-figma.png",
  },
  {
    title: "Data Science Essentials with Python",
    org: "CISCO Networking Academy",
    date: "May 2026",
    badge: "🧠",
    color: "#007696",
    image: "/images/certs/data-science-python.png",
  },
  {
    title: "Google Data Analytics Professional Certificate",
    org: "Google (via Coursera)",
    date: "In Progress",
    badge: "📉",
    color: "#4285F4",
    image: "/images/certs/google-course-6.png",
  },
];

// ─── Certificate Lightbox ─────────────────────────────────────────────
function CertLightbox({
  cert,
  onClose,
}: {
  cert: (typeof CERTIFICATIONS)[0];
  onClose: () => void;
}) {
  const handleBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm px-3 py-6 md:px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleBackdrop}
    >
      <motion.div
        className="relative w-full max-w-3xl rounded-2xl overflow-hidden flex flex-col"
        style={{ background: "var(--surface)", maxHeight: "90vh", boxShadow: "0 8px 40px rgba(0,0,0,0.18)" }}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-4 py-3 border-b border-white/10 flex-shrink-0"
          style={{ borderLeft: `3px solid ${cert.color}` }}
        >
          <div className="flex-1 min-w-0 mr-3">
            <p className="text-xs font-mono text-[var(--secondary)] mb-0.5 truncate">
              {cert.org} · {cert.date}
            </p>
            <h4 className="text-xs md:text-sm font-semibold text-[var(--text)] line-clamp-2">
              {cert.title}
            </h4>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg glass flex-shrink-0 flex items-center justify-center text-[var(--secondary)] hover:text-[var(--accent)] transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Certificate image */}
        <div className="bg-black/40 flex items-center justify-center flex-shrink-0 p-3 md:p-4">
          <motion.img
            src={cert.image}
            alt={`${cert.title} certificate`}
            className="w-full object-contain rounded-lg"
            style={{ maxHeight: "70vh" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
              (e.target as HTMLImageElement).insertAdjacentHTML(
                "afterend",
                `<div class="flex flex-col items-center gap-3 text-[var(--secondary)] py-16">
                  <span class="text-5xl">${cert.badge}</span>
                  <p class="text-sm font-mono">Certificate image not found</p>
                  <p class="text-xs opacity-60">Place it at: ${cert.image}</p>
                </div>`
              );
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────
export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);
  const [lightboxCert, setLightboxCert] = useState<(typeof CERTIFICATIONS)[0] | null>(null);

  const prev = () => setCurrent((c) => (c - 1 + CERTIFICATIONS.length) % CERTIFICATIONS.length);
  const next = () => setCurrent((c) => (c + 1) % CERTIFICATIONS.length);

  return (
    <section id="certifications" className="section-pad">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.p
          className="text-xs font-mono tracking-widest text-[var(--secondary)] uppercase mb-3"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          04 — Credentials
        </motion.p>

        <motion.h2
          className="font-display font-extrabold text-4xl md:text-5xl text-[var(--text)] mb-8 md:mb-12"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.1 }}
        >
          Certifications
        </motion.h2>

        {/* On mobile: stacked. On md+: side-by-side */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 md:items-start">
          {/* Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.35 }}
                  className="glass rounded-2xl p-5 md:p-8 flex flex-col gap-4"
                  style={{ borderLeft: `3px solid ${CERTIFICATIONS[current].color}` }}
                >
                  <div
                    className="text-3xl md:text-4xl w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center"
                    style={{ background: `${CERTIFICATIONS[current].color}22` }}
                  >
                    {CERTIFICATIONS[current].badge}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg md:text-xl text-[var(--text)] mb-1">
                      {CERTIFICATIONS[current].title}
                    </h3>
                    <p className="text-sm font-semibold text-[var(--secondary)]">
                      {CERTIFICATIONS[current].org}
                    </p>
                    <p className="text-xs font-mono text-[var(--secondary)] mt-2 opacity-60">
                      Issued {CERTIFICATIONS[current].date}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/10 flex-wrap gap-2">
                    <div className="flex items-center gap-1">
                      <Award size={14} className="text-[var(--accent)]" />
                      <span className="text-xs text-[var(--secondary)]">Verified Credential</span>
                    </div>
                    <button
                      onClick={() => setLightboxCert(CERTIFICATIONS[current])}
                      className="text-xs flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-semibold text-white transition-all hover:opacity-90 active:scale-95"
                      style={{ background: "linear-gradient(135deg, #8B5CF6, #06B6D4)" }}
                    >
                      View Certificate <ExternalLink size={11} />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between mt-4">
              <button onClick={prev}
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-[var(--secondary)] hover:text-[var(--accent)] transition-colors">
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-2 flex-wrap justify-center">
                {CERTIFICATIONS.map((_, i) => (
                  <button key={i} onClick={() => setCurrent(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === current ? "w-6 bg-[var(--accent)]" : "w-1.5 bg-[var(--secondary)] opacity-30"
                    }`} />
                ))}
              </div>
              <button onClick={next}
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-[var(--secondary)] hover:text-[var(--accent)] transition-colors">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* List view */}
          <div className="flex flex-col gap-2 md:gap-3">
            {CERTIFICATIONS.map((cert, i) => (
              <motion.button
                key={cert.title}
                onClick={() => setCurrent(i)}
                className={`text-left p-3 md:p-4 rounded-xl transition-all duration-300 flex items-center gap-3 md:gap-4 ${
                  i === current ? "glass border border-[var(--accent)]33" : "hover:glass"
                }`}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.05 }}
                whileHover={{ x: 4 }}
              >
                <span className="text-xl md:text-2xl flex-shrink-0">{cert.badge}</span>
                <div className="flex-1 min-w-0">
                  <p className={`text-xs md:text-sm font-semibold truncate ${
                    i === current ? "text-[var(--accent)]" : "text-[var(--text)]"
                  }`}>
                    {cert.title}
                  </p>
                  <p className="text-xs text-[var(--secondary)] truncate">
                    {cert.org} · {cert.date}
                  </p>
                </div>
                {i === current && (
                  <motion.div layoutId="cert-indicator"
                    className="w-1.5 h-8 rounded-full flex-shrink-0"
                    style={{ background: "linear-gradient(to bottom, #8B5CF6, #06B6D4)" }} />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {lightboxCert && (
          <CertLightbox cert={lightboxCert} onClose={() => setLightboxCert(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}