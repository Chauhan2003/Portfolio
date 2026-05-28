import { Code2, Database, Server, Cloud, Wrench, Layers, Brain, Monitor } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Frontend",
    icon: Monitor,
    skills: [
      "React.js",
      "Next.js",
      "Vue",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Redux Toolkit",
      "Socket.IO",
      "Axios",
    ],
  },
  {
    title: "Backend",
    icon: Layers,
    skills: [
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST APIs",
      "Microservices",
      "Hibernate",
      "JPA",
      "Mongoose",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "AI & LLM",
    icon: Brain,
    skills: [
      "LangChain",
      "Groq AI",
      "Gemini API",
      "OpenAI API",
      "RAG",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      "AWS EC2",
      "AWS S3",
      "AWS SQS",
      "AWS Lambda",
      "AWS KVS",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "GitHub Actions",
      "Linux",
      "Nginx",
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      "Git",
      "Flyway",
      "Swagger/OpenAPI",
      "Postman",
      "Maven",
      "Cloudinary",
      "Apache POI",
      "Kafka",
    ],
  },
  {
    title: "Others",
    icon: Server,
    skills: ["WebRTC", "WebSocket", "JWT", "RBAC", "CI/CD", "PCI-DSS"],
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(217_91%_60%/0.08)_0%,_transparent_50%)]" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="flex flex-col gap-12">
          {/* About Text */}
          <div className="glass-card p-8 hover-glow">
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              I&apos;m a{" "}
              <span className="text-foreground font-medium">
                Software Engineer
              </span>{" "}
              with professional experience building scalable backends and
              full-stack platforms using{" "}
              <span className="text-primary">Spring Boot</span>,{" "}
              <span className="text-primary">FastAPI</span>, and cloud-native
              AWS services.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              At Prismberry Technologies, I led backend development for{" "}
              <span className="text-foreground font-medium">VisionIQ</span> — a
              video surveillance platform — architecting core services,
              mentoring team members, and delivering streaming, event processing,
              and multi-format reporting systems.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              I work across the full stack with{" "}
              <span className="text-foreground font-medium">
                React, TypeScript, Node.js
              </span>
              , and have hands-on experience with real-time WebRTC streaming,
              multi-tenant RBAC, and cloud deployments using Docker,
              Kubernetes, and Jenkins.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="glass-card p-5 hover-glow group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <category.icon size={20} />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full bg-secondary/70 text-muted-foreground border border-border/50 hover:border-primary/30 hover:text-foreground transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
