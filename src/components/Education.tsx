import React from "react";
import { GraduationCap, BookOpen } from "lucide-react";

export const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science Engineering",
      school: "Chitkara University, Punjab",
      period: "2021 - 2025",
      gpa: "CGPA: 8.5/10.0",
      icon: GraduationCap,
      description:
        "Focused on software engineering, data structures, algorithms, and web development. Completed various projects in MERN and learned modern web technologies.",
    },
    {
      degree: "Class 12th",
      school: "Ryan Internation School, Shahjahanpur",
      period: "2020 - 2021",
      gpa: "Percentage: 80%",
      icon: GraduationCap,
      description:
        "Completed Class 12th in Science stream with a focus on Physics, Chemistry, and Mathematics. Gained strong foundational knowledge and problem-solving skills.",
    },
  ];

  return (
    <section
      id="education"
      className="py-16 sm:py-20 lg:py-24 px-4 lg:px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-12 lg:mb-16">
          Education
        </h2>

        <div className="flex justify-center">
          <div className="max-w-4xl w-full">
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:-translate-y-2 group"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                    <div className="flex justify-center sm:justify-start">
                      <div className="p-4 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-xl group-hover:from-purple-600/30 group-hover:via-pink-600/30 group-hover:to-blue-600/30 transition-all duration-300">
                        <edu.icon className="h-8 w-8 text-purple-400 group-hover:text-pink-400 transition-colors duration-300" />
                      </div>
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h4 className="text-md sm:text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                        {edu.degree}
                      </h4>
                      <p className="text-purple-400 font-medium mb-3 text-sm sm:text-lg">
                        {edu.school}
                      </p>
                      <div className="flex flex-col sm:flex-row sm:items-center text-gray-400 text-sm mb-4 space-y-1 sm:space-y-0">
                        <span>{edu.period}</span>
                        <span className="hidden sm:inline mx-2">•</span>
                        <span>{edu.gpa}</span>
                      </div>
                      <p className="text-gray-300 text-xs sm:text-base leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 lg:mt-12 p-6 sm:p-8 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-blue-600/10 backdrop-blur-sm border border-purple-500/30 rounded-xl hover:from-purple-600/20 hover:via-pink-600/20 hover:to-blue-600/20 transition-all duration-300">
              <h4 className="text-md sm:text-xl font-bold text-white mb-4 text-center lg:text-left">
                Continuous Learning
              </h4>
              <p className="text-gray-300 text-xs sm:text-base leading-relaxed text-center lg:text-left">
                I believe in lifelong learning and staying updated with the
                latest technologies. Currently expanding my skills in advanced
                Spring Boot features, and modern development practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
