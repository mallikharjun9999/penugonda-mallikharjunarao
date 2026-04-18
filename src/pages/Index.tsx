import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ContactForm } from "@/components/ContactForm";
import { MobileMenu } from "@/components/MobileMenu";
import { Link } from "react-router-dom";

import profileMainImage from "@/assets/profile-main.png.jpg";
import aboutSectionImage from "@/assets/about-section.jpg.jpg";

import {
  Github,
  Linkedin,
  Mail,
  Code,
  Database,
  Server,
  Globe,
  Users,
  BookOpen,
  Award,
  Coffee,
  ArrowRight,
  MessageCircle,
  Brain,
  FileCode,
  Palette,
  Zap,
  Cpu,
  Wind
} from "lucide-react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const techStack = [
    { name: "React.js", icon: <Globe className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { name: "Node.js", icon: <Server className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { name: "Spring Boot", icon: <Coffee className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { name: "Java", icon: <Code className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { name: "Python", icon: <Code className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { name: "C++", icon: <Code className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { name: "C", icon: <Cpu className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { name: "HTML", icon: <FileCode className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { name: "CSS", icon: <Palette className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { name: "JavaScript", icon: <Code className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { name: "React Router", icon: <Globe className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { name: "Tailwind CSS", icon: <Wind className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { name: "Django", icon: <Server className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { name: "Fast API", icon: <Zap className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { name: "MongoDB", icon: <Database className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { name: "MySQL", icon: <Database className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { name: "REST APIs", icon: <Globe className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { name: "DSA", icon: <Brain className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { name: "Git", icon: <Github className="w-3 h-3 sm:w-4 sm:h-4" /> }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass-card">
        <div className="container-width">
          <div className="flex items-center justify-between h-16">
            <div className="text-lg sm:text-xl font-bold text-gradient">
              Mallikharjuna Rao
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-6">
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-primary transition-colors"
                >
                  About
                </button>

                <Link
                  to="/projects"
                  className="hover:text-primary transition-colors"
                >
                  Projects
                </Link>

                <button
                  onClick={() => scrollToSection("mentorship")}
                  className="hover:text-primary transition-colors"
                >
                  Mentorship
                </button>

                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </div>

              <ThemeToggle />
              <MobileMenu onSectionClick={scrollToSection} />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="section-padding pt-24 sm:pt-32 hero-gradient text-white overflow-hidden">
        <div className="container-width">
          <div
            className={`text-center transition-all duration-1000 ${
              isVisible ? "animate-slide-up" : "opacity-0"
            }`}
          >
            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto mb-8 rounded-full bg-white/20 overflow-hidden border-4 border-white/30 shadow-lg">
              <img
                src={profileMainImage}
                alt="Penugonda Mallikharjunarao"
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
              PENUGONDA MALLIKHARJUNARAO
            </h1>

            <div className="text-sm sm:text-lg md:text-xl lg:text-2xl mb-4 text-white/90">
              💻 Software Development Trainer | Technical Trainer | Freelancer
            </div>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 text-white/80 max-w-3xl mx-auto px-4">
              Training future developers through real-world code and career
              clarity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Connect with Me
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section-padding">
        <div className="container-width">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
            About Me
          </h2>

          <div className="mb-10">
            <div className="relative w-[220px] md:w-[300px] aspect-[852/1065] rounded-xl overflow-hidden shadow-lg mx-auto">
              <img
                src={aboutSectionImage}
                alt="Mentoring"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="glass-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-gradient">
                  My Journey
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  I simplify technology and help students master full-stack
                  development through real-world projects and practical
                  teaching.
                </p>

                <div className="flex items-center gap-2 text-primary">
                  <Users className="w-5 h-5" />
                  <span className="font-semibold">
                    1000+ Students Trained
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-gradient">
                  My Mission
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  To make backend, frontend, DSA, Java, Python, C++, SQL,
                  JavaScript, React, and system design easy to learn through
                  implementation-based teaching.
                </p>

                <div className="flex items-center gap-2 text-primary">
                  <BookOpen className="w-5 h-5" />
                  <span className="font-semibold">
                    Practical Learning Focus
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding bg-muted/30">
        <div className="container-width">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
            Tech Stack & Tools
          </h2>

          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {techStack.map((tech) => (
              <Badge
                key={tech.name}
                variant="secondary"
                className="tech-badge gap-2 py-2 px-4"
              >
                {tech.icon}
                {tech.name}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Impact */}
      <section id="mentorship" className="section-padding">
        <div className="container-width">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
            Teaching Impact
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center glass-card">
              <CardContent className="p-6">
                <Users className="w-10 h-10 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold text-primary">20+</div>
                <div className="text-sm text-muted-foreground">
                  Technologies Taught
                </div>
              </CardContent>
            </Card>

            <Card className="text-center glass-card">
              <CardContent className="p-6">
                <BookOpen className="w-10 h-10 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">
                  Students Trained
                </div>
              </CardContent>
            </Card>

            <Card className="text-center glass-card">
              <CardContent className="p-6">
                <Award className="w-10 h-10 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">
                  Job Ready Focus
                </div>
              </CardContent>
            </Card>

            <Card className="text-center glass-card">
              <CardContent className="p-6">
                <Code className="w-10 h-10 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold text-primary">∞</div>
                <div className="text-sm text-muted-foreground">
                  Learning Journey
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section-padding">
        <div className="container-width">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
            Let's Connect
          </h2>

          <div className="max-w-4xl mx-auto text-center">
            <p className="text-muted-foreground mb-8">
              Open to opportunities, collaborations, teaching, and freelance
              projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <Button size="lg" asChild>
                <a
                  href="https://www.linkedin.com/in/penugonda-mallikharjunarao-8b13b5230/"
                  target="_blank"
                >
                  <Linkedin className="mr-2 w-4 h-4" />
                  LinkedIn
                </a>
              </Button>

              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://github.com/mallikharjun9999/"
                  target="_blank"
                >
                  <Github className="mr-2 w-4 h-4" />
                  GitHub
                </a>
              </Button>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container-width py-8 text-center text-muted-foreground">
          <p>© 2026 Penugonda Mallikharjunarao</p>

          <p className="flex items-center justify-center gap-2 mt-2">
            <Mail className="w-4 h-4" />
            penumallikharjun@gmail.com
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;