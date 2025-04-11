
import React, { useEffect, useRef, useState } from 'react';
import Image from '@/components/ui/Image';

interface TechSkillProps {
  name: string;
  image: string;
  delay?: number;
  animateOnHover?: boolean;
}

const TechSkill = ({ name, image, delay = 0, animateOnHover = false }: TechSkillProps) => {
  const skillRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (skillRef.current) {
      observer.observe(skillRef.current);
    }
    
    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, [delay]);
  
  return (
    <div 
      ref={skillRef} 
      className={`tech-skill-card opacity-0 transform translate-y-8 transition-all duration-700 ease-out
                  ${isVisible ? 'opacity-100 translate-y-0' : ''}
                  ${animateOnHover ? 'hover:scale-110 hover:-rotate-3' : 'hover:scale-105'}`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`tech-skill-image ${isHovered ? 'shadow-lg border-primary' : ''} 
                       transition-all duration-300 ${animateOnHover && isHovered ? 'rotate-12' : ''}`}>
        <div className={`overflow-hidden rounded-lg transition-all duration-500 ${isHovered ? 'bg-blue-light/30' : ''}`}>
          <Image 
            src={image} 
            alt={`${name} logo`} 
            className={`h-16 w-16 object-contain transition-all duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`} 
          />
        </div>
      </div>
      <p className={`mt-2 font-medium transition-all duration-300 ${isHovered ? 'text-primary font-semibold' : 'text-navy'}`}>
        {name}
      </p>
      <div className={`h-0.5 bg-primary scale-x-0 transition-transform duration-500 ${isHovered ? 'scale-x-100' : ''}`}></div>
    </div>
  );
};

export default TechSkill;
