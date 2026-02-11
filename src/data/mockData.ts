import { Deal, DealStage } from '@/types/deals';

const companies = [
  'Acme Corp', 'TechStart Inc', 'Global Solutions', 'Innovate LLC',
  'Peak Performance', 'Bright Future Co', 'Summit Enterprises', 'NextGen Systems',
  'Horizon Industries', 'Catalyst Group', 'Momentum Partners', 'Vertex Solutions',
  'Pinnacle Tech', 'Fusion Dynamics', 'Quantum Leap Inc', 'Stellar Networks'
];

const salesReps = [
  'Sarah Johnson', 'Mike Chen', 'Emily Rodriguez', 'David Park', 'Jessica Williams'
];

const stages: DealStage[] = ['Lead', 'Qualified', 'Proposal', 'Negotiation', 'Closed Won', 'Closed Lost'];

// Generate a random date within the last 6 months
const randomDate = (start: Date, end: Date): string => {
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date.toISOString().split('T')[0];
};

// Generate random deal amount
const randomAmount = (): number => {
  return Math.floor(Math.random() * 95000) + 5000; // Between $5k and $100k
};

export const generateMockDeals = (): Deal[] => {
  const deals: Deal[] = [];
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
  const today = new Date();

  for (let i = 0; i < 80; i++) {
    const stage = stages[Math.floor(Math.random() * stages.length)];
    const createdDate = randomDate(sixMonthsAgo, today);
    const created = new Date(createdDate);
    
    // If deal is closed, set a closed date after created date
    let closedDate: string | undefined;
    if (stage === 'Closed Won' || stage === 'Closed Lost') {
      const closedDateObj = new Date(created);
      closedDateObj.setDate(closedDateObj.getDate() + Math.floor(Math.random() * 60) + 10);
      closedDate = closedDateObj.toISOString().split('T')[0];
    }

    const deal: Deal = {
      id: `DEAL-${String(i + 1).padStart(4, '0')}`,
      companyName: companies[Math.floor(Math.random() * companies.length)],
      contactName: `Contact ${i + 1}`,
      amount: randomAmount(),
      stage,
      salesRep: salesReps[Math.floor(Math.random() * salesReps.length)],
      createdDate,
      closedDate,
      probability: stage === 'Closed Won' ? 100 : stage === 'Closed Lost' ? 0 : Math.floor(Math.random() * 60) + 20,
      notes: Math.random() > 0.5 ? 'Follow up scheduled' : undefined
    };

    deals.push(deal);
  }

  return deals.sort((a, b) => new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime());
};