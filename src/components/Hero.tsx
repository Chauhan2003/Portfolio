import React from "react";
import { Github, Linkedin, Mail, Download, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollAnimation } from "@/components/ScrollAnimations";

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 lg:px-8 relative overflow-hidden"
    >
      {/* Matrix background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content Section */}
          <ScrollAnimation
            animationType="fade-right"
            className="text-center lg:text-left space-y-6"
          >
            <div className="space-y-4">
              <div className="inline-block">
                <div className="terminal-window p-4 mb-6">
                  <div className="pt-6 ">
                    <span className="syntax-comment">// Hello World!</span>
                    <br />
                    <span className="syntax-keyword">const</span>{" "}
                    <span className="syntax-variable">developer</span>{" "}
                    <span className="text-white">=</span>{" "}
                    <span className="syntax-string">"Gagan Chauhan"</span>;
                  </div>
                </div>
              </div>

              <h1 className="text-4xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight font-mono">
                <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  &lt;Gagan Chauhan /&gt;
                </span>
              </h1>

              <div className="code-block p-4">
                <div className="pt-6">
                  <div className="animate-typewriter text-green-400 font-mono text-xl sm:text-2xl">
                    Software Engineer
                  </div>
                </div>
              </div>

              <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-mono">
                <span className="syntax-comment">/*</span>
                <br />
                &nbsp;&nbsp;Passionate about creating innovative solutions
                <br />
                &nbsp;&nbsp;and beautiful user experiences using modern tech.
                <br />
                <span className="syntax-comment">*/</span>
              </p>
            </div>

            {/* CTA Button */}
            <ScrollAnimation animationType="fade-up" delay={400}>
              <Button className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 hover:from-green-700 hover:via-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 hover-glow shadow-2xl text-lg font-medium font-mono">
                <Download className="h-5 w-5 mr-2" />
                ./download-resume.pdf
              </Button>
            </ScrollAnimation>
          </ScrollAnimation>

          {/* Image Section */}
          <ScrollAnimation
            animationType="fade-left"
            className="flex justify-center lg:justify-end"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-lg blur-2xl opacity-30 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
              <div className="relative terminal-window overflow-hidden">
                <div className="pt-8">
                  <img
                    src="/public/profile.jpg"
                    alt="Profile"
                    className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover hover:scale-105 transition-all duration-500 filter brightness-110 contrast-110"
                  />
                </div>
              </div>

              {/* Floating code elements */}
              <div className="absolute -top-4 -right-4 bg-green-500/20 backdrop-blur-sm border border-green-500/30 rounded-lg p-2 animate-code-flicker">
                <Terminal className="h-6 w-6 text-green-400" />
              </div>
              <div className="absolute bottom-2 -left-4 terminal-window px-4 pt-8 pb-2 animate-bounce">
                <span className="text-green-400 font-mono text-sm">
                  {"> whoami"}
                </span>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};
