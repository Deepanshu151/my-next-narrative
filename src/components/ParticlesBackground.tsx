import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    particlesJS: (tagId: string, config: any) => void;
  }
}

const ParticlesBackground = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load particles.js script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS('particles-js', {
          particles: {
            number: {
              value: 120,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: ['#22c55e', '#10b981', '#059669', '#047857']
            },
            shape: {
              type: 'circle',
              stroke: {
                width: 0,
                color: '#000000'
              }
            },
            opacity: {
              value: 0.6,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 4,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0.5,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 180,
              color: '#22c55e',
              opacity: 0.6,
              width: 1.5
            },
            move: {
              enable: true,
              speed: 3,
              direction: 'none',
              random: true,
              straight: false,
              out_mode: 'bounce',
              bounce: true,
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 600
              }
            }
          },
          interactivity: {
            detect_on: 'canvas',
            events: {
              onhover: {
                enable: true,
                mode: ['grab', 'bubble']
              },
              onclick: {
                enable: true,
                mode: 'push'
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 300,
                line_linked: {
                  opacity: 1,
                  color: '#22c55e'
                }
              },
              bubble: {
                distance: 250,
                size: 8,
                duration: 2,
                opacity: 1,
                speed: 3
              },
              repulse: {
                distance: 150,
                duration: 0.4
              },
              push: {
                particles_nb: 6
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true
        });
      }
    };
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div 
      id="particles-js" 
      ref={particlesRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

export default ParticlesBackground;