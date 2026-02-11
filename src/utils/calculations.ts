import { Deal } from '@/types/deals';

export const calculateTotalRevenue = (deals: Deal[]): number => {
  return deals
    .filter(deal => deal.stage === 'Closed Won')
    .reduce((sum, deal) => sum + deal.amount, 0);
};

export const calculateConversionRate = (deals: Deal[]): number => {
  const closedDeals = deals.filter(deal => 
    deal.stage === 'Closed Won' || deal.stage === 'Closed Lost'
  );
  
  if (closedDeals.length === 0) return 0;
  
  const wonDeals = closedDeals.filter(deal => deal.stage === 'Closed Won');
  return Math.round((wonDeals.length / closedDeals.length) * 100);
};

export const calculateAverageDealSize = (deals: Deal[]): number => {
  const wonDeals = deals.filter(deal => deal.stage === 'Closed Won');
  
  if (wonDeals.length === 0) return 0;
  
  const total = wonDeals.reduce((sum, deal) => sum + deal.amount, 0);
  return Math.round(total / wonDeals.length);
};

export const getActiveDealCount = (deals: Deal[]): number => {
  return deals.filter(deal => 
    deal.stage !== 'Closed Won' && deal.stage !== 'Closed Lost'
  ).length;
};

export const getRevenueByMonth = (deals: Deal[]) => {
  const monthlyRevenue: { [key: string]: number } = {};
  
  deals
    .filter(deal => deal.stage === 'Closed Won' && deal.closedDate)
    .forEach(deal => {
      const date = new Date(deal.closedDate!);
      const monthKey = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
      
      if (!monthlyRevenue[monthKey]) {
        monthlyRevenue[monthKey] = 0;
      }
      monthlyRevenue[monthKey] += deal.amount;
    });
  
  // Convert to array and sort by date
  return Object.entries(monthlyRevenue)
    .map(([month, revenue]) => ({
      month,
      revenue
    }))
    .sort((a, b) => a.month.localeCompare(b.month));
};

export const getDealsByStage = (deals: Deal[]) => {
  const stageData: { [key: string]: { count: number; value: number } } = {
    'Lead': { count: 0, value: 0 },
    'Qualified': { count: 0, value: 0 },
    'Proposal': { count: 0, value: 0 },
    'Negotiation': { count: 0, value: 0 },
    'Closed Won': { count: 0, value: 0 },
    'Closed Lost': { count: 0, value: 0 }
  };
  
  deals.forEach(deal => {
    stageData[deal.stage].count += 1;
    stageData[deal.stage].value += deal.amount;
  });
  
  return stageData;
};

export const getTopSalesReps = (deals: Deal[]) => {
  const repStats: { [key: string]: { revenue: number; deals: number } } = {};
  
  deals
    .filter(deal => deal.stage === 'Closed Won')
    .forEach(deal => {
      if (!repStats[deal.salesRep]) {
        repStats[deal.salesRep] = { revenue: 0, deals: 0 };
      }
      repStats[deal.salesRep].revenue += deal.amount;
      repStats[deal.salesRep].deals += 1;
    });
  
  return Object.entries(repStats)
    .map(([name, stats]) => ({
      name,
      revenue: stats.revenue,
      deals: stats.deals
    }))
    .sort((a, b) => b.revenue - a.revenue);
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};