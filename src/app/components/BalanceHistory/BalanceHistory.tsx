'use client';

import { Card, Text } from '@mantine/core';
import { BarChart } from '@mantine/charts';

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

    { month: 'Jan', checking: 10000, savings: 20000, investments: 50000 },
    { month: 'Feb', checking: 11000, savings: 21000, investments: 42000 },
    { month: 'Mar', checking: 12000, savings: 22000, investments: 45000 },
    { month: 'Apr', checking: 13000, savings: 24000, investments: 53000 },
    { month: 'May', checking: 14000, savings: 24000, investments: 60000 },
    { month: 'Jun', checking: 15000, savings: 25000, investments: 58000 },
    { month: 'Jul', checking: 14000, savings: 24000, investments: 52000 },
    { month: 'Aug', checking: 13000, savings: 26000, investments: 55000 },
    { month: 'Sep', checking: 16000, savings: 24500, investments: 62000 },
    { month: 'Oct', checking: 18000, savings: 27000, investments: 60000 },
    { month: 'Nov', checking: 20000, savings: 29000, investments: 64000 },
    { month: 'Dec', checking: 22000, savings: 29950, investments: 65000 },
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
        valueFormatter={(value) =>
          new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            trailingZeroDisplay: 'stripIfInteger',
          }).format(value)
        }
        series={[
          // { name: 'checking', label: 'Checking', color: 'indigo' },
          { name: 'checking', label: 'Checking', color: 'cyan.3' },
          { name: 'savings', label: 'Savings', color: 'cyan.6' },
          { name: 'investments', label: 'Investments', color: 'cyan.9' },
        ]}
        type='stacked'
        tooltipAnimationDuration={200}
        withLegend
      />
    </Card>
  );
};

export default BalanceHistory;
