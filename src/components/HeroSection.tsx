import React from 'react';
import { ArrowDownCircle, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Typewriter } from 'react-simple-typewriter';

const HeroSection = () => {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24 relative">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-primary font-medium">Hello, I'm a</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight">
              <span className="text-primary">
                <Typewriter
                  words={['Web Developer', 'Aspiring Graphic Designer']}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </h1>
            <p className="text-slate text-lg max-w-md">
              I create stunning digital experiences that combine beautiful design with powerful functionality.
            </p>
            <div className="flex gap-4 pt-4">
              <Button className="btn-primary">
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="outline" className="btn-outline">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <a href="https://github.com/ShuaibShaban" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-primary transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/shuaib-shaban-598384348/" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
              {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-primary transition-colors">
                <Twitter size={24} />
              </a> */}
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-primary rounded-full opacity-10 absolute -top-4 -left-4"></div>
              <Avatar className="w-64 h-64 md:w-80 md:h-80 border-4 border-white shadow-xl">
                <AvatarImage 
                  src="/lovable-uploads/d21e2e3c-4392-46ea-af0a-fe3581075c23.png" 
                  alt="Portfolio Hero Image" 
                  className="object-cover"
                />
                <AvatarFallback>Profile</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#skills" className="text-primary">
            <ArrowDownCircle size={36} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
