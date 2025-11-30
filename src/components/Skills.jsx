import { motion } from "framer-motion";

const skills = [
  { name: "HTML", img: "/src/assets/skills/html.png" },
  { name: "CSS", img: "/src/assets/skills/css3.png" },
  { name: "JavaScript", img: "/src/assets/skills/js.png" },
  { name: "TypeScript", img: "/src/assets/skills/typescript.png" },
  { name: "React", img: "/src/assets/skills/react.png" },
  { name: "NodeJS", img: "/src/assets/skills/nodejs.png" },
  { name: "ExpressJS", img: "/src/assets/skills/express.png" },
  { name: "MongoDB", img: "/src/assets/skills/mongodb.png" },
  { name: "PostgreSQL", img: "/src/assets/skills/postgresql.png" },
  { name: "Git", img: "/src/assets/skills/git.png" },
  { name: "TailwindCSS", img: "/src/assets/skills/tailwindcss.png" },
];

// Duplicate array only twice, not four times
const duplicatedSkills = [...skills, ...skills];

const SkillsCarousel = () => {
  return (
    <section id="skills" className="relative overflow-hidden bg-gradient-to-br from-[#0A0F1C] via-[#0C1224] to-[#1A237E] py-20">
      
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
        Skills & Expertise
      </h2>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl space-y-10">
        {/* Top Row */}
        <motion.div
          className="flex gap-10 whitespace-nowrap"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" }}
        >
          {duplicatedSkills.map((skill, index) => (
            <div
              key={index}
              className="inline-flex flex-col items-center justify-center min-w-[130px] bg-slate-800/40 backdrop-blur-lg p-4 rounded-md group hover:bg-slate-700/40 transition-colors duration-300"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-16 h-16 object-contain opacity-40 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110"
              />
              <span className="pt-4 text-lg font-semibold text-white">{skill.name}</span>
            </div>
          ))}
        </motion.div>

        {/* Bottom Row */}
        <motion.div
          className="flex gap-10 whitespace-nowrap"
          animate={{ x: ["-100%", "0%"] }}
          transition={{ repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" }}
        >
          {duplicatedSkills.map((skill, index) => (
            <div
              key={index}
              className="inline-flex flex-col items-center justify-center min-w-[130px] bg-slate-800/40 backdrop-blur-lg p-4 rounded-md group hover:bg-slate-700/40 transition-colors duration-300"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-16 h-16 object-contain opacity-40 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110"
              />
              <span className="pt-4 text-lg font-semibold text-white">{skill.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsCarousel;
