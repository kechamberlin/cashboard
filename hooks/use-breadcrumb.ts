'use client';

import { sidebarLinks } from '@/mock-data/sidebar-links';
import { usePathname } from 'next/navigation';

type NavLink = (typeof sidebarLinks.navMain)[number];

export function useBreadcrumb() {
  const pathname = usePathname();

  const breadcrumb = (() => {
    let baseUrl: NavLink | undefined;
    let breadcrumbItem: NavLink | undefined;

    for (const link of sidebarLinks?.navMain ?? []) {
      if (!baseUrl && pathname.startsWith(link.url)) baseUrl = link;
      if (pathname === link.url) breadcrumbItem = link;
      if (baseUrl && breadcrumbItem) break;
    }

    return { baseUrl, breadcrumbItem, pathname };
  })();

  return breadcrumb;
}
