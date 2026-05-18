"use client";

import { useEffect, useState, useRef } from "react";

/* ─── Countdown hook ─────────────────────────────────────── */
function useCountdown(target: Date) {
  const calc = () => {
    const diff = target.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  });
  return time;
}

/* ─── Opening date: 30 days from now ────────────────────── */
const OPEN_DATE = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);

/* ─── Decorative floating book SVG ──────────────────────── */
function Book({
  className,
  color = "#c2925a",
  accent = "#8B5E2A",
}: {
  className?: string;
  color?: string;
  accent?: string;
}) {
  return (
    <svg
      viewBox="0 0 60 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="8" y="2" width="44" height="76" rx="3" fill={color} />
      <rect x="8" y="2" width="8" height="76" rx="2" fill={accent} />
      <rect
        x="20"
        y="18"
        width="24"
        height="2.5"
        rx="1.2"
        fill="white"
        fillOpacity="0.5"
      />
      <rect
        x="20"
        y="24"
        width="18"
        height="2.5"
        rx="1.2"
        fill="white"
        fillOpacity="0.35"
      />
      <rect
        x="20"
        y="30"
        width="21"
        height="2.5"
        rx="1.2"
        fill="white"
        fillOpacity="0.35"
      />
      <rect
        x="20"
        y="36"
        width="16"
        height="2.5"
        rx="1.2"
        fill="white"
        fillOpacity="0.25"
      />
    </svg>
  );
}

/* ─── Floating books config ─────────────────────────────── */
const BOOKS = [
  {
    color: "#C2925A",
    accent: "#7A4E28",
    top: "8%",
    left: "4%",
    size: 56,
    rotate: -18,
    delay: "0s",
    dur: "6s",
  },
  {
    color: "#5C8A6E",
    accent: "#2E5E42",
    top: "15%",
    right: "5%",
    size: 48,
    rotate: 14,
    delay: "1.2s",
    dur: "7s",
  },
  {
    color: "#8B6BAE",
    accent: "#5A3D82",
    top: "60%",
    left: "2%",
    size: 44,
    rotate: -10,
    delay: "0.6s",
    dur: "8s",
  },
  {
    color: "#C26060",
    accent: "#8B2E2E",
    top: "70%",
    right: "3%",
    size: 52,
    rotate: 20,
    delay: "2s",
    dur: "6.5s",
  },
  {
    color: "#5A85B5",
    accent: "#2E5882",
    top: "40%",
    left: "1%",
    size: 36,
    rotate: -25,
    delay: "1.8s",
    dur: "9s",
  },
  {
    color: "#D4A84B",
    accent: "#9A6E1A",
    top: "50%",
    right: "1.5%",
    size: 40,
    rotate: 8,
    delay: "0.3s",
    dur: "7.5s",
  },
];

/* ─── Particle dots ─────────────────────────────────────── */
function Particles() {
  const dots = Array.from({ length: 28 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: `${Math.random() * 4}s`,
    dur: `${Math.random() * 4 + 4}s`,
    opacity: Math.random() * 0.3 + 0.1,
  }));
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((d) => (
        <div
          key={d.id}
          className="absolute rounded-full bg-amber-300 animate-ping"
          style={{
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: d.size,
            height: d.size,
            opacity: d.opacity,
            animationDelay: d.delay,
            animationDuration: d.dur,
          }}
        />
      ))}
    </div>
  );
}

/* ─── Countdown tile ────────────────────────────────────── */
function Tile({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="relative">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-amber-900/30 border border-amber-400/30 rounded-2xl backdrop-blur-sm flex items-center justify-center shadow-[inset_0_1px_0_rgba(255,220,130,0.15)]">
          <span
            className="text-2xl sm:text-3xl font-bold text-amber-100 tabular-nums tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {String(value).padStart(2, "0")}
          </span>
        </div>
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-10 h-1 bg-amber-500/20 blur-sm rounded-full" />
      </div>
      <span className="text-amber-400/70 text-xs uppercase tracking-widest">
        {label}
      </span>
    </div>
  );
}

/* ─── Features ──────────────────────────────────────────── */
const FEATURES = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
        />
      </svg>
    ),
    title: "1000+ Books",
    desc: "Textbooks, references, and fiction across all subjects and grades.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        />
      </svg>
    ),
    title: "Quiet Study Zone",
    desc: "Dedicated calm space for deep focus and exam preparation.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
        />
      </svg>
    ),
    title: "Issue & Return",
    desc: "Simple book lending system for all enrolled students.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
    title: "All Grades Welcome",
    desc: "Resources curated for every class from 5th to 12th grade.",
  },
];

/* ─── Main page ─────────────────────────────────────────── */
export default function LibraryPage() {
  const { days, hours, minutes, seconds } = useCountdown(OPEN_DATE);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleNotify = () => {
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    } else {
      inputRef.current?.focus();
    }
  };

  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Crimson+Pro:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap');

        @keyframes floatY {
          0%,100% { transform: translateY(0px) rotate(var(--r)); }
          50%      { transform: translateY(-14px) rotate(var(--r)); }
        }
        @keyframes shimmer {
          0%   { background-position: -400px 0; }
          100% { background-position: 400px 0; }
        }
        @keyframes fadeUp {
          from { opacity:0; transform: translateY(28px); }
          to   { opacity:1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity:0; transform:scale(0.88); }
          to   { opacity:1; transform:scale(1); }
        }
        @keyframes orb {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(30px,-20px) scale(1.08); }
          66%      { transform: translate(-20px,15px) scale(0.95); }
        }

        .float-book { animation: floatY var(--dur,7s) ease-in-out var(--delay,0s) infinite; }
        .fade-up    { animation: fadeUp 0.7s ease both; }
        .scale-in   { animation: scaleIn 0.5s ease both; }

        .shimmer-text {
          background: linear-gradient(90deg, #f5deb3 0%, #ffd700 40%, #f5deb3 60%, #c8963e 100%);
          background-size: 400px 100%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3.5s linear infinite;
        }

        .glass-card {
          background: rgba(255,240,200,0.04);
          border: 1px solid rgba(255,220,130,0.12);
          backdrop-filter: blur(12px);
        }
      `}</style>

      <main
        className="min-h-screen relative overflow-hidden flex flex-col"
        style={{
          background:
            "linear-gradient(135deg, #1a0e05 0%, #2d1a08 30%, #1e1206 60%, #0f0804 100%)",
          fontFamily: "'Crimson Pro', Georgia, serif",
        }}
      >
        {/* ── Background orbs ── */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl"
            style={{
              background: "radial-gradient(circle, #c2925a, transparent)",
              top: "10%",
              left: "15%",
              animation: "orb 12s ease-in-out infinite",
            }}
          />
          <div
            className="absolute w-80 h-80 rounded-full opacity-15 blur-3xl"
            style={{
              background: "radial-gradient(circle, #8B6BAE, transparent)",
              bottom: "15%",
              right: "10%",
              animation: "orb 15s ease-in-out 3s infinite",
            }}
          />
          <div
            className="absolute w-64 h-64 rounded-full opacity-10 blur-2xl"
            style={{
              background: "radial-gradient(circle, #5C8A6E, transparent)",
              top: "55%",
              left: "40%",
              animation: "orb 10s ease-in-out 6s infinite",
            }}
          />
          {/* Grain texture overlay */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")`,
              backgroundSize: "128px",
            }}
          />
          {/* Horizontal rule lines */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-full h-px"
              style={{
                top: `${12 + i * 11}%`,
                background:
                  "linear-gradient(90deg, transparent, rgba(200,150,60,0.06), transparent)",
              }}
            />
          ))}
        </div>

        <Particles />

        {/* ── Floating books ── */}
        {BOOKS.map((b, i) => (
          <div
            key={i}
            className="absolute pointer-events-none float-book"
            style={{
              top: b.top,
              left: "left" in b ? b.left : undefined,
              right: "right" in b ? b.right : undefined,
              width: b.size,
              opacity: 0.45,
              ["--r" as string]: `${b.rotate}deg`,
              ["--dur" as string]: b.dur,
              ["--delay" as string]: b.delay,
            }}
          >
            <Book color={b.color} accent={b.accent} />
          </div>
        ))}

        {/* ── Nav strip ── */}
        <nav className="relative z-10 flex items-center justify-between px-6 sm:px-10 py-5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-700/40 border border-amber-500/30 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#f5c87a"
                strokeWidth={1.8}
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>
            </div>
            <span
              className="text-amber-200/80 text-sm font-medium tracking-wide"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Bright Future Academy
            </span>
          </div>
          <span className="text-xs text-amber-400/50 tracking-widest uppercase hidden sm:block">
            Library Wing
          </span>
        </nav>

        {/* ── Hero ── */}
        <section className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-5 py-12 sm:py-16">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/25 bg-amber-500/10 mb-8 fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-amber-300/80 text-xs tracking-widest uppercase">
              Coming Soon
            </span>
          </div>

          {/* Heading */}
          <h1
            className="fade-up mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.6rem, 7vw, 5.5rem)",
              fontWeight: 700,
              lineHeight: 1.08,
              animationDelay: "0.2s",
            }}
          >
            <span className="shimmer-text">Our Library</span>
            <br />
            <span className="text-amber-100/90 italic text-[0.9em]">
              is Opening Soon
            </span>
          </h1>

          {/* Ornament */}
          <div
            className="flex items-center gap-3 my-6 fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-amber-500/50" />
            <svg
              viewBox="0 0 20 20"
              className="w-4 h-4 text-amber-500/60 fill-current"
            >
              <path d="M10 2L12.39 7.26L18 8.18L14 12.08L14.99 18L10 15.27L5.01 18L6 12.08L2 8.18L7.61 7.26L10 2Z" />
            </svg>
            <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-amber-500/50" />
          </div>

          {/* Sub */}
          <p
            className="text-amber-200/55 text-base sm:text-lg leading-relaxed max-w-md mx-auto mb-10 fade-up"
            style={{ animationDelay: "0.35s" }}
          >
            A dedicated reading & study space with 1000+ books, quiet study
            zones, and easy borrowing — launching very soon for all students.
          </p>

          {/* Countdown */}
          <div
            className="flex items-start gap-4 sm:gap-6 mb-12 scale-in"
            style={{ animationDelay: "0.45s" }}
          >
            <Tile value={days} label="Days" />
            <div className="text-amber-500/40 text-2xl font-light mt-4">:</div>
            <Tile value={hours} label="Hours" />
            <div className="text-amber-500/40 text-2xl font-light mt-4">:</div>
            <Tile value={minutes} label="Min" />
            <div className="text-amber-500/40 text-2xl font-light mt-4">:</div>
            <Tile value={seconds} label="Sec" />
          </div>

          {/* Notify form */}
          {!submitted ? (
            <div
              className="flex flex-col sm:flex-row items-stretch gap-3 w-full max-w-sm mx-auto fade-up"
              style={{ animationDelay: "0.5s" }}
            >
              <input
                ref={inputRef}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleNotify()}
                placeholder="Your email address"
                className="flex-1 bg-amber-900/20 border border-amber-500/20 text-amber-100 placeholder:text-amber-500/35 text-sm rounded-xl px-4 py-3 outline-none focus:border-amber-400/50 focus:bg-amber-900/30 transition-all"
              />
              <button
                onClick={handleNotify}
                className="bg-amber-500 hover:bg-amber-400 text-amber-950 font-semibold text-sm px-6 py-3 rounded-xl transition-all hover:shadow-lg hover:shadow-amber-500/25 active:scale-95"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Notify Me
              </button>
            </div>
          ) : (
            <div
              className="flex items-center gap-2 bg-emerald-900/30 border border-emerald-500/25 text-emerald-300 text-sm px-6 py-3 rounded-xl fade-up"
              style={{ animationDelay: "0s" }}
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              You&apos;re on the list! We&apos;ll notify you on launch day.
            </div>
          )}

          <p
            className="text-amber-500/30 text-xs mt-3 fade-up"
            style={{ animationDelay: "0.55s" }}
          >
            No spam. Library launch notification only.
          </p>
        </section>

        {/* ── Feature cards ── */}
        <section className="relative z-10 px-5 sm:px-8 lg:px-16 pb-12">
          <div className="max-w-4xl mx-auto">
            <p
              className="text-center text-amber-400/40 text-xs tracking-widest uppercase mb-7 fade-up"
              style={{ animationDelay: "0.6s" }}
            >
              What&apos;s inside
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {FEATURES.map((f, i) => (
                <div
                  key={f.title}
                  className="glass-card rounded-2xl p-4 sm:p-5 flex flex-col gap-3 fade-up hover:border-amber-400/25 transition-colors"
                  style={{ animationDelay: `${0.65 + i * 0.08}s` }}
                >
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/15 flex items-center justify-center text-amber-400">
                    {f.icon}
                  </div>
                  <div>
                    <p
                      className="text-amber-100/80 text-sm font-medium mb-1"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {f.title}
                    </p>
                    <p className="text-amber-300/40 text-xs leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="relative z-10 border-t border-amber-500/10 py-6 px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-amber-500/30 text-xs">
            © 2025 Bright Future Academy · Library Wing
          </p>
          <p
            className="text-amber-500/30 text-xs italic"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            &ldquo;A room without books is like a body without a soul.&rdquo;
          </p>
        </footer>
      </main>
    </>
  );
}
