
import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold">
              Portfolio<span className="text-primary">.</span>
            </a>
            <p className="text-slate-light mt-2 max-w-md">
              Creating stunning digital experiences with beautiful design and powerful functionality.
            </p>
          </div> */}
          
          <div className="flex gap-4">
            <a 
              href="https://github.com/ShuaibShaban" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-dark/30 p-3 rounded-full text-white hover:bg-primary transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/shuaib-shaban-598384348/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-dark/30 p-3 rounded-full text-white hover:bg-primary transition-colors"
            >
              <Linkedin size={20} />
            </a>
            {/* <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-dark/30 p-3 rounded-full text-white hover:bg-primary transition-colors"
            >
              <Twitter size={20} />
            </a> */}
          </div>
        </div>
        
        <hr className="border-blue-dark/30 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-light text-sm">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <p className="text-slate-light text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart size={16} className="text-primary mx-1" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
