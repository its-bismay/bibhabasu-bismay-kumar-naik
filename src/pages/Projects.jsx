import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { portfolioData } from '@/data/portfolioData';

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-7xl mx-auto px-6 py-20"
    >
      <div className="mb-20">
        <h1 className="text-5xl font-black tracking-tighter mb-4">SELECTED WORKS</h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          A collection of projects exploring framework like React, Express, FastAPI, Gen AI etc.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {portfolioData.projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="bg-muted/10 border-border overflow-hidden hover:border-primary/30 transition-all group">
              <Link to={`/projects/${project.slug}`} className="block relative aspect-video overflow-hidden">
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <ArrowUpRight className="w-6 h-6" />
                  </div>
                </div>
              </Link>
              <CardContent className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tag) => (
                    <Badge key={tag} variant="outline" className="font-mono text-[10px] uppercase tracking-wider">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" asChild className="rounded-full">
                      <a href={project.githubUrl} target="_blank" rel="noreferrer"><Github size={18} /></a>
                    </Button>
                    <Button variant="ghost" size="icon" asChild className="rounded-full">
                      <a href={project.liveUrl} target="_blank" rel="noreferrer"><ExternalLink size={18} /></a>
                    </Button>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.shortDescription}
                </p>
                <Button variant="link" className="p-0 h-auto font-bold text-primary" asChild>
                  <Link to={`/projects/${project.slug}`}>View Case Study</Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
