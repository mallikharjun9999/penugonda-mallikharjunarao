import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ThemeToggle";

const projects = [
  {
    title: "🍽️ Food Delivery Platform API",
    description: "A comprehensive backend API for a complete food delivery platform with JWT authentication, restaurant management, cart functionality, order processing, and payment integration.",
    features: [
      "Secure JWT Authentication",
      "Restaurant & Menu APIs",
      "Cart Operations",
      "Order Processing & Tracking",
      "Payment Integration",
      "Reviews & Ratings System"
    ],
    tech: ["Node.js", "Express.js", "SQLite", "JWT"],
    github: "https://github.com/mallikharjun9999/food-delivery-platform-backend.git",
    live: null
  },
  {
    title: "✈️ Travel Booking Platform API",
    description: "Complete backend API for travel booking platform supporting flight search & booking, hotel listings, holiday packages with secure payment processing.",
    features: [
      "Flight Search & Booking",
      "Hotel Room Management",
      "Holiday Package Booking",
      "Payment Processing",
      "Real-time Availability",
      "Modular REST APIs"
    ],
    tech: ["Node.js", "Express.js", "SQLite", "JWT"],
    github: "https://github.com/mallikharjun9999/travel-booking-platform-backend-api.git",
    live: null
  },
  {
    title: "🎬 Streaming Platform Backend",
    description: "Feature-rich OTT platform backend supporting Movies, Series, Live Sports with subscription management, DRM protection, and multi-device streaming.",
    features: [
      "Multi-content Support",
      "Subscription Management",
      "DRM Protection",
      "Geo-restrictions",
      "Multi-language Support",
      "Real-time Sports Updates"
    ],
    tech: ["Node.js", "Express.js", "SQLite", "JWT"],
    github: "https://github.com/mallikharjun9999/streaming-platform-backend.git",
    live: null
  },
  {
    title: "🧠 AI Startup Generator Suite",
    description: "AI-powered startup ideation platform using LangChain and Groq's LLaMA 3 model to generate complete business blueprints from startup ideas.",
    features: [
      "AI-generated Business Plans",
      "Market Analysis",
      "Financial Planning",
      "Competitor Research",
      "Tech Stack Suggestions",
      "6-Month Roadmap"
    ],
    tech: ["Python", "Streamlit", "LangChain", "Groq LLaMA 3"],
    github: "https://github.com/mallikharjun9999/startup_suggest.git",
    live: null
  },
  {
    title: "📝 Quiz REST API",
    description: "Spring Boot-based quiz management system with user authentication, question management, answer submission, and result tracking.",
    features: [
      "User Management",
      "Question Bank",
      "Answer Submission",
      "Result Tracking",
      "REST API Architecture",
      "Persistent Database"
    ],
    tech: ["Java", "Spring Boot", "H2 Database"],
    github: "https://github.com/mallikharjun9999/quiz-repository1.git",
    live: null
  },
  {
    title: "🍽️ QuickBite AI",
    description: "AI-powered recipe app using Genkit & Google AI to suggest meals from ingredients.",
    features: [
      "Suggests recipes based on your ingredients",
      "Genkit & Google AI integration",
      "User-friendly interface"
    ],
    tech: ["Genkit", "Google AI", "React", "Vite"],
    github: "https://github.com/mallikharjun9999/quick-bite-ai",
    live: "https://studio--quickbite-ai-rnk9n.us-central1.hosted.app/",
    cta: "Try QuickBite AI"
  },
  {
    title: "🎵 LyricAssist AI",
    description: "AI songwriting assistant that generates lyrics by genre, mood, or theme.",
    features: [
      "AI-generated lyrics",
      "Genre, mood, and theme selection",
      "Instant results"
    ],
    tech: ["Genkit", "Google AI", "React", "Vite"],
    github: "https://github.com/mallikharjun9999/lyrical-assit-ai",
    live: "https://studio--lyric-assist-20167.us-central1.hosted.app/",
    cta: "Try LyricAssist AI"
  },
  {
    title: "💎 MediGem AI – Health Assistant",
    description: "AI-based health monitoring app with role-based login and vitals tracking.",
    features: [
      "Role-based login",
      "Vitals tracking",
      "AI health insights"
    ],
    tech: ["Genkit", "Google AI", "React", "Vite"],
    github: "https://github.com/mallikharjun9999/medi-gem-ai",
    live: "https://studio--medigem-ai-gkodu.us-central1.hosted.app/",
    cta: "Use MediGem AI"
  },
  {
    title: "📺 YouTube Automation with n8n",
    description: "n8n workflow that filters trending YouTube videos using Google Gemini and Airtable.",
    features: [
      "Automated YouTube video filtering",
      "Google Gemini & Airtable integration",
      "n8n workflow"
    ],
    tech: ["n8n", "Google Gemini", "Airtable"],
    github: "https://github.com/mallikharjun9999/youtube-automation.git",
    live: null,
    cta: "View GitHub Repo"
  }
];

const Projects = () => (
  <div className="min-h-screen bg-background">
    {/* Navigation */}
    <nav className="fixed top-0 w-full z-50 glass-card">
      <div className="container-width">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Back to Home</span>
              </Link>
            </Button>
            <div className="text-lg sm:text-xl font-bold text-gradient">
              Projects
            </div>
          </div>
          <ThemeToggle />
        </div>
      </div>
    </nav>

    <section id="projects" className="section-padding pt-24">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="container-width"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-gradient">
          Featured Projects
        </h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto text-sm sm:text-base">
          A collection of my work showcasing expertise in full-stack development, AI integration, and backend architecture.
        </p>
        
        <div className="grid gap-6 sm:gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="glass-card hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg sm:text-xl md:text-2xl leading-tight">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-primary text-sm sm:text-base">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-xs sm:text-sm">
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-3 text-primary text-sm sm:text-base">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button variant="outline" size="sm" asChild className="w-full sm:w-auto">
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            GitHub
                          </a>
                        </Button>
                        {project.live && (
                          <Button variant="outline" size="sm" asChild className="w-full sm:w-auto">
                            <a href={project.live} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              {project.cta || "Live Demo"}
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>

    {/* Footer */}
    <footer className="border-t mt-16">
      <div className="container-width py-8">
        <div className="text-center text-muted-foreground text-sm sm:text-base">
          <p>© 2025 Penugonda Mallikharjunarao.</p>
          <p className="flex items-center justify-center gap-2 mt-2">
            <span>penumallikharjun@gmail.com</span>
          </p>
        </div>
      </div>
    </footer>
  </div>
);

export default Projects;