import { type TablerIcon } from '@tabler/icons-react';

export type NavMain = {
  label: string;
  url: string;
  icon: TablerIcon;
};

export type SidebarLinks = {
  navMain: NavMain[];
};
