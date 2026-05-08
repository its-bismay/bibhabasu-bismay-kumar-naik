import React from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Twitter, MapPin, Calendar, BookOpen, Briefcase, Send,University, MapPinCheck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { portfolioData } from '@/data/portfolioData';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-6 py-20 space-y-32"
    >
      {/* Bio / Intro */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter">BUILT FOR<br/>THE WEB.</h1>
          <p className="text-2xl text-muted-foreground leading-relaxed">
            Self-taught engineer driven by curiosity, clean code, and real-world problem solving.
          </p>
          <div className="flex gap-8 text-sm font-medium">
            <div className="flex items-center gap-2"><MapPinCheck size={18} className="text-primary"/>India, Jamshedpur</div>
            <div className="flex items-center gap-2"><Calendar size={18} className="text-primary"/> 3+ Years Exp</div>
          </div>
        </div>
        <div className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
          <img 
            src="/profile.webp" 
            className="w-full h-full object-cover" 
            alt="Profile" 
          />
          <div className="absolute inset-0 bg-primary/20 mix-blend-overlay" /> 
        </div>
      </section>

      {/* Education Section */}
<section>
  <div className="mb-16">
    <h2 className="text-3xl font-bold tracking-tight mb-2">Education</h2>
    <p className="text-muted-foreground">My academic background.</p>
  </div>

  <div className="grid gap-6 md:grid-cols-2">
    {portfolioData.about.education.map((edu, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Card className="bg-muted/10 border-border/50 hover:scale-[1.02] transition-all duration-300">
          <CardContent className="p-6 space-y-2">
            <div className="flex items-center gap-3 text-primary">
              <University size={20} />
              <span className="text-xs font-bold uppercase tracking-widest">
                {edu.period}
              </span>
            </div>

            <h3 className="text-lg font-bold">{edu.degree}</h3>

            <p className="text-sm text-muted-foreground">
              {edu.school}
            </p>
          </CardContent>
        </Card>
      </motion.div>
    ))}
  </div>
</section>

      {/* Story Timeline */}
      <section>
        <div className="mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-2">My Journey</h2>
          <p className="text-muted-foreground">The path that led me to where I am today.</p>
        </div>

        <div className="space-y-12 relative before:absolute before:left-4 before:top-2 before:bottom-2 before:w-px before:bg-border md:before:left-1/2">
          {portfolioData.about.story.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative flex items-center justify-between md:justify-normal w-full overflow-hidden ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="hidden md:block w-1/2" />
              <div className="z-20 absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-background border-4 border-primary shadow-[0_0_15px_rgba(var(--primary),0.3)]" />
              <div className="w-full md:w-1/2 pl-12 md:px-12">
                <Card className="bg-muted/10 border-border/50">
                  <CardContent className="p-6">
                    <span className="text-xs font-black text-primary uppercase tracking-widest">{item.year}</span>
                    <h3 className="text-xl font-bold mt-1 mb-2">{item.event}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-5xl font-black tracking-tighter mb-8">LET'S CONNECT.</h2>
          <p className="text-xl text-muted-foreground mb-12">
            Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new ideas.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4 group cursor-pointer p-4 rounded-2xl hover:bg-muted/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Github size={24} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase text-muted-foreground">GitHub</p>
                <p className="font-bold">@its-bismay</p>
              </div>
            </div>
            <div className="flex items-center gap-4 group cursor-pointer p-4 rounded-2xl hover:bg-muted/50 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs font-bold uppercase text-muted-foreground">Email</p>
                <p className="font-bold">bismaybibhabasu33@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <Card className="bg-muted/5 border-border p-8">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" className="bg-background border-border" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" className="bg-background border-border" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Project Inquiry" className="bg-background border-border" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="How can I help you?" className="min-h-37.5 bg-background border-border" />
            </div>
            <Button className="w-full rounded-full h-12 font-bold" type="submit">
              Send Message <Send className="ml-2 w-4 h-4" />
            </Button>
          </form>
        </Card>
      </section>
    </motion.div>
  );
}
