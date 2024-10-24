import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cashboard - Savings',
  description: 'Savings Page for Cashboard - a personal finance application for those who prefer to micromanage their budget.',
};

export default function SavingsLayout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
