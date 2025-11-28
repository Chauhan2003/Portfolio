import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_hsl(217_91%_60%/0.1)_0%,_transparent_50%)]" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm currently open to new opportunities and collaborations. Whether
            you have a question or just want to say hi, feel free to reach out!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="glass-card p-8 md:p-12 text-center">
            {/* Email CTA */}
            <div className="mb-10">
              <div className="inline-flex p-4 rounded-2xl bg-primary/10 text-primary mb-6">
                <Mail size={40} />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Let's work together
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm always interested in hearing about new projects and
                opportunities.
              </p>
              <Button variant="hero" size="lg" asChild>
                <a href="mailto:chauhangagan.be03@gmail.com">
                  <Send className="mr-2" />
                  Say Hello
                </a>
              </Button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-10">
              <div className="flex-1 h-px bg-border" />
              <span className="text-muted-foreground text-sm">
                or connect via
              </span>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://github.com/Chauhan2003"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-secondary/50 border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-secondary transition-all duration-300 group"
              >
                <Github
                  size={22}
                  className="group-hover:text-primary transition-colors"
                />
                <span className="font-medium">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/gaganchauhan2003"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-6 py-3 rounded-xl bg-secondary/50 border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-secondary transition-all duration-300 group"
              >
                <Linkedin
                  size={22}
                  className="group-hover:text-primary transition-colors"
                />
                <span className="font-medium">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
