import Link from 'next/link';
import Income from './components/Income';
import Expenses from './components/Expenses';
import Saved from './components/Saved';
import BalanceHistory from './components/BalanceHistory';
import TotalBalance from './components/TotalBalance';
import Investments from './components/Investments';
import CreditScore from './components/CreditScore';
import { Card, Container, Grid, GridCol, Group, List, ListItem } from '@mantine/core';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cashboard',
  description: 'A personal finance application for those who prefer to micromanage their budget.',
};

export default function Home() {
  return (
    <Container mih={'100vh'} p={0} fluid bd={0}>
      <Grid grow gutter={0}>
        {/* TODO: mih={'100vh'} should be for desktop only.  Responsive view should be icons / collapsed. */}
        {/* TODO: move Side Drawer to Layout */}
        <GridCol span={2} p={32} mih={'100vh'}>
          <List withPadding listStyleType='none'>
            <ListItem>Income</ListItem>
            <ListItem>Expenses</ListItem>
            <ListItem>
              Savings
              <List withPadding listStyleType='none'>
                <ListItem>Family Savings</ListItem>
                <ListItem>Rainy Day Fund</ListItem>
                <ListItem>Baby</ListItem>
                <ListItem>House</ListItem>
              </List>
            </ListItem>

            <ListItem>Investments</ListItem>
            <ListItem>Credit Score</ListItem>
          </List>
        </GridCol>

        <GridCol span={10} p={10}>
          <Card radius={25} bg={'gray.1'} h={'100%'}>
            <Group grow gap={0} justify='flex-start' align='stretch' style={{ flexDirection: 'column' }} h={'100%'} p={'md'}>
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
            </Group>
            {/* end card */}
          </Card>
        </GridCol>
      </Grid>
    </Container>
  );
}
