import React, { useContext, useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { 
  AreaChart, Area, XAxis, Tooltip, ResponsiveContainer 
} from 'recharts';
import { Trophy, Flame, Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { LeetcodeContext } from '@/context/LeetcodeContext';
import { fetchLastSolvedDSA } from '@/lib/LastSolvedDsa';

export default function Dsa() {
  const { data, loading, error } = useContext(LeetcodeContext);

  const [dsaData, setDsaData]       = useState(null);
  const [dsaErr, setDsaErr]         = useState(null);
  const [dsaLoading, setDsaLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        setDsaLoading(true);
        const LastDSA = await fetchLastSolvedDSA();
        setDsaData(LastDSA);
      } catch (err) {
        setDsaErr(err.message);
      } finally {
        setDsaLoading(false);
      }
    }
    load();
  }, []);

  const lastSolved = dsaData?.lastSolved;
  const isLoading = loading || dsaLoading;



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
              <p className="text-xs uppercase font-bold text-muted-foreground tracking-widest">Total Solved</p>
              {isLoading ? (
                <div className="flex items-center gap-3 mt-1">
                  <div className="h-8 w-16 bg-muted/20 animate-pulse rounded" />
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce" />
                  </div>
                </div>
              ) : (
                <p className="text-2xl font-black">{data?.problems?.total}</p>
              )}
            </div>
          </Card>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-muted/10 border-border md:col-span-2 flex flex-col">
          <CardHeader>
            <CardTitle className="text-sm font-medium text-muted-foreground uppercase flex items-center gap-2">
              <Trophy className="w-4 h-4" /> CodeChef Skill Tests
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="flex flex-col items-center justify-center p-4 bg-background/50 rounded-xl border border-border">
                <div className="text-3xl font-black mb-1 text-green-500">96%</div>
                <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider mb-3">Python</span>
                <img src="/python_codechef.webp" alt="Python 96%" className="rounded shadow-sm w-full object-contain max-h-[120px]" />
              </div>
              <div className="flex flex-col items-center justify-center p-4 bg-background/50 rounded-xl border border-border">
                <div className="text-3xl font-black mb-1 text-green-500">93%</div>
                <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider mb-3">SQL</span>
                <img src="/sql_codechef.png" alt="SQL 93%" className="rounded shadow-sm w-full object-contain max-h-[120px]" />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="md:col-span-2 grid grid-cols-3 gap-6">
          <div className="flex flex-col items-center justify-center bg-green-500/5 rounded-2xl border border-green-500/20 py-8 gap-1">
            {isLoading ? <div className="h-10 w-16 bg-green-500/20 animate-pulse rounded mb-1" /> : <span className="text-4xl font-bold text-green-500">{data?.problems?.easy}</span>}
            <span className="text-sm uppercase font-bold text-muted-foreground">Easy</span>
          </div>
          <div className="flex flex-col items-center justify-center bg-yellow-500/5 rounded-2xl border border-yellow-500/20 py-8 gap-1">
            {isLoading ? <div className="h-10 w-16 bg-yellow-500/20 animate-pulse rounded mb-1" /> : <span className="text-4xl font-bold text-yellow-500">{data?.problems?.medium}</span>}
            <span className="text-sm uppercase font-bold text-muted-foreground">Medium</span>
          </div>
          <div className="flex flex-col items-center justify-center bg-red-500/5 rounded-2xl border border-red-500/20 py-8 gap-1">
            {isLoading ? <div className="h-10 w-16 bg-red-500/20 animate-pulse rounded mb-1" /> : <span className="text-4xl font-bold text-red-500">{data?.problems?.hard}</span>}
            <span className="text-sm uppercase font-bold text-muted-foreground">Hard</span>
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
            {isLoading ? (
              <div className="w-full h-full bg-muted/10 animate-pulse rounded-lg flex items-center justify-center">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <div className="w-2.5 h-2.5 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <div className="w-2.5 h-2.5 bg-primary/40 rounded-full animate-bounce" />
                </div>
              </div>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data?.last_7_days}>
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
                  <Area type="monotone" dataKey="submissions" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorCount)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            )}
          </CardContent>
        </Card>

        {/* Latest Question */}
        <div className="space-y-6">
          <Card className="bg-primary/5 border-primary/20 relative overflow-hidden">
            <CardHeader>
              <CardTitle className="text-xs uppercase tracking-widest text-primary font-bold">Latest Solved</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {isLoading ? (
                <div className="space-y-3">
                  <div className="flex gap-1 mb-2">
                    <div className="w-2 h-2 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <div className="w-2 h-2 bg-primary/40 rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <div className="w-2 h-2 bg-primary/40 rounded-full animate-bounce" />
                  </div>
                  <div className="h-6 w-3/4 bg-muted/20 animate-pulse rounded" />
                  <div className="flex gap-2">
                    <div className="h-5 w-16 bg-muted/20 animate-pulse rounded-full" />
                    <div className="h-5 w-24 bg-muted/20 animate-pulse rounded" />
                  </div>
                  <div className="h-8 w-full bg-muted/20 animate-pulse rounded-full mt-4" />
                </div>
              ) : dsaErr ? (
                <p className="text-sm text-red-500">{dsaErr}</p>
              ) : (
                <>
                  <h3 className="text-xl font-bold leading-tight">{lastSolved?.title}</h3>
                  <div className="flex gap-2">
                    <Badge variant={lastSolved?.difficulty === 'Hard' ? 'destructive' : 'secondary'}>
                      {lastSolved?.difficulty}
                    </Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      {lastSolved?.date}
                    </span>
                  </div>
                  <Button className="w-full rounded-full" size="sm" asChild>
                    <a href={lastSolved?.solutionUrl} target="_blank" rel="noreferrer">
                      <Github className="mr-2 w-4 h-4" /> View Solution
                    </a>
                  </Button>
                </>
              )}
            </CardContent>
          </Card>

          {/* Topics Covered */}
          <Card className="bg-muted/10">
            <CardHeader>
              <CardTitle className="text-xs uppercase tracking-widest font-bold">Key Topics</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {isLoading ? (
                <>
                  <div className="h-6 w-20 bg-muted/20 animate-pulse rounded-full" />
                  <div className="h-6 w-24 bg-muted/20 animate-pulse rounded-full" />
                  <div className="h-6 w-16 bg-muted/20 animate-pulse rounded-full" />
                  <div className="h-6 w-28 bg-muted/20 animate-pulse rounded-full" />
                </>
              ) : (
                data?.topics?.slice(0, 5)?.map((topic) => (
                  <div key={topic.name} className="px-3 py-1 bg-background border border-border rounded-full text-[10px] font-bold flex gap-2 items-center">
                    {topic.name} <span className="opacity-50 blur-[0.5px]">{topic?.problems_solved}</span>
                  </div>
                ))
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  );
}
