import { SidebarLinks } from '@/types/SidebarLinks';
import {
  IconChartBarPopular,
  IconCoins,
  IconCreditCard,
  IconHome,
  IconMoneybagMinus,
  IconPigMoney,
} from '@tabler/icons-react';

export const sidebarLinks: SidebarLinks = {
  navMain: [
    {
      label: 'My Cashboard',
      url: '/cashboard',
      icon: IconHome,
    },
    {
      label: 'Income & Expenses',
      url: '/cashboard/income-and-expenses',
      icon: IconCoins,
    },
    {
      label: 'Savings',
      url: '/cashboard/savings',
      icon: IconPigMoney,
      // isActive: true,
      // items: [
      //   {
      //     label: 'Overview',
      //     url: '/cashboard/savings',
      //     icon: IconPigMoney,
      //   },
      //   {
      //     label: 'Create New Goal',
      //     url: '/cashboard/savings',
      //     icon: IconPigMoney,
      //   },
      // ],
    },
    {
      label: 'Investments',
      url: '/cashboard/investments',
      icon: IconChartBarPopular,
    },
    {
      label: 'Debt',
      url: '/cashboard/debt',
      icon: IconMoneybagMinus,
    },
    {
      label: 'Credit Score',
      url: '/cashboard/credit-score',
      icon: IconCreditCard,
    },
  ],
};
