import React from "react";
import { ExternalLink, Github, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const projects = [
    {
      title: "Rental Payment System - Zoyer",
      description:
        "Worked on a rental payment management system as part of the Zoyer platform. Implemented features like approval workflow, agreement creation, invoice generation, receipt tracking, landlord-tranche mappings, and third-party API integrations using Spring Boot and PostgreSQL.",
      image: "/public/project1.jpg",
      technologies: [
        "Spring Boot",
        "Java",
        "JPA",
        "PostgreSQL",
        "REST API",
        "Flyway",
        "Git",
      ],
      github: "#",
      live: "#",
      featured: true,
    },
    {
      title: "Social Media Application",
      description:
        "A full-featured social media platform built using the MERN stack. Integrated real-time chat and notification system using WebSockets. Features include user authentication, profile management, posts, likes, comments, and live messaging.",
      image: "/public/project2.png",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.IO",
        "JWT",
        "Git",
      ],
      github: "https://github.com/Chauhan2003/SocialBuzzy",
      live: "#",
      featured: true,
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 lg:py-24 px-4 lg:px-8 bg-black/20"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-12 lg:mb-16">
          Featured{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 sm:px-4 bg-gradient-to-r from-purple-600/30 via-pink-600/30 to-blue-600/30 text-purple-200 text-sm rounded-full border border-purple-500/30 hover:from-purple-600/40 hover:via-pink-600/40 hover:to-blue-600/40 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-purple-500/50 hover:border-purple-400 hover:bg-purple-500/20 transition-all duration-300 hover:scale-105"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </a>
                  </Button>

                  <Button
                    asChild
                    size="sm"
                    className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 transition-all duration-300 hover:scale-105"
                  >
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
