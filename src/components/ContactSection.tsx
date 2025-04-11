import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useForm, ValidationError } from '@formspree/react';
// import ContactImg from "../components/assets/contact_illustration.jpg"

const ContactSection = () => {
  const { toast } = useToast();
  const [state, handleSubmit] = useForm("xoveykoq"); // your Formspree form ID

  React.useEffect(() => {
    if (state.succeeded) {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll respond as soon as possible.",
      });
    }
  }, [state.succeeded, toast]);

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Contact Me</h2>
          <p className="text-slate max-w-xl mx-auto">
            Have a project in mind or want to chat? Feel free to reach out through the form below or via email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardContent className="p-6 space-y-8">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-navy">Contact Information</h3>
                  <p className="text-slate">I'm available for freelance work and full-time positions.</p>
                </div>


                  {/* <img src={ContactImg} className="h-2/4"/> */}


                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-light p-3 rounded-full text-blue">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-slate text-sm">Email</p>
                      <a href="mailto:shabanshuaib454@gmail.com" className="font-medium text-navy hover:text-primary transition-colors">
                        shabanshuaib454@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-blue-light p-3 rounded-full text-blue">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-slate text-sm">Phone</p>
                      <a href="tel:+254110450491" className="font-medium text-navy hover:text-primary transition-colors">
                        +254110450491
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="bg-blue-light p-3 rounded-full text-blue">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-slate text-sm">Location</p>
                      <p className="font-medium text-navy">
                        Nairobi, Kenya
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-navy">
                        Name
                      </label>
                      <Input 
                        id="name" 
                        name="name" 
                        placeholder="Your Name" 
                        required
                        className="border-slate"
                      />
                      <ValidationError prefix="Name" field="name" errors={state.errors} />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-navy">
                        Email
                      </label>
                      <Input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="Your Email" 
                        required
                        className="border-slate"
                      />
                      <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium text-navy">
                      Subject
                    </label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      placeholder="Subject" 
                      required
                      className="border-slate"
                    />
                    <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-navy">
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Your Message" 
                      rows={6}
                      required
                      className="border-slate"
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>

                  <Button type="submit" disabled={state.submitting} className="w-full btn-primary flex items-center gap-2 justify-center">
                    Send Message <Send size={16} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
