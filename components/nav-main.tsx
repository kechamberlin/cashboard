'use client';

import { type TablerIcon } from '@tabler/icons-react';

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: TablerIcon;
  }[];
}) {
  const pathname = usePathname();

  return (
    <SidebarGroup>
      <SidebarGroupContent className='flex flex-col gap-2'>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                asChild
                className='font-bold'
                isActive={pathname === item?.url}
                size={'lg'}
                tooltip={item.title}
              >
                <Link href={item.url}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
