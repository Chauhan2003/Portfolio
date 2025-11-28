import { GraduationCap, Calendar, Award } from "lucide-react";

const education = [
  {
    degree: "B.E. Computer Science",
    institution: "Chitkara University",
    period: "2021 – 2025",
    score: "CGPA: 8.67/10",
    type: "university",
  },
  {
    degree: "Higher Secondary Education",
    institution: "Ryan International School",
    period: "2021",
    score: "80%",
    type: "school",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_hsl(217_91%_60%/0.08)_0%,_transparent_50%)]" />
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="glass-card p-8 hover-glow group"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                {/* Icon */}
                <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors w-fit">
                  <GraduationCap size={32} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-muted-foreground mb-3">
                    {edu.institution}
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar size={16} className="text-primary" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Award size={16} className="text-primary" />
                      <span className="text-primary font-medium">{edu.score}</span>
                    </div>
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

export default EducationSection;
