'use client';

import * as React from 'react';

import { NavMain } from '@/components/nav-main';
import { NavLogOut } from '@/components/log-out';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from '@/components/ui/sidebar';

import { NavGreeting } from './nav-greeting';
import { sidebarLinks } from '@/mock-data/sidebar-links';

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible='offcanvas' {...props}>
      <SidebarHeader>
        <NavGreeting />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={sidebarLinks?.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavLogOut />
      </SidebarFooter>
    </Sidebar>
  );
}
