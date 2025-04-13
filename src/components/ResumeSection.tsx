
import React from "react";
import { Download, FileText, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
// import resumePath from "";

const ResumeSection = () => {
  
  return (
    <section className="section-padding bg-navy text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get My Resume
            </h2>
            <p className="text-slate-light text-lg max-w-md">
              Download my resume to get a comprehensive look at my skills,
              experience, and qualifications.
            </p>
            <Button className="bg-primary hover:bg-blue-dark text-white mt-4 flex items-center gap-2">
              <Download size={16} />
              <a
                href="/lovable-uploads/Shuaib-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                View Resume
              </a>
            </Button>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Key Qualifications</h3>
            <Card className="bg-blue-dark/20 border-none">
              <CardContent className="p-6">
                <ul className="space-y-3 text-white">
                  {[
                    "2+ years of experience in web development",
                    "Proficient in modern JavaScript frameworks",
                    "Expert in responsive web design",
                    "UI/UX design skills with Figma",
                    "Strong problem-solving abilities",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <ChevronRight
                        size={20}
                        className="text-primary mt-1 mr-2 flex-shrink-0"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
