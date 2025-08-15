import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, Download } from "lucide-react";

const Hero = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = ["Full Stack Developer", "Android Developer", "Machine Learning Engineer"];
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 150;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (charIndex < currentRole.length) {
          setText(currentRole.slice(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (charIndex > 0) {
          setText(currentRole.slice(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, roles]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Falling Asteroids Background Effect */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-8 bg-gradient-to-b from-primary to-transparent rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              animationName: 'asteroid-fall',
              animationDuration: `${2 + Math.random() * 4}s`,
              animationDelay: `${Math.random() * 5}s`,
              animationIterationCount: 'infinite',
              animationTimingFunction: 'linear',
              transform: `rotate(${15 + Math.random() * 30}deg)`
            }}
          />
        ))}
        {[...Array(15)].map((_, i) => (
          <div
            key={`large-${i}`}
            className="absolute w-2 h-12 bg-gradient-to-b from-primary/80 to-transparent rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              animationName: 'asteroid-fall',
              animationDuration: `${3 + Math.random() * 3}s`,
              animationDelay: `${Math.random() * 6}s`,
              animationIterationCount: 'infinite',
              animationTimingFunction: 'ease-in',
              transform: `rotate(${20 + Math.random() * 25}deg)`
            }}
          />
        ))}
        {[...Array(10)].map((_, i) => (
          <div
            key={`small-${i}`}
            className="absolute w-0.5 h-6 bg-gradient-to-b from-primary/60 to-transparent rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              animationName: 'asteroid-fall',
              animationDuration: `${1.5 + Math.random() * 2}s`,
              animationDelay: `${Math.random() * 4}s`,
              animationIterationCount: 'infinite',
              animationTimingFunction: 'ease-out',
              transform: `rotate(${10 + Math.random() * 40}deg)`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Avatar */}
          <div className="mb-8 flex justify-center">
            <Avatar className="w-32 h-32 glass-card glow-cyan hover-glow transition-all duration-300">
              <AvatarImage 
                src="/lovable-uploads/fe66ebca-76fa-4b75-a4a0-09bbb546843b.png" 
                alt="Agniva Mukherjee Profile"
                className="object-cover"
              />
              <AvatarFallback className="text-4xl font-mono font-bold gradient-text">
                AM
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Animated Name Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 opacity-0 fade-in-up">
            <span className="gradient-text animate-pulse">Hi, I'm Agniva Mukherjee</span>
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
            Seeking role in software development with expertise in Android development, embedded systems, and cloud infrastructure. 
            Experienced in open-source contributions, GitHub-based collaboration, and AI-driven applications.
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