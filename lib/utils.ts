import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

export function formatPercentage(amount: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'percent',
    currency: 'USD',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
    trailingZeroDisplay: 'auto',
  }).format(amount);
}

export function formatDate(date: string) {
  if (!date) return '-';
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}
