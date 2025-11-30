import React from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "GardenHub",
      description:
        "A community platform for gardening enthusiasts to share tips, find local gardeners, post events, and connect with others.",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=500&fit=crop",
      tech: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB","Firebase"],
      liveUrl: "https://garden-guidance.web.app/",
      githubUrl: "https://github.com/tariqul25/Garden-Guidance",
    },
    {
      title: "Historical-Artifacts ",
      description:
        "A full-stack web app for browsing, adding, and managing historical artifacts with secure authentication and a like system.",
      image: "https://i.ibb.co/Z1YYCNQ8/01.jpg",
      tech: ["JavaScript", "React", "Tailwind CSS", "Node.js", "Express","JWT", "MongoDB","Firebase"],
      liveUrl: "https://artifact-atlas-e6058.web.app/",
      githubUrl: "https://github.com/tariqul25/Historical-Artifacts-Client",
    },
    {
      title: "SwiftTasks",
      description:
        "SwiftTasks — a MERN-based platform where Buyers can create small tasks and Workers can earn coins by completing them. It also features an Admin role to oversee users, tasks, payments, and withdrawals.",
      image:
        "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&h=500&fit=crop",
      tech: ["React", "Tailwind CSS","Node.js", "Express","JavaScript", "MongoDB","JWT","Firebase"],
      liveUrl: "https://swift-tasks-87d89.web.app/",
      githubUrl: "https://github.com/tariqul25/swift-task",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-linear-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-lg mt-2">Here are some of my recent projects. Each one was built with a focus on performance, scalability, and real-world functionality.</p>
        </div>

        {/* Project Cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all hover:scale-105 hover:shadow-lg group flex flex-col"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 text-sm flex-grow">
                  {project.description}
                </p>

                {/* Tech list */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-auto flex gap-3 flex-col sm:flex-row">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-linear-to-r from-blue-600 to-purple-600 
                    text-white rounded-full flex items-center justify-center hover:opacity-90 
                    transition-all duration-300 text-sm font-medium"
                  >
                    <ExternalLink className="mr-2" size={16} />
                    Live Demo
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-full 
                    flex items-center justify-center hover:bg-blue-600 hover:text-white 
                    transition-all duration-300 text-sm font-medium"
                  >
                    <Github className="mr-2" size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SEE MORE BUTTON */}
        {/* <div className="text-center mt-12">
          <a
            href="/projects"
            className="inline-block px-8 py-3 text-white bg-linear-to-r from-blue-600 to-purple-600  
            rounded-full text-lg font-semibold hover:opacity-90 transition-all"
          >
            See More Projects →
          </a>
        </div> */}

      </div>
    </section>
  );
};

export default Projects;
