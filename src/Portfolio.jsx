import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profileImage from "./Images/Om.jpeg";
import fullimage from "./Images/Om_Image.jpeg";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
  FaArrowUp,
  FaDownload,
  FaExternalLinkAlt,
  FaCheckCircle,
} from "react-icons/fa";

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);

  const words = [
    "Full Stack Developer",
    "MERN Stack Developer",
    "React Developer",
    "Java Developer",
    "Problem Solver",
  ];

  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentWord.substring(0, displayText.length + 1));

        if (displayText === currentWord) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setDisplayText(currentWord.substring(0, displayText.length - 1));

        if (displayText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 60 : 120);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, wordIndex]);

  useEffect(() => {
    const handleScroll = () => {
      const total =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setScrollProgress((window.scrollY / total) * 100);

      setShowTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`transition-all duration-500 ${
        darkMode
          ? "bg-[#0d141d] text-white"
          : "bg-white text-gray-900"
      }`}
    >
      {/* Scroll Progress */}

      <div
        className="fixed top-0 left-0 h-1 bg-blue-500 z-50"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* ================= NAVBAR ================= */}
      <header 
        className={`fixed top-0 left-0 w-full backdrop-blur-lg border-b z-40 ${
          darkMode
            ? "bg-[#0d141d]/90 border-gray-800"
            : "bg-white/90 border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

          <h1 className="text-2xl font-bold text-blue-500">
            Om Mahesh Date
          </h1>

          <nav className="hidden lg:flex gap-8 font-medium">
            
            <a href="#home" className="hover:text-blue-500">
              Home
            </a>

            <a href="#about" className="hover:text-blue-500">
              About
            </a>

            <a href="#skills" className="hover:text-blue-500">
              Skills
            </a>

            <a href="#projects" className="hover:text-blue-500">
              Projects
            </a>

            <a href="#experience" className="hover:text-blue-500">
              Experience
            </a>

            <a href="#contact" className="hover:text-blue-500">
              Contact
            </a>

          </nav>

          <div className="flex items-center gap-4">

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-xl p-2 rounded-full hover:bg-blue-500/20 transition"
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>

            <button
              className="lg:hidden text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

          </div>

        </div>

        {menuOpen && (

          <div
            className={`lg:hidden ${
              darkMode ? "bg-[#101820]" : "bg-gray-100"
            }`}
          >
            <a href="#home" className="block px-6 py-4">
              Home
            </a>

            <a href="#about" className="block px-6 py-4  ">
              About
            </a>

            <a href="#skills" className="block px-6 py-4">
              Skills
            </a>

            <a href="#projects" className="block px-6 py-4 ">
              Projects
            </a>

            <a href="#experience" className="block px-6 py-4">
              Experience
            </a>

            <a href="#contact" className="block px-6 py-4">
              Contact
            </a>

          </div>

        )}

      </header>

      {/* ================= HERO ================= */}
      <section
        id="home"
        className="min-h-screen flex items-center pt-28 px-6"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <p className="text-blue-500 text-lg mb-4">
              Hello, I'm
            </p>

            <h1 className="text-6xl font-extrabold mb-5">
              Om Mahesh Date
            </h1>

            <h2 className="text-3xl font-semibold mb-6">
              Electronics & Telecommunication Engineer
            </h2>

            <h3 className="text-2xl text-blue-500 h-10 font-semibold mb-8">
              {displayText}
              <span>|</span>
            </h3>

            <p
              className={`leading-8 text-lg max-w-xl ${
                darkMode
                  ? "text-gray-400"
                  : "text-gray-600"
              }`}
            >
              Passionate Full Stack Web Developer specializing in
              MERN Stack development. I enjoy creating responsive,
              modern and scalable web applications with clean UI
              and excellent user experience.
            </p>

            <div className="flex gap-5 mt-10">

              <button className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-xl font-semibold transition">
                <a href="#projects" className="text-white">
                  View Projects
                </a>
              </button>

              <button className="border border-blue-500 px-8 py-4 rounded-xl flex items-center gap-3 hover:bg-blue-500 hover:text-white transition">

                <FaDownload />

                <a href="" target="_blank">
                  Resume
                </a>

              </button>

            </div>

            <div className="flex gap-6 mt-10 text-3xl">

              <a href="https://github.com/Om-Date-2004" target="_blank" rel="noopener noreferrer">
                <FaGithub className="hover:text-blue-500 cursor-pointer" />
              </a>

              <a href="https://www.linkedin.com/in/om-date" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="hover:text-blue-500 cursor-pointer" />
              </a>

              <FaEnvelope className="hover:text-blue-500 cursor-pointer" />

            </div>

          </div>

          <div className="flex justify-center">

            <img src={profileImage} alt="Profile" className="rounded-4xl shadow-2xl w-[400px]" />

          </div>

        </div>

      </section>

      {/* ================= ABOUT ================= */}
      <section
        id="about"
        className={`py-24 transition-all duration-500 ${
          darkMode ? "bg-[#111827]" : "bg-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Left Image */}
            <div className="flex justify-center">

              <div className="relative">
                
                <img
                  src={fullimage}
                  alt="About"
                  className="rounded-3xl shadow-2xl w-[430px] object-cover"
                />

                <div className="absolute -bottom-6 -right-6 bg-blue-500 text-white p-6 rounded-2xl shadow-xl">

                  <h2 className="text-4xl font-bold">
                    6+
                  </h2>

                  <p className="text-sm">
                    Months Experience
                  </p>

                </div>

              </div>

            </div>

            {/* Right Content */}
            <div>
              <p className="uppercase tracking-[5px] text-blue-500 mb-3 font-semibold">
                About Me
              </p>

              <h2 className="text-5xl font-bold mb-8 leading-tight">
                Bridging Hardware
                <br />
                & Software
              </h2>

              <p
                className={`leading-8 text-lg mb-6 ${
                  darkMode
                    ? "text-gray-400"
                    : "text-gray-600"
                }`}
              >

                I'm Om Mahesh Date, a passionate Full Stack Web Developer
                and final year Electronics & Telecommunication Engineering
                student with strong knowledge of the MERN Stack.

              </p>

              <p
                className={`leading-8 text-lg mb-10 ${
                  darkMode
                    ? "text-gray-400"
                    : "text-gray-600"
                }`}
              >
                I enjoy developing modern web applications with clean UI,
                responsive layouts and scalable architecture. My goal is
                to create products that solve real-world problems while
                continuously improving my skills.
              </p>

              {/* Features */}
              <div className="space-y-8">

                <div
                  className={`flex gap-5 p-5 rounded-2xl transition hover:scale-105 ${
                    darkMode
                      ? "bg-[#18212c]"
                      : "bg-white shadow-lg"
                  }`}
                >

                  <div className="bg-blue-500 h-14 w-14 rounded-xl flex items-center justify-center text-2xl">

                    💡

                  </div>

                  <div>

                    <h3 className="text-xl font-bold mb-2">
                      Problem Solver
                    </h3>

                    <p
                      className={`${
                        darkMode
                          ? "text-gray-400"
                          : "text-gray-600"
                      }`}
                    >

                      Strong analytical mindset with the ability to build
                      efficient and scalable solutions.
                    </p>

                  </div>

                </div>

                <div
                  className={`flex gap-5 p-5 rounded-2xl transition hover:scale-105 ${
                    darkMode
                      ? "bg-[#18212c]"
                      : "bg-white shadow-lg"
                  }`}
                >

                  <div className="bg-blue-500 h-14 w-14 rounded-xl flex items-center justify-center text-2xl">
                    🚀
                  </div>

                  <div>

                    <h3 className="text-xl font-bold mb-2">
                      Quick Learner
                    </h3>

                    <p
                      className={`${
                        darkMode
                          ? "text-gray-400"
                          : "text-gray-600"
                      }`}
                    >
                      Passionate about learning modern technologies and
                      adapting quickly to new development environments.
                    </p>

                  </div>

                </div>

                <div
                  className={`flex gap-5 p-5 rounded-2xl transition hover:scale-105 ${
                    darkMode
                      ? "bg-[#18212c]"
                      : "bg-white shadow-lg"
                  }`}
                >

                  <div className="bg-blue-500 h-14 w-14 rounded-xl flex items-center justify-center text-2xl">

                    🎯

                  </div>

                  <div>

                    <h3 className="text-xl font-bold mb-2">
                      Goal Oriented
                    </h3>

                    <p
                      className={`${
                        darkMode
                          ? "text-gray-400"
                          : "text-gray-600"
                      }`}
                    >
                      Focused on building impactful software while
                      continuously improving coding skills and user
                      experience.
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
      
      {/* ================= SKILLS ================= */}
      <section
        id="skills"
        className={`py-24 transition-all duration-500 ${
          darkMode ? "bg-[#0d141d]" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <p className="text-blue-500 uppercase tracking-[5px] font-semibold mb-3">
              My Skills
            </p>

            <h2 className="text-5xl font-bold mb-6">
              Technical Arsenal
            </h2>

            <p
              className={`max-w-2xl mx-auto text-lg ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Technologies and tools that I use to build modern,
              scalable and responsive web applications.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Frontend */}
            <div
              className={`rounded-3xl p-8 transition duration-300 hover:-translate-y-3 hover:shadow-2xl ${
                darkMode
                  ? "bg-[#18212c]"
                  : "bg-white shadow-lg"
              }`}
            >

              <div className="text-5xl mb-6">
                💻
              </div>

              <h3 className="text-2xl font-bold mb-6">
                Frontend
              </h3>

              <div className="space-y-5">

                {[
                  "React.js",
                  "JavaScript",
                  "HTML5",
                  "CSS3",
                  "Tailwind CSS"
                ].map((skill, index) => (

                  <div key={index}>

                    <div className="flex justify-between mb-2">

                      <span>{skill}</span>

                      <span>90%</span>

                    </div>

                    <div className="h-2 bg-gray-300 rounded-full">

                      <div
                        className="h-2 rounded-full bg-blue-500"
                        style={{ width: "90%" }}
                      ></div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

            {/* Backend */}
            <div
              className={`rounded-3xl p-8 transition duration-300 hover:-translate-y-3 hover:shadow-2xl ${
                darkMode
                  ? "bg-[#18212c]"
                  : "bg-white shadow-lg"
              }`}
            >

              <div className="text-5xl mb-6">
                ⚙️
              </div>

              <h3 className="text-2xl font-bold mb-6">
                Backend
              </h3>

              <div className="space-y-5">

                {[
                  "Node.js",
                  "Express.js",
                  "REST API",
                  "JWT",
                  "Authentication"
                ].map((skill, index) => (

                  <div key={index}>

                    <div className="flex justify-between mb-2">

                      <span>{skill}</span>

                      <span>85%</span>

                    </div>

                    <div className="h-2 bg-gray-300 rounded-full">

                      <div
                        className="h-2 rounded-full bg-blue-500"
                        style={{ width: "85%" }}
                      ></div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

            {/* Database */}
            <div
              className={`rounded-3xl p-8 transition duration-300 hover:-translate-y-3 hover:shadow-2xl ${
                darkMode
                  ? "bg-[#18212c]"
                  : "bg-white shadow-lg"
              }`}
            >

              <div className="text-5xl mb-6">
                🗄️
              </div>

              <h3 className="text-2xl font-bold mb-6">
                Database & Tools
              </h3>

              <div className="space-y-5">

                {[
                  "MongoDB",
                  "MySQL",
                  "Git",
                  "GitHub",
                  "Postman"
                ].map((skill, index) => (

                  <div key={index}>

                    <div className="flex justify-between mb-2">

                      <span>{skill}</span>

                      <span>80%</span>

                    </div>

                    <div className="h-2 bg-gray-300 rounded-full">

                      <div
                        className="h-2 rounded-full bg-blue-500"
                        style={{ width: "80%" }}
                      ></div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* Bottom Cards */}
          <div className="grid md:grid-cols-4 gap-6 mt-20">

            <div className="bg-blue-500 rounded-2xl p-6 text-center text-white">

              <h2 className="text-4xl font-bold">
                15+
              </h2>

              <p className="mt-2">
                Technologies
              </p>

            </div>

            <div
              className={`rounded-2xl p-6 text-center ${
                darkMode ? "bg-[#18212c]" : "bg-white shadow-lg"
              }`}
            >

              <h2 className="text-4xl font-bold text-blue-500">
                5+
              </h2>

              <p>
                Projects
              </p>

            </div>

            <div
              className={`rounded-2xl p-6 text-center ${
                darkMode ? "bg-[#18212c]" : "bg-white shadow-lg"
              }`}
            >

              <h2 className="text-4xl font-bold text-blue-500">
                6
              </h2>

              <p>
                Months Internship
              </p>

            </div>

            <div
              className={`rounded-2xl p-6 text-center ${
                darkMode ? "bg-[#18212c]" : "bg-white shadow-lg"
              }`}
            >

              <h2 className="text-4xl font-bold text-blue-500">
                8.44
              </h2>

              <p>
                CGPA
              </p>

            </div>

          </div>

        </div>

      </section>
            
      {/* ================= PROJECTS ================= */}
      <section
        id="projects"
        className={`py-24 transition-all duration-500 ${
          darkMode ? "bg-[#0d141d]" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <p className="text-blue-500 uppercase tracking-[5px] font-semibold mb-3">
              My Portfolio
            </p>

            <h2 className="text-5xl font-bold mb-5">
              Recent Projects
            </h2>

            <p
              className={`max-w-3xl mx-auto text-lg ${
                darkMode
                  ? "text-gray-400"
                  : "text-gray-600"
              }`}
            >
              Here are some of my recent projects developed using modern
              web technologies and best development practices.
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">

            {/* Project 1 */}

            <div
              className={`rounded-3xl overflow-hidden transition duration-500 hover:-translate-y-3 hover:shadow-2xl ${
                darkMode
                  ? "bg-[#18212c]"
                  : "bg-white shadow-lg"
              }`}
            >

              <img
                src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200"
                alt="AutoServe"
                className="h-64 w-full object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl font-bold mb-4">
                  AutoServe
                </h3>

                <p className={darkMode ? "text-gray-400" : "text-gray-600"}>

                  Vehicle Service Center Management System where users can
                  book appointments, track service status, receive invoices
                  and manage vehicle history.

                </p>

                <div className="flex flex-wrap gap-3 my-6">

                  {["React","Node","Express","MongoDB"].map((item,index)=>(
                    <span
                      key={index}
                      className="bg-blue-500/20 text-blue-500 px-4 py-2 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}

                </div>

                <div className="flex gap-5">

                  <button className="bg-blue-500 px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-blue-600 transition">
                    Live Demo
                    <FaExternalLinkAlt />
                  </button>

                  <button
                    className={`px-6 py-3 rounded-xl border flex items-center gap-3 ${
                      darkMode
                        ? "border-gray-600"
                        : "border-gray-300"
                    }`}
                  >

                    <FaGithub />
                    GitHub
                  </button>

                </div>

              </div>

            </div>

            {/* Project 2 */}
            <div
              className={`rounded-3xl overflow-hidden transition duration-500 hover:-translate-y-3 hover:shadow-2xl ${
                darkMode
                  ? "bg-[#18212c]"
                  : "bg-white shadow-lg"
              }`}
            >

              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200"
                alt="Electronics Marketplace"
                className="h-64 w-full object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl font-bold mb-4">
                  Electronics Marketplace
                </h3>

                <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                  Responsive MERN Stack e-commerce platform featuring product
                  categories, search, authentication and shopping cart.
                </p>

                <div className="flex flex-wrap gap-3 my-6">

                  {["HTML","Tailwind"].map((item,index)=>(
                    <span
                      key={index}
                      className="bg-blue-500/20 text-blue-500 px-4 py-2 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}

                </div>

                <div className="flex gap-5">

                  <button className="bg-blue-500 px-6 py-3 rounded-xl flex items-center gap-3">
                  <a href="https://electronicsproductselling.netlify.app/" target="_blank">
                    Live Demo
                  </a>
                    <FaExternalLinkAlt />
                  </button>

                  {/* <button
                    className={`px-6 py-3 rounded-xl border flex items-center gap-3 ${
                      darkMode
                        ? "border-gray-600"
                        : "border-gray-300"
                    }`}
                  >

                    <FaGithub />

                    GitHub

                  </button> */}

                </div>

              </div>

            </div>

            {/* Project 3 */}
            <div
              className={`rounded-3xl overflow-hidden transition duration-500 hover:-translate-y-3 hover:shadow-2xl ${
                darkMode
                  ? "bg-[#18212c]"
                  : "bg-white shadow-lg"
              }`}
            >

              <img
                src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?w=1200"
                alt="Smart Krishi"
                className="h-64 w-full object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl font-bold mb-4">
                  Smart Krishi
                </h3>

                <p className={darkMode ? "text-gray-400" : "text-gray-600"}>

                  Agriculture platform helping farmers with crop management,
                  weather information and fertilizer recommendations.

                </p>

                <div className="flex flex-wrap gap-3 my-6">

                  {["HTML","CSS"].map((item,index)=>(
                    <span
                      key={index}
                      className="bg-blue-500/20 text-blue-500 px-4 py-2 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}

                </div>

                <div className="flex gap-5">

                  <button className="bg-blue-500 px-6 py-3 rounded-xl flex items-center gap-3">

                  <a href="https://tourmaline-pudding-dc7964.netlify.app/" target="_blank">
                    Live Demo
                  </a>
                    <FaExternalLinkAlt />
                  </button>

                  <button
                    className={`px-6 py-3 rounded-xl border flex items-center gap-3 ${
                      darkMode
                        ? "border-gray-600"
                        : "border-gray-300"
                    }`}
                  >

                    <FaGithub />

                    <a href="https://github.com/Om-Date-2004/Smart_Krishi" target="_blank">
                      GitHub
                    </a>

                  </button>

                </div>

              </div>

            </div>

            {/* Project 4 */}
            <div
              className={`rounded-3xl overflow-hidden transition duration-500 hover:-translate-y-3 hover:shadow-2xl ${
                darkMode
                  ? "bg-[#18212c]"
                  : "bg-white shadow-lg"
              }`}
            >

              <img
                src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1200"
                alt="Wellness Hub"
                className="h-64 w-full object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl font-bold mb-4">
                  Wellness Hub
                </h3>

                <p className={darkMode ? "text-gray-400" : "text-gray-600"}>

                  Health and fitness application offering exercise plans,
                  calorie tracking and personalized diet recommendations.

                </p>

                <div className="flex flex-wrap gap-3 my-6">

                  {["React","Node","MongoDB"].map((item,index)=>(
                    <span
                      key={index}
                      className="bg-blue-500/20 text-blue-500 px-4 py-2 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}

                </div>

                <div className="flex gap-5">

                  <button className="bg-blue-500 px-6 py-3 rounded-xl flex items-center gap-3">
                    Live Demo
                    <FaExternalLinkAlt />

                  </button>

                  {/* <button
                    className={`px-6 py-3 rounded-xl border flex items-center gap-3 ${
                      darkMode
                        ? "border-gray-600"
                        : "border-gray-300"
                    }`}
                  >
                    <FaGithub />
                    GitHub
                  </button> */}

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= EXPERIENCE & EDUCATION ================= */}
      <section
        id="experience"
        className={`py-24 transition-all duration-500 ${
          darkMode ? "bg-[#111827]" : "bg-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <p className="text-blue-500 uppercase tracking-[5px] font-semibold mb-3">
              My Journey
            </p>

            <h2 className="text-5xl font-bold">
              Experience & Education
            </h2>

          </div>

          <div className="grid lg:grid-cols-2 gap-16">

            {/* ================= EXPERIENCE ================= */}
            <div>

              <h2 className="text-4xl font-bold mb-10">
                Experience
              </h2>

              <div className="relative border-l-4 border-blue-500 pl-8">

                <div className="absolute -left-[11px] top-2 h-5 w-5 rounded-full bg-blue-500"></div>

                <p className="text-blue-500 font-semibold mb-2">
                  Dec 2025 – May 2026
                </p>

                <h3 className="text-2xl font-bold mb-2">
                  Frontend Developer Intern
                </h3>

                <h4
                  className={`mb-5 ${
                    darkMode
                      ? "text-gray-300"
                      : "text-gray-700"
                  }`}
                >
                  Pegasus Technologies & Software Pvt. Ltd.
                </h4>

                <p
                  className={`leading-8 ${
                    darkMode
                      ? "text-gray-400"
                      : "text-gray-600"
                  }`}
                >
                  Worked on an Electronics Product Marketplace
                  where I developed responsive user interfaces using
                  HTML, JavaScript and Tailwind CSS.

                  Built reusable components, optimized layouts,
                  improved UI responsiveness and collaborated with
                  backend developers for frontend integration.
                </p>

              </div>

              <div className="mt-12 grid grid-cols-2 gap-6">

                <div
                  className={`rounded-2xl p-6 text-center ${
                    darkMode
                      ? "bg-[#18212c]"
                      : "bg-white shadow-lg"
                  }`}
                >

                  <h2 className="text-4xl font-bold text-blue-500">
                    6
                  </h2>

                  <p className="mt-2">
                    Months Internship
                  </p>

                </div>

                <div
                  className={`rounded-2xl p-6 text-center ${
                    darkMode
                      ? "bg-[#18212c]"
                      : "bg-white shadow-lg"
                  }`}
                >

                  <h2 className="text-4xl font-bold text-blue-500">
                    1
                  </h2>

                  <p className="mt-2">
                    Project Built
                  </p>

                </div>

              </div>

            </div>

            {/* ================= EDUCATION ================= */}
            <div>

              <h2 className="text-4xl font-bold mb-10">
                Education
              </h2>

              <div className="relative border-l-4 border-blue-500 pl-8">

                <div className="absolute -left-[11px] top-2 h-5 w-5 rounded-full bg-blue-500"></div>

                <p className="text-blue-500 font-semibold mb-2">
                  2022 – 2026
                </p>

                <h3 className="text-2xl font-bold mb-2">
                  Bachelor of Technology
                </h3>

                <h4
                  className={`mb-5 ${
                    darkMode
                      ? "text-gray-300"
                      : "text-gray-700"
                  }`}
                >
                  Electronics & Telecommunication Engineering
                </h4>

                <p
                  className={`leading-8 ${
                    darkMode
                      ? "text-gray-400"
                      : "text-gray-600"
                  }`}
                >
                  G.H. Raisoni College of Engineering,
                  Nagpur
                  <br />
                  Rashtrasant Tukdoji Maharaj Nagpur University
                </p>

                <div className="mt-8 flex flex-wrap gap-4">

                  <span className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold">
                    CGPA : 8.44
                  </span>

                  <span
                    className={`px-6 py-3 rounded-full font-semibold ${
                      darkMode
                        ? "bg-[#18212c]"
                        : "bg-white shadow"
                    }`}
                  >
                    Final Year
                  </span>

                </div>

              </div>

              <div className="mt-12">

                <h3 className="text-2xl font-bold mb-6">
                  Core Subjects
                </h3>

                <div className="flex flex-wrap gap-4">

                  {[
                    "Data Structures",
                    "Operating System",
                    "Java",
                    "Web Development",
                    "Software Engineering",
                    "OOP"
                  ].map((item, index) => (

                    <span
                      key={index}
                      className={`px-5 py-3 rounded-full ${
                        darkMode
                          ? "bg-[#18212c]"
                          : "bg-white shadow"
                      }`}
                    >
                      {item}
                    </span>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= CERTIFICATIONS ================= */}
      <section
        className={`py-24 transition-all duration-500 ${
          darkMode ? "bg-[#0d141d]" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <p className="text-blue-500 uppercase tracking-[5px] font-semibold mb-3">
              Achievements
            </p>

            <h2 className="text-5xl font-bold">
              Certifications
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                icon: "💻",
                title: "MERN Stack Development",
                desc: "Full Stack Web Development"
              },
              {
                icon: "🅲",
                title: "C Programming",
                desc: "C Language Fundamentals"
              },
              {
                icon: "⚛️",
                title: "React Development",
                desc: "Modern React.js"
              },
              {
                icon: "☕",
                title: "Java Programming",
                desc: "Core Java"
              }
            ].map((item, index) => (

              <div
                key={index}
                className={`rounded-3xl p-8 text-center transition duration-300 hover:-translate-y-3 hover:shadow-2xl ${
                  darkMode
                    ? "bg-[#18212c]"
                    : "bg-white shadow-lg"
                }`}
              >

                <div className="text-6xl mb-6">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold mb-3">
                  {item.title}
                </h3>

                <p
                  className={
                    darkMode
                      ? "text-gray-400"
                      : "text-gray-600"
                  }
                >
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= CONTACT ================= */}
      <section
        id="contact"
        className={`py-24 transition-all duration-500 ${
          darkMode ? "bg-[#111827]" : "bg-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-20">

            {/* Left Side */}

            <div>

              <p className="uppercase tracking-[5px] text-blue-500 font-semibold mb-3">
                Contact
              </p>

              <h2 className="text-5xl font-bold mb-8">
                Let's Build Something Amazing
              </h2>

              <p
                className={`leading-8 text-lg ${
                  darkMode
                    ? "text-gray-400"
                    : "text-gray-600"
                }`}
              >
                I'm actively looking for Full Stack Developer opportunities.
                If you have a project, internship or job opportunity,
                feel free to connect with me.
              </p>

              <div className="mt-12 space-y-8">

                <div className="flex items-center gap-5">

                  <div className="bg-blue-500 h-14 w-14 rounded-xl flex items-center justify-center text-2xl">
                    📧
                  </div>

                  <div>

                    <h3 className="font-semibold">
                      Email
                    </h3>

                    <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                      omdate47@gmail.com
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-5">

                  <div className="bg-blue-500 h-14 w-14 rounded-xl flex items-center justify-center text-2xl">
                    📍
                  </div>

                  <div>

                    <h3 className="font-semibold">
                      Location
                    </h3>

                    <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                      Nagpur, Maharashtra, India
                    </p>

                  </div>

                </div>

              </div>

              <div className="flex gap-5 mt-12 text-3xl">

                <a href="https://github.com/Om-Date-2004" target="_blank">
                  <FaGithub className="hover:text-blue-500 transition" />
                </a>

                <a href="https://www.linkedin.com/in/om-date" target="_blank" >
                  <FaLinkedin className="hover:text-blue-500 transition" />
                </a>

                <a href="#">
                  <FaEnvelope className="hover:text-blue-500 transition" />
                </a>

              </div>

            </div>

            {/* Contact Form */}
            <div
              className={`rounded-3xl p-10 ${
                darkMode
                  ? "bg-[#18212c]"
                  : "bg-white shadow-xl"
              }`}
            >

              <form className="space-y-6">

                <input
                  type="text"
                  placeholder="Your Name"
                  className={`w-full p-4 rounded-xl outline-none ${
                    darkMode
                      ? "bg-[#0d141d]"
                      : "bg-gray-100"
                  }`}
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className={`w-full p-4 rounded-xl outline-none ${
                    darkMode
                      ? "bg-[#0d141d]"
                      : "bg-gray-100"
                  }`}
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className={`w-full p-4 rounded-xl outline-none ${
                    darkMode
                      ? "bg-[#0d141d]"
                      : "bg-gray-100"
                  }`}
                />

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className={`w-full p-4 rounded-xl outline-none resize-none ${
                    darkMode
                      ? "bg-[#0d141d]"
                      : "bg-gray-100"
                  }`}
                ></textarea>

                <button
                  className="w-full bg-blue-500 hover:bg-blue-600 transition py-4 rounded-xl text-lg font-semibold"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}
      <footer
        className={`py-10 transition-all duration-500 ${
          darkMode
            ? "bg-[#080d14] border-t border-gray-800"
            : "bg-gray-100 border-t border-gray-300"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">

            <div>

              <h2 className="text-3xl font-bold text-blue-500">
                Om Mahesh Date
              </h2>

              <p
                className={`mt-2 ${
                  darkMode
                    ? "text-gray-400"
                    : "text-gray-600"
                }`}
              >
                Full Stack Web Developer
              </p>

            </div>

            <div className="flex gap-6 text-2xl">

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-500 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-500 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:ommaheshdate@gmail.com"
                className="hover:text-blue-500 transition"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

          <hr
            className={`my-8 ${
              darkMode
                ? "border-gray-700"
                : "border-gray-300"
            }`}
          />

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            <p
              className={
                darkMode
                  ? "text-gray-400"
                  : "text-gray-600"
              }
            >
              © {new Date().getFullYear()} Om Mahesh Date. All Rights Reserved.
            </p>

            <p
              className={
                darkMode
                  ? "text-gray-500"
                  : "text-gray-500"
              }
            >
              Designed with ❤️ By Om
            </p>

          </div>

        </div>
      </footer>

      {/* ================= BACK TO TOP ================= */}
      {showTop && (
        <button
          onClick={scrollTop}
          className="fixed bottom-8 right-8 bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-2xl transition duration-300 z-50"
        >
          <FaArrowUp />
        </button>
      )}

    </div>
  );
};

export default Portfolio;