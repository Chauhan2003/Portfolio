import { Code2, Database, Server, Cloud, Wrench, Layers } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Java", "Python", "SQL"],
  },
  {
    title: "Frameworks",
    icon: Layers,
    skills: [
      "Spring Framework",
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "Hibernate",
      "JPA",
      "React.js",
      "Node.js",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      "Flyway",
      "Swagger/OpenAPI",
      "Postman",
      "Gemini API",
      "LLM Integration",
    ],
  },
  {
    title: "Cloud & Services",
    icon: Cloud,
    skills: ["AWS Kinesis Video Streams", "AWS SQS", "Docker", "Linux"],
  },
  {
    title: "Others",
    icon: Server,
    skills: ["Microservices", "REST APIs", "CI/CD", "Git", "GitHub"],
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

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Text */}
          <div className="glass-card p-8 hover-glow">
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              I&apos;m a{" "}
              <span className="text-foreground font-medium">
                Software Engineer
              </span>{" "}
              with 1.5+ years of experience building scalable microservices and
              RESTful APIs using{" "}
              <span className="text-primary">Spring Boot</span> and cloud-native
              AWS services.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              I specialize in{" "}
              <span className="text-foreground font-medium">
                backend engineering
              </span>
              , API design, database management, and containerized deployments,
              with hands-on experience across MySQL, PostgreSQL, and MongoDB.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg">
              At Prismberry Technologies, I&apos;ve improved system throughput
              by 30%, reduced deployment and QA cycles through CI/CD automation,
              and delivered low-latency streaming systems using AWS Kinesis
              Video Streams.
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
