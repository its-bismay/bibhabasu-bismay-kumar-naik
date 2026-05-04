import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold tracking-tighter mb-4">BIBHABASU</h2>
            <p className="text-muted-foreground max-w-sm mb-6">
              Designing and building digital experiences that matter. Based in the future, working on the now.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="rounded-full"
              onClick={() => window.open("https://github.com/its-bismay", "_blank")}>
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full"
              onClick={() => window.open("https://www.linkedin.com/in/bismay-kumar/", "_blank")}>
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full"
              onClick={() => window.open("https://x.com/BibhabasuBismay/", "_blank")}>
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Pages</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="/projects" className="hover:text-primary transition-colors">Projects</a></li>
              <li><a href="/dsa" className="hover:text-primary transition-colors">DSA Stats</a></li>
              <li><a href="/about" className="hover:text-primary transition-colors">About Me</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Mail className="w-4 h-4" />bismaybibhabasu33@gmail.com</li>
              <li>Open for collaborations and freelance opportunities.</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} BIBHABASU. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> & Modern Tech
          </p>
        </div>
      </div>
    </footer>
  );
}
