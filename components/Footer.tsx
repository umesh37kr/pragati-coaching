import React from "react";

const Footer = () => {
  return (
    <>
      {/* ── FOOTER ── */}
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-blue-700 flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth={2}
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                    />
                  </svg>
                </div>
                <p className="text-white text-sm font-semibold">
                  Pragati Coaching Center
                </p>
              </div>
              <p className="text-xs leading-relaxed">
                Providing quality education and coaching since 2013. Helping
                students achieve their dreams for 12 years.
              </p>
            </div>
            <div>
              <p className="text-white text-xs font-semibold mb-3 uppercase tracking-wider">
                Quick Links
              </p>
              {["Courses", "Teachers", "Library", "About Us", "Contact"].map(
                (l) => (
                  <a
                    key={l}
                    href="#"
                    className="block text-xs text-gray-400 hover:text-white py-1 transition-colors"
                  >
                    {l}
                  </a>
                ),
              )}
            </div>
            <div>
              <p className="text-white text-xs font-semibold mb-3 uppercase tracking-wider">
                Contact
              </p>
              <p className="text-xs leading-loose">
                📍 Near RKMG +2 High School Sarja Polpol
                <br />
                📞 +91 82104 61407
                <br />
                ✉️ info@brightfutureacademy.in
                <br />
                🕐 Mon–Sat: 6am – 7pm
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs">
              © 2025 Pragati Coaching Center. All rights reserved.
            </p>
            <div className="flex gap-4 text-xs">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
