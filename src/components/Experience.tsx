import React from "react";
import { Briefcase, Calendar } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Prismberry Technologies",
      period: "Oct, 2024 - Present",
      description:
        "Developing web applications using Spring Boot framework. Working on backend services, API development, and database integration. Learning industry best practices and collaborating with senior developers.",
      technologies: [
        "Spring Boot",
        "Gradle",
        "Maven",
        "JPA",
        "Hibernates",
        "MongoDB",
        "MySQL",
        "PostgreSQL",
        "Git",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-16 sm:py-20 lg:py-24 px-4 lg:px-8 bg-black/20"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-12 lg:mb-16">
          Work{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Experience
          </span>
        </h2>

        <div className="space-y-8 lg:space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 sm:pl-12 hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute left-0 top-0 w-4 h-4 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full shadow-lg"></div>
              <div className="absolute left-2 top-4 w-0.5 h-full bg-gradient-to-b from-purple-500/50 via-pink-500/30 to-transparent"></div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 sm:p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 group">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 lg:mb-6">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <p className="text-purple-400 font-medium text-lg">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center text-gray-400 mt-2 lg:mt-0">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm sm:text-base">{exp.period}</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="px-3 py-1 sm:px-4 bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-blue-600/30 text-purple-200 text-sm rounded-full border border-purple-500/30 hover:from-purple-600/40 hover:via-pink-600/40 hover:to-blue-600/40 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
