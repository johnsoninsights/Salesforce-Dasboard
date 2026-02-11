'use client';

import { useState, useEffect } from 'react';
import { Deal, DealStage } from '@/types/deals';
import { formatCurrency } from '@/utils/calculations';

type RecentDealsProps = {
  deals: Deal[];
};

type StageBadgeProps = {
  stage: DealStage;
};

function StageBadge({ stage }: StageBadgeProps) {
  const badges = {
    'Lead': 'bg-slate-600 text-white',
    'Qualified': 'bg-blue-600 text-white',
    'Proposal': 'bg-amber-500 text-white',
    'Negotiation': 'bg-orange-600 text-white',
    'Closed Won': 'bg-emerald-600 text-white',
    'Closed Lost': 'bg-rose-600 text-white'
  };

  return (
    <span className={`px-4 py-1.5 inline-flex text-xs font-black rounded-md shadow-md uppercase tracking-wider ${badges[stage]}`}>
      {stage}
    </span>
  );
}

export default function RecentDeals({ deals }: RecentDealsProps) {
  const [mounted, setMounted] = useState(false);
  const recentDeals = deals.slice(0, 10);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="light-card rounded-xl overflow-hidden shadow-xl">
        <div className="p-8 border-b-2 border-slate-200">
          <h3 className="text-xl font-black text-slate-900">Recent Deals</h3>
          <p className="text-sm text-slate-600 mt-1 font-bold">Latest activity in your pipeline</p>
        </div>
        <div className="p-8">
          <p className="text-slate-500 font-semibold">Loading deals...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="light-card rounded-xl overflow-hidden card-hover accent-bar shadow-xl">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600"></div>
      <div className="p-8 border-b-2 border-slate-200">
        <h3 className="text-xl font-black text-slate-900">Recent Deals</h3>
        <p className="text-sm text-slate-600 mt-1 font-bold">Latest activity in your pipeline</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-50 border-b-2 border-slate-200">
            <tr>
              <th className="px-8 py-4 text-left text-xs font-black text-slate-600 uppercase tracking-widest">
                Company
              </th>
              <th className="px-8 py-4 text-left text-xs font-black text-slate-600 uppercase tracking-widest">
                Amount
              </th>
              <th className="px-8 py-4 text-left text-xs font-black text-slate-600 uppercase tracking-widest">
                Stage
              </th>
              <th className="px-8 py-4 text-left text-xs font-black text-slate-600 uppercase tracking-widest">
                Sales Rep
              </th>
              <th className="px-8 py-4 text-left text-xs font-black text-slate-600 uppercase tracking-widest">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {recentDeals.map((deal, index) => (
              <tr 
                key={deal.id} 
                className="hover:bg-slate-50 transition-all duration-200"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <td className="px-8 py-5 whitespace-nowrap">
                  <div className="text-sm font-black text-slate-900">{deal.companyName}</div>
                  <div className="text-xs text-slate-500 font-bold font-mono">{deal.id}</div>
                </td>
                <td className="px-8 py-5 whitespace-nowrap">
                  <div className="text-sm font-black font-mono text-emerald-600">
                    {formatCurrency(deal.amount)}
                  </div>
                </td>
                <td className="px-8 py-5 whitespace-nowrap">
                  <StageBadge stage={deal.stage} />
                </td>
                <td className="px-8 py-5 whitespace-nowrap text-sm text-slate-700 font-bold">
                  {deal.salesRep}
                </td>
                <td className="px-8 py-5 whitespace-nowrap text-sm text-slate-500 font-semibold">
                  {new Date(deal.createdDate).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric'
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}