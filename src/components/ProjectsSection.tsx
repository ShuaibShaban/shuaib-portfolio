
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from '../components/ui/Image';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard = ({ title, description, image, tags, githubUrl, liveUrl }: ProjectCardProps) => (
  <Card className="project-card h-full flex flex-col">
    <div className="aspect-video w-full bg-slate-light overflow-hidden">
      <Image src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <CardContent className="p-6 flex-grow">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-slate mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <Badge key={tag} variant="outline" className="bg-blue-light text-blue-dark border-none">
            {tag}
          </Badge>
        ))}
      </div>
    </CardContent>
    <CardFooter className="p-6 pt-0 flex gap-4">
      {githubUrl && (
        <Button variant="outline" size="sm">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <Github size={16} /> Code
          </a>
        </Button>
      )}
      {liveUrl && (
        <Button variant="default" size="sm">
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            <ExternalLink size={16} /> Live Demo
          </a>
        </Button>
      )}
    </CardFooter>
  </Card>
);

const ProjectsSection = () => {
  const projects = [
    {
      title: 'BravTech',
      description: 'A website for a phone and laptop repair technician offering professional repair services.',
      image: '/lovable-uploads/btech.png',
      tags: ['HTML', 'CSS', 'JavaScript', 'Sass'],
      githubUrl: 'https://github.com/ShuaibShaban/BravTech',
      liveUrl: 'https://bravtech.vercel.app'
    },
    {
      title: 'Cocktails App',
      description: 'A website about cocktails where you can explore different drinks, see their ingredients, and learn methods of preparation.',
      image: '/lovable-uploads/drinks finder.png',
      tags: ['HTML', 'CSS', 'JavaScript', 'API Integration'],
      githubUrl: 'https://github.com/ShuaibShaban/Cocktails-App',
      liveUrl: 'https://phase-1-final-project.vercel.app'
    },
    {
      title: 'Portfolio Website',
      description: 'A professional portfolio website showcasing projects and skills with a modern, responsive design.',
      image: '/lovable-uploads/portfolio.png',
      tags: ['React Vite', 'Tailwind CSS', 'Typescript', 'ShadcnUi'],
      githubUrl: 'https://github.com/ShuaibShaban/shuaib-portfolio',
      // liveUrl: 'https://example.com'
    },
    {
      title: 'Petify',
      description: 'A website about animals, specifically dogs and cats. People looking for pets can use this platform to choose the different pets they would want to adopt.',
      image: '/lovable-uploads/petify.png',
      tags: ['Reactjs', 'API Intergration', 'Tailwindcss'],
      githubUrl: 'https://github.com/ShuaibShaban/Shuaib_Portfolio',
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">My Work</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Recent Projects</h2>
          <p className="text-slate max-w-xl mx-auto">
            Here are some of my recent projects showcasing my skills in web development and design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
