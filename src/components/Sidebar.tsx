'use client';

import { useState } from 'react';
import { LayoutDashboard, TrendingUp, Users, FileText, BarChart3, Settings } from 'lucide-react';

type NavItem = {
  name: string;
  icon: React.ReactNode;
  href: string;
};

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [isExpanded, setIsExpanded] = useState(false);

  const navItems: NavItem[] = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, href: '/' },
    { name: 'Pipeline', icon: <TrendingUp size={20} />, href: '/pipeline' },
    { name: 'Team', icon: <Users size={20} />, href: '/team' },
    { name: 'Deals', icon: <FileText size={20} />, href: '/deals' },
    { name: 'Analytics', icon: <BarChart3 size={20} />, href: '/analytics' }
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isExpanded && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsExpanded(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div 
        className={`
          fixed lg:sticky top-0 h-screen bg-white border-r-2 border-slate-200 flex flex-col z-50
          transition-all duration-300 ease-in-out shadow-xl
          ${isExpanded ? 'w-64' : 'w-20 lg:w-64'}
        `}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        {/* Logo */}
        <div className={`p-6 border-b-2 border-slate-200 flex items-center gap-3 transition-all duration-300 ${
          isExpanded ? 'justify-start' : 'justify-center lg:justify-start'
        }`}>
          <div className="hexagon w-11 h-11 bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-lg">
            <span className="text-white font-black text-xl">S</span>
          </div>
          <span className={`font-black text-xl bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent whitespace-nowrap transition-all duration-300 ${
            isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0 lg:opacity-100 lg:w-auto'
          }`}>
            SalesPro
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 overflow-y-auto">
          <div className="mb-6">
            <p className={`text-xs font-black text-slate-400 uppercase tracking-widest mb-3 px-2 transition-all duration-300 ${
              isExpanded ? 'opacity-100' : 'opacity-0 lg:opacity-100'
            }`}>
              Menu
            </p>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => setActiveItem(item.name)}
                    className={`w-full flex items-center gap-3 px-4 py-3.5 transition-all duration-300 group relative font-bold ${
                      activeItem === item.name
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30 angled-corner'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 rounded-lg'
                    } ${isExpanded ? 'justify-start' : 'justify-center lg:justify-start'}`}
                  >
                    <span className="flex-shrink-0">{item.icon}</span>
                    <span className={`whitespace-nowrap transition-all duration-300 ${
                      isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0 lg:opacity-100 lg:w-auto'
                    }`}>
                      {item.name}
                    </span>
                    
                    {/* Tooltip */}
                    <span className={`absolute left-full ml-2 px-3 py-1.5 bg-slate-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 shadow-xl font-semibold ${
                      isExpanded ? 'lg:opacity-0' : 'lg:hidden'
                    }`}>
                      {item.name}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Bottom section */}
        <div className="p-4 border-t-2 border-slate-200">
          <button className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-all duration-300 group relative font-bold ${
            isExpanded ? 'justify-start' : 'justify-center lg:justify-start'
          }`}>
            <span className="flex-shrink-0"><Settings size={20} /></span>
            <span className={`whitespace-nowrap transition-all duration-300 ${
              isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0 lg:opacity-100 lg:w-auto'
            }`}>
              Settings
            </span>
            
            {/* Tooltip */}
            <span className={`absolute left-full ml-2 px-3 py-1.5 bg-slate-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 shadow-xl font-semibold ${
              isExpanded ? 'lg:opacity-0' : 'lg:hidden'
            }`}>
              Settings
            </span>
          </button>
        </div>
      </div>
    </>
  );
}