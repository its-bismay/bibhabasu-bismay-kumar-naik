import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Terminal, Github, Linkedin, Twitter } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'DSA', path: '/dsa' },
  { name: 'About', path: '/about' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-8',
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b border-border py-4' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className="text-2xl font-bold tracking-tighter">BIBHABASU</div>
        </NavLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  'text-xs font-bold uppercase tracking-widest transition-colors hover:text-primary relative py-1',
                  isActive ? 'text-white' : 'text-muted-foreground'
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
          <Button variant="default" className="rounded-full px-6 bg-primary hover:bg-primary/90 text-black font-bold text-xs uppercase tracking-widest">
            Contact
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background border-b border-border p-6 md:hidden flex flex-col gap-4 shadow-xl"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium py-2 border-b border-border/50"
              >
                {link.name}
              </NavLink>
            ))}
            <div className="flex gap-4 pt-4">
              <Github className="w-5 h-5 text-muted-foreground" />
              <Linkedin className="w-5 h-5 text-muted-foreground" />
              <Twitter className="w-5 h-5 text-muted-foreground" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
