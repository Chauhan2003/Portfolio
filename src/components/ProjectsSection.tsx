import { Github, Video, CreditCard, Users } from "lucide-react";

const projects = [
  {
    title: "VisionIQ",
    subtitle: "Video Surveillance Platform · Lead Backend Developer",
    period: "Nov 2025 – Present",
    icon: Video,
    description:
      "Video surveillance platform supporting real-time monitoring, safety detection (fire, crowd, PPE, fall), and automated alerts across multiple camera feeds.",
    features: [
      "Built real-time monitoring with safety detection for fire, crowd, PPE, and fall events across multiple camera feeds",
      "Developed live streaming using AWS Kinesis Video Streams + WebRTC and an async SQS event pipeline to process and route 9+ detection types with low latency",
      "Implemented role-based access control, JWT authentication, and real-time analytics dashboard pushed via WebSocket",
      "Deployed with Docker and automated CI/CD via Jenkins",
    ],
    tech: ["Spring Boot", "AWS KVS", "WebRTC", "PostgreSQL", "Docker", "Jenkins", "SQS", "WebSocket"],
    github: null,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Zattix Credit Card System",
    subtitle: "Corporate Credit Card Platform",
    period: "Oct 2024 – Mar 2025",
    icon: CreditCard,
    description:
      "Co-branded corporate credit card platform in partnership with multiple banks, enabling card issuance, blocking, tracking, and bulk provisioning with seamless employee expense management.",
    features: [
      "Built card issuance, blocking, tracking, and bulk provisioning with seamless employee expense management",
      "Implemented secured real-time transactions with PCI-DSS aligned security, AES + RSA encryption, and JWT authentication",
      "Integrated with MasterCard and banking APIs for end-to-end transaction processing",
      "Designed scalable REST APIs and integrated Apache Kafka, reducing data sync time by 20% across multiple Zappfin products",
    ],
    tech: ["Java", "Spring Boot", "PostgreSQL", "Apache Kafka", "MasterCard API", "AES/RSA", "JWT"],
    github: null,
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Zivora",
    subtitle: "Social Media App · Solo Full Stack",
    period: "Feb 2024 – Present",
    icon: Users,
    description:
      "Full-stack social media app with user authentication, follow system, private accounts, post creation with image uploads, likes, and personalized feed.",
    features: [
      "Solely designed and developed with user auth, follow system, private accounts, post creation, likes, and personalized feed",
      "Developed REST APIs with Node.js + Express, MongoDB for data storage, and Cloudinary for media handling",
      "Integrated Socket.IO for real-time chat notifications",
      "Built a responsive React.js frontend with Tailwind CSS, Redux Toolkit, and Vite",
    ],
    tech: ["React.js", "Node.js", "MongoDB", "Socket.IO", "Cloudinary", "Tailwind CSS", "Redux Toolkit"],
    github: null,
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                      <p className="text-xs text-primary/70 mt-0.5">{project.period}</p>
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
