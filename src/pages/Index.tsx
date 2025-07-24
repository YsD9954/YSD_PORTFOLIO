import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Internships } from "@/components/Internships";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <About />
        <Internships/>
        <Skills />
        <Projects />

        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 bg-card/30 border-t border-border/50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 Yash Doke. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
