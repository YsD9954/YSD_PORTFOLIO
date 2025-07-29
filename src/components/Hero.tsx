import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import ProfilePic from "../components/images/ysd_linkdinpic-Photoroom (1).jpg";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const [text] = useTypewriter({
    words: [
      "IoT & Embedded Systems Engineer",
      "AI/ML Enthusiast",
      "DSA Geek",
      "Innovator",
      "Tech Explorer",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouse = useRef({ x: null, y: null });
  const navigate = useNavigate();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: any[] = [];
    const numParticles = 90;

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1,
        dx: Math.random() * 0.6 - 0.3,
        dy: Math.random() * 0.6 - 0.3,
      });
    }

    const connectDistance = 120;

    function drawLines() {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectDistance) {
            ctx.beginPath();
            ctx.strokeStyle = "rgba(144, 202, 249, 0.15)";
            ctx.lineWidth = 1;
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
            ctx.closePath();
          }
        }
      }
    }

    function drawMouseLines() {
      if (mouse.current.x === null || mouse.current.y === null) return;

      for (let i = 0; i < particles.length; i++) {
        const dx = particles[i].x - mouse.current.x;
        const dy = particles[i].y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < connectDistance) {
          ctx.beginPath();
          ctx.strokeStyle = "rgba(0, 255, 255, 0.2)";
          ctx.lineWidth = 0.8;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.current.x, mouse.current.y);
          ctx.stroke();
          ctx.closePath();
        }
      }
    }

    function animate() {
      ctx.fillStyle = "#0f0c29";
      ctx.fillRect(0, 0, width, height);

      particles.forEach((p) => {
        ctx.beginPath();
        ctx.fillStyle = "#00bcd4";
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x <= 0 || p.x >= width) p.dx *= -1;
        if (p.y <= 0 || p.y >= height) p.dy *= -1;
      });

      drawLines();
      drawMouseLines();

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-screen text-white flex items-center justify-center px-6 overflow-hidden pt-24"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" />

      <div className="max-w-6xl w-full z-10 space-y-10">
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-center gap-4 animate-fade-in-up">
          <div className="relative w-[200px] h-[200px] overflow-hidden rounded-full border-[4px] border-cyan-500 shadow-lg shadow-cyan-500/30 animate-none">
            <img
              src={ProfilePic}
              alt="Profile"
              className="absolute top-1/2 left-1/2 w-[220px] h-[220px] transform -translate-x-1/2 -translate-y-1/2 object-cover"
            />
          </div>

          <div className="text-center md:text-left">
            <p className="inline-block text-1xl mb-1 tracking-wide px-5 py-1 rounded-full bg-gradient-primary text-black font-bold shadow-md transition-all duration-500 ease-in-out">
              Welcome to my portfolio. I’m
            </p>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Yash Doke
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-200 mt-2 h-8">
              <span>{text}</span>
              <Cursor cursorStyle="|" />
            </h2>
          </div>
        </div>

        <p className="text-1xl md:text-lg max-w-3xl mx-auto text-gray-300 text-center animate-fade-in-up delay-200 font-[poppins]">
          Engineering ideas into reality. <br />
          Blending code, circuits & creativity to build smarter systems and modern digital experiences.
        </p>

        <div className="flex justify-center gap-4 animate-fade-in-up delay-300">
          <Button
            variant="hero"
            size="lg"
            onClick={() => navigate("/about")}
          >
            Explore <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => navigate("/contact")}
          >
            Contact Me <Mail className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
