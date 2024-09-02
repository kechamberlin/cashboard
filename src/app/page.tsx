import Link from 'next/link';
import Income from './components/Income';
import Expenses from './components/Expenses';
import Saved from './components/Saved';
import BalanceHistory from './components/BalanceHistory';
import TotalBalance from './components/TotalBalance';
import Investments from './components/Investments';
import CreditScore from './components/CreditScore';
import { Container, Grid, GridCol, Group, List, ListItem } from '@mantine/core';

export default function Home() {
  return (
    <Container mih={'100vh'} p={0} fluid bd={0}>
      <Grid grow gutter={0}>
        <GridCol span={2} bg={'white'} p={32} mih={'100vh'}>
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

        <GridCol span={10} p={32}>
          <Group grow gap={0} justify='flex-start' align='stretch' style={{ flexDirection: 'column' }} h={'100%'}>
            {/* Income, Expenses, Saved */}
            <Group grow>
              <Grid justify='flex-start'>
                <GridCol span={4}>
                  <Link href={`/income`}>
                    <Income />
                  </Link>
                </GridCol>
                <GridCol span={4}>
                  <Link href={`/expenses`}>
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
            <Group grow>
              <Grid justify='flex-start'>
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
            <Group grow>
              <Grid justify='flex-start'>
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
        </GridCol>
      </Grid>
    </Container>
  );
}
