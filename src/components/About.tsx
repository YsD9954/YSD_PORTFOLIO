import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    year: "2020 - 2022",
    location: "Stanford, CA",
    description: "Specialized in Machine Learning and Software Engineering. Graduated Magna Cum Laude with a focus on full-stack development and AI applications."
  },
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "University of California, Berkeley",
    year: "2016 - 2020",
    location: "Berkeley, CA",
    description: "Core curriculum in software development, data structures, and computer systems. Participated in multiple hackathons and open-source projects."
  }
];

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    year: "2023",
    validity: "Valid until 2026"
  },
  {
    title: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    year: "2023",
    validity: "Valid until 2026"
  },
  {
    title: "Meta Frontend Developer Professional",
    issuer: "Meta",
    year: "2022",
    validity: "Valid until 2025"
  }
];

const achievements = [
  "Dean's List for 6 consecutive semesters",
  "Winner of TechCrunch Disrupt Hackathon 2021",
  "Published research paper on 'Modern Web Development Practices'",
  "Open source contributor with 500+ GitHub stars",
  "Mentor for 50+ junior developers"
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            About Me & Qualifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate developer with strong academic foundation and industry experience. 
            Here's my educational background and professional qualifications that shape my expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h3>
            
            {education.map((edu, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow-primary/10 transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <CardTitle className="text-xl text-foreground">{edu.degree}</CardTitle>
                      <CardDescription className="text-primary font-medium">{edu.institution}</CardDescription>
                    </div>
                    <Badge variant="secondary" className="shrink-0">
                      {edu.year}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {edu.location}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground flex items-center gap-3">
              <Award className="h-6 w-6 text-accent" />
              Certifications
            </h3>
            
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-glow-accent/10 transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <CardTitle className="text-lg text-foreground">{cert.title}</CardTitle>
                      <CardDescription className="text-accent font-medium">{cert.issuer}</CardDescription>
                    </div>
                    <Badge variant="outline" className="shrink-0">
                      {cert.year}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    {cert.validity}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Achievements */}
        <Card className="bg-gradient-secondary/50 backdrop-blur-sm border-border/50">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-foreground">
              Key Achievements & Recognition
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-card/30 rounded-lg border border-border/30">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                  <p className="text-foreground/90">{achievement}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};