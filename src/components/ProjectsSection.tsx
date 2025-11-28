import { Github, ExternalLink, CreditCard, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "SwiftPay",
    subtitle: "Virtual Card Engine",
    icon: CreditCard,
    description:
      "A comprehensive virtual card management system with secure REST APIs, role-based access control, and advanced export capabilities.",
    features: [
      "25+ secure REST APIs (Spring Boot, PostgreSQL, JWT)",
      "XLSX/PDF/CSV export & Excel upload functionality",
      "Role-Based Access Control (RBAC)",
      "Flyway database migrations",
      "AWS S3 & Secrets Manager Integration",
    ],
    tech: ["Spring Boot", "PostgreSQL", "JWT", "AWS S3", "Flyway"],
    github: null,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Looply",
    subtitle: "Social Media Platform",
    icon: Users,
    description:
      "A full-featured social media platform built with the MERN stack, featuring real-time communication and AI-powered content moderation.",
    features: [
      "Real-time feeds, chat & notifications (Socket.io)",
      "Authentication (JWT, bcryptjs, Google OAuth)",
      "Cloudinary media uploads & management",
      "AI-powered moderation system",
      "Responsive modern UI/UX",
    ],
    tech: ["MongoDB", "Express", "React", "Node.js", "Socket.io"],
    github: "https://github.com/Chauhan2003/looply",
    color: "from-purple-500 to-pink-500",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(217_91%_60%/0.08)_0%,_transparent_50%)]" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card group hover-glow overflow-hidden"
            >
              {/* Card Header with Gradient */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />

              <div className="p-8">
                {/* Project Icon & Title */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${project.color} bg-opacity-10`}
                    >
                      <project.icon size={28} className="text-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {project.subtitle}
                      </p>
                    </div>
                  </div>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color} mt-2 flex-shrink-0`}
                      />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/70 text-muted-foreground border border-border/50"
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

export default ProjectsSection;
