import React, { useState, useEffect } from "react";
import { Download, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import myPhoto from "../assets/profile.jpg";

const roles = [
  "Frontend Developer",
  "Backend Developer",
  "Full Stack Developer",
  "React Developer",
  "MERN Stack Developer",
];

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    if (charIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(displayedText + currentRole.charAt(charIndex));
        setCharIndex(charIndex + 1);
      }, 150); // typing speed
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText('');
        setCharIndex(0);
        setCurrentRoleIndex((currentRoleIndex + 1) % roles.length);
      }, 1500); // pause before next role
      return () => clearTimeout(timeout);
    }
  }, [charIndex, displayedText, currentRoleIndex]);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-linear-to-b from-[rgb(10,15,28)] via-[#0C1224] to-[#1A237E] text-white overflow-hidden flex items-center"
    >
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 -right-32 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10 pt-24 pb-12">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-12">
          <motion.div
            className="flex flex-col justify-between text-center lg:text-left max-w-xl h-full"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-2 mb-4"
              variants={itemVariants}
            >
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <p className="text-cyan-400 font-medium tracking-wide text-xl">Hi, I am</p>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-extrabold mb-3 bg-clip-text text-transparent bg-linear-to-r from-cyan-400 to-blue-500"
              variants={itemVariants}
            >
              Md. Tariqul Islam
            </motion.h1>

            {/* Typing Roles */}
            <motion.p className="text-cyan-400 text-3xl font-semibold my-2" variants={itemVariants}>
              <span className="typed-text">{displayedText}</span>
              <span className="typed-cursor" aria-hidden="true">|</span>
            </motion.p>

            <motion.p
              className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0"
              variants={itemVariants}
            >
              Coding interactive experiences with passion and precision
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
            >
              <button className="text-center">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  href="/Tariqul_Resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-cyan-500 to-blue-600 rounded-full font-semibold shadow-lg hover:shadow-cyan-500/30 transition"
                >
                  <Download className="w-5 h-5" />
                  Download CV
                </motion.a>
              </button>

              <button
                onClick={() => scrollToSection("#contact")}
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-cyan-400 rounded-full text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Contact Me
              </button>
            </motion.div>
          </motion.div>

          <div className="relative flex items-center justify-center w-full lg:w-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-full max-w-[450px] h-[450px] bg-white/5 backdrop-blur-xl rounded-2xl border border-cyan-400/20 shadow-2xl flex items-center justify-center mx-auto p-8 overflow-hidden"
            >
              <motion.img
                src={myPhoto}
                alt="Tariqul"
                className="w-full h-full object-cover rounded-xl mx-auto"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;