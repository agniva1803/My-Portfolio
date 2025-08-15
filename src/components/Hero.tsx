import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  const [text, setText] = useState("");
  const fullText = "Full Stack Developer & AI Engineer";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Matrix Effect */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-full w-px bg-primary animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Avatar/Logo */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 rounded-full glass-card flex items-center justify-center glow-cyan hover-glow transition-all duration-300">
              <span className="text-4xl font-mono font-bold gradient-text">{"< />"}</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 opacity-0 fade-in-up">
            <span className="gradient-text">Agniva Mukherjee</span>
          </h1>

          {/* Typewriter Subtitle */}
          <div className="text-xl md:text-2xl mb-8 h-8 flex justify-center items-center opacity-0 fade-in-up stagger-1">
            <span className="font-mono text-muted-foreground">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto opacity-0 fade-in-up stagger-2">
            Experienced in Android development, embedded systems, and cloud infrastructure. 
            Passionate about AI-driven applications, open-source contributions, and building scalable solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 opacity-0 fade-in-up stagger-3">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/80 text-primary-foreground hover-glow"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary/10"
              onClick={() => window.open('https://drive.google.com/file/d/12Yv1FlWiDmpo-7OTeY-4ykXsgmEnqwAE/view?usp=drivesdk', '_blank')}
            >
              <Download className="mr-2 h-5 w-5" />
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 opacity-0 fade-in-up stagger-4">
            <a 
              href="https://github.com/agniva1803" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-glow"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/agniva-mukherjee-b2647b21a" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-glow"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:agnivamukherjee8204@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover-glow"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 fade-in-up stagger-4">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;