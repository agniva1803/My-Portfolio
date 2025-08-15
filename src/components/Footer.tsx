import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-primary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold gradient-text">{"<JD />"}</div>
            <p className="text-muted-foreground max-w-xs">
              Software Developer specializing in Android development, embedded systems, and AI-driven applications.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary">Quick Links</h3>
            <div className="space-y-2">
              {[
                { label: "About", href: "#about" },
                { label: "Projects", href: "#projects" },
                { label: "Contact", href: "#contact" }
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-primary">Get In Touch</h3>
            <div className="space-y-2">
              <a 
                href="mailto:agnivamukherjee8204@gmail.com"
                className="block text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                agnivamukherjee8204@gmail.com
              </a>
              <a 
                href="tel:+917632005304"
                className="block text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                +91 7632005304
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-primary/10">
          <div className="flex items-center space-x-2 text-muted-foreground mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>by Agniva Mukherjee © {currentYear}</span>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/agniva1803"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-glow"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/agniva-mukherjee-b2647b21a"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-glow"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:agnivamukherjee8204@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-glow"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;