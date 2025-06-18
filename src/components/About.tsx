import React from "react";
import { Code, Coffee, Heart, Zap } from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimations";

export const About = () => {
  const skills = [
    "Java",
    "Spring",
    "Spring Boot",
    "Maven",
    "Gradle",
    "JPA",
    "Hibernate",
    "MySQL",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "Git/Github",
    "Node.js",
    "React",
  ];

  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable and scalable code",
    },
    {
      icon: Coffee,
      title: "Problem Solver",
      description: "Love tackling complex challenges",
    },
    {
      icon: Heart,
      title: "User Focused",
      description: "Creating meaningful user experiences",
    },
    {
      icon: Zap,
      title: "Fast Learner",
      description: "Quickly adapting to new technologies",
    },
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-24 px-4 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto">
        <ScrollAnimation animationType="fade-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white mb-12 lg:mb-16 font-mono">
            <span className="syntax-comment">// </span>
            About{" "}
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              &lt;Me /&gt;
            </span>
          </h2>
        </ScrollAnimation>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <ScrollAnimation
            animationType="fade-right"
            className="space-y-6 lg:space-y-8"
          >
            <div className="terminal-window p-6">
              <div className="pt-6 space-y-4">
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-mono">
                  <span className="syntax-keyword">const</span>{" "}
                  <span className="syntax-variable">aboutMe</span> = {"{"}
                </p>
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-mono ml-4">
                  <span className="syntax-variable">passion</span>:{" "}
                  <span className="syntax-string">
                    "Building innovative web solutions"
                  </span>
                  ,
                </p>
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-mono ml-4">
                  <span className="syntax-variable">focus</span>:{" "}
                  <span className="syntax-string">
                    "Scalable applications & clean code"
                  </span>
                  ,
                </p>
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-mono">
                  {"};"}
                </p>
              </div>
            </div>

            <div className="terminal-window p-6">
              <div className="pt-6 space-y-4">
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-mono">
                  <span className="syntax-comment">/* When not coding */</span>
                </p>
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed font-mono">
                  Exploring new technologies, contributing to open-source
                  projects, or enjoying coffee while brainstorming innovative
                  solutions.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {highlights.map((item, index) => (
                <ScrollAnimation
                  key={item.title}
                  animationType="scale"
                  delay={index * 100}
                  className="text-center p-4 sm:p-6 glass-coder rounded-lg hover-glow transition-all duration-300 hover:scale-105 group"
                >
                  <item.icon className="h-8 w-8 sm:h-10 sm:w-10 mx-auto mb-3 text-green-400 group-hover:text-blue-400 transition-colors duration-300" />
                  <h3 className="font-semibold text-white text-sm sm:text-base font-mono">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 mt-2 font-mono">
                    {item.description}
                  </p>
                </ScrollAnimation>
              ))}
            </div>
          </ScrollAnimation>

          <ScrollAnimation
            animationType="fade-left"
            className="space-y-6 lg:space-y-8"
          >
            <div className="code-block p-6">
              <div className="pt-6">
                <h3 className="text-2xl font-bold text-white mb-6 font-mono">
                  <span className="syntax-keyword">class</span>{" "}
                  <span className="syntax-function">TechnicalSkills</span> {"{"}
                </h3>
                <div className="terminal-grid gap-3 ml-4">
                  {skills.map((skill, index) => (
                    <ScrollAnimation
                      key={skill}
                      animationType="fade-up"
                      delay={index * 50}
                      className="glass-coder rounded-lg p-2 text-center hover-glow transition-all duration-300 hover:scale-105 group cursor-pointer"
                    >
                      <span className="text-white font-medium text-sm sm:text-base group-hover:text-green-400 transition-colors duration-300 font-mono">
                        "{skill}"
                      </span>
                    </ScrollAnimation>
                  ))}
                </div>
                <p className="text-white font-mono mt-6">{"}"}</p>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};
