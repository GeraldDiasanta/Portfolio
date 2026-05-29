"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const NODES = [
  // Inner Ring (Radius: 240-260) - Spaced evenly by ~22° increments
  { id: "html5",     label: "HTML5",        angle: 0,   radius: 240, color: "#E34F26" },
  { id: "css3",      label: "CSS3",         angle: 22,  radius: 255, color: "#1572B6" },
  { id: "js",        label: "JavaScript",   angle: 44,  radius: 245, color: "#F7DF1E" },
  { id: "figma",     label: "Figma",        angle: 66,  radius: 245, color: "#F24E1E" },
  { id: "python",    label: "Python",       angle: 88,  radius: 250, color: "#F7CD45" },
  { id: "php",       label: "PHP",          angle: 110, radius: 240, color: "#777BB4" },
  { id: "dart",      label: "Dart",         angle: 132, radius: 255, color: "#00B4AB" },
  { id: "r",         label: "R",            angle: 154, radius: 245, color: "#276DC3" },
  { id: "react",     label: "React",        angle: 176, radius: 260, color: "#61DAFB" },
  { id: "nextjs",    label: "Next.js",      angle: 198, radius: 250, color: "#6366F1" },
  { id: "tailwind",  label: "Tailwind",     angle: 220, radius: 240, color: "#06B6D4" },
  { id: "bootstrap", label: "Bootstrap",    angle: 242, radius: 255, color: "#7952B3" },
  { id: "laravel",   label: "Laravel",      angle: 264, radius: 245, color: "#FF2D20" },
  { id: "flutter",   label: "Flutter",      angle: 286, radius: 260, color: "#54C5F8" },
  { id: "firebase",  label: "Firebase",     angle: 308, radius: 250, color: "#FFCA28" },
  { id: "git",       label: "Git/GitHub",   angle: 330, radius: 240, color: "#F05032" },
  { id: "vscode",    label: "VS Code",      angle: 352, radius: 255, color: "#007ACC" },

  // Outer Ring (Radius: 305-310) - Spaced evenly by 40° increments to prevent collision
  { id: "sql",        label: "SQL",          angle: 10,  radius: 310, color: "#00758F" },
  { id: "jupyter",    label: "Jupyter",      angle: 50,  radius: 305, color: "#F37626" },
  { id: "tableau",    label: "Tableau",      angle: 90,  radius: 310, color: "#E15759" }, 
  { id: "powerbi",    label: "Power BI",     angle: 130, radius: 310, color: "#F2C811" },
  { id: "excel",      label: "Excel",        angle: 170, radius: 305, color: "#217346" },
  { id: "xampp",      label: "XAMPP",        angle: 210, radius: 310, color: "#FB7A24" },
  { id: "datatables", label: "DataTables",   angle: 250, radius: 305, color: "#00ACC1" },
  { id: "amcharts",   label: "amCharts",     angle: 290, radius: 310, color: "#FF6F00" },
  { id: "node",       label: "Node.js",      angle: 330, radius: 305, color: "#68A063" },
];

function NeuralLines({ nodes, cx, cy }: { nodes: typeof NODES; cx: number; cy: number }) {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.6" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {nodes.map((node) => {
        const rad = (node.angle * Math.PI) / 180;
        const x2 = cx + Math.cos(rad) * node.radius;
        const y2 = cy + Math.sin(rad) * node.radius;
        return (
          <line key={node.id} x1={cx} y1={cy} x2={x2} y2={y2}
            stroke="url(#lineGrad)" strokeWidth="1" filter="url(#glow)" opacity="0.5" />
        );
      })}
    </svg>
  );
}

function FloatingNode({ node, cx, cy }: { node: (typeof NODES)[0]; cx: number; cy: number }) {
  const rad = (node.angle * Math.PI) / 180;
  const x = cx + Math.cos(rad) * node.radius;
  const y = cy + Math.sin(rad) * node.radius;
  const delay = node.angle / 360;

  return (
    <motion.div
      className="absolute flex items-center justify-center cursor-default"
      style={{ left: x, top: y, transform: "translate(-50%, -50%)", zIndex: 5 }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 + delay * 1.2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.25, zIndex: 20 }}
    >
      <motion.div
        className="node-label px-2 py-1 rounded-md text-[10px] font-mono font-bold whitespace-nowrap select-none"
        style={{
          border: `1px solid ${node.color}55`,
          background: `${node.color}22`,
          color: node.color,
          boxShadow: `0 0 10px ${node.color}22`,
        }}
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4 + delay * 2, repeat: Infinity, ease: "easeInOut", delay: delay * 2 }}
      >
        {node.label}
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [center, setCenter] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setCenter({ x: rect.width / 2, y: rect.height / 2 });
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16 md:pt-20"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #8B5CF6, transparent 70%)" }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl"
          style={{ background: "radial-gradient(circle, #06B6D4, transparent 70%)" }} />
      </div>

      {/* ── Desktop: two-column ── */}
      <div className="hidden md:flex w-full max-w-7xl mx-auto px-8 items-center gap-8 min-h-[calc(100vh-80px)]">
        <motion.div
          className="flex-1 z-10 flex flex-col items-start text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.0, duration: 0.7 }}
        >
          <p className="text-sm font-mono tracking-widest text-[var(--secondary)] mb-3 uppercase">
            Hello, World! 👋
          </p>
          <h1 className="font-display font-extrabold text-6xl xl:text-7xl leading-none mb-5">
            <span className="text-[var(--text)]">Hi, I&apos;m </span>
            <span className="gradient-text">Gerald Diasanta</span>
          </h1>
          <p className="text-[var(--secondary)] text-lg max-w-sm mb-8 font-body leading-relaxed">
            Data Analyst & Full-Stack Developer — building intelligent, beautiful digital experiences.
          </p>
          <div className="flex items-center gap-4">
            <motion.button
              onClick={scrollToProjects}
              className="px-7 py-3.5 rounded-xl font-semibold text-white text-sm flex items-center gap-2 shadow-glow transition-all duration-300 hover:scale-105 active:scale-95"
              style={{ background: "linear-gradient(135deg, #8B5CF6, #06B6D4)" }}
              whileHover={{ boxShadow: "0 0 30px rgba(139,92,246,0.6)" }}
            >
              View My Work <ArrowDown size={16} className="animate-bounce" />
            </motion.button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-7 py-3.5 rounded-xl font-semibold text-sm glass text-[var(--text)] hover:text-[var(--accent)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Get In Touch
            </button>
          </div>
        </motion.div>

        <div ref={containerRef} className="flex-1 relative h-[680px]">
          {center.x > 0 && <NeuralLines nodes={NODES} cx={center.x} cy={center.y} />}
          {center.x > 0 && NODES.map((node) => (
            <FloatingNode key={node.id} node={node} cx={center.x} cy={center.y} />
          ))}
          {center.x > 0 && (
            <div className="absolute" style={{ left: center.x, top: center.y, transform: "translate(-50%, -50%)", zIndex: 10 }}>
              <motion.div className="relative"
                initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 180 }}
              >
                <div className="absolute -inset-1 rounded-full"
                  style={{ background: "linear-gradient(135deg, #8B5CF6, #06B6D4)", filter: "blur(6px)", opacity: 0.7 }} />
                <div className="relative w-36 h-36 rounded-full overflow-hidden"
                  style={{ background: "linear-gradient(135deg, #8B5CF6, #06B6D4)", padding: "3px" }}>
                  <div className="w-full h-full rounded-full overflow-hidden bg-[var(--surface)] flex items-center justify-center">
                    <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = "none";
                        (e.target as HTMLImageElement).parentElement!.innerHTML = '<span class="text-4xl">👤</span>';
                      }} />
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>

      {/* ── Mobile: stacked ── */}
      <div className="flex md:hidden flex-col items-center text-center w-full px-5 py-8">
        {/* Profile pic */}
        <motion.div className="mb-6"
          initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 180 }}
        >
          <div className="w-24 h-24 rounded-full overflow-hidden mx-auto"
            style={{ background: "linear-gradient(135deg, #8B5CF6, #06B6D4)", padding: "3px" }}>
            <div className="w-full h-full rounded-full bg-[var(--surface)] flex items-center justify-center overflow-hidden">
              <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                  (e.target as HTMLImageElement).parentElement!.innerHTML = '<span class="text-3xl">👤</span>';
                }} />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-full"
        >
          <p className="text-xs font-mono tracking-widest text-[var(--secondary)] mb-2 uppercase">
            Hello, World! 👋
          </p>
          {/* Smaller text on mobile to prevent cutoff */}
          <h1 className="font-display font-extrabold text-3xl leading-tight mb-3">
            <span className="text-[var(--text)]">Hi, I&apos;m </span>
            <span className="gradient-text">Gerald Diasanta</span>
          </h1>
          <p className="text-[var(--secondary)] text-sm max-w-xs mx-auto mb-6 font-body leading-relaxed">
            Data Analyst & Full-Stack Developer — building intelligent, beautiful digital experiences.
          </p>

          <div className="flex items-center justify-center gap-3 flex-wrap">
            <motion.button
              onClick={scrollToProjects}
              className="px-5 py-2.5 rounded-xl font-semibold text-white text-sm flex items-center gap-2"
              style={{ background: "linear-gradient(135deg, #8B5CF6, #06B6D4)" }}
            >
              View My Work <ArrowDown size={14} className="animate-bounce" />
            </motion.button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-5 py-2.5 rounded-xl font-semibold text-sm glass text-[var(--text)]"
            >
              Get In Touch
            </button>
          </div>
        </motion.div>

        {/* Mobile tech tags */}
        <motion.div
          className="mt-8 flex flex-wrap gap-1.5 justify-center w-full"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {NODES.map((node, i) => (
            <motion.span
              key={node.id}
              className="px-2 py-0.5 rounded text-[10px] font-mono font-bold"
              style={{
                border: `1px solid ${node.color}55`,
                background: `${node.color}18`,
                color: node.color,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.03 }}
            >
              {node.label}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}