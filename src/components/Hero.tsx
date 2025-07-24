import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import profileImage from "../components/images/profile.jpg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
      {/* Decorative Background Circles */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500 opacity-20 rounded-full blur-[120px] animate-ping-slow" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-500 opacity-20 rounded-full blur-[120px] animate-pulse-slow" />
      {/* Additional Corner Orbs */}
      <div className="absolute -top-10 right-10 w-32 h-32 bg-cyan-400/30 rounded-full blur-2xl animate-float" />
      <div className="absolute -bottom-10 left-10 w-28 h-28 bg-rose-500/20 rounded-full blur-2xl animate-float-slow" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8 animate-fade-in text-center lg:text-left relative">
            {/* Welcome Badge */}
            <div className="absolute -top-12 left-0">
              <div className="inline-block px-6 py-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-xl animate-slide-in">
                👋 Hi! Welcome to my portfolio
              </div>
            </div>

            <div className="space-y-4 pt-10">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
                I’m <span className="text-pink-500">Yash Doke</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-300">
                IOT & ML ENTHUSIAST | PROBLEM SOLVER
              </h2>
            </div>

            <p className="text-lg md:text-xl text-gray-300/80 leading-relaxed">
              💻 Code in mind, 🔋 circuits in hand, 💡 purpose in every build!
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

          {/* Right Side - Profile Image with animated design */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative w-72 h-[450px] rounded-3xl p-1 bg-background shadow-xl transition-all duration-300 hover:scale-105 group">
              {/* Decorative Animated Circles */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 rounded-full border border-purple-400/40 animate-pulse-slow blur-sm group-hover:scale-110 transition duration-500" />
                <div className="absolute w-64 h-64 rounded-full border border-blue-400/30 animate-float-slow blur-md" />
              </div>

              {/* Corner Animated Shapes */}
              <div className="absolute -top-6 -right-6 w-10 h-10 bg-accent/30 rounded-full blur-xl animate-float" />
              <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-primary/30 rounded-full blur-2xl animate-float-slow" />

              {/* Dashed Spinner Ring */}
              <div className="absolute -bottom-10 right-1/2 translate-x-1/2 w-32 h-32 border-2 border-dashed border-muted-foreground rounded-full animate-spin-slow opacity-20" />

              {/* Actual Profile Image */}
              <div className="rounded-3xl overflow-hidden h-full w-full">
                <img
                  src={profileImage}
                  alt="Yash Doke"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Icon */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};
