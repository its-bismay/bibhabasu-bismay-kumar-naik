import React from "react";
import { motion } from "motion/react";
import {
	ArrowRight,
	Download,
	Terminal,
	Code2,
	Zap,
	FileJson,
	Palette,
	Server,
	Database,
	Cpu,
	Cloud,
	Newspaper,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { portfolioData } from "@/data/portfolioData";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LeetcodeContext } from "@/context/LeetcodeContext";

const skillIcons = {
	Code2,
	Zap,
	FileJson,
	Palette,
	Server,
	Database,
	Cpu,
	Cloud,
};

export default function Home() {
	const { data, loading, error } = useContext(LeetcodeContext);
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="space-y-24 pb-20"
		>
			{/* Hero Section */}
			<section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6 lg:px-10">
				<div className="absolute inset-0 z-0">
					<div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
					<div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse" />
					<div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[100px] -z-10 animate-pulse delay-700" />
				</div>

				<div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
					<div className="lg:col-span-8 space-y-8">
						<motion.div
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ delay: 0.2 }}
						>
							<p className="text-primary font-bold tracking-[0.2em] text-xs uppercase mb-6">
								Full Stack Developer & AI Enthusiast
							</p>
							<h1 className="text-massive uppercase leading-[0.8] mb-8">
								Crafting
								<br />
								<span className="text-zinc-800">Digital</span>
								<br />
								Future
							</h1>
							<p className="text-lg md:text-xl text-muted-foreground font-medium max-w-lg leading-relaxed mb-10">
								{portfolioData.intro}
							</p>
							<div className="flex flex-wrap gap-4">
								<Button
									size="lg"
									className="rounded-xl px-8 font-bold h-14"
									asChild
								>
									<Link to="/projects">
										View Projects{" "}
										<ArrowRight className="ml-2 w-4 h-4" />
									</Link>
								</Button>
								<Button
									size="lg"
									variant="outline"
									className="rounded-xl px-8 font-bold h-14 bg-zinc-950/50 backdrop-blur-sm"
								>
									My Journey
								</Button>
							</div>
						</motion.div>
					</div>

					{/* Quick Stats Grid from Design */}
					{loading ? (
						<div className="lg:col-span-4 hidden lg:flex flex-col gap-6">
							<div className="glass p-8 rounded-3xl space-y-6 animate-pulse">
								<div className="flex justify-between items-start">
									<div className="space-y-2">
										<div className="h-3 w-24 bg-zinc-700 rounded" />
										<div className="h-2 w-20 bg-zinc-800 rounded" />
									</div>
									<div className="h-6 w-14 bg-zinc-800 rounded-lg" />
								</div>

								<div className="grid grid-cols-3 gap-4">
									{[1, 2, 3].map((i) => (
										<div
											key={i}
											className="text-center space-y-2"
										>
											<div className="h-8 w-16 bg-zinc-700 rounded mx-auto" />
											<div className="h-2 w-10 bg-zinc-800 rounded mx-auto" />
										</div>
									))}
								</div>

								<div className="h-24 w-full flex items-end gap-1.5 px-2">
									{[20, 45, 30, 60, 85, 75, 100].map(
										(h, i) => (
											<div
												key={i}
												style={{ height: `${h}%` }}
												className="w-full bg-zinc-800 rounded-t-sm"
											/>
										),
									)}
								</div>
							</div>

							{/* Latest Update skeleton */}
							<div className="glass p-8 rounded-3xl space-y-4 animate-pulse">
								<div className="flex justify-between items-center">
									<div className="h-2 w-24 bg-zinc-800 rounded" />
									<div className="h-4 w-4 bg-zinc-800 rounded" />
								</div>
								<div className="h-6 w-48 bg-zinc-700 rounded" />
								<div className="space-y-2">
									<div className="h-3 w-full bg-zinc-800 rounded" />
									<div className="h-3 w-3/4 bg-zinc-800 rounded" />
								</div>
								<div className="flex gap-2">
									<div className="h-5 w-10 bg-zinc-800 rounded-md" />
									<div className="h-5 w-12 bg-zinc-800 rounded-md" />
								</div>
							</div>
						</div>
					) : (
						<div className="lg:col-span-4 hidden lg:flex flex-col gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: 0.4 }}
								className="glass p-8 rounded-3xl space-y-6"
							>
								<div className="flex justify-between items-start">
									<div>
										<h3 className="text-sm font-bold uppercase tracking-wider text-primary mb-1">
											DSA Ranking
										</h3>
										<p className="text-xs text-muted-foreground uppercase font-mono">
											Live Performance
										</p>
									</div>
									<div className="font-mono bg-zinc-950/50 px-2.5 py-1 rounded-lg border border-border text-[10px] text-green-400">
										{data?.contest?.top_percentage ? `Top ${data.contest.top_percentage}%` : "Top 0%"}
									</div>
								</div>

								<div className="grid grid-cols-3 gap-4">
									<div className="text-center">
										<div className="text-2xl font-bold font-mono">
											{data?.problems?.total}
										</div>
										<div className="text-[10px] uppercase text-muted-foreground font-bold">
											Solved
										</div>
									</div>
									<div className="text-center">
										<div className="text-2xl font-bold font-mono text-orange-400">
											{data?.contest?.rating || "none"}
										</div>
										<div className="text-[10px] uppercase text-muted-foreground font-bold">
											Rating
										</div>
									</div>
									<div className="text-center">
										<div className="text-2xl font-bold font-mono text-primary">
											{data?.contest?.global_ranking || "none"}
										</div>
										<div className="text-[10px] uppercase text-muted-foreground font-bold">
											Global ranking
										</div>
									</div>
								</div>

								<div className="h-24 w-full flex items-end gap-1.5 px-2">
									{[20, 45, 30, 60, 85, 75, 100].map(
										(h, i) => (
											<div
												key={i}
												style={{ height: `${h}%` }}
												className={`w-full bg-primary rounded-t-sm transition-all duration-500 ${i === 6 ? "glow opacity-100" : "opacity-40"}`}
											/>
										),
									)}
								</div>
							</motion.div>

							<motion.div
								initial={{ opacity: 0, scale: 0.95 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ delay: 0.5 }}
								className="glass p-8 rounded-3xl group cursor-pointer overflow-hidden relative"
							>
								<div className="flex justify-between items-center mb-4">
									<h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
										Latest Update
									</h3>
									<ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-primary transition-colors" />
								</div>
								<h4 className="text-xl font-bold mb-2">
									React Native mobile application
								</h4>
								<p className="text-sm text-muted-foreground line-clamp-2 mb-4">
									A real-estate maagement system based on react native and supabase.
								</p>
								<div className="flex gap-2">
									<span className="text-[10px] font-mono bg-zinc-950/50 px-2 py-1 rounded-md border border-border">
										React Native
									</span>
									<span className="text-[10px] font-mono bg-zinc-950/50 px-2 py-1 rounded-md border border-border">
										TypeScript
									</span>
								</div>
							</motion.div>
						</div>
					)}
				</div>
			</section>

			{/* Marquee Skills from Design */}
			<section className="h-20 bg-muted/30 border-y border-border flex items-center overflow-hidden">
				<div className="marquee-container">
					<div className="marquee-content flex items-center whitespace-nowrap">
						{portfolioData.skills
							.concat(portfolioData.skills)
							.map((skill, index) => (
								<span
									key={index}
									className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
								>
									{skill.name}
									<span className="mx-4">|</span>
								</span>
							))}
					</div>
				</div>
			</section>
			<section className="px-6 max-w-7xl mx-auto">
				<div className="mb-12 flex justify-between items-end">
					<div>
						<h2 className="text-3xl font-bold tracking-tight mb-2">
							Technical Arsenal
						</h2>
						<p className="text-muted-foreground">
							My primary stack and favorite tools.
						</p>
					</div>
				</div>

				<Carousel
					opts={{
						align: "start",
						loop: true,
					}}
					className="w-full"
				>
					<CarouselContent className="-ml-4">
						{portfolioData.skills.map((skill, index) => {
							const Icon = skillIcons[skill.icon] || Code2;
							return (
								<CarouselItem
									key={index}
									className="pl-4 md:basis-1/4 lg:basis-1/6"
								>
									<div className="p-1">
										<Card className="bg-muted/30 border-border group hover:border-primary/50 transition-all cursor-default">
											<CardContent className="flex flex-col items-center justify-center p-8 gap-4">
												<div className="w-12 h-12 rounded-xl bg-background flex items-center justify-center border border-border group-hover:scale-110 group-hover:bg-primary/10 transition-all">
													<Icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
												</div>
												<span className="font-semibold text-sm">
													{skill.name}
												</span>
											</CardContent>
										</Card>
									</div>
								</CarouselItem>
							);
						})}
					</CarouselContent>
					<div className="hidden md:block">
						<CarouselPrevious className="-left-12" />
						<CarouselNext className="-right-12" />
					</div>
				</Carousel>
			</section>

			{/* Achievements Section */}
			<section className="px-6 max-w-7xl mx-auto">
				<div className="mb-12">
					<div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4">
						<Newspaper className="w-3 h-3" /> Latest Updates
					</div>
					<h2 className="text-3xl font-bold tracking-tight">
						Recent Milestones
					</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
  {portfolioData.achievements.map((item) => (
    <motion.div
      key={item.id}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="h-full"
    >
      
        <a href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full no-underline"
      >
        <Card className="bg-muted/10 border-border/50 overflow-hidden relative group h-full flex flex-col">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <Newspaper className="w-24 h-24 rotate-12" />
          </div>
          <CardContent className="p-8 flex flex-col flex-1">
            <div className="flex justify-between items-start mb-4">
              <Badge variant="secondary">{item.category}</Badge>
              <span className="text-xs font-mono text-muted-foreground">
                {item.date}
              </span>
            </div>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mt-auto">
              {item.description}
            </p>
          </CardContent>
        </Card>
      </a>
    </motion.div>
  ))}
</div>
			</section>
		</motion.div>
	);
}
