import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ContactForm } from "@/components/ContactForm";
import { MobileMenu } from "@/components/MobileMenu";
import { Link } from "react-router-dom";
import profileMainImage from "@/assets/profile-main.jpg";
import profileWorkImage from "@/assets/profile-work.jpg";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Server,
  Globe,
  Users,
  BookOpen,
  Award,
  Coffee,
  ArrowRight,
  Download,
  MessageCircle,
  Brain,
  FileCode,
  Palette
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
    { name: "HTML", icon: <FileCode className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { name: "CSS", icon: <Palette className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { name: "JavaScript", icon: <Code className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { name: "DSA", icon: <Brain className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { name: "MongoDB", icon: <Database className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { name: "MySQL", icon: <Database className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { name: "Express.js", icon: <Server className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { name: "REST APIs", icon: <Globe className="w-3 h-3 sm:w-4 sm:h-4" /> },
    { name: "Git", icon: <Github className="w-3 h-3 sm:w-4 sm:h-4" /> }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card">
        <div className="container-width">
          <div className="flex items-center justify-between h-16">
            <div className="text-lg sm:text-xl font-bold text-gradient">
              Mallikharjuna Rao
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-6">
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-primary transition-colors text-sm lg:text-base"
                >
                  About
                </button>
                <Link
                  to="/projects"
                  className="hover:text-primary transition-colors text-sm lg:text-base"
                >
                  Projects
                </Link>
                <button
                  onClick={() => scrollToSection('mentorship')}
                  className="hover:text-primary transition-colors text-sm lg:text-base"
                >
                  Mentorship
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-primary transition-colors text-sm lg:text-base"
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

      {/* Hero Section */}
      <section className="section-padding pt-24 sm:pt-32 hero-gradient text-white overflow-hidden">
        <div className="container-width">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto mb-6 sm:mb-8 rounded-full bg-white/20 backdrop-blur-sm overflow-hidden border-4 border-white/30 shadow-lg">
              <img
                src={profileMainImage}
                alt="Penugonda Mallikharjunarao"
                className="w-full h-full object-cover object-center"
                loading="eager"
                style={{ imageRendering: "auto" }}
                draggable={false}
              />
            </div>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              PENUGONDA MALLIKHARJUNARAO
            </h1>
            <div className="text-sm sm:text-lg md:text-xl lg:text-2xl mb-3 sm:mb-4 text-white/90">
              💻 Software Developer Mentor | Tech Educator | Tech Trainer
            </div>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 text-white/80 max-w-3xl mx-auto leading-relaxed px-4">
              "Mentoring future full-stack developers through real-world code and career clarity."
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="group text-sm sm:text-base"
              >
                <Link to="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-sm sm:text-base"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Connect with Me
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container-width">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gradient">
              About Me
            </h2>
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start">
              <div className="animate-slide-left">
                <Card className="glass-card">
                  <CardContent className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-4">My Journey</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base">
                      As a passionate Technical Mentor at NxtWave, I've dedicated my career to bridging the gap between
                      complex technology and practical learning. I believe in making full-stack development accessible
                      to everyone through hands-on projects and real-world applications.
                    </p>
                    <div className="flex items-center gap-2 text-primary">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="font-semibold text-sm sm:text-base">1000+ students mentored</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <div className="animate-slide-right">
                <Card className="glass-card">
                  <CardContent className="p-6 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-4">My Mission</h3>
                    <p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base">
                      To simplify full-stack and backend development, empower students with job-ready projects,
                      and make complex topics like DSA, Java, Python, C++, SQL, Node.js, HTML, CSS, JavaScript,
                      and React easy to understand through practical implementation.
                    </p>
                    <div className="flex items-center gap-2 text-primary">
                      <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="font-semibold text-sm sm:text-base">Real-world focused learning</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-width">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gradient">
            Tech Stack & Tools
          </h2>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 max-w-5xl mx-auto">
            {techStack.map((tech, index) => (
              <Badge
                key={tech.name}
                variant="secondary"
                className="tech-badge text-xs sm:text-sm md:text-base py-1.5 sm:py-2 px-2 sm:px-3 md:px-4 hover:scale-105 transition-transform gap-1 sm:gap-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech.icon}
                {tech.name}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Mentorship Impact Section */}
      <section id="mentorship" className="section-padding">
        <div className="container-width">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gradient">
            Mentorship Impact
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto mb-8 sm:mb-12">
            <Card className="text-center glass-card">
              <CardContent className="p-4 sm:p-6">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-2 sm:mb-4 text-primary" />
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1 sm:mb-2">1000+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Doubts Resolved</div>
              </CardContent>
            </Card>
            <Card className="text-center glass-card">
              <CardContent className="p-4 sm:p-6">
                <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-2 sm:mb-4 text-primary" />
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1 sm:mb-2">500+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Students Mentored</div>
              </CardContent>
            </Card>
            <Card className="text-center glass-card">
              <CardContent className="p-4 sm:p-6">
                <Award className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-2 sm:mb-4 text-primary" />
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1 sm:mb-2">100%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Job-Ready Focus</div>
              </CardContent>
            </Card>
            <Card className="text-center glass-card">
              <CardContent className="p-4 sm:p-6">
                <Code className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 mx-auto mb-2 sm:mb-4 text-primary" />
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1 sm:mb-2">∞</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Learning Journey</div>
              </CardContent>
            </Card>
          </div>
          <div className="text-center">
            <Card className="glass-card max-w-4xl mx-auto">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">Teaching Philosophy</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                  I believe in learning through building. Every concept I teach is backed by real-world projects
                  that students can showcase in their portfolios. My approach focuses on making complex topics
                  like Data Structures & Algorithms, Backend Architecture, and Full-Stack Development
                  accessible through practical implementation and career-focused guidance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container-width">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gradient">
            Let's Connect
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <p className="text-sm sm:text-lg text-muted-foreground mb-6 sm:mb-8 px-4">
                Whether you're a fellow developer, a recruiter, or someone curious about tech —
                I'm always open to sharing ideas and collaborating.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12 px-4">
                <Button size="lg" asChild className="group text-sm sm:text-base">
                  <a href="https://www.linkedin.com/in/penugonda-mallikharjunarao-8b13b5230/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
                    LinkedIn
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild className="group text-sm sm:text-base">
                  <a href="https://github.com/mallikharjun9999/" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="container-width py-6 sm:py-8">
          <div className="text-center text-muted-foreground text-sm sm:text-base">
            <p>© 2025 Penugonda Mallikharjunarao.</p>
            <p className="flex items-center justify-center gap-2 mt-2">
              <Mail className="inline-block w-4 h-4 sm:w-5 sm:h-5 align-middle" />
              penumallikharjun@gmail.com
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
