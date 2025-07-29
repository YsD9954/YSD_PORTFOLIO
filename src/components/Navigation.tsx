import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Internships", path: "/internships" },
    { label: "Skills", path: "/skills" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  const navigateToPage = (path: string) => {
    if (location.pathname !== path) {
      navigate(path);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent"
          >
            Portfolio
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.path}
                onClick={() => navigateToPage(item.path)}
                className={`relative font-medium text-foreground/80 hover:text-primary transition-colors duration-300 ${
                  location.pathname === item.path ? "text-primary" : ""
                }`}
                whileHover="hover"
              >
                <motion.span
                  className="relative"
                  variants={{
                    hover: {
                      color: "#06b6d4",
                    },
                  }}
                >
                  {item.label}
                  <motion.span
                    className="absolute left-0 -bottom-1 h-0.5 bg-primary rounded"
                    initial={{ width: 0 }}
                    animate={{
                      width:
                        location.pathname === item.path ? "100%" : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.span>
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Icon */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="md:hidden mt-4 pb-4 border-t border-border/50"
            >
              <div className="flex flex-col space-y-4 pt-4">
                {navItems.map((item) => (
                  <motion.button
                    key={item.path}
                    onClick={() => navigateToPage(item.path)}
                    whileTap={{ scale: 0.95 }}
                    className={`text-left text-foreground/80 hover:text-primary transition-colors duration-200 font-medium py-2 px-2 ${
                      location.pathname === item.path ? "text-primary" : ""
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navigation;
