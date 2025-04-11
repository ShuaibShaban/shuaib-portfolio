
import React, { useEffect, useState } from 'react';
import TechSkill from './TechSkill';

interface SkillCategoryProps {
  title: string;
  icon: React.ReactNode;
  skills: Array<{ name: string; image: string }>;
  description: string;
  forwardedRef: React.RefObject<HTMLDivElement>;
  delay?: string;
}

const SkillCategory = ({ 
  title, 
  icon, 
  skills, 
  description, 
  forwardedRef,
  delay = ""
}: SkillCategoryProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.3 }
    );
    
    if (forwardedRef.current) {
      observer.observe(forwardedRef.current);
    }
    
    return () => {
      if (forwardedRef.current) {
        observer.unobserve(forwardedRef.current);
      }
    };
  }, [forwardedRef]);
  
  return (
    <div 
      ref={forwardedRef} 
      className={`opacity-0 transform translate-y-12 transition-all duration-700 ${delay} ${isInView ? 'opacity-100 translate-y-0' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 
        className={`text-2xl font-bold text-navy mb-6 flex items-center transition-transform duration-500 ${isHovered ? 'scale-105' : ''}`}
      >
        <span className={`text-primary mr-2 transition-all duration-500 ${isHovered ? 'rotate-12 scale-125' : ''}`}>
          {icon}
        </span>
        <span className={`relative transition-all duration-500 ${isHovered ? 'text-primary' : ''}`}>
          {title}
          {isHovered && (
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary transform scale-x-100 origin-left transition-transform duration-300"></span>
          )}
        </span>
      </h3>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <TechSkill 
            key={skill.name} 
            name={skill.name} 
            image={skill.image}
            delay={index * 100}
            animateOnHover={isHovered}
          />
        ))}
      </div>
      <p className={`text-slate mt-6 transition-all duration-700 ${isHovered ? 'pl-4 border-l-2 border-primary' : ''}`}>
        {description}
      </p>
    </div>
  );
};

export default SkillCategory;
