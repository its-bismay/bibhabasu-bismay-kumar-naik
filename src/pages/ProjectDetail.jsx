import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Github, ExternalLink, ArrowLeft, CheckCircle2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { portfolioData } from '@/data/portfolioData';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = portfolioData.projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="h-[60vh] flex flex-col items-center justify-center gap-4">
        <h1 className="text-3xl font-bold">Project Not Found</h1>
        <Button asChild><Link to="/projects">Back to Projects</Link></Button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pb-20"
    >
      {/* Hero */}
      <section className="relative h-[60vh] flex items-end">
        <div className="absolute inset-0 z-0">
          <img src={project.thumbnail} className="w-full h-full object-cover grayscale opacity-30 shadow-2xl" alt="" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto w-full px-6 z-10 pb-12">
          <Button variant="ghost" size="sm" asChild className="mb-8 pl-0 hover:bg-transparent -translate-x-2">
            <Link to="/projects"><ArrowLeft className="mr-2 w-4 h-4" /> All Projects</Link>
          </Button>
          <div className="flex flex-wrap gap-3 mb-6">
            {project.tech.map((tag) => (
              <Badge key={tag} className="font-mono text-[10px]">{tag}</Badge>
            ))}
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6">{project.title.toUpperCase()}</h1>
          <div className="flex gap-4">
            <Button size="lg" className="rounded-full shadow-lg" asChild>
              <a href={project.liveUrl} target="_blank" rel="noreferrer"><ExternalLink className="mr-2 w-4 h-4" /> Live Demo</a>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full" asChild>
              <a href={project.githubUrl} target="_blank" rel="noreferrer"><Github className="mr-2 w-4 h-4" /> Source Code</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16 py-20">
        <div className="lg:col-span-2 space-y-16">
          {/* README Content */}
          <div className="prose prose-invert max-w-none">
            <div className="markdown-body text-muted-foreground leading-relaxed text-lg">
              <ReactMarkdown>{project.readme}</ReactMarkdown>
            </div>
          </div>

          {/* Features */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-8">Key Highlights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-muted/20 border border-border/50">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-12">
          {/* Timeline */}
          <div className="p-8 rounded-2xl bg-muted/10 border border-border space-y-8">
            <h3 className="text-xl font-bold">Execution Timeline</h3>
            <div className="relative space-y-8 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-px before:bg-border">
              {project.timeline.map((item, i) => (
                <div key={i} className="relative pl-8">
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{item.phase}</h4>
                    <p className="text-xs text-muted-foreground">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-primary/5 border border-primary/20">
            <h3 className="font-bold mb-4">Interested in more?</h3>
            <p className="text-sm text-muted-foreground mb-6">
              This project is part of a series of experiments. Check out the GitHub for deep dives into implementation details.
            </p>
            <Button variant="outline" className="w-full rounded-full" asChild>
              <Link to="/about">Contact for details</Link>
            </Button>
          </div>
        </aside>
      </section>
    </motion.div>
  );
}
