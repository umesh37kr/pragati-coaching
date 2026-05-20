"use client";

import {
  type CSSProperties,
  type ReactNode,
  type RefObject,
  useEffect,
  useRef,
  useState,
} from "react";

/* ─────────────────────────────────────────────
   DESIGN TOKENS
───────────────────────────────────────────── */
const NAVY = "#0a2463";
const BLUE = "#1565c0";
const SKY = "#2196f3";
const ICE = "#e3f2fd";
const WHITE = "#ffffff";
const OFF = "#f7fbff";
const TEXT = "#0d1b3e";
const MUTED = "#5a6a8a";
const GOLD = "#f0b429";
const LIGHT_BORDER = "#90caf9";

const FONT_DISPLAY = "'Playfair Display', serif";
const FONT_BODY = "'DM Sans', sans-serif";

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const stats = [
  { value: "12+", label: "Years of Excellence" },
  { value: "8K+", label: "Students Enrolled" },
  { value: "94%", label: "Success Rate" },
  { value: "120+", label: "Expert Faculty" },
];

const values = [
  {
    icon: "\u{1F3AF}",
    title: "Result-Oriented",
    desc: "Every program is crafted around measurable outcomes, ensuring students achieve their academic goals.",
  },
  {
    icon: "\u{1F9E0}",
    title: "Conceptual Clarity",
    desc: "We emphasise deep understanding over rote learning, building strong foundations for lifelong success.",
  },
  {
    icon: "\u{1F91D}",
    title: "Personalised Attention",
    desc: "Small batches and mentorship-driven teaching ensure no student is ever left behind.",
  },
  {
    icon: "\u{1F3C6}",
    title: "Excellence Culture",
    desc: "A high-performance environment that motivates students to consistently exceed their potential.",
  },
];

const missionPoints = [
  "Deliver rigorous, concept-driven instruction",
  "Provide personalised mentorship for every learner",
  "Foster analytical thinking and problem-solving skills",
  "Create an inclusive, supportive learning community",
  "Continuously evolve with the best pedagogical practices",
];

/* ─────────────────────────────────────────────
   GLOBAL KEYFRAMES (injected once)
───────────────────────────────────────────── */
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { font-family: ${FONT_BODY}; background: ${WHITE}; color: ${TEXT}; overflow-x: hidden; }

  @keyframes fadeUp  { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }
  @keyframes shimmer { 0%,100% { opacity:.5; } 50% { opacity:1; } }

  .about-card { transition: transform .28s ease, box-shadow .28s ease !important; }
  .about-card:hover { transform: translateY(-7px) !important; box-shadow: 0 22px 52px rgba(21,101,192,.18) !important; }
  .dir-ring   { transition: box-shadow .3s ease !important; }
  .dir-ring:hover { box-shadow: 0 0 0 14px rgba(33,150,243,.22), 0 24px 56px rgba(10,36,99,.25) !important; }
  .cta-btn    { transition: transform .22s ease, box-shadow .22s ease !important; }
  .cta-btn:hover { transform: scale(1.06) !important; box-shadow: 0 14px 38px rgba(240,180,41,.48) !important; }
`;

/* ─────────────────────────────────────────────
   HOOK — scroll reveal
───────────────────────────────────────────── */
function useReveal(): [RefObject<HTMLElement | null>, boolean] {
  const ref = useRef<HTMLElement | null>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVis(true);
      },
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, vis];
}

/* ─────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────── */
function reveal(vis: boolean, delay = 0): CSSProperties {
  return {
    opacity: vis ? 1 : 0,
    transform: vis ? "translateY(0)" : "translateY(28px)",
    transition: `opacity .7s ease ${delay}ms, transform .7s ease ${delay}ms`,
  };
}

function Divider() {
  return (
    <div
      style={{
        width: 64,
        height: 4,
        margin: "0 auto 20px",
        borderRadius: 2,
        background: `linear-gradient(90deg, ${SKY}, ${GOLD})`,
      }}
    />
  );
}

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2
      style={{
        fontFamily: FONT_DISPLAY,
        fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
        fontWeight: 700,
        color: NAVY,
      }}
    >
      {children}
    </h2>
  );
}

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function AboutPage() {
  const [dirRef, dirVis] = useReveal();
  const [vmRef, vmVis] = useReveal();
  const [valRef, valVis] = useReveal();
  const [ctaRef, ctaVis] = useReveal();

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />

      <main style={{ fontFamily: FONT_BODY }}>
        {/* ══════════════════════════════════════
            1. HERO
        ══════════════════════════════════════ */}
        <section
          style={{
            background: `linear-gradient(135deg, ${NAVY} 0%, ${BLUE} 55%, ${SKY} 100%)`,
            padding: "110px 24px 92px",
            position: "relative",
            overflow: "hidden",
            textAlign: "center",
          }}
        >
          {/* decorative rings */}
          {[
            { size: 380, top: -100, right: -80, delay: "0s" },
            { size: 240, bottom: -60, left: 40, delay: "1.4s" },
            { size: 170, top: 50, left: "28%", delay: "2.8s" },
          ].map((c, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                width: c.size,
                height: c.size,
                borderRadius: "50%",
                border: "2px solid rgba(255,255,255,.22)",
                top: c.top,
                bottom: c.bottom,
                right: c.right,
                left: c.left,
                pointerEvents: "none",
                animation: `shimmer 4s ease-in-out ${c.delay} infinite`,
              }}
            />
          ))}

          <div
            style={{
              maxWidth: 820,
              margin: "0 auto",
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* Badge */}
            <div
              style={{
                display: "inline-block",
                background: "rgba(255,255,255,.12)",
                border: "1px solid rgba(255,255,255,.28)",
                borderRadius: 99,
                padding: "6px 22px",
                color: WHITE,
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: 2.5,
                textTransform: "uppercase",
                marginBottom: 28,
                animation: "fadeUp .8s ease both",
              }}
            >
              Who We Are
            </div>

            <h1
              style={{
                fontFamily: FONT_DISPLAY,
                fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
                fontWeight: 700,
                color: WHITE,
                lineHeight: 1.15,
                marginBottom: 26,
                animation: "fadeUp .8s ease .15s both",
              }}
            >
              Shaping Futures,
              <br />
              <em style={{ fontStyle: "italic", color: "#90caf9" }}>
                One Student at a Time
              </em>
            </h1>

            <p
              style={{
                color: "rgba(255,255,255,.82)",
                fontSize: "clamp(1rem, 2.2vw, 1.18rem)",
                lineHeight: 1.88,
                maxWidth: 620,
                margin: "0 auto",
                animation: "fadeUp .8s ease .3s both",
              }}
            >
              For over a decade, we have been the trusted partner of thousands
              of students on their journey to academic excellence and career
              success.
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════
            2. STATS BAR
        ══════════════════════════════════════ */}
        <div
          style={{
            background: `linear-gradient(90deg, #0d47a1, #1976d2)`,
            padding: "42px 24px",
          }}
        >
          <div
            style={{
              maxWidth: 960,
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
              gap: 24,
              textAlign: "center",
            }}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontFamily: FONT_DISPLAY,
                    fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
                    fontWeight: 700,
                    color: WHITE,
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </div>
                <div
                  style={{
                    color: "rgba(255,255,255,.72)",
                    fontSize: 13,
                    fontWeight: 500,
                    letterSpacing: 0.5,
                    marginTop: 6,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════
            3. DIRECTOR
        ══════════════════════════════════════ */}
        <section ref={dirRef} style={{ background: OFF, padding: "88px 24px" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            {/* section heading */}
            <div
              style={{
                textAlign: "center",
                marginBottom: 56,
                ...reveal(dirVis),
              }}
            >
              <Divider />
              <SectionHeading>Message from the Director</SectionHeading>
            </div>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 52,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* Photo */}
              <div
                style={{
                  flex: "0 0 auto",
                  textAlign: "center",
                  ...reveal(dirVis, 150),
                }}
              >
                <div style={{ position: "relative", display: "inline-block" }}>
                  {/*
                    To use a real director photo, replace the placeholder below with:
                    <Image
                      src="/images/director.jpg"
                      alt="Dr. Rajesh Kumar - Director"
                      width={220} height={220}
                      className="dir-ring"
                      style={{ objectFit: "cover", borderRadius: "50%",
                               border: `5px solid ${SKY}`,
                               boxShadow: `0 0 0 9px rgba(33,150,243,.14), 0 16px 48px rgba(10,36,99,.2)` }}
                    />
                  */}
                  <div
                    className="dir-ring"
                    style={{
                      width: 220,
                      height: 220,
                      borderRadius: "50%",
                      border: `5px solid ${SKY}`,
                      boxShadow: `0 0 0 9px rgba(33,150,243,.14), 0 16px 48px rgba(10,36,99,.2)`,
                      background: `linear-gradient(135deg, #bbdefb 0%, ${BLUE} 100%)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 90,
                      cursor: "default",
                    }}
                  >
                    {"\u{1F468}\u200D\u{1F4BC}"}
                  </div>

                  {/* Gold badge */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 10,
                      right: 4,
                      background: GOLD,
                      borderRadius: 99,
                      padding: "4px 13px",
                      fontSize: 11,
                      fontWeight: 700,
                      color: "#3d2800",
                      boxShadow: "0 2px 10px rgba(0,0,0,.22)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    &#9733; Director
                  </div>
                </div>

                {/* Name block */}
                <div style={{ marginTop: 18 }}>
                  <div
                    style={{
                      fontFamily: FONT_DISPLAY,
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: NAVY,
                    }}
                  >
                    Dr. Rajesh Kumar
                  </div>
                  <div style={{ fontSize: 13, color: MUTED, marginTop: 4 }}>
                    M.Sc. (Gold Medallist) &middot; Ph.D. (IIT Delhi)
                  </div>
                </div>
              </div>

              {/* Message */}
              <div style={{ flex: "1 1 320px", ...reveal(dirVis, 300) }}>
                <div
                  style={{
                    borderLeft: `4px solid ${SKY}`,
                    paddingLeft: 24,
                    marginBottom: 28,
                  }}
                >
                  <p
                    style={{
                      fontFamily: FONT_DISPLAY,
                      fontSize: "clamp(1.08rem, 2.4vw, 1.3rem)",
                      fontStyle: "italic",
                      color: NAVY,
                      lineHeight: 1.78,
                    }}
                  >
                    &ldquo;Education is not merely about passing exams &mdash; it is
                    about kindling the curiosity that lasts a lifetime.&rdquo;
                  </p>
                </div>

                <p
                  style={{
                    color: MUTED,
                    lineHeight: 1.9,
                    fontSize: ".97rem",
                    marginBottom: 16,
                  }}
                >
                  With over 20 years in education, I founded this coaching
                  center with a single conviction: every student deserves
                  world-class mentorship irrespective of their background. We
                  have built an environment where curiosity is celebrated, hard
                  work is rewarded, and potential is never wasted.
                </p>
                <p
                  style={{ color: MUTED, lineHeight: 1.9, fontSize: ".97rem" }}
                >
                  Our faculty brings the same passion to every classroom
                  interaction &mdash; because we believe that inspired teachers create
                  inspired students.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            4. VISION & MISSION
        ══════════════════════════════════════ */}
        <section
          ref={vmRef}
          style={{ background: WHITE, padding: "88px 24px" }}
        >
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <div
              style={{
                textAlign: "center",
                marginBottom: 56,
                ...reveal(vmVis),
              }}
            >
              <Divider />
              <SectionHeading>Vision &amp; Mission</SectionHeading>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: 32,
              }}
            >
              {/* Vision */}
              <div
                className="about-card"
                style={{
                  background: `linear-gradient(145deg, ${NAVY} 0%, ${BLUE} 100%)`,
                  borderRadius: 20,
                  padding: "44px 36px",
                  color: WHITE,
                  position: "relative",
                  overflow: "hidden",
                  ...reveal(vmVis, 150),
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: -44,
                    right: -44,
                    width: 150,
                    height: 150,
                    borderRadius: "50%",
                    background: "rgba(255,255,255,.06)",
                    pointerEvents: "none",
                  }}
                />
                <div style={{ fontSize: 46, marginBottom: 20 }}>{"\u{1F52D}"}</div>
                <h3
                  style={{
                    fontFamily: FONT_DISPLAY,
                    fontSize: "1.65rem",
                    fontWeight: 700,
                    marginBottom: 16,
                  }}
                >
                  Our Vision
                </h3>
                <p style={{ color: "rgba(255,255,255,.82)", lineHeight: 1.88 }}>
                  To be the most trusted and transformative coaching institution
                  in the region &mdash; nurturing not just academic excellence but
                  holistic growth, producing leaders who contribute meaningfully
                  to society.
                </p>
              </div>

              {/* Mission */}
              <div
                className="about-card"
                style={{
                  background: ICE,
                  border: `2px solid ${LIGHT_BORDER}`,
                  borderRadius: 20,
                  padding: "44px 36px",
                  position: "relative",
                  overflow: "hidden",
                  ...reveal(vmVis, 300),
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: -44,
                    right: -44,
                    width: 150,
                    height: 150,
                    borderRadius: "50%",
                    background: "rgba(21,101,192,.06)",
                    pointerEvents: "none",
                  }}
                />
                <div style={{ fontSize: 46, marginBottom: 20 }}>{"\u{1F680}"}</div>
                <h3
                  style={{
                    fontFamily: FONT_DISPLAY,
                    fontSize: "1.65rem",
                    fontWeight: 700,
                    color: NAVY,
                    marginBottom: 20,
                  }}
                >
                  Our Mission
                </h3>
                <ul style={{ listStyle: "none" }}>
                  {missionPoints.map((pt) => (
                    <li
                      key={pt}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 10,
                        marginBottom: 12,
                      }}
                    >
                      <span
                        style={{
                          color: SKY,
                          fontWeight: 700,
                          fontSize: 16,
                          marginTop: 2,
                          flexShrink: 0,
                        }}
                      >
                        &#10003;
                      </span>
                      <span
                        style={{
                          color: TEXT,
                          fontSize: ".95rem",
                          lineHeight: 1.75,
                        }}
                      >
                        {pt}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            5. CORE VALUES
        ══════════════════════════════════════ */}
        <section ref={valRef} style={{ background: OFF, padding: "88px 24px" }}>
          <div style={{ maxWidth: 960, margin: "0 auto" }}>
            <div
              style={{
                textAlign: "center",
                marginBottom: 56,
                ...reveal(valVis),
              }}
            >
              <Divider />
              <SectionHeading>Our Core Values</SectionHeading>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: 24,
              }}
            >
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className="about-card"
                  style={{
                    background: WHITE,
                    borderRadius: 18,
                    padding: "36px 24px",
                    textAlign: "center",
                    boxShadow: "0 4px 24px rgba(21,101,192,.08)",
                    ...reveal(valVis, i * 110),
                  }}
                >
                  <div style={{ fontSize: 42, marginBottom: 16 }}>{v.icon}</div>
                  <h4
                    style={{
                      fontFamily: FONT_DISPLAY,
                      fontSize: "1.08rem",
                      fontWeight: 700,
                      color: NAVY,
                      marginBottom: 10,
                    }}
                  >
                    {v.title}
                  </h4>
                  <p
                    style={{
                      color: MUTED,
                      fontSize: ".9rem",
                      lineHeight: 1.78,
                    }}
                  >
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════
            6. CTA
        ══════════════════════════════════════ */}
        <section
          ref={ctaRef}
          style={{
            background: `linear-gradient(135deg, ${NAVY}, ${BLUE})`,
            padding: "80px 24px",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 640, margin: "0 auto", ...reveal(ctaVis) }}>
            <h2
              style={{
                fontFamily: FONT_DISPLAY,
                fontSize: "clamp(1.65rem, 4vw, 2.4rem)",
                fontWeight: 700,
                color: WHITE,
                marginBottom: 16,
              }}
            >
              Ready to Begin Your Journey?
            </h2>
            <p
              style={{
                color: "rgba(255,255,255,.78)",
                marginBottom: 40,
                fontSize: "1rem",
                lineHeight: 1.78,
              }}
            >
              Join thousands of students who have transformed their future with
              us.
            </p>
            <a
              href="/contact"
              className="cta-btn"
              style={{
                display: "inline-block",
                background: GOLD,
                color: "#3d2800",
                fontWeight: 700,
                fontSize: "1rem",
                padding: "15px 44px",
                borderRadius: 99,
                textDecoration: "none",
                boxShadow: "0 8px 28px rgba(240,180,41,.38)",
                letterSpacing: 0.3,
              }}
            >
              Enquire Now &rarr;
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
