'use client';

import { Avatar, Group, NavLink, Stack, Text } from '@mantine/core';
import { IconChartBarPopular, IconCoins, IconCreditCard, IconHome, IconPigMoney, IconPoint } from '@tabler/icons-react';
import Link from 'next/link';
import styles from './NavDrawer.module.css';
import { usePathname } from 'next/navigation';

const NavDrawer = () => {
  const pathname = usePathname();

  return (
    <>
      {/* TODO: map over from a CMS when set up */}
      <Stack align='stretch' justify='space-between' h={'100%'}>
        <Stack gap={0}>
          <NavLink
            className={styles.navlink}
            component={Link}
            href='/'
            label='Cashboard'
            leftSection={<IconHome size='1.5rem' stroke={1.5} />}
            active={pathname === '/' && true}
            color='light'
          />

          <NavLink
            className={styles.navlink}
            component={Link}
            href='/income-and-expenses'
            label='Income & Expenses'
            leftSection={<IconCoins size='1.5rem' stroke={1.5} />}
            active={pathname === '/income-and-expenses' && true}
            color='light'
          />

          <NavLink
            className={styles.navlink}
            component={Link}
            href='/savings'
            label='Savings'
            leftSection={<IconPigMoney size='1.5rem' stroke={1.5} />}
            childrenOffset={28}
            defaultOpened
            active={pathname === '/savings' && true}
            color='light'
          >
            {/* TODO: will need to map over different funds as they are created */}
            <NavLink
              className={styles.navlink}
              component={Link}
              label='Savings'
              href='/savings'
              leftSection={<IconPoint size='1.5rem' stroke={1.5} />}
              active={pathname === '/savings' && true}
              color='light'
            />
            <NavLink
              className={styles.navlink}
              component={Link}
              label='Family Savings'
              href='#'
              leftSection={<IconPoint size='1.5rem' stroke={1.5} />}
              active={pathname === '/#' && true}
              color='light'
            />
            <NavLink
              className={styles.navlink}
              component={Link}
              label='Rainy Day Fund'
              href='#'
              leftSection={<IconPoint size='1.5rem' stroke={1.5} />}
              active={pathname === '/#' && true}
              color='light'
            />
            <NavLink
              className={styles.navlink}
              component={Link}
              label='Baby'
              href='#'
              leftSection={<IconPoint size='1.5rem' stroke={1.5} />}
              active={pathname === '/#' && true}
              color='light'
            />
            <NavLink
              className={styles.navlink}
              component={Link}
              label='House'
              href='#'
              leftSection={<IconPoint size='1.5rem' stroke={1.5} />}
              active={pathname === '/#' && true}
              color='light'
            />
          </NavLink>

          <NavLink
            className={styles.navlink}
            component={Link}
            href='/investments'
            label='Investments'
            leftSection={<IconChartBarPopular size='1.5rem' stroke={1.5} />}
            active={pathname === '/investments' && true}
            color='light'
          />

          <NavLink
            className={styles.navlink}
            component={Link}
            href='/credit-score'
            label='Credit Score'
            leftSection={<IconCreditCard size='1.5rem' stroke={1.5} />}
            active={pathname === '/credit-score' && true}
            color='light'
          />
        </Stack>

        {/* TODO: integrate when ready */}
        {/* TODO: fix wrapping issues */}
        <Group gap={0} wrap='nowrap'>
          <Avatar color='white' radius='md' variant='transparent' />
          <Text>Kris Chamberlin</Text>
        </Group>
      </Stack>
    </>
  );
};

export default NavDrawer;
