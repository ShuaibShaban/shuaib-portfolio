
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SkillCard = ({ icon, title, description }: SkillCardProps) => (
  <Card className="skill-card">
    <CardContent className="p-6">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-slate">{description}</p>
    </CardContent>
  </Card>
);

export default SkillCard;
