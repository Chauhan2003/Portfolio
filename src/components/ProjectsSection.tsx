import { Github, Video, Users } from "lucide-react";

const projects = [
  {
    title: "VisionIQ",
    subtitle: "AI Video Analytics Platform",
    icon: Video,
    description:
      "Backend platform for AI-powered video analytics that processes live and recorded camera feeds to generate safety and operational insights.",
    features: [
      "Processed live RTSP cameras and recorded streams using Spring Boot",
      "Integrated event-driven AI analysis pipelines with AWS SQS",
      "Delivered real-time dashboards and alerts via WebSockets",
      "Enabled low-latency live camera viewing with AWS Kinesis Video Streams (WebRTC)",
      "Optimized stream handling for multiple concurrent viewers",
    ],
    tech: ["Spring Boot", "AWS SQS", "WebSockets", "WebRTC", "Kinesis"],
    github: null,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Looply",
    subtitle: "Social Media Platform",
    icon: Users,
    description:
      "Full-stack MERN social media application with real-time communication, secure authentication, and AI-assisted moderation.",
    features: [
      "Built with MongoDB, Express, React, Node.js, Tailwind CSS, and Vite",
      "Implemented real-time feeds, messaging, and notifications using Socket.io",
      "Secured authentication with JWT, Google OAuth, and email verification",
      "Added media uploads and moderation using Cloudinary and Multer",
      "Included basic AI-based caption and content filtering with LLM integration",
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
