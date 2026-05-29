"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Images, X, ChevronLeft, ChevronRight } from "lucide-react";

const PROJECTS = [
  {
    title: "Olist E-Commerce End-to-End Analytics & Forecasting Platform",
    description:
      "A production-grade data pipeline and time-series predictive engine processing 100K+ transactional records. Built an automated Python ETL pipeline to clean and migrate data into an optimized relational Star Schema hosted on a cloud Supabase PostgreSQL cluster. Deployed a Meta Prophet machine learning model to forecast a 12-week sales trajectory with 95% confidence intervals before delivering business insights through a live Power BI executive suite.",
    images: [
      "/images/projects/Olist/Executive Summary.png",
      "/images/projects/Olist/Performance Diagnostics.png",
    ],
    tags: ["Python", "Supabase", "PostgreSQL", "Power BI", "Meta Prophet", "Pandas"],
    featured: true,
  },
  {
    title: "Sales Analytics Pipeline & Executive Dashboard",
    description:
      "Engineered a full-stack data pipeline using Python and Pandas to ingest, clean, and process 10,000+ transaction records before relational staging. Architected a local MySQL database with strict schema constraints and scripted SQL query integrity checks to ensure production-ready data synchronization. Designed an executive-level Power BI dashboard featuring custom DAX aggregations, successfully identifying a major operational bottleneck in the Central corporate region where $500K in gross volume yielded disproportionately low net profitability ($40K).",
    images: [
      "/images/projects/Sales Analytics/dashboard_preview.png",
    ],
    tags: ["Python", "MySQL", "Power BI", "Pandas"],
    featured: true,
  },
  {
    title: "GOBUDDY: A Travel Website Platform that Promotes Lipa's Tourism by Leveraging Analytics",
    description:
      "GoBuddy is an interactive tourism platform that combines map-based trip planning, community forums, and business directories for Lipa City. It delivers a seamless digital experience for travelers while providing data-driven analytics for local businesses and the city's tourism office.",
    images: [
      "/images/projects/GoBuddy/project (1).png",
      "/images/projects/GoBuddy/project (2).png",
      "/images/projects/GoBuddy/project (3).png",
      "/images/projects/GoBuddy/project (4).png",
      "/images/projects/GoBuddy/project (5).png",
      "/images/projects/GoBuddy/project (6).png",
      "/images/projects/GoBuddy/project (7).png",
      "/images/projects/GoBuddy/project (8).png",
      "/images/projects/GoBuddy/project (9).png",
      "/images/projects/GoBuddy/project (10).png",
      "/images/projects/GoBuddy/project (11).png",
      "/images/projects/GoBuddy/project (12).png",
      "/images/projects/GoBuddy/project (13).png",
      "/images/projects/GoBuddy/project (14).png",
      "/images/projects/GoBuddy/project (15).png",
      "/images/projects/GoBuddy/project (16).png",
      "/images/projects/GoBuddy/project (17).png",
    ],
    tags: ["Laravel", "Tailwind CSS", "MySQL", "Javascript", "Livewire", "Blade"],
    featured: true,
  },
  {
    title: "Mieruka Board",
    description:
      "The Mieruka Board is a comprehensive web dashboard that visualizes KPIs and performance metrics across all departments at ARKTECH PHILIPPINES INC. By integrating with the company's existing PMS database, it delivers tailored, interactive charts that empower every team with data-driven insights.",
    images: [
      "/images/projects/Mieruka Board Screenshots/project (1).png",
      "/images/projects/Mieruka Board Screenshots/project (2).png",
      "/images/projects/Mieruka Board Screenshots/project (3).png",
      "/images/projects/Mieruka Board Screenshots/project (4).png",
      "/images/projects/Mieruka Board Screenshots/project (5).png",
      "/images/projects/Mieruka Board Screenshots/project (6).png",
      "/images/projects/Mieruka Board Screenshots/project (7).png",
      "/images/projects/Mieruka Board Screenshots/project (8).png",
      "/images/projects/Mieruka Board Screenshots/project (9).png",
      "/images/projects/Mieruka Board Screenshots/project (10).png",
      "/images/projects/Mieruka Board Screenshots/project (11).png",
      "/images/projects/Mieruka Board Screenshots/project (12).png",
      "/images/projects/Mieruka Board Screenshots/project (13).png",
      "/images/projects/Mieruka Board Screenshots/project (14).png",
      "/images/projects/Mieruka Board Screenshots/project (15).png",
      "/images/projects/Mieruka Board Screenshots/project (16).png",
      "/images/projects/Mieruka Board Screenshots/project (17).png",
      "/images/projects/Mieruka Board Screenshots/project (18).png",
    ],
    tags: ["PHP", "MySQL", "JavaScript", "AJAX", "Bootstrap", "amCharts"],
    featured: true,
  },
  {
    title: "ARKTECH Recruitment System",
    description:
      "An end-to-end Applicant Tracking System (ATS) that automates the hiring workflow from initial sourcing to final onboarding. It leverages the OpenAI API to instantly parse external job applications and features automated email workflows, dynamic applicant portals, and seamless integration with the company's internal HR database.",
    images: [
      "/images/projects/Recruitment System Screenshots/project (1).png",
      "/images/projects/Recruitment System Screenshots/project (2).png",
      "/images/projects/Recruitment System Screenshots/project (3).png",
      "/images/projects/Recruitment System Screenshots/project (4).png",
      "/images/projects/Recruitment System Screenshots/project (5).png",
      "/images/projects/Recruitment System Screenshots/project (6).png",
      "/images/projects/Recruitment System Screenshots/project (7).png",
      "/images/projects/Recruitment System Screenshots/project (8).png",
      "/images/projects/Recruitment System Screenshots/project (9).png",
      "/images/projects/Recruitment System Screenshots/project (10).png",
      "/images/projects/Recruitment System Screenshots/project (11).png",
      "/images/projects/Recruitment System Screenshots/project (12).png",
      "/images/projects/Recruitment System Screenshots/project (13).png",
      "/images/projects/Recruitment System Screenshots/project (14).png",
      "/images/projects/Recruitment System Screenshots/project (15).png",
      "/images/projects/Recruitment System Screenshots/project (16).png",
      "/images/projects/Recruitment System Screenshots/project (17).png",
      "/images/projects/Recruitment System Screenshots/project (18).png",
      "/images/projects/Recruitment System Screenshots/project (19).png",
      "/images/projects/Recruitment System Screenshots/project (20).png",
      "/images/projects/Recruitment System Screenshots/project (21).png",
      "/images/projects/Recruitment System Screenshots/project (22).png",
      "/images/projects/Recruitment System Screenshots/project (23).png",
      "/images/projects/Recruitment System Screenshots/project (24).png",
      "/images/projects/Recruitment System Screenshots/project (25).png",
      "/images/projects/Recruitment System Screenshots/project (26).png",
      "/images/projects/Recruitment System Screenshots/project (27).png",
      "/images/projects/Recruitment System Screenshots/project (28).png",
      "/images/projects/Recruitment System Screenshots/project (29).png",
    ],
    tags: ["PHP", "OpenAI API", "JavaScript", "AJAX", "Bootstrap", "DataTables"],
    featured: true,
  },
  {
    title: "LibPulse: The Heartbeat of the Latest Trends and News in Librarianship",
    description:
      "LibPulse is an open-access web platform designed to bridge the information gap for librarians and LIS students worldwide. It aggregates the latest news, events, and industry trends into a centralized, responsive hub, making it easy for library professionals to stay informed.",
    images: [
      "/images/projects/LibPulse/project (1).png",
      "/images/projects/LibPulse/project (8).png",
      "/images/projects/LibPulse/project (2).png",
      "/images/projects/LibPulse/project (3).png",
      "/images/projects/LibPulse/project (4).png",
      "/images/projects/LibPulse/project (5).png",
      "/images/projects/LibPulse/project (6).png",
      "/images/projects/LibPulse/project (7).png",
    ],
    tags: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    featured: false,
  },
];

// ─── Lightbox ────────────────────────────────────────────────────────
function Lightbox({
  images,
  startIndex,
  title,
  onClose,
}: {
  images: string[];
  startIndex: number;
  title: string;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(startIndex);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  const handleBackdrop = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
    if (e.key === "Escape") onClose();
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm px-3 py-6 md:px-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleBackdrop}
      onKeyDown={handleKey}
      tabIndex={0}
    >
      <motion.div
        className="relative w-full max-w-4xl rounded-2xl overflow-hidden flex flex-col"
        style={{ background: "var(--surface)", maxHeight: "90vh", boxShadow: "0 8px 40px rgba(0,0,0,0.18)" }}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 flex-shrink-0">
          <div className="flex-1 min-w-0 mr-3">
            <p className="text-xs font-mono text-[var(--secondary)] mb-0.5">
              {current + 1} / {images.length}
            </p>
            <h4 className="text-xs md:text-sm font-semibold text-[var(--text)] line-clamp-1">
              {title}
            </h4>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg glass flex-shrink-0 flex items-center justify-center text-[var(--secondary)] hover:text-[var(--accent)] transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Main image */}
        <div className="relative bg-black/40 flex items-center justify-center flex-shrink-0">
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={images[current]}
              alt={`${title} screenshot ${current + 1}`}
              className="w-full object-contain"
              style={{ maxHeight: "60vh" }}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.2 }}
            />
          </AnimatePresence>

          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-2 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                style={{
                  background: "rgba(0,0,0,0.45)",
                  color: "white",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={next}
                className="absolute right-2 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                style={{
                  background: "rgba(0,0,0,0.45)",
                  color: "white",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <ChevronRight size={16} />
              </button>
            </>
          )}
        </div>

        {/* Dot indicators */}
        {images.length > 1 && (
          <div className="flex items-center justify-center gap-1.5 py-3 flex-shrink-0 flex-wrap px-4">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === current ? 16 : 6,
                  height: 6,
                  background: i === current
                    ? "linear-gradient(135deg, #8B5CF6, #06B6D4)"
                    : "var(--secondary)",
                  opacity: i === current ? 1 : 0.4,
                }}
              />
            ))}
          </div>
        )}

        {/* Thumbnail strip — hidden on mobile */}
        {images.length > 1 && (
          <div className="hidden sm:flex gap-2 px-4 pb-4 overflow-x-auto flex-shrink-0">
            {images.map((src, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="flex-shrink-0 w-16 h-11 md:w-20 md:h-14 rounded-lg overflow-hidden transition-all duration-200"
                style={{
                  border: i === current ? "2px solid #8B5CF6" : "2px solid transparent",
                  opacity: i === current ? 1 : 0.5,
                }}
              >
                <img src={src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

// ─── Project Card ─────────────────────────────────────────────────────
function ProjectCard({
  project,
  index,
  inView,
  onViewPhotos,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
  inView: boolean;
  onViewPhotos: () => void;
}) {
  return (
    <motion.article
      className="group relative rounded-2xl overflow-hidden gradient-border cursor-pointer"
      style={{ background: "var(--surface)", boxShadow: "var(--surface-shadow)" }}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -6 }}
      onClick={onViewPhotos}
    >
      <div className="relative h-48 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 overflow-hidden">
        <img
          src={project.images[0]}
          alt={project.title}
          className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-all duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-white text-sm font-semibold bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <Images size={15} /> View Screenshots
          </span>
        </div>
        {project.featured && (
          <div className="absolute top-3 right-3 text-xs font-mono font-medium px-2.5 py-1 rounded-full text-white"
            style={{ background: "linear-gradient(135deg, #8B5CF6, #06B6D4)" }}>
            ★ Featured
          </div>
        )}
        <div className="absolute bottom-3 left-3 text-[10px] font-mono px-2 py-0.5 rounded-full text-white bg-black/50 backdrop-blur-sm flex items-center gap-1">
          <Images size={10} />
          {project.images.length} screenshot{project.images.length !== 1 ? "s" : ""}
        </div>
      </div>

      <div className="p-5 md:p-6">
        <h3 className="font-display font-bold text-lg md:text-xl text-[var(--text)] mb-2 group-hover:text-[var(--accent)] transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-sm text-[var(--secondary)] leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1.5 md:gap-2">
          {project.tags.map((tag) => (
            <span key={tag}
              className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full"
              style={{
                background: "linear-gradient(135deg, #8B5CF644, #06B6D433)",
                border: "1px solid #8B5CF655",
                color: "#a78bfa",
              }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

// ─── Section ──────────────────────────────────────────────────────────
export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [lightbox, setLightbox] = useState<{ images: string[]; title: string; startIndex: number } | null>(null);

  return (
    <section id="projects" className="section-pad">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.p className="text-xs font-mono tracking-widest text-[var(--secondary)] uppercase mb-3"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}>
          03 — Work
        </motion.p>
        <motion.h2 className="font-display font-extrabold text-4xl md:text-5xl text-[var(--text)] mb-4"
          initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.1 }}>
          Projects
        </motion.h2>
        <motion.p className="text-[var(--secondary)] mb-12 max-w-xl"
          initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}>
          A selection of things I&apos;ve built — from side projects to production systems.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} inView={inView}
              onViewPhotos={() => setLightbox({ images: project.images, title: project.title, startIndex: 0 })} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <Lightbox images={lightbox.images} title={lightbox.title}
            startIndex={lightbox.startIndex} onClose={() => setLightbox(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}