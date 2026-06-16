"use client";

const STATS = [
  { num: "500+", label: "Students Enrolled" },
  { num: "12", label: "Years of Excellence" },
  { num: "8+", label: "Subject Experts" },
  { num: "95%", label: "Pass Rate" },
];

const FEATURES = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
        />
      </svg>
    ),
    title: "Academic Classes",
    desc: "Structured coaching for all core subjects from class 5 to 12, with weekly tests and revision sessions.",
    color: "bg-blue-50 text-blue-700",
    border: "border-blue-100",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3"
        />
      </svg>
    ),
    title: "Computer Classes",
    desc: "Hands-on training in MS Office, typing, internet basics, and computer fundamentals in a modern lab.",
    color: "bg-emerald-50 text-emerald-700",
    border: "border-emerald-100",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 6.75h7.5M8.25 9.75h7.5m-7.5 3h7.5m3-12H6.75A2.25 2.25 0 004.5 6v12a2.25 2.25 0 002.25 2.25h10.5A2.25 2.25 0 0019.5 18V6a2.25 2.25 0 00-2.25-2.25H6.75z"
        />
      </svg>
    ),
    title: "Library Access",
    desc: "A well-stocked library with textbooks, reference books, and study materials available for all students.",
    color: "bg-violet-50 text-violet-700",
    border: "border-violet-100",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.8}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
    title: "Specialist Teachers",
    desc: "Dedicated subject experts with years of experience, focused on individual student growth.",
    color: "bg-amber-50 text-amber-700",
    border: "border-amber-100",
  },
];

const GRADES = [
  { grade: "5th", type: "Foundation" },
  { grade: "6th", type: "Foundation" },
  { grade: "7th", type: "Foundation" },
  { grade: "8th", type: "Middle" },
  { grade: "9th", type: "Secondary" },
  { grade: "10th", type: "Board Prep" },
  { grade: "11th", type: "Senior" },
  { grade: "12th", type: "Board Prep" },
];

const TEACHERS = [
  {
    id: 1,
    initials: "PK",
    name: "Pawan Kumar",
    exp: "15 yrs experience",
    subject: "Mathematics",
    bg: "bg-blue-100 text-blue-800",
    tag: "bg-blue-50 text-blue-700",
  },
  {
    id: 2,
    initials: "AS",
    name: "Anjali Sharma",
    exp: "10 yrs experience",
    subject: "Science",
    bg: "bg-emerald-100 text-emerald-800",
    tag: "bg-emerald-50 text-emerald-700",
  },
  {
    id: 3,
    initials: "PK",
    name: "Pawan Kumar",
    exp: "12 yrs experience",
    subject: "English",
    bg: "bg-violet-100 text-violet-800",
    tag: "bg-violet-50 text-violet-700",
  },
  {
    id: 4,
    initials: "PK",
    name: "Pawan Kumar",
    exp: "8 yrs experience",
    subject: "Computer",
    bg: "bg-amber-100 text-amber-800",
    tag: "bg-amber-50 text-amber-700",
  },
  {
    id: 5,
    initials: "NK",
    name: "Neha Khanna",
    exp: "11 yrs experience",
    subject: "Hindi",
    bg: "bg-rose-100 text-rose-800",
    tag: "bg-rose-50 text-rose-700",
  },
  {
    id: 6,
    initials: "RG",
    name: "Rajan Gupta",
    exp: "9 yrs experience",
    subject: "Social Studies",
    bg: "bg-teal-100 text-teal-800",
    tag: "bg-teal-50 text-teal-700",
  },
];

const TESTIMONIALS = [
  {
    name: "Ananya Singh",
    grade: "Class 10",
    text: "The teachers here are amazing. I improved my Maths score from 60% to 92% in just one year!",
    avatar: "AS",
  },
  {
    name: "Rohit Sharma",
    grade: "Class 12",
    text: "The library and computer lab are world-class. Pragati Coaching Center gave me the edge I needed for board exams.",
    avatar: "RS",
  },
  {
    name: "Priti Yadav",
    grade: "Class 8",
    text: "Small batches mean the teachers actually know you. My confidence in Science has grown so much.",
    avatar: "PY",
  },
];

export default function CoachingCenter() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* ── HERO ── */}
      <section
        id="hero"
        className="bg-linear-to-br from-blue-700 via-blue-800 to-blue-900 text-white"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 bg-blue-600/40 text-blue-100 text-xs px-3 py-1.5 rounded-full mb-5 border border-blue-500/30">
                <svg
                  className="w-3.5 h-3.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Trusted for 12 Years · Est. 2013
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-5">
                Build a Strong
                <br className="hidden sm:block" /> Foundation for a<br />
                <span className="text-blue-300">Bright Future</span>
              </h1>
              <p className="text-blue-100 text-sm sm:text-base leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                Expert coaching for classes 5th to 12th, computer education, and
                a well-stocked library — all under one roof. Specialist teachers
                for every subject.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <a
                  href="#courses"
                  className="bg-white text-blue-700 font-semibold text-sm px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors text-center"
                >
                  Explore Courses
                </a>
                <a
                  href="#contact"
                  className="border border-blue-400 text-white text-sm px-6 py-3 rounded-xl hover:bg-blue-700/50 transition-colors flex items-center justify-center gap-2"
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
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z"
                    />
                  </svg>
                  Contact Us
                </a>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-xs lg:max-w-none lg:w-64">
              {STATS.map((s) => (
                <div
                  key={s.label}
                  className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-4 text-center"
                >
                  <p className="text-2xl font-bold text-white">{s.num}</p>
                  <p className="text-xs text-blue-200 mt-1 leading-tight">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="courses" className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-700 text-xs font-semibold tracking-widest uppercase mb-2">
              What We Offer
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Everything a Student Needs
            </h2>
            <p className="text-gray-500 text-sm mt-3 max-w-md mx-auto">
              From academics to technology — all under one roof
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className={`bg-white rounded-2xl border ${f.border} p-6 hover:shadow-md transition-shadow`}
              >
                <div
                  className={`w-11 h-11 rounded-xl ${f.color} flex items-center justify-center mb-4`}
                >
                  {f.icon}
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-2">
                  {f.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLASSES ── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-700 text-xs font-semibold tracking-widest uppercase mb-2">
              Grades Covered
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Classes 5th to 12th
            </h2>
            <p className="text-gray-500 text-sm mt-3">
              From middle school to board-level — we&apos;ve got every grade
              covered
            </p>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {GRADES.map((g) => (
              <div
                key={g.grade}
                className="border border-gray-100 rounded-2xl p-4 text-center hover:border-blue-200 hover:bg-blue-50 transition-colors cursor-pointer group"
              >
                <p className="text-xl font-bold text-blue-700 group-hover:text-blue-800">
                  {g.grade}
                </p>
                <p className="text-xs text-gray-400 mt-1 leading-tight">
                  {g.type}
                </p>
              </div>
            ))}
          </div>

          {/* Computer classes callout */}
          <div className="mt-8 bg-linear-to-r from-emerald-50 to-teal-50 border border-emerald-100 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0 text-emerald-700">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3"
                />
              </svg>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-sm font-semibold text-gray-900">
                Computer Classes — All Ages Welcome
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Separate dedicated computer classes available for students of
                all grades. Modern lab, certified instructor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── TEACHERS ── */}
      <section id="teachers" className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-700 text-xs font-semibold tracking-widest uppercase mb-2">
              Our Faculty
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Specialist Teachers
            </h2>
            <p className="text-gray-500 text-sm mt-3">
              Experienced educators dedicated to one subject each
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {TEACHERS.map((t) => (
              <div
                key={t.id}
                className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col items-center text-center hover:shadow-md transition-shadow"
              >
                <div
                  className={`w-12 h-12 rounded-full ${t.bg} flex items-center justify-center text-sm font-semibold mb-3`}
                >
                  {t.initials}
                </div>
                <p className="text-xs font-semibold text-gray-900">{t.name}</p>
                <p className="text-xs text-gray-400 mt-0.5">{t.exp}</p>
                <span
                  className={`text-xs px-2 py-1 rounded-full mt-2 ${t.tag}`}
                >
                  {t.subject}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-blue-700 text-xs font-semibold tracking-widest uppercase mb-2">
              Student Stories
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              What Our Students Say
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-3.5 h-3.5 text-amber-400 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {t.text}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-semibold">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-900">
                      {t.name}
                    </p>
                    <p className="text-xs text-gray-400">{t.grade}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        id="enroll"
        className="py-16 lg:py-20 bg-linear-to-br from-blue-700 to-blue-900"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to Join Pragati Coaching Center?
          </h2>
          <p className="text-blue-200 text-sm mb-8 max-w-md mx-auto">
            Admissions open for the new academic session. Limited seats
            available — secure your spot today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-700 font-semibold text-sm px-8 py-3.5 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
