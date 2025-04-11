
import React, { useEffect, useRef } from 'react';
import { Code, PenTool, Database } from 'lucide-react';
import SkillCategory from './skills/SkillCategory';
import { 
  frontendSkills, 
  backendSkills, 
  designTools, 
  skillDescriptions 
} from './skills/skillsData';

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const frontendRef = useRef<HTMLDivElement>(null);
  const backendRef = useRef<HTMLDivElement>(null);
  const designRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-section-appear');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elementsToObserve = [
      frontendRef.current,
      backendRef.current,
      designRef.current
    ];
    
    elementsToObserve.forEach(element => {
      if (element) {
        observer.observe(element);
      }
    });
    
    return () => {
      elementsToObserve.forEach(element => {
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="section-padding relative bg-slate-light overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container-custom relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <p className="text-primary font-medium mb-2 tracking-wide">EXPERTISE</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 glow-text">My Skills</h2>
          <p className="text-slate max-w-xl mx-auto">
            I combine technical and design expertise to create comprehensive digital solutions.
          </p>
        </div>

        <div className="space-y-16">
          <SkillCategory 
            title="Frontend Development"
            icon={<Code className="mr-2 text-primary" />}
            skills={frontendSkills}
            description={skillDescriptions.frontend}
            forwardedRef={frontendRef}
          />

          <SkillCategory 
            title="Backend Development"
            icon={<Database className="mr-2 text-primary" />}
            skills={backendSkills}
            description={skillDescriptions.backend}
            forwardedRef={backendRef}
            delay="delay-200"
          />

          <SkillCategory 
            title="Design Tools"
            icon={<PenTool className="mr-2 text-primary" />}
            skills={designTools}
            description={skillDescriptions.design}
            forwardedRef={designRef}
            delay="delay-400"
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
