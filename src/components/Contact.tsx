import { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setSuccess(null);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        setSuccess("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          subject: "",
          message: "",
        });
      })
      .catch(() => {
        setSuccess("Failed to send message. Please try again later.");
      })
      .finally(() => setIsSending(false));
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Let's Work Together.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-fancy">
            Interested in collaborating? I'd love to hear from you. Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <form onSubmit={handleSubmit}>
              <CardHeader>
                <CardTitle className="text-2xl">Send me a message</CardTitle>
                <CardDescription className="text-accent color-cyan">
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    name="firstName"
                    placeholder="First Name"
                    className="bg-background/50"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    name="lastName"
                    placeholder="Last Name"
                    className="bg-background/50"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  className="bg-background/50"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="subject"
                  placeholder="Subject"
                  className="bg-background/50"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                <Textarea
                  name="message"
                  placeholder="Your message..."
                  className="min-h-32 bg-background/50"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <Button variant="hero" size="lg" className="w-full" type="submit" disabled={isSending}>
                  {isSending ? "Sending..." : "Send Message"}
                </Button>
                {success && (
                  <p className={`text-sm text-center ${success.includes("successfully") ? "text-green-500" : "text-red-500"}`}>
                    {success}
                  </p>
                )}
              </CardContent>
            </form>
          </Card>

          <div className="space-y-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">yashdoke1234@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-muted-foreground">+91 8652040439</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Location</h3>
                    <p className="text-muted-foreground">Mumbai, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>Follow Me</CardTitle>
                <CardDescription>Stay connected and follow my journey</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <a href="https://github.com/YsD9954" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
                      <Github className="h-5 w-5" />
                    </Button>
                  </a>
                  <a href="https://www.linkedin.com/in/yashdoke2004/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </a>
                  <a href="https://www.instagram.com/ysd.2004/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="hover:scale-110 transition-transform">
                      <Instagram className="h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
