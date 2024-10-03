'use client';

import { AreaChart, DonutChart, PieChart } from '@mantine/charts';
import { Box, Card, Divider, Grid, GridCol, Group, Progress, SegmentedControl, Space, Stack, Table, TableData, Text } from '@mantine/core';
import { MonthPickerInput } from '@mantine/dates';
import { IconCalendar } from '@tabler/icons-react';
import type { Metadata } from 'next';
import { useState } from 'react';

// export const metadata: Metadata = {
//   title: 'Cashboard - Income',
//   description: 'Income Page for Cashboard - a personal finance application for those who prefer to micromanage their budget.',
// };

const IncomePage = () => {
  const [cashflow, setCashflow] = useState('income');

  const date = new Date();

  const [month, setMonth] = useState<Date | null>(date);

  const MOCK_DATA = [
    // TODO: Define a data structure, ex:
    //    { month: '', year: ??, balance: 1014.21, }
    // note: month should come from a timestamp, and can be formatted on FE
    // ie, shortened month will NOT be in the data

    { month: 'Jan', income: 10000, expenses: 8000 },
    { month: 'Feb', income: 10500, expenses: 10000 },
    { month: 'Mar', income: 10000, expenses: 8500 },
    { month: 'Apr', income: 11000, expenses: 12000 },
    { month: 'May', income: 10500, expenses: 7000 },
    { month: 'Jun', income: 10250, expenses: 10250 },
    { month: 'Jul', income: 10000, expenses: 8000 },
    { month: 'Aug', income: 9000, expenses: 8500 },
    { month: 'Sep', income: 12000, expenses: 7000 },
    { month: 'Oct', income: 10500, expenses: 7500 },
    { month: 'Nov', income: 10000, expenses: 7000 },
    { month: 'Dec', income: 11000, expenses: 7500 },
    // { month: 'Oct', income: null, expenses: null },
    // { month: 'Nov', income: null, expenses: null },
    // { month: 'Dec', income: null, expenses: null },
  ];

  const MOCK_TABLE_DATA: TableData = {
    // caption: 'Some elements from periodic table',
    // head: ['Date', 'Description', 'Category', 'Amount'],
    body: [
      ['10/01/2021', 'Rent', 'Home', 2750.0],
      ['10/14/2021', 'Paycheck', 'Work', 1933.34],
      ['10/24/2021', 'Groceries', 'Food & Drink', 907.43],
      ['10/28/2021', 'Paycheck', 'Work', 1933.33],
      ['10/31/2021', 'CIT Bank', 'Interest', 162.56],
    ],
  };

  return (
    <Stack align='stretch' justify='center' p={'md'}>
      {/* Compare Graph, Card */}
      <Group grow align='flex-start'>
        <Grid>
          <GridCol span={12}>
            <Card shadow='sm' padding='lg' radius='md' withBorder>
              <Group justify='space-between'>
                <Text size='xl' c='dimmed' fw={600}>
                  Income & Expenses
                </Text>
                <MonthPickerInput
                  value={month}
                  onChange={setMonth}
                  aria-label='Month Picker Input'
                  leftSection={<IconCalendar width={20} height={20} stroke={1.5} />}
                  leftSectionPointerEvents='none'
                />
              </Group>
              <Group grow wrap='nowrap' align='flex-start'>
                <GridCol span={8}>
                  <AreaChart
                    h={300}
                    data={MOCK_DATA}
                    dataKey='month'
                    series={[
                      { name: 'income', label: 'Income', color: 'green.7' },
                      { name: 'expenses', label: 'Expenses', color: 'red.7' },
                    ]}
                    withGradient
                    curveType='monotone'
                    withLegend
                    valueFormatter={(value) =>
                      new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        trailingZeroDisplay: 'stripIfInteger',
                      }).format(value)
                    }
                    tooltipAnimationDuration={200}
                    dotProps={{ r: 0, strokeWidth: 0 }}
                    activeDotProps={{ r: 4 }}
                    fillOpacity={0.9}
                    // withPointLabels

                    // referenceLines={[
                    //   { y: 8000, label: 'Average Income 2023', color: 'green.9' },
                    //   { y: 5000, label: 'Average Expenses 2023', color: 'red.9' },
                    // ]}
                    // gridColor='gray.5'
                    // textColor='gray.9'
                  />
                </GridCol>

                <GridCol span={4}>
                  <Box maw={'fit-content'}>
                    <Stack align='stretch' justify='center'>
                      <Group align='center'>
                        <Text size='md' c='dimmed'>
                          {/* TODO: Rethink text for this card's title */}
                          {/* Idea 1: Total Monthly Income */}
                          {/* Idea 2: Income for [Month, Year] */}
                          Balance
                        </Text>
                        {/* <MonthPickerInput
                              value={month}
                              onChange={setMonth}
                              aria-label='Month Picker Input'
                              leftSection={<IconCalendar width={20} height={20} stroke={1.5} />}
                              leftSectionPointerEvents='none'
                            /> */}
                      </Group>
                      <Text size='xl' c='green'>
                        + $8,492.78
                      </Text>
                      <Space />
                      <Text size='xl' c='red'>
                        - $5,143.97
                      </Text>
                      <Divider my='sm' />
                      <Text size='xl' c='green' fw={'bold'}>
                        + $3,348.81
                      </Text>
                    </Stack>
                  </Box>
                </GridCol>
              </Group>
            </Card>
          </GridCol>
        </Grid>
      </Group>

      {/* Compare Graph, Card */}
      <Group grow align='flex-start'>
        <Grid>
          <GridCol span={8}>
            <Card shadow='sm' padding='lg' radius='md' withBorder>
              <Text size='md' c='dimmed'>
                Recent Transactions
              </Text>
              {/* TODO: Insert transactions list */}
              <Table data={MOCK_TABLE_DATA} highlightOnHover withRowBorders={false} verticalSpacing='md' />
            </Card>
          </GridCol>

          <GridCol span={4}>
            {/* TODO: move card to its own component in order to 'use client' and keep page server-rendered */}
            <Card shadow='sm' padding='lg' radius='md' withBorder>
              <Stack gap={'sm'}>
                <Group grow align='center' gap={'xs'}>
                  <SegmentedControl
                    value={cashflow}
                    onChange={setCashflow}
                    color={cashflow === 'income' ? 'green.9' : 'red.9'}
                    data={[
                      { label: 'Income', value: 'income' },
                      { label: 'Expenses', value: 'expenses' },
                    ]}
                  />
                  <Text size='sm' c='dimmed'>
                    by Category
                  </Text>
                </Group>

                {/* DONUT CHART */}
                <DonutChart
                  data={
                    cashflow === 'income'
                      ? [
                          { name: 'Paycheck', value: 2453.52, color: 'green.9' },
                          { name: 'Wells Fargo Rewards', value: 124.93, color: 'green.6' },
                          { name: 'Interest', value: 329.44, color: 'green.3' },
                        ]
                      : [
                          { name: 'Rent', value: 2750.0, color: 'red.9' },
                          { name: 'Groceries', value: 907.43, color: 'red.6' },
                          { name: 'Amazon', value: 342.69, color: 'red.3' },
                        ]
                  }
                  thickness={35}
                  strokeWidth={3}
                  tooltipDataSource='segment'
                  // chartLabel={value}
                  chartLabel={`${new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    trailingZeroDisplay: 'stripIfInteger',
                  }).format(cashflow === 'income' ? MOCK_DATA[8]?.income : MOCK_DATA[8]?.expenses)}`}
                  // chartLabel={MOCK_DATA[8]?.month}
                  w={'100%'}
                  valueFormatter={(value) =>
                    new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD',
                      trailingZeroDisplay: 'stripIfInteger',
                    }).format(value)
                  }
                />

                {cashflow === 'income' ? (
                  <Stack gap={'sm'}>
                    <Stack gap={'xs'}>
                      <Group justify='space-between'>
                        <Text>Paycheck</Text>
                        <Text>72%</Text>
                      </Group>
                      <Progress value={72} color='green' />
                    </Stack>

                    <Stack gap={'xs'}>
                      <Group justify='space-between'>
                        <Text>Interest</Text>
                        <Text>24%</Text>
                      </Group>
                      <Progress value={24} color='green' />
                    </Stack>

                    <Stack gap={'xs'}>
                      <Group justify='space-between'>
                        <Text>Wells Fargo Rewards</Text>
                        <Text>4%</Text>
                      </Group>
                      <Progress value={4} color='green' />
                    </Stack>
                  </Stack>
                ) : (
                  <Stack gap={'sm'}>
                    <Stack gap={'xs'}>
                      <Group justify='space-between'>
                        <Text>Rent</Text>
                        <Text>54%</Text>
                      </Group>
                      <Progress value={54} color='red' />
                    </Stack>

                    <Stack gap={'xs'}>
                      <Group justify='space-between'>
                        <Text>Groceries</Text>
                        <Text>26%</Text>
                      </Group>
                      <Progress value={26} color='red' />
                    </Stack>

                    <Stack gap={'xs'}>
                      <Group justify='space-between'>
                        <Text>Amazon</Text>
                        <Text>20%</Text>
                      </Group>
                      <Progress value={20} color='red' />
                    </Stack>
                  </Stack>
                )}
              </Stack>
            </Card>
          </GridCol>
        </Grid>
      </Group>
    </Stack>
  );
};

export default IncomePage;
