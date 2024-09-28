import Link from 'next/link';
import Income from './components/Income/Income';
import Expenses from './components/Expenses/Expenses';
import Saved from './components/Saved/Saved';
import BalanceHistory from './components/BalanceHistory/BalanceHistory';
import TotalBalance from './components/TotalBalance/TotalBalance';
import Investments from './components/Investments/Investments';
import CreditScore from './components/CreditScore/CreditScore';
import { Grid, GridCol, Group, Stack } from '@mantine/core';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cashboard',
  description: 'A personal finance application for those who prefer to micromanage their budget.',
};

export default function Home() {
  return (
    <Stack align='stretch' justify='center' p={'md'}>
      {/* Income, Expenses, Saved */}
      <Group grow align='center'>
        <Grid>
          <GridCol span={4}>
            <Link href={`/income-and-expenses`}>
              <Income />
            </Link>
          </GridCol>
          <GridCol span={4}>
            <Link href={`/income-and-expenses`}>
              <Expenses />
            </Link>
          </GridCol>
          <GridCol span={4}>
            <Link href={`/savings`}>
              <Saved />
            </Link>
          </GridCol>
        </Grid>
      </Group>

      {/* Balance History, Total Balance  */}
      <Group grow align='flex-start'>
        <Grid>
          <GridCol span={8}>
            <Link href={`/balance-history`}>
              <BalanceHistory />
            </Link>
          </GridCol>
          <GridCol span={4}>
            <Link href={`/total-balance`}>
              <TotalBalance />
            </Link>
          </GridCol>
        </Grid>
      </Group>

      {/* Investments, Credit Score */}
      <Group grow align='flex-start'>
        <Grid>
          <GridCol span={6}>
            <Link href={`/investments`}>
              <Investments />
            </Link>
          </GridCol>
          <GridCol span={6}>
            <Link href={`/credit-score`}>
              <CreditScore />
            </Link>
          </GridCol>
        </Grid>
      </Group>
    </Stack>
  );
}
