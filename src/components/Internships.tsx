"use client";

import { Calendar, MapPin, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import jpMorganLogo from "@/components/images/ozibook_logo (1).png";
import techLabsLogo from "@/components/images/jmedia_logo.png";
import { motion } from "framer-motion";

interface Internship {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies: string[];
  companyLogo: string;
  githubLink?: string;
}

const internships: Internship[] = [
  {
    id: 1,
    company: "Ozibook",
    position: "Technical Assistant Intern",
    duration: "September 2024 - Jan 2025",
    location: "Bangalore, Karnataka, India",
    description: [
      "Automated Discord operations & user onboarding using AI bots.",
      "Automated Marketing Workflows with Low-Code Integrations.",
      "Delivered Scalable, Team-Friendly Automation Solutions.",
    ],
    technologies: ["Notion", "Canva", "Python", "Community Management", "Discord API"],
    companyLogo: jpMorganLogo,
  },
  {
    id: 2,
    company: "Jmedia Corp. (Phoenix Labs)",
    position: "AI Intern",
    duration: "September 2024 - March 2025",
    location: "Dallas, Texas, United States",
    description: [
      "Built and Deployed ML Models for Production.",
      "Designed Optimized API Services with CI/CD Integration.",
      "Collaborated Across Teams with Testing and Documentation.",
    ],
    technologies: [
      "Python",
      "Flask",
      "scikit-learn",
      "pandas",
      "joblib",
      "Postman",
      "Render",
      "GitHub (CI/CD)",
      "REST APIs",
    ],
    companyLogo: techLabsLogo,
    githubLink: "https://github.com/YsD9954/JMEDIA_INTERNSHIP.git",
  },
];

export const Internships = () => {
  return (
    <section
      id="internships"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
          Professional Experience
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-fancy">
          Real-world internships strengthened my technical foundation and equipped me with a versatile skill set through hands-on problem solving.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
        {internships.map((internship, index) => (
          <motion.div
            key={internship.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-lg shadow-md hover:border-cyan-500 transition-all duration-300 hover:shadow-cyan-500/20 group">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={internship.companyLogo}
                      alt={`${internship.company} logo`}
                      className="w-14 h-14 object-contain rounded-full border border-white/10 shadow-sm p-1"
                    />
                    <div>
                      <h3 className="text-xl font-semibold text-white">{internship.company}</h3>
                      <p className="text-sm text-cyan-400 font-medium  ">{internship.position}</p>
                    </div>
                  </div>

                  {internship.githubLink && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="border border-cyan-600 text-cyan-500 hover:bg-cyan-600 hover:text-white transition-colors mt-1"
                      onClick={() => window.open(internship.githubLink, "_blank")}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Work
                    </Button>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-4 mb-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{internship.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{internship.location}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">
                    Key Responsibilities
                  </h5>
                  <ul className="space-y-2">
                    {internship.description.map((desc, i) => (
                      <li
                        key={i}
                        className="text-muted-foreground text-sm leading-relaxed flex items-start gap-2 font-[Poppins]"
                      >
                        <span className="w-1 h-1 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></span>
                        {desc}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="text-sm font-semibold text-white mb-3 uppercase tracking-wide">
                    Technologies Used
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {internship.technologies.map((tech, i) => (
                      <Badge
                        key={i}
                        variant="outline"
                        className="border-border/30 text-muted-foreground hover:border-cyan-400 hover:text-cyan-400 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Internships;
