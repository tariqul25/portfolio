import React from "react";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  // Your education data remains the same
  const education = [
    {
      year: "2021 - 2025",
      course: "Diploma in Computer Science & Technology",
      institution: "Kishoreganj Polytechnic Institute", 
      description:
        "Focused on web development, programming fundamentals, and software engineering.",
    },
    {
      year: "2021",
      course: "Secondary School Certificate",
      institution: "Shamsurnnahar Osman Ghani Shikka Niketon",
      description:
        "Completed secondary education with focus on science and mathematics.",
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-linear-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Timeline Wrapper */}
        <div className="relative max-w-3xl mx-auto">
          {/* The Vertical Line */}
          <div className="absolute left-4 top-0 h-full w-0.5 bg-blue-300 z-0 lg:left-1/2 lg:-translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="relative space-y-12">
            {education.map((edu, index) => {
              // Determine if the item should be on the right side (for desktop)
              // index 0 (first item) will be on the right, index 1 (second) on the left, etc.
              const isRightSide = index % 2 === 0;

              return (
                <div key={index} className="relative">
                  {/* Timeline Node (Icon) */}
                  <div className="absolute z-10 flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full left-4 lg:left-1/2 -translate-x-1/2 border-4 border-white">
                    <GraduationCap className="text-white" size={20} />
                  </div>

                  {/* Content Card Wrapper (handles positioning) */}
                  <div
                    className={`
                      ml-14 lg:ml-0 lg:w-[calc(50%-2.5rem)]
                      ${isRightSide ? "lg:ml-auto" : "lg:mr-auto"}
                    `}
                  _                  >
                    {/* The Card */}
                    <div
                      className={`
                        relative bg-white p-6 rounded-xl shadow-lg 
                        hover:shadow-2xl transition-shadow duration-300
                        before:content-[''] before:absolute before:top-5 
                        before:w-4 before:h-4 before:bg-white before:rotate-45
                        before:z-[-1]
                        
                        ${
                          isRightSide
                            ? "lg:text-left before:left-[-8px]" // Desktop Right
                            : "lg:text-right before:left-auto before:right-[-8px]" // Desktop Left
                        }
                        
                        before:left-[-8px] lg:before:left-auto
                        ${isRightSide && "lg:before:left-[-8px]"}
                      `}
                    >
                      {/* Year */}
                      <div
                        className={`flex items-center gap-2 mb-2 ${
                          !isRightSide && "lg:justify-end"
                        }`}
                      >
                        <Calendar className="text-blue-600" size={16} />
                        <span className="text-sm text-blue-600 font-medium">
                          {edu.year}
                        </span>
                      </div>
                      {/* Course */}
                      <h3 className="text-xl font-bold mb-2">{edu.course}</h3>
                      {/* Institution */}
                      <p className="text-gray-600 font-medium mb-2">
                        {edu.institution}
                      </p>
                      {/* Description */}
                      <p className="text-sm text-gray-500">{edu.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;