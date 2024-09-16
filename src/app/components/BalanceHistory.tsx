'use client';

import { Card, Space, Text } from '@mantine/core';
import { BarChart, LineChart } from '@mantine/charts';

const BalanceHistory = () => {
  const MOCK_DATA = [
    // TODO: Define a data structure, ex:
    //    { month: '', year: ??, balance: 1014.21, }

    // { month: 'January', balance: 25225.34 },
    // { month: 'February', balance: 26582.67 },
    // { month: 'March', balance: 30709.25 },
    // { month: 'April', balance: 36553.71 },
    // { month: 'May', balance: 41018.08 },
    // { month: 'June', balance: 43661.69 },
    // { month: 'July', balance: 43035.39 },
    // { month: 'August', balance: 39540.19 },
    // { month: 'September', balance: 42702.68 },
    // { month: 'October', balance: 47936.54 },
    // { month: 'November', balance: 48092.91 },
    // { month: 'December', balance: 59791.99 },

    { month: 'January', checking: 10000, savings: 20000, investments: 50000 },
    { month: 'February', checking: 11000, savings: 21000, investments: 42000 },
    { month: 'March', checking: 12000, savings: 22000, investments: 45000 },
    { month: 'April', checking: 13000, savings: 24000, investments: 53000 },
    { month: 'May', checking: 14000, savings: 24000, investments: 60000 },
    { month: 'June', checking: 15000, savings: 25000, investments: 58000 },
    { month: 'July', checking: 14000, savings: 24000, investments: 52000 },
    { month: 'August', checking: 13000, savings: 26000, investments: 55000 },
    { month: 'September', checking: 16000, savings: 24500, investments: 62000 },
    { month: 'October', checking: 18000, savings: 27000, investments: 60000 },
    { month: 'November', checking: 20000, savings: 29000, investments: 64000 },
    { month: 'December', checking: 22000, savings: 29950, investments: 65000 },
  ];

  return (
    <Card shadow='sm' padding='lg' radius='md' withBorder>
      <Text size='md' c='dimmed'>
        Balance History
      </Text>
      <BarChart
        h={400}
        data={MOCK_DATA}
        dataKey='month'
        valueFormatter={(value) => new Intl.NumberFormat('en-US').format(value)}
        // series={[{ name: 'balance', label: 'Balance', color: 'cyan' }, ]}
        series={[
          { name: 'checking', label: 'Checking', color: 'cyan.3' },
          { name: 'savings', label: 'Savings', color: 'cyan.6' },
          { name: 'investments', label: 'Investments', color: 'cyan.9' },
        ]}
        barProps={{ radius: 8 }}
        type='stacked'
      />
      {/* <LineChart
        h={400}
        data={MOCK_DATA}
        dataKey='month'
        valueFormatter={(value) => new Intl.NumberFormat('en-US').format(value)}
        // series={[{ name: 'balance' }]}
        series={[
          { name: 'checking', label: 'Checking', color: 'red' },
          { name: 'savings', label: 'Savings', color: 'green' },
          // { name: 'investments', label: 'Investments', color: 'cyan.9' },
        ]}
        curveType='natural'
        connectNulls
        // strokeWidth={3}
      /> */}
    </Card>
  );
};

export default BalanceHistory;
