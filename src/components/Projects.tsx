import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star, Calendar, Users } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "AI-Powered E-Commerce Platform",
    description: "A modern e-commerce solution with AI-driven product recommendations, real-time inventory management, and secure payment processing.",
    image: "/api/placeholder/600/400",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "TensorFlow"],
    category: "Full-Stack",
    github: "#",
    demo: "#",
    featured: true,
    year: "2024",
    collaborators: 3,
    status: "Live"
  },
  {
    id: 2,
    title: "Real-Time Collaboration Suite",
    description: "Collaborative workspace with real-time document editing, video calls, and project management features.",
    image: "/api/placeholder/600/400",
    technologies: ["Next.js", "Socket.io", "PostgreSQL", "WebRTC"],
    category: "Full-Stack",
    github: "#",
    demo: "#",
    featured: true,
    year: "2024",
    collaborators: 5,
    status: "Live"
  },
  {
    id: 3,
    title: "Machine Learning Dashboard",
    description: "Interactive ML model training dashboard with data visualization and performance analytics.",
    image: "/api/placeholder/400/300",
    technologies: ["Python", "React", "Flask", "scikit-learn"],
    category: "Data Science",
    github: "#",
    demo: "#",
    featured: false,
    year: "2024",
    collaborators: 2,
    status: "Live"
  },
  {
    id: 4,
    title: "Mobile Fitness Tracker",
    description: "Cross-platform mobile app for fitness tracking with social features and AI-powered workout recommendations.",
    image: "/api/placeholder/400/300",
    technologies: ["React Native", "Firebase", "Node.js"],
    category: "Mobile",
    github: "#",
    demo: "#",
    featured: false,
    year: "2024",
    collaborators: 4,
    status: "Live"
  },
  {
    id: 5,
    title: "Blockchain Voting System",
    description: "Secure and transparent voting platform built on blockchain technology with smart contracts.",
    image: "/api/placeholder/400/300",
    technologies: ["Solidity", "Web3.js", "React", "Ethereum"],
    category: "Blockchain",
    github: "#",
    demo: "#",
    featured: false,
    year: "2023",
    collaborators: 3,
    status: "Live"
  },
  {
    id: 6,
    title: "Smart Home IoT Controller",
    description: "IoT device management system with voice control integration and automated scheduling.",
    image: "/api/placeholder/400/300",
    technologies: ["React", "Node.js", "MQTT", "Arduino"],
    category: "IoT",
    github: "#",
    demo: "#",
    featured: false,
    year: "2023",
    collaborators: 2,
    status: "Live"
  },
  {
    id: 7,
    title: "Social Media Analytics Tool",
    description: "Comprehensive analytics platform for social media performance tracking and audience insights.",
    image: "/api/placeholder/400/300",
    technologies: ["Vue.js", "D3.js", "Python", "Redis"],
    category: "Analytics",
    github: "#",
    demo: "#",
    featured: false,
    year: "2023",
    collaborators: 3,
    status: "Live"
  },
  {
    id: 8,
    title: "Virtual Reality Learning Platform",
    description: "Immersive VR educational platform with interactive 3D environments and collaborative features.",
    image: "/api/placeholder/400/300",
    technologies: ["Unity", "C#", "WebXR", "Three.js"],
    category: "VR/AR",
    github: "#",
    demo: "#",
    featured: false,
    year: "2023",
    collaborators: 4,
    status: "Development"
  },
  {
    id: 9,
    title: "Cryptocurrency Trading Bot",
    description: "Automated trading bot with machine learning algorithms for cryptocurrency market analysis.",
    image: "/api/placeholder/400/300",
    technologies: ["Python", "TensorFlow", "React", "WebSocket"],
    category: "FinTech",
    github: "#",
    demo: "#",
    featured: false,
    year: "2023",
    collaborators: 2,
    status: "Live"
  },
  {
    id: 10,
    title: "Cloud Infrastructure Manager",
    description: "DevOps automation tool for managing cloud infrastructure with monitoring and auto-scaling.",
    image: "/api/placeholder/400/300",
    technologies: ["Go", "Kubernetes", "Docker", "AWS"],
    category: "DevOps",
    github: "#",
    demo: "#",
    featured: false,
    year: "2023",
    collaborators: 3,
    status: "Live"
  }
];

const categories = ["All", "Full-Stack", "Mobile", "Data Science", "Blockchain", "IoT", "Analytics", "VR/AR", "FinTech", "DevOps"];

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredProjects = projects.filter(p => selectedCategory === "All" || p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Showcasing innovative solutions across multiple domains - from AI-powered applications to blockchain systems.
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="text-xs"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* All Projects - Using Featured Design */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id}
              className="group hover:shadow-glow-primary/30 transition-all duration-500 hover:scale-[1.02] bg-card/80 backdrop-blur-sm border-border/50 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <div className="w-full h-64 bg-gradient-primary opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4">
                  <Badge variant="secondary" className="backdrop-blur-sm">
                    {project.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <Badge 
                    variant={project.status === "Live" ? "default" : "secondary"} 
                    className="text-xs"
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs px-2 py-0.5">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {project.year}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {project.collaborators} collaborators
                    </span>
                  </div>
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" className="flex-1 group-hover:border-primary/50 transition-colors">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button variant="default" size="sm" className="flex-1 bg-gradient-primary hover:opacity-90">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-3 text-foreground">
              Interested in collaborating?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm always open to discussing new opportunities and innovative projects.
            </p>
            <Button size="lg" className="bg-gradient-primary hover:opacity-90">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};