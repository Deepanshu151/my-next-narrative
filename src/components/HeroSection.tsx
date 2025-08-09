import { useEffect, useRef } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiExternalLink } from 'react-icons/fi';
import ParticlesBackground from './ParticlesBackground';

declare global {
  interface Window {
    Typed: any;
  }
}

const HeroSection = () => {
  const typedRef = useRef<HTMLSpanElement>(null);
  const typedInstance = useRef<any>(null);

  useEffect(() => {
    // Load Typed.js script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/typed.js@2.0.12';
    script.onload = () => {
      if (window.Typed && typedRef.current) {
        typedInstance.current = new window.Typed(typedRef.current, {
          strings: [
            'Full-Stack Developer',
            'AI Enthusiast',
            'Problem Solver',
            'Software Engineer'
          ],
          typeSpeed: 100,
          backSpeed: 60,
          loop: true,
          backDelay: 1000,
          startDelay: 500
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FiGithub,
      url: 'https://github.com/Deepanshu151',
      color: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      icon: FiLinkedin,
      url: 'https://www.linkedin.com/in/deepanshu-gautam-6743b82b3/',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: FiMail,
      url: 'mailto:deepanshu15200@gmail.com',
      color: 'hover:text-red-400'
    },
    {
      name: 'LeetCode',
      icon: FiExternalLink,
      url: 'https://leetcode.com/u/Tc2obL3ObN/',
      color: 'hover:text-yellow-400'
    }
  ];

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <ParticlesBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Greeting */}
          <p className="text-lg md:text-xl text-text-secondary mb-4 animate-slide-in-left hover:text-primary transition-colors duration-300">
            Hello, I'm
          </p>
          
          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up group cursor-default">
            <span className="bg-gradient-primary bg-clip-text text-transparent 
                           hover:animate-pulse transition-all duration-300 
                           group-hover:drop-shadow-[0_0_20px_hsl(var(--primary))]">
              Deepanshu
            </span>
          </h1>
          
          {/* Typed.js text */}
          <div className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-8 h-16 flex items-center justify-center animate-slide-in-right">
            <span className="text-text-secondary">I'm a </span>
            <span ref={typedRef} className="text-primary ml-2 drop-shadow-glow"></span>
          </div>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in 
                        hover:text-foreground transition-colors duration-500 cursor-default">
            B.Tech CSE student passionate about building scalable web applications, 
            AI-powered solutions, and solving real-world problems with code.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
            <button
              onClick={scrollToProjects}
              className="group px-8 py-3 bg-gradient-primary text-primary-foreground font-semibold rounded-lg 
                       transition-all duration-300 hover:scale-105 hover:shadow-glow 
                       relative overflow-hidden before:absolute before:inset-0 
                       before:bg-white/20 before:scale-x-0 before:origin-left 
                       before:transition-transform before:duration-300 
                       hover:before:scale-x-100 active:scale-95"
            >
              <span className="relative z-10">View My Work</span>
            </button>
            <button
              onClick={scrollToContact}
              className="group px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg 
                       transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105
                       relative overflow-hidden before:absolute before:inset-0 
                       before:bg-primary before:scale-x-0 before:origin-left 
                       before:transition-transform before:duration-300 
                       hover:before:scale-x-100 active:scale-95"
            >
              <span className="relative z-10">Get In Touch</span>
            </button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-fade-in">
            {socialLinks.map((social, index) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-3 rounded-full border border-border transition-all duration-300 
                          hover:scale-110 hover:shadow-glow ${social.color}
                          hover:rotate-12 active:scale-95 relative overflow-hidden
                          before:absolute before:inset-0 before:bg-primary/10 
                          before:scale-0 before:transition-transform before:duration-300
                          hover:before:scale-100 before:rounded-full`}
                aria-label={social.name}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fade-in 0.6s ease-out forwards'
                }}
              >
                <social.icon size={24} className="relative z-10 group-hover:animate-pulse" />
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Enhanced Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow 
                      hover:scale-110 transition-transform duration-300 cursor-pointer group"
           onClick={() => {
             const element = document.querySelector('#about');
             if (element) {
               element.scrollIntoView({ behavior: 'smooth' });
             }
           }}>
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center 
                        group-hover:border-primary/80 group-hover:shadow-glow transition-all duration-300">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse 
                          group-hover:bg-primary/80 transition-colors duration-300"></div>
        </div>
        <p className="text-xs text-text-secondary mt-2 opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300">Scroll Down</p>
      </div>
    </section>
  );
};

export default HeroSection;