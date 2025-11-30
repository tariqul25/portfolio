import React, { useState } from "react";
import {
  Download,
  GraduationCap,
  MapPin,
  Code2,
  User,
  List,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
const TabButton = ({ isActive, onClick, children }) => (
  <button
    onClick={onClick}
    className={`relative px-1 py-2 text-lg font-medium transition-colors ${isActive ? "text-cyan-400" : "text-gray-400 hover:text-white"
      }`}
  >
    {children}
    {isActive && (
      <motion.div
        layoutId="active-underline"
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400"
      />
    )}
  </button>
);

const About = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-br from-[#0A0F1C] via-[#0C1224] to-[#1A237E] text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,102,255,0.15),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(0,255,255,0.1),transparent_60%)]"></div>

      <div className="container mx-auto max-w-3xl px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto bg-white/5 backdrop-blur-md rounded-2xl border border-cyan-400/20 shadow-2xl p-8 md:p-12"
        >
          <div className="flex justify-center gap-8 border-b border-cyan-400/20 mb-8">
            <TabButton
              isActive={activeTab === "about"}
              onClick={() => setActiveTab("about")}
            >
              <span className="flex items-center gap-2">
                <User size={18} /> About Me
              </span>
            </TabButton>
            <TabButton
              isActive={activeTab === "details"}
              onClick={() => setActiveTab("details")}
            >
              <span className="flex items-center gap-2">
                <List size={18} /> Details
              </span>
            </TabButton>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="min-h-[180px]"
            >
              {activeTab === "about" && (
                <p className="text-lg text-center leading-relaxed text-gray-300">
                  Hello! I'm{" "}
                  <span className="font-semibold text-cyan-400">
                    Md Tariqul Islam
                  </span>
                  , a passionate full-stack developer <br />I'm working with the MERN stack and focused on backend development. <br /> I'm skilled in Node.js, Express, TypeScript, MongoDB, and more. <br />Exploring technologies like Prisma, PostgreSQL, Socket.io, and frontend with React.js & Next.js.
                </p>
              )}

              {activeTab === "details" && (
                <div className="grid gap-4 max-w-lg mx-auto">
                  <div className="flex items-center gap-3 text-gray-300 text-lg">
                    <Code2 className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span>
                      <strong>Specialization:</strong> Back-End Development
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 text-lg">
                    <GraduationCap className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span>
                      <strong>Education:</strong> Diploma in Computer Science & Technology
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300 text-lg">
                    <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <span>
                      <strong>Location:</strong> Kishoreganj, Dhaka, Bangladesh
                    </span>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

        </motion.div>
      </div>
    </section>
  );
};

export default About;