"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useState } from "react";

export default function LibraryComingSoon() {
  const [mounted, setMounted] = useState(false);

  return (
    <>
      <Header />
      <main className="page">
        {/* Ambient background orbs */}
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />

        {/* Floating book particles */}
        {mounted &&
          [...Array(6)].map((_, i) => (
            <div key={i} className={`particle particle-${i + 1}`}>
              📖
            </div>
          ))}

        <div className="container">
          {/* Header badge */}
          <div
            className={`badge ${mounted ? "fade-in" : ""}`}
            style={{ animationDelay: "0.1s" }}
          >
            <span className="badge-dot text-gray-800" />
            Opening Soon
          </div>

          {/* Hero */}
          <div
            className={`hero ${mounted ? "fade-up" : ""}`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="book-icon">📚</div>
            <h1 className="text-red-800">
              Your Library
              <br />
              <span className="highlight">Awaits You</span>
            </h1>
            <p className="subtitle">
              We&apos;re putting the final touches on an extraordinary learning
              space designed for curious minds. A world of knowledge is almost
              ready.
            </p>
          </div>

          {/* Footer */}
          <footer
            className={`footer ${mounted ? "fade-in" : ""}`}
            style={{ animationDelay: "1.1s" }}
          >
            <p>
              🏫 &nbsp;Pragati Coaching Library &nbsp;·&nbsp; For Students, By
              Students
            </p>
          </footer>
        </div>

        <style jsx>{`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          .page {
            min-height: 100vh;
            background: #ffffff;
            color: #e8ecf5;
            font-family: "Georgia", "Times New Roman", serif;
            overflow: hidden;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          /* Ambient orbs */
          .orb {
            position: fixed;
            border-radius: 50%;
            filter: blur(100px);
            opacity: 0.18;
            pointer-events: none;
            animation: drift 12s ease-in-out infinite alternate;
          }
          .orb-1 {
            width: 600px;
            height: 600px;
            background: #3b5fe2;
            top: -200px;
            left: -150px;
            animation-duration: 14s;
          }
          .orb-2 {
            width: 500px;
            height: 500px;
            background: #8b3fc8;
            bottom: -200px;
            right: -100px;
            animation-duration: 11s;
            animation-delay: -4s;
          }
          .orb-3 {
            width: 350px;
            height: 350px;
            background: #1a8fa8;
            top: 40%;
            left: 60%;
            animation-duration: 16s;
            animation-delay: -7s;
          }

          @keyframes drift {
            from {
              transform: translate(0, 0) scale(1);
            }
            to {
              transform: translate(40px, 30px) scale(1.07);
            }
          }

          /* Particles */
          .particle {
            position: fixed;
            font-size: 1.4rem;
            opacity: 0.12;
            pointer-events: none;
            animation: float linear infinite;
          }
          .particle-1 {
            left: 5%;
            top: 20%;
            animation-duration: 20s;
            animation-delay: 0s;
          }
          .particle-2 {
            left: 90%;
            top: 15%;
            animation-duration: 17s;
            animation-delay: -5s;
          }
          .particle-3 {
            left: 15%;
            top: 75%;
            animation-duration: 23s;
            animation-delay: -10s;
          }
          .particle-4 {
            left: 80%;
            top: 70%;
            animation-duration: 19s;
            animation-delay: -3s;
          }
          .particle-5 {
            left: 50%;
            top: 5%;
            animation-duration: 25s;
            animation-delay: -8s;
          }
          .particle-6 {
            left: 35%;
            top: 90%;
            animation-duration: 22s;
            animation-delay: -15s;
          }

          @keyframes float {
            0% {
              transform: translateY(0px) rotate(0deg);
              opacity: 0.12;
            }
            50% {
              opacity: 0.2;
            }
            100% {
              transform: translateY(-80px) rotate(20deg);
              opacity: 0.05;
            }
          }

          .container {
            position: relative;
            z-index: 10;
            max-width: 860px;
            width: 100%;
            padding: 2.5rem 1.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2.5rem;
            text-align: center;
          }

          /* Badge */
          .badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: rgba(59, 95, 226, 0.18);
            border: 1px solid rgba(59, 95, 226, 0.45);
            color: #7fa3ff;
            padding: 6px 18px;
            border-radius: 100px;
            font-family: "Courier New", monospace;
            font-size: 0.78rem;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            backdrop-filter: blur(8px);
          }
          .badge-dot {
            width: 7px;
            height: 7px;
            color: #46474a;
            background: #4ade80;
            border-radius: 50%;
            box-shadow: 0 0 8px #4ade80;
            animation: pulse 2s ease-in-out infinite;
          }
          @keyframes pulse {
            0%,
            100% {
              opacity: 1;
              transform: scale(1);
            }
            50% {
              opacity: 0.5;
              transform: scale(0.8);
            }
          }

          /* Hero */
          .hero {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
          }
          .book-icon {
            font-size: 4rem;
            animation: sway 4s ease-in-out infinite;
            filter: drop-shadow(0 0 20px rgba(59, 95, 226, 0.5));
          }
          @keyframes sway {
            0%,
            100% {
              transform: rotate(-5deg);
            }
            50% {
              transform: rotate(5deg);
            }
          }

          h1 {
            font-size: clamp(2.4rem, 6vw, 4rem);
            font-weight: 400;
            line-height: 1.15;
            letter-spacing: -0.02em;
            color: #7da8f0;
          }
          .highlight {
            background: linear-gradient(
              135deg,
              #7fa3ff 0%,
              #c084fc 50%,
              #60d8f3 100%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            font-style: italic;
          }
          .subtitle {
            font-size: 1.05rem;
            color: #46474a;
            line-height: 1.8;
            max-width: 540px;
            font-family: "Helvetica Neue", sans-serif;
            font-weight: 300;
          }
          /* Footer */
          .footer {
            font-size: 0.72rem;
            color: #2e3a60;
            font-family: "Courier New", monospace;
            letter-spacing: 0.05em;
          }

          /* Animations */
          .fade-in {
            animation: fadeIn 0.8s ease both;
          }
          .fade-up {
            animation: fadeUp 0.7s ease both;
          }
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(24px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </main>
      <Footer />
    </>
  );
}
