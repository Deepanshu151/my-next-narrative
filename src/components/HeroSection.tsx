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
          <p className="text-lg md:text-xl text-text-secondary mb-4 animate-slide-in-left">
            Hello, I'm
          </p>
          
          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Deepanshu
            </span>
          </h1>
          
          {/* Typed.js text */}
          <div className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-8 h-16 flex items-center justify-center animate-slide-in-right">
            <span className="text-text-secondary">I'm a </span>
            <span ref={typedRef} className="text-primary ml-2"></span>
          </div>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in">
            B.Tech CSE student passionate about building scalable web applications, 
            AI-powered solutions, and solving real-world problems with code.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up">
            <button
              onClick={scrollToProjects}
              className="px-8 py-3 bg-gradient-primary text-primary-foreground font-semibold rounded-lg 
                       transition-all duration-300 hover:scale-105 hover:shadow-glow"
            >
              View My Work
            </button>
            <button
              onClick={scrollToContact}
              className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-lg 
                       transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105"
            >
              Get In Touch
            </button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 animate-fade-in">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full border border-border transition-all duration-300 
                          hover:scale-110 hover:shadow-glow ${social.color}`}
                aria-label={social.name}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;