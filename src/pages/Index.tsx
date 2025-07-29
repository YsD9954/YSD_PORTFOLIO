import Navigation  from "@/components/Navigation";
import  Hero  from "@/components/Hero";
import  About  from "@/components/About";
import  Skills  from "@/components/Skills";
import  Internships  from "@/components/Internships";
import  Projects  from "@/components/Projects";
import  Contact  from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen  w-full bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600 bg-[length:200%_200%] animate-gradient-move">
      <Navigation />
      <main>
        <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="internships">
        <Internships />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
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
