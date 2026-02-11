export type DealStage = 'Lead' | 'Qualified' | 'Proposal' | 'Negotiation' | 'Closed Won' | 'Closed Lost';

export interface Deal {
  id: string;
  companyName: string;
  contactName: string;
  amount: number;
  stage: DealStage;
  salesRep: string;
  createdDate: string;
  closedDate?: string;
  probability: number;
  notes?: string;
}

export interface SalesRep {
  id: string;
  name: string;
  email: string;
  totalRevenue: number;
  dealsCount: number;
}