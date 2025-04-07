'use client';

import * as React from 'react';
import {
  IconChartBarPopular,
  IconCoins,
  IconCreditCard,
  IconHome,
  IconMoneybagMinus,
  IconPigMoney,
} from '@tabler/icons-react';

import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/log-out';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from '@/components/ui/sidebar';

import { NavGreeting } from './nav-greeting';

const data = {
  user: {
    name: 'Kris',
    email: 'kris@heyo.is',
    avatar: '/avatars/shadcn.jpg',
  },
  navMain: [
    {
      label: 'Home',
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

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible='offcanvas' {...props}>
      <SidebarHeader>
        <NavGreeting />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
