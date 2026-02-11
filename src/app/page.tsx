'use client';

import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import MetricCard from '@/components/MetricCard';
import RecentDeals from '@/components/RecentDeals';
import LoadingScreen from '@/components/LoadingScreen';
import AnimatedBackground from '@/components/AnimatedBackground';
import { generateMockDeals } from '@/data/mockData';
import { Deal } from '@/types/deals';
import {
  calculateTotalRevenue,
  calculateConversionRate,
  calculateAverageDealSize,
  getActiveDealCount,
  getRevenueByMonth,
  getDealsByStage,
  getTopSalesReps,
  formatCurrency
} from '@/utils/calculations';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

export default function Dashboard() {
  const [deals, setDeals] = useState<Deal[]>([]);
  const [mounted, setMounted] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDeals(generateMockDeals());
      setMounted(true);
      setTimeout(() => setShowContent(true), 100);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted || !showContent) {
    return <LoadingScreen />;
  }

  const totalRevenue = calculateTotalRevenue(deals);
  const conversionRate = calculateConversionRate(deals);
  const averageDealSize = calculateAverageDealSize(deals);
  const activeDeals = getActiveDealCount(deals);
  const revenueByMonth = getRevenueByMonth(deals);
  const dealsByStage = getDealsByStage(deals);
  const topReps = getTopSalesReps(deals);

  return (
    <>
      <AnimatedBackground />
      <div className="flex min-h-screen relative">
        <Sidebar />
        
        <main className="flex-1 p-4 md:p-8 overflow-y-auto pl-20 lg:pl-8">
          {/* Header */}
          <div className="mb-6 md:mb-10 animate-fade-in-up">
            <h1 className="text-3xl md:text-5xl font-black mb-2 md:mb-3 text-slate-900">
              Good morning, <span className="gradient-text">Evan</span>
            </h1>
            <p className="text-slate-600 text-sm md:text-lg font-bold">Track your sales performance and achieve your goals</p>
          </div>

          {/* Top Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-10">
            <div className="animate-fade-in-up animate-delay-100">
              <MetricCard
                title="Total Revenue"
                value={formatCurrency(totalRevenue)}
                subtitle="From closed deals"
                trend="12%"
                trendUp={true}
              />
            </div>
            <div className="animate-fade-in-up animate-delay-200">
              <MetricCard
                title="Active Deals"
                value={activeDeals.toString()}
                subtitle="In pipeline"
              />
            </div>
            <div className="animate-fade-in-up animate-delay-300">
              <MetricCard
                title="Conversion Rate"
                value={`${conversionRate}%`}
                subtitle="Win rate"
                trend="5%"
                trendUp={true}
              />
            </div>
            <div className="animate-fade-in-up animate-delay-400">
              <MetricCard
                title="Avg Deal Size"
                value={formatCurrency(averageDealSize)}
                subtitle="Per closed deal"
              />
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-10 animate-fade-in-up animate-delay-400">
            {/* Revenue Trend Chart with Area Fill */}
            <div className="light-card rounded-xl p-4 md:p-8 card-hover accent-bar relative overflow-hidden shadow-xl">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
              
              {/* Decorative background glow */}
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
              
              <h3 className="text-lg md:text-xl font-black text-slate-900 mb-4 md:mb-6 relative z-10">Revenue Trend</h3>
              <ResponsiveContainer width="100%" height={250} className="md:h-[300px]">
                <AreaChart data={revenueByMonth}>
                  <defs>
                    {/* Gradient for the line */}
                    <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="50%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                    
                    {/* Gradient for the area fill */}
                    <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.5} />
                      <stop offset="50%" stopColor="#6366f1" stopOpacity={0.25} />
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity={0.05} />
                    </linearGradient>
                  </defs>
                  
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" strokeWidth={1.5} />
                  
                  <XAxis 
                    dataKey="month" 
                    stroke="#94a3b8"
                    strokeWidth={2}
                    tick={{ fill: '#64748b', fontSize: 10, fontWeight: 700 }}
                    tickLine={{ stroke: '#cbd5e1' }}
                  />
                  
                  <YAxis 
                    stroke="#94a3b8"
                    strokeWidth={2}
                    tick={{ fill: '#64748b', fontSize: 10, fontWeight: 700 }}
                    tickLine={{ stroke: '#cbd5e1' }}
                    tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                  />
                  
                  <Tooltip 
                    formatter={(value: number) => formatCurrency(value)}
                    contentStyle={{ 
                      backgroundColor: '#fff',
                      border: '2px solid #3b82f6',
                      borderRadius: '12px',
                      fontWeight: 700,
                      boxShadow: '0 10px 30px rgba(59, 130, 246, 0.2)'
                    }}
                    labelStyle={{ fontWeight: 900, color: '#1e293b' }}
                  />
                  
                  <Area 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="url(#lineGradient)" 
                    strokeWidth={4}
                    fill="url(#areaFill)"
                    dot={{ 
                      fill: '#fff', 
                      stroke: '#3b82f6',
                      strokeWidth: 3,
                      r: 6
                    }}
                    activeDot={{ 
                      r: 9,
                      fill: '#3b82f6',
                      stroke: '#fff',
                      strokeWidth: 4
                    }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Top Performers Bar Chart */}
            <div className="light-card rounded-xl p-4 md:p-8 card-hover accent-bar relative overflow-hidden shadow-xl">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-violet-600"></div>
              <h3 className="text-lg md:text-xl font-black text-slate-900 mb-4 md:mb-6">Top Performers</h3>
              <ResponsiveContainer width="100%" height={250} className="md:h-[300px]">
                <BarChart data={topReps}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                  <XAxis 
                    dataKey="name" 
                    stroke="#94a3b8"
                    tick={{ fill: '#64748b', fontSize: 9, fontWeight: 600 }}
                    angle={-15}
                    textAnchor="end"
                    height={70}
                  />
                  <YAxis 
                    stroke="#94a3b8"
                    tick={{ fill: '#64748b', fontSize: 10, fontWeight: 600 }}
                    tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
                  />
                  <Tooltip 
                    formatter={(value: number) => formatCurrency(value)}
                    contentStyle={{ 
                      backgroundColor: '#fff',
                      border: '2px solid #e2e8f0',
                      borderRadius: '8px',
                      fontWeight: 700
                    }}
                  />
                  <defs>
                    <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  </defs>
                  <Bar dataKey="revenue" fill="url(#barGradient)" radius={[10, 10, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Pipeline Overview */}
          <div className="light-card rounded-xl p-4 md:p-8 mb-6 md:mb-10 card-hover accent-bar relative overflow-hidden shadow-xl animate-fade-in-up animate-delay-500">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600"></div>
            <h3 className="text-lg md:text-xl font-black text-slate-900 mb-4 md:mb-6">Pipeline by Stage</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
              {Object.entries(dealsByStage).map(([stage, data], index) => (
                <div 
                  key={stage} 
                  className="text-center p-4 md:p-6 bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 border-2 border-slate-200"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <p className="text-xs font-black text-slate-600 uppercase tracking-widest mb-2">{stage}</p>
                  <p className="text-2xl md:text-3xl font-black font-mono text-slate-900">
                    {data.count}
                  </p>
                  <p className="text-xs text-emerald-600 mt-2 font-black">{formatCurrency(data.value)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Deals Table */}
          <div className="animate-fade-in-up animate-delay-500">
            <RecentDeals deals={deals} />
          </div>
        </main>
      </div>
    </>
  );
}