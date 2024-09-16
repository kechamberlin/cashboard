import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cashboard - Income & Expenses',
  description: 'Income and Expenses Page for Cashboard - a personal finance application for those who prefer to micromanage their budget.',
};

export default function IncomeLayout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
