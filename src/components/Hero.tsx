import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-secondary">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Hello, I'm John Developer
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground">
                Full Stack Developer & UI/UX Designer
              </h2>
            </div>
            
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              Passionate about creating beautiful, functional, and user-centered digital experiences. 
              I turn innovative ideas into reality through clean code and thoughtful design, 
              building solutions that make a difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="xl"
                onClick={() => scrollToSection("about")}
                className="animate-pulse"
              >
                Learn More About Me
                <ChevronDown className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="glass" 
                size="xl"
                onClick={() => scrollToSection("contact")}
              >
                Get In Touch
              </Button>
            </div>
            
            <div className="flex justify-center lg:justify-start space-x-6 pt-4">
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
                <Github className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
                <Linkedin className="h-6 w-6" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
                <Mail className="h-6 w-6" />
              </Button>
            </div>
          </div>
          
          {/* Photo Section */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative">
              {/* Decorative Background Rings */}
              <div className="absolute inset-0 w-80 h-80 md:w-96 md:h-96 bg-gradient-primary rounded-full opacity-20 animate-pulse scale-110"></div>
              <div className="absolute inset-0 w-80 h-80 md:w-96 md:h-96 bg-gradient-secondary rounded-full opacity-30 animate-pulse delay-500 scale-105"></div>
              
              {/* Rotating Border Ring */}
              <div className="absolute inset-0 w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-primary p-1 animate-spin duration-[8s]">
                <div className="w-full h-full rounded-full bg-background"></div>
              </div>
              
              {/* Photo Container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden bg-card/50 backdrop-blur-sm border-4 border-border/50 hover:scale-105 hover:shadow-glow-primary/50 transition-all duration-500 hover:border-primary/50 group">
                {/* Placeholder for photo - replace with your actual photo */}
                <div className="w-full h-full bg-gradient-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto flex items-center justify-center animate-bounce">
                      <span className="text-4xl">📸</span>
                    </div>
                    <p className="text-muted-foreground font-medium">Your Photo Here</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Orbs */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full animate-pulse shadow-lg shadow-accent/50"></div>
              <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-primary rounded-full animate-pulse delay-300 shadow-lg shadow-primary/50"></div>
              <div className="absolute top-1/4 -left-8 w-4 h-4 bg-secondary rounded-full animate-pulse delay-700 shadow-lg shadow-secondary/50"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};