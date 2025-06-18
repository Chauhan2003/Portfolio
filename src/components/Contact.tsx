import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_vxnn01s",
        "template_c29wxo5",
        templateParams,
        "nP-14nXKaEPMlYhpI"
      )
      .then(
        () => {
          toast({
            title: "Message Sent!",
            description:
              "Thank you for your message. I'll get back to you soon!",
          });
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          toast({
            title: "Error",
            description: "Something went wrong. Please try again later.",
          });
          console.error("EmailJS error:", error);
        }
      );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "chauhangagan.be03@gmail.com",
      href: "mailto:chauhangagan.be03@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9056360204",
      href: "tel:+919056360204",
    },
    { icon: MapPin, label: "Location", value: "Noida, UP", href: "#" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Chauhan2003", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/gaganchauhan2003",
      label: "LinkedIn",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Get In{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Touch
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting
                projects. Whether you have a question or just want to say hi,
                feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div
                  key={item.label}
                  className="flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-3 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg">
                    <item.icon className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{item.label}</p>
                    <a
                      href={item.href}
                      className="text-white font-medium hover:text-purple-400 transition-colors duration-300"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex space-x-4 pt-6">
              {socialLinks.map((social, index) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="icon"
                  className="rounded-full border-purple-500/50 hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 hover:scale-110"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <social.icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-500"
                />
              </div>

              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-500"
                />
              </div>

              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-500 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-20 pt-8 border-t border-white/10">
          <p className="text-gray-400">© 2025 Gagan Chauhan.</p>
        </div>
      </div>
    </section>
  );
};
