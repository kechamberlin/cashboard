'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './ui/breadcrumb';
import Link from 'next/link';
import { useBreadcrumb } from '@/hooks/use-breadcrumb';

export function SiteHeader() {
  const { baseUrl, breadcrumbItem, pathname } = useBreadcrumb();

  return (
    <header className='flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)'>
      <div className='flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6'>
        <SidebarTrigger className='-ml-1' />
        <Separator
          orientation='vertical'
          className='mx-2 data-[orientation=vertical]:h-4'
        />
        <Breadcrumb>
          <BreadcrumbList>
            {pathname === baseUrl?.url ? (
              <BreadcrumbItem>
                <BreadcrumbPage className='text-base font-medium text-foreground'>
                  {baseUrl?.label}
                </BreadcrumbPage>
              </BreadcrumbItem>
            ) : (
              <>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link
                      href={`${baseUrl?.url ?? `/cashboard`}`}
                      className='text-base font-medium text-muted-foreground'
                    >
                      {baseUrl?.label}
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>

                {breadcrumbItem && (
                  <>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage className='text-base font-medium text-foreground'>
                        {breadcrumbItem.label}
                      </BreadcrumbPage>
                    </BreadcrumbItem>
                  </>
                )}
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>

        {/* TODO: keep CTA or use for something? */}
        <div className='ml-auto flex items-center gap-2'>
          <Button
            variant='destructive'
            asChild
            size='sm'
            className='hidden sm:flex sm:font-extrabold'
          >
            <a
              href='#'
              rel='noopener noreferrer'
              target='_blank'
              className='dark:text-foreground'
            >
              CTA
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
