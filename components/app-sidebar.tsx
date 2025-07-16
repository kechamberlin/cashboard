'use client';

import {
  IconChartBar,
  IconCoins,
  IconCreditCardFilled,
  IconHomeFilled,
  IconMoneybagMinus,
  IconPigMoney,
} from '@tabler/icons-react';
import * as React from 'react';

import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from '@/components/ui/sidebar';

const data = {
  user: {
    name: 'Kris',
    email: 'kris.elliott.chamberlin@gmail.com',
    avatar: '/avatars/shadcn.jpg',
  },
  navMain: [
    {
      title: 'Home',
      url: '/cashboard',
      icon: IconHomeFilled,
    },
    {
      title: 'Income & Expenses',
      url: '/cashboard/income-and-expenses',
      icon: IconCoins,
    },
    {
      title: 'Savings',
      url: '/cashboard/savings',
      icon: IconPigMoney,
    },
    {
      title: 'Investments',
      url: '/cashboard/investments',
      icon: IconChartBar,
    },
    {
      title: 'Debt',
      url: '/cashboard/debt',
      icon: IconMoneybagMinus,
    },
    {
      title: 'Credit Score',
      url: '/cashboard/credit-score',
      icon: IconCreditCardFilled,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible='offcanvas' {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            {/* TODO: add Greeting component */}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
