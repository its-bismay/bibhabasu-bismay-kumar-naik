import React from 'react';
import { motion } from 'motion/react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area 
} from 'recharts';
import { Trophy, Flame, Code, BookOpen, Brain, Star, ChevronRight, Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

// Mock LeetCode Data
const dsaData = {
  stats: {
    totalSolved: 442,
    easy: 156,
    medium: 224,
    hard: 62,
    streak: 18,
    rating: 1985
  },
  recentSubmissions: [
    { date: '2024-05-01', count: 4 },
    { date: '2024-05-02', count: 8 },
    { date: '2024-05-03', count: 3 },
    { date: '2024-05-04', count: 12 },
    { date: '2024-05-05', count: 5 },
    { date: '2024-05-06', count: 7 },
    { date: '2024-05-07', count: 15 },
  ],
  topics: [
    { name: 'DP', count: 45 },
    { name: 'Graphs', count: 38 },
    { name: 'Tries', count: 12 },
    { name: 'Segment Trees', count: 8 },
    { name: 'Backtracking', count: 30 },
  ],
  lastSolved: {
    title: "Critical Connections in a Network",
    difficulty: "Hard",
    solutionUrl: "https://github.com/bismay/leetcode/blob/main/hard/critical-connections.cpp",
    date: "2 hours ago"
  }
};

export default function Dsa() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-6 py-20 space-y-12"
    >
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
        <div>
          <h1 className="text-5xl font-black tracking-tighter mb-4">DSA TRACKER</h1>
          <p className="text-xl text-muted-foreground">Continuous learning and algorithmic mastery.</p>
        </div>
        <div className="flex gap-4">
          <Card className="bg-primary/5 border-primary/20 p-4 flex items-center gap-4">
            <Flame className="text-orange-500 fill-orange-500 w-8 h-8" />
            <div>
              <p className="text-xs uppercase font-bold text-muted-foreground tracking-widest">Current Streak</p>
              <p className="text-2xl font-black">{dsaData.stats.streak} Days</p>
            </div>
          </Card>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-muted/10 border-border md:col-span-2">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground uppercase flex items-center gap-2">
              <Trophy className="w-4 h-4" /> Global Rank
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-black tracking-tighter">1,985</span>
              <span className="text-sm text-green-500 font-bold">Top 5%</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">Rating based on contest performance</p>
          </CardContent>
        </Card>

        <div className="md:col-span-2 grid grid-cols-3 gap-6">
          <div className="flex flex-col items-center justify-center bg-green-500/5 rounded-2xl border border-green-500/20 py-8">
            <span className="text-2xl font-bold text-green-500">{dsaData.stats.easy}</span>
            <span className="text-[10px] uppercase font-bold text-muted-foreground">Easy</span>
          </div>
          <div className="flex flex-col items-center justify-center bg-yellow-500/5 rounded-2xl border border-yellow-500/20 py-8">
            <span className="text-2xl font-bold text-yellow-500">{dsaData.stats.medium}</span>
            <span className="text-[10px] uppercase font-bold text-muted-foreground">Medium</span>
          </div>
          <div className="flex flex-col items-center justify-center bg-red-500/5 rounded-2xl border border-red-500/20 py-8">
            <span className="text-2xl font-bold text-red-500">{dsaData.stats.hard}</span>
            <span className="text-[10px] uppercase font-bold text-muted-foreground">Hard</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Activity Chart */}
        <Card className="lg:col-span-2 bg-muted/5 border-border">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>Submission Activity</span>
              <Badge variant="outline">Past 7 Days</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={dsaData.recentSubmissions}>
                <defs>
                  <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="date" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}
                  itemStyle={{ color: 'hsl(var(--primary))' }}
                />
                <Area type="monotone" dataKey="count" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorCount)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Latest Question */}
        <div className="space-y-6">
          <Card className="bg-primary/5 border-primary/20 relative overflow-hidden">
            <CardHeader>
              <CardTitle className="text-xs uppercase tracking-widest text-primary font-bold">Latest Solved</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h3 className="text-xl font-bold leading-tight">{dsaData.lastSolved.title}</h3>
              <div className="flex gap-2">
                <Badge variant={dsaData.lastSolved.difficulty === 'Hard' ? 'destructive' : 'secondary'}>
                  {dsaData.lastSolved.difficulty}
                </Badge>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                   {dsaData.lastSolved.date}
                </span>
              </div>
              <Button className="w-full rounded-full" size="sm" asChild>
                <a href={dsaData.lastSolved.solutionUrl} target="_blank" rel="noreferrer">
                  <Github className="mr-2 w-4 h-4" /> View Solution
                </a>
              </Button>
            </CardContent>
          </Card>

          {/* Topics Covered */}
          <Card className="bg-muted/10">
            <CardHeader>
              <CardTitle className="text-xs uppercase tracking-widest font-bold">Key Topics</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {dsaData.topics.map((topic) => (
                <div key={topic.name} className="px-3 py-1 bg-background border border-border rounded-full text-[10px] font-bold flex gap-2 items-center">
                  {topic.name} <span className="opacity-50 blur-[0.5px]">{topic.count}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}
