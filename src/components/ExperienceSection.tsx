import { Briefcase, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "Prismberry Technologies Pvt Ltd - Noida, UP",
    period: "Oct 2024 - Present",
    achievements: [
      "Developed and maintained 20+ RESTful APIs using Spring Boot and Spring MVC, documented with Swagger/OpenAPI, improving developer onboarding by 40%.",
      "Designed scalable microservices-based architecture following Agile/Scrum practices and implemented secure Maker-Checker and multi-level approval workflows using Spring Security.",
      "Built a low-latency video streaming solution using AWS Kinesis Video Streams (WebRTC) to stream RTSP camera feeds and developed bulk-processing APIs that improved system throughput by 30%.",
      "Managed MySQL and PostgreSQL databases with Flyway migrations for zero-downtime deployments and schema version control.",
      "Established CI/CD pipelines with GitHub Actions and Docker, reducing QA feedback cycles by 20% through automated unit and integration testing.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_hsl(217_91%_60%/0.08)_0%,_transparent_50%)]" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent transform md:-translate-x-1/2" />
              
              {/* Timeline Node */}
              <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary glow-effect transform -translate-x-1/2 md:-translate-x-1/2" />
              
              <div className="ml-8 md:ml-0 md:grid md:grid-cols-2 gap-8">
                {/* Date/Company Info - Left Side */}
                <div className="md:text-right md:pr-12 mb-4 md:mb-0">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4">
                    <Briefcase size={16} className="text-primary" />
                    <span className="text-sm font-medium text-primary">{exp.period}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{exp.title}</h3>
                  <p className="text-lg text-primary font-medium">{exp.company}</p>
                </div>

                {/* Achievements - Right Side */}
                <div className="md:pl-12">
                  <div className="glass-card p-6 hover-glow">
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 group">
                          <CheckCircle2 
                            size={18} 
                            className="text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" 
                          />
                          <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
