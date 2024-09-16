'use client';

import { LineChart, Sparkline } from '@mantine/charts';
import { Card, Text } from '@mantine/core';

const Income = () => {
  const MOCK_DATA = [
    // TODO: Define a data structure, ex:
    //    { month: '', year: ??, balance: 1014.21, }

    { month: 'January', balance: 25225.34 },
    { month: 'February', balance: 26582.67 },
    { month: 'March', balance: 30709.25 },
    { month: 'April', balance: 36553.71 },
    { month: 'May', balance: 41018.08 },
    { month: 'June', balance: 43661.69 },
    { month: 'July', balance: 43035.39 },
    { month: 'August', balance: 39540.19 },
    { month: 'September', balance: 42702.68 },
    { month: 'October', balance: 47936.54 },
    { month: 'November', balance: 48092.91 },
    { month: 'December', balance: 59791.99 },
  ];
  return (
    <Card shadow='sm' padding='lg' radius='md' withBorder>
      <Text size='md' c='dimmed'>
        Income
      </Text>
      <Text c={'green'} fw={500} fz={'h3'}>
        + $3,867.24
      </Text>
      {/* <Sparkline
        w={200}
        h={60}
        data={MOCK_DATA?.map((data) => data?.balance)}
        curveType='linear'
        color='green'
        fillOpacity={0.6}
        strokeWidth={2}
      /> */}

      {/* <LineChart
        h={60}
        data={MOCK_DATA}
        dataKey='month'
        valueFormatter={(value) => new Intl.NumberFormat('en-US').format(value)}
        // series={[{ name: 'balance' }]}
        series={[{ name: 'balance', label: 'Income', color: 'green' }]}
        curveType='natural'
        connectNulls
        // strokeWidth={3}
        tickLine='none'
        gridAxis='none'
        withXAxis={false}
        withYAxis={false}
        withDots={false}
      /> */}
    </Card>
  );
};

export default Income;
