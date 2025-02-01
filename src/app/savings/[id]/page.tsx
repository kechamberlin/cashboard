'use client';

import formatCurrency from '@/app/utils/format-currency';
import { AreaChart, BarChart } from '@mantine/charts';
import {
  Accordion,
  ActionIcon,
  Badge,
  Button,
  Card,
  Center,
  ColorInput,
  ColorSwatch,
  Divider,
  Grid,
  GridCol,
  Group,
  Menu,
  Modal,
  Progress,
  rem,
  RingProgress,
  SegmentedControl,
  SemiCircleProgress,
  SimpleGrid,
  Stack,
  Table,
  Text,
  TextInput,
  ThemeIcon,
  Tooltip,
  useModalsStack,
} from '@mantine/core';
import { DateInput, MonthPickerInput } from '@mantine/dates';
import { useDisclosure } from '@mantine/hooks';
import {
  IconArrowsLeftRight,
  IconBookmarks,
  IconBookmarksFilled,
  IconCalendarMonth,
  IconCircle,
  IconCircleCheckFilled,
  IconCirclePlus,
  IconCoinFilled,
  IconCreditCardPay,
  IconCurrencyDollar,
  IconDots,
  IconDotsVertical,
  IconEdit,
  IconHelpOctagon,
  IconList,
  IconMessageCircle,
  IconPhoto,
  IconPigMoney,
  IconProgress,
  IconSearch,
  IconSettings,
  IconTag,
  IconTrash,
  IconTrendingUp,
} from '@tabler/icons-react';
import { SetStateAction, useRef, useState } from 'react';

const GoalSummaryPage = ({ params }: { params: { id: string } }) => {
  // console.log(params);

  // const form = useForm({
  //   mode: 'uncontrolled',
  //   initialValues: {
  //     email: '',
  //     termsOfService: false,
  //   },

  //   validate: {
  //     email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
  //   },
  // });

  const formRef = useRef<HTMLFormElement>(null);

  // console.log(formRef);

  const stack = useModalsStack(['new-transaction', 'new-earmark', 'edit-transaction', 'delete-transaction', 'edit-goal', 'delete-goal']);
  interface UseModalsStackReturnType<T extends string> {
    // Current opened state of each modal
    state: Record<T, boolean>;

    // Opens modal with the given id
    open: (id: T) => void;

    // Closes modal with the given id
    close: (id: T) => void;

    // Toggles modal with the given id
    toggle: (id: T) => void;

    // Closes all modals within the stack
    closeAll: () => void;

    // Returns props for modal with the given id
    register: (id: T) => {
      opened: boolean;
      onClose: () => void;
      stackId: T;
    };
  }

  //   BABY GOAL
  const goal = {
    id: '1a',
    name: 'Baby',
    initialSavings: 0, // needed?
    currentValue: 5212.64,
    target: 15000,
    color: 'var(--mantine-color-pink-5)',
    saveByDate: '2025-06-30T00:00:00.000Z',
    earmarks: [
      { id: '', name: 'Stroller', value: 1250, color: '#d61f27' },
      { id: '', name: 'Diapers', value: 750, color: '#d46129' },
      { id: '', name: 'Car Seat', value: 575, color: '#ffe5a1' },
      { id: '', name: 'Bottles', value: 275, color: '#a3c4ca' },
      { id: '', name: 'Clothes', value: 150, color: '#516cf5' },
    ],
    // TODO: transactions[] dates should be in proper date format
    // TODO: remove needToSave (concept was moved to earmarks[])
    transactions: [
      { id: '1a-1a', date: '10/14/2021', description: 'Initial Saving', amount: 3000, type: 'saving' },
      { id: '1a-2a', date: '10/18/2021', description: 'CA Tax Refund', amount: 1275, type: 'saving' },
      { id: '1a-3a', date: '10/30/2021', description: 'Even out fund', amount: 725, type: 'saving' },
      { id: '1a-4a', date: '10/31/2021', description: 'Saving', amount: 600, type: 'saving' },
      { id: '1a-5a', date: '11/12/2021', description: 'Baby Shower Check', amount: 1000, type: 'saving' },
      //   { id: '1a-8a', date: '', description: 'Paycheck', amount: 0, type: 'amount to save' },
      { id: '1a-6a', date: '10/31/2021', description: 'Diapers', amount: 137.36, type: 'expense' },
      { id: '1a-7a', date: '10/24/2021', description: 'Stroller', amount: 1250, type: 'expense' },
    ],
  };

  const earmarkTotal = goal?.earmarks?.reduce((sum, total) => sum + total?.value, 0); // $55,307.10

  const ringProgressData = goal?.earmarks
    ?.sort((a, b) => b.value - a.value)
    .map((earmark) => ({
      value: (earmark?.value / earmarkTotal) * 100,
      color: earmark?.color,
      tooltip: `${earmark?.name} - ${formatCurrency(earmark?.value, null, null, { trailingZeroDisplay: 'stripIfInteger' })}`,
    }));

  //   HOME GYM GOAL
  //   const goal = {
  //     id: '5a',
  //     name: 'Home Gym',
  //     initialSavings: 0,
  //     currentValue: 2000,
  //     target: 2000,
  //     color: '#e99999',
  //     // TODO: transactions[] dates should be in proper date format
  //     transactions: [
  //       { id: '5a-1a', date: '20 July 2024', description: 'Reallocation from Maternity Leave', needToSave: 0, amount: 2000, type: 'saving' },
  //       { id: '5a-2a', date: '', description: 'Power Rack', needToSave: 910, amount: 0, type: 'amount to save' },
  //       { id: '5a-3a', date: '', description: 'Plates', needToSave: 310, amount: 0, type: 'amount to save' },
  //       { id: '5a-4a', date: '', description: 'Barbell (Ohio Power Bar - Bare Steel)', needToSave: 275, amount: 0, type: 'amount to save' },
  //       { id: '5a-5a', date: '', description: 'Bench (Bolt Together Utility Bench', needToSave: 245, amount: 0, type: 'amount to save' },
  //       { id: '5a-6a', date: '', description: 'Mats', needToSave: 150, amount: 0, type: 'amount to save' },
  //     ],
  //   };

  //   CIT INTEREST ALLOCATION
  //   const goal = {
  //     id: '9a',
  //     name: 'CIT Interest',
  //     initialSavings: 0,
  //     currentValue: 1689.8,
  //     target: 0,
  //     color: '#a3c4ca',
  //     // TODO: transactions[] dates should be in proper date format
  //     transactions: [
  //       { id: '9a-1a', date: '30 September 2023', description: '', needToSave: 0, amount: 17.79, type: 'saving' },
  //       { id: '9a-2a', date: '31 October 2023', description: '', needToSave: 0, amount: 57.19, type: 'saving' },
  //       { id: '9a-3a', date: '30 November 2023', description: '', needToSave: 0, amount: 69.89, type: 'saving' },
  //       { id: '9a-4a', date: '31 December 2023', description: '', needToSave: 0, amount: 124.14, type: 'saving' },
  //       { id: '9a-5a', date: '31 January 2024', description: '', needToSave: 0, amount: 146.12, type: 'saving' },
  //       { id: '9a-6a', date: '29 February 2024', description: '', needToSave: 0, amount: 143.77, type: 'saving' },
  //       { id: '9a-7a', date: '31 March 2024', description: '', needToSave: 0, amount: 164.47, type: 'saving' },
  //       { id: '9a-8a', date: '30 April 2024', description: '', needToSave: 0, amount: 152.35, type: 'saving' },
  //       { id: '9a-9a', date: '31 May 2024', description: '', needToSave: 0, amount: 158.12, type: 'saving' },
  //       { id: '9a-10a', date: '30 June 2024', description: '', needToSave: 0, amount: 154.32, type: 'saving' },
  //       { id: '9a-11a', date: '31 July 2024', description: '', needToSave: 0, amount: 159.1, type: 'saving' },
  //       { id: '9a-12a', date: '31 August 2024', description: '', needToSave: 0, amount: 168.78, type: 'saving' },
  //       { id: '9a-13a', date: '30 September 2024', description: '', needToSave: 0, amount: 173.76, type: 'saving' },
  //       { id: '9a-14a', date: '31 October 2024', description: '', needToSave: 0, amount: 0, type: 'saving' },
  //       { id: '9a-15a', date: '30 November 2024', description: '', needToSave: 0, amount: 0, type: 'amount to save' },
  //       { id: '9a-16a', date: '31 December 2024', description: '', needToSave: 0, amount: 0, type: 'amount to save' },
  //     ],
  //   };

  // RAINY DAY FUND GOAL
  //   const goal = {
  //     id: '4a',
  //     name: 'Rainy Day Fund',
  //     initialSavings: 0,
  //     currentValue: 1689.8,
  //     target: 2500,
  //     color: '#a3c4ca',
  //     // TODO: transactions[] dates should be in proper date format
  //     transactions: [
  //       { id: '4a-1a', date: '1 March 2024', description: '', needToSave: 250, amount: 250, type: 'saving' },
  //       { id: '4a-2a', date: '13 March 2024', description: '', needToSave: 250, amount: 250, type: 'saving' },
  //       { id: '4a-3a', date: '27 March 2024', description: '', needToSave: 250, amount: 250, type: 'saving' },
  //       { id: '4a-4a', date: '10 April 2024', description: '', needToSave: 250, amount: 250, type: 'saving' },
  //       { id: '4a-5a', date: '24 April 2024', description: '', needToSave: 250, amount: 250, type: 'saving' },
  //       { id: '4a-6a', date: '8 May 2024', description: '', needToSave: 250, amount: 250, type: 'saving' },
  //       { id: '4a-7a', date: '22 May 2024', description: '', needToSave: 250, amount: 250, type: 'saving' },
  //       { id: '4a-8a', date: '5 June 2024', description: '', needToSave: 250, amount: 250, type: 'saving' },
  //       { id: '4a-9a', date: '19 June 2024', description: '', needToSave: 250, amount: 250, type: 'saving' },
  //       { id: '4a-10a', date: '3 July 2024', description: '', needToSave: 250, amount: 250, type: 'saving' },
  //       //   { id: '4a-11a', date: '31 July 2024', description: '', needToSave: 0, amount: 159.1, type: 'saving' },
  //     ],
  //   };

  const MOCK_CHART_DATA = [
    // TODO: Define a data structure, ex:
    //    { month: '', year: ??, balance: 1014.21, }
    // note: month should come from a timestamp, and can be formatted on FE
    // ie, shortened month will NOT be in the data

    // { month: 'Jan', savings: 28582.56 },
    // { month: 'Feb', savings: 29249.1 },
    // { month: 'Mar', savings: 31326.99 },
    // { month: 'Apr', savings: 30268.51 },
    // { month: 'May', savings: 28792.31 },
    // { month: 'Jun', savings: 23799.03 },
    { month: 'Jul', savings: 250 },
    { month: 'Aug', savings: 500 },
    { month: 'Sep', savings: 750 },
    { month: 'Oct', savings: 1000 },
    { month: 'Nov', savings: 1250 },
    { month: 'Dec', savings: 2000 },
    { month: 'Jan', savings: 2250 },
    { month: 'Feb', savings: 2250 },
    { month: 'Mar', savings: 2500 },
    { month: 'Apr', savings: 2750 },
    { month: 'May', savings: 3500 },
    { month: 'Jun', savings: 4000 },
    { month: 'Jul', savings: 5212.64 },
    // { month: 'Aug', savings: 24461.95 },
    // { month: 'Sep', savings: 23034.68 },
    // { month: 'Oct', savings: 26411.71 },
    // { month: 'Nov', savings: 30709.25 },
    // { month: 'Dec', savings: 32646.43 },
    // { month: 'Oct', income: null, expenses: null },
    // { month: 'Nov', income: null, expenses: null },
    // { month: 'Dec', income: null, expenses: null },
  ];

  //   const ringProgressData = goal?.sort((a, b) => b.currentValue - a.currentValue).map((goal) => ({
  //     value: (goal?.currentValue / totalSavings) * 100,
  //     color: goal?.color,
  //     tooltip: `${goal?.name} - ${new Intl.NumberFormat('en-US', {
  //       style: 'currency',
  //       currency: 'USD',
  //       trailingZeroDisplay: 'stripIfInteger',
  //     }).format(goal?.currentValue)}`,
  //   }));

  const date = new Date();

  const [month, setMonth] = useState<Date | null>(date);

  const [opened, { open, close }] = useDisclosure(false);

  const [dateValue, setDateValue] = useState<Date | null>(date);

  console.log({ dateValue });

  const [transactionType, setTransactionType] = useState('saving');

  const openModalWithFormValue = (type: any) => {
    setTransactionType(type);
    open();
  };

  return (
    <Stack align='stretch' justify='center' p={'md'}>
      <Grid>
        <GridCol span={12}>
          {/* <Card shadow='sm' padding='lg' radius='md' withBorder> */}
          <Stack>
            <Group justify='space-between'>
              <Text size='xl' c='black' fw={600}>
                Goal Summary
              </Text>
              <Menu shadow='md' width={200}>
                <Menu.Target>
                  <ActionIcon variant='transparent' aria-label='Settings' c={'dark'}>
                    <IconDotsVertical stroke={1.5} />
                  </ActionIcon>
                </Menu.Target>

                <Menu.Dropdown>
                  <Menu.Label>{goal?.name}</Menu.Label>

                  <Menu.Divider />

                  <Menu.Item onClick={() => stack.open('edit-goal')} leftSection={<IconEdit style={{ width: rem(20), height: rem(20) }} />}>
                    Edit
                  </Menu.Item>
                  <Menu.Item
                    onClick={() => stack.open('delete-goal')}
                    color='red'
                    leftSection={<IconTrash style={{ width: rem(20), height: rem(20) }} />}
                  >
                    Delete
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
              {/* <MonthPickerInput
                value={month}
                onChange={setMonth}
                aria-label='Month Picker Input'
                leftSection={<IconCalendarMonth stroke={1.5} />}
                leftSectionPointerEvents='none'
                radius='md'
                size='md'
                variant='filled'
              /> */}
              {/* <Group justify='center'>
                <Button
                  // onClick={open}
                  // onClick={() => openModalWithFormValue('saving')}
                  disabled={opened}
                  size={'sm'}
                  variant='light'
                  color='#516cf5'
                  // color='green.6'
                  // c={'white'}
                  radius={'md'}
                  justify='center'
                  leftSection={<IconEdit />}
                >
                  Edit Goal
                </Button>
                <Button
                  // onClick={open}
                  // onClick={() => openModalWithFormValue('saving')}
                  disabled={opened}
                  size={'sm'}
                  variant='outline'
                  color='red'
                  radius={'md'}
                  justify='center'
                  leftSection={<IconTrash />}
                >
                  Delete Goal
                </Button>
              </Group> */}
            </Group>

            <Group grow align='flex-start'>
              <Grid>
                <GridCol span={8}>
                  <Card withBorder radius={8}>
                    <Group justify='space-between' align='flex-start'>
                      <Stack gap={0}>
                        <Text size='lg' fw={600}>
                          Monthly Contributions
                        </Text>
                      </Stack>
                    </Group>
                    <BarChart
                      h={325}
                      data={MOCK_CHART_DATA}
                      dataKey='month'
                      // valueFormatter={(value) =>
                      //   new Intl.NumberFormat('en-US', {
                      //     style: 'currency',
                      //     currency: 'USD',
                      //     trailingZeroDisplay: 'stripIfInteger',
                      //   }).format(value)
                      // }
                      valueFormatter={(value) => formatCurrency(value, null, null, { trailingZeroDisplay: 'stripIfInteger' })}
                      series={[{ name: 'savings', label: 'Savings', color: 'green.7' }]}
                      type='stacked'
                      tooltipAnimationDuration={200}
                      withLegend
                      barProps={{ radius: 8 }}
                    />
                  </Card>
                </GridCol>

                <GridCol span={4}>
                  <Card withBorder radius={8}>
                    <Stack gap={'md'}>
                      <Group justify='space-between' align='flex-start'>
                        <Stack gap={0}>
                          <Text size='lg' fw={600}>
                            {goal?.name}
                          </Text>
                          <Text c={'dimmed'} size='xs' fs={'italic'}>
                            as of Nov 2024
                          </Text>
                        </Stack>

                        <Group>
                          <Text c={'dimmed'} size='xl'>
                            {formatCurrency(goal?.currentValue)}
                          </Text>
                          <Text>/</Text>
                          <Text c={'green.7'} fw={'bold'} size='xl'>
                            {formatCurrency(goal?.target, null, null, { trailingZeroDisplay: 'stripIfInteger' })}
                          </Text>
                        </Group>
                      </Group>

                      <Progress color='green' radius='xl' value={(goal?.currentValue / goal?.target) * 100} />

                      <Stack>
                        <Group justify='space-between'>
                          <Group gap={'xs'}>
                            <Tooltip
                              label={
                                goal?.currentValue >= goal?.target
                                  ? 'You have reached your target!'
                                  : goal?.currentValue < goal?.target && goal?.currentValue > 0
                                  ? `In Progress: ${((goal?.currentValue / goal?.target) * 100).toFixed(2)}% of target`
                                  : 'Not Started'
                              }
                            >
                              <ThemeIcon size='sm' variant='white' c={goal?.color}>
                                {goal?.currentValue >= goal?.target && <IconCircleCheckFilled fill={goal?.color} />}
                                {goal?.currentValue < goal?.target && goal?.currentValue > 0 && <IconProgress fill={goal?.color} />}
                                {goal?.currentValue === 0 && <IconCircle />}
                              </ThemeIcon>
                            </Tooltip>
                            <Text c={'dimmed'} fs={'italic'} size='sm'>
                              {goal?.currentValue >= goal?.target
                                ? 'Target reached'
                                : goal?.currentValue < goal?.target && goal?.currentValue > 0
                                ? 'In Progress'
                                : 'Not Started'}
                            </Text>
                          </Group>
                          <Text c={'dimmed'} fs={'italic'} size='sm'>
                            {`${((goal?.currentValue / goal?.target) * 100).toFixed(2)}% of goal`}
                          </Text>
                        </Group>

                        <Divider variant='dashed' />

                        <Group justify='space-between'>
                          <Group gap={'xs'}>
                            <Tooltip label={'The amount of money you have left to save until you reach your goal.'}>
                              <ThemeIcon size='sm' variant='white' c={goal?.color}>
                                <IconPigMoney />
                              </ThemeIcon>
                            </Tooltip>
                            <Text c={'dimmed'} fs={'italic'} size='sm'>
                              Left to save
                            </Text>
                          </Group>
                          <Text c={'dimmed'} fs={'italic'} size='sm'>
                            {formatCurrency(goal?.target, goal?.currentValue, 'subtract')}
                          </Text>
                        </Group>

                        <Divider variant='dashed' />

                        <Group justify='space-between'>
                          <Group gap={'xs'}>
                            <Tooltip label={'The amount of money you have set aside for particular items.'}>
                              <ThemeIcon size='sm' variant='white' c={goal?.color}>
                                <IconBookmarks />
                              </ThemeIcon>
                            </Tooltip>
                            <Text c={'dimmed'} fs={'italic'} size='sm'>
                              Earmarked
                            </Text>
                          </Group>

                          <Text c={'dimmed'} fs={'italic'} size='sm'>
                            {formatCurrency(earmarkTotal)}
                          </Text>
                        </Group>

                        <Divider variant='dashed' />

                        <Group justify='space-between'>
                          <Group gap={'xs'}>
                            {/* TODO: rephrase Tooltup text */}
                            <Tooltip label={'The amount of money you have leftover after setting aside any for earmarks.'}>
                              <ThemeIcon size='sm' variant='white' c={'dimmed'}>
                                <IconHelpOctagon />
                              </ThemeIcon>
                            </Tooltip>
                            <Text c={'dimmed'} fs={'italic'} size='sm'>
                              Unallocated
                            </Text>
                          </Group>
                          <Text c={'dimmed'} fs={'italic'} size='sm'>
                            {formatCurrency(goal?.currentValue, earmarkTotal, 'subtract')}
                          </Text>
                        </Group>

                        <Divider variant='dashed' />

                        <Group justify='space-between'>
                          <Group gap={'xs'}>
                            <Tooltip label={'The date by which you plan to finish your goal.'}>
                              <ThemeIcon size='sm' variant='white' c={goal?.color}>
                                <IconCalendarMonth />
                              </ThemeIcon>
                            </Tooltip>

                            <Text c={'dimmed'} fs={'italic'} size='sm'>
                              Save by
                            </Text>
                          </Group>
                          <Text c={'dimmed'} fs={'italic'} size='sm'>
                            {new Date(goal?.saveByDate).toLocaleDateString()}
                          </Text>
                        </Group>
                      </Stack>
                    </Stack>
                  </Card>
                </GridCol>
              </Grid>
            </Group>
          </Stack>
          {/* </Card> */}
        </GridCol>
      </Grid>
      {/* </Group> */}

      {/* Compare Graph, Card */}
      <Group grow align='flex-start'>
        <Grid>
          <GridCol span={8}>
            <Card shadow='sm' padding='lg' radius='md' withBorder>
              <Stack>
                <Group justify='space-between'>
                  <Text size='xl' c='black)' fw={600}>
                    Transactions
                  </Text>
                  {/* TODO: add info tooltip */}
                  <Button
                    // onClick={open}
                    // onClick={() => openModalWithFormValue('saving')}
                    onClick={() => stack.open('new-transaction')}
                    disabled={opened && true}
                    size={'sm'}
                    variant='filled'
                    color='#516cf5'
                    // color='green.6'
                    // c={'white'}
                    radius={'md'}
                    justify='center'
                    leftSection={<IconCirclePlus />}
                  >
                    New Transaction
                  </Button>
                </Group>
                <Table
                  // stickyHeader
                  // stickyHeaderOffset={60}
                  verticalSpacing={'sm'}
                  striped='even'
                  withRowBorders={false}
                  // highlightOnHover
                  //   highlightOnHoverColor={'indigo.1'} // TODO: remove or revert back to default color
                >
                  <Table.Thead bg={'gray.1'}>
                    <Table.Tr>
                      <Table.Th w={'fit-content'}>Date</Table.Th>
                      <Table.Th>Description</Table.Th>
                      <Table.Th>Type</Table.Th>
                      <Table.Th>Amount</Table.Th>
                      <Table.Th></Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {goal?.transactions?.map((transaction) => (
                      <Table.Tr key={transaction?.id}>
                        <Table.Td>{transaction?.date}</Table.Td>
                        <Table.Td c={'dimmed'} fs={'italic'}>
                          {transaction?.description}
                        </Table.Td>
                        <Table.Td>
                          <Badge variant='filled' color={transaction?.type === 'saving' ? 'green' : 'red.9'} size='md'>
                            {transaction?.type}
                          </Badge>
                        </Table.Td>
                        <Table.Td>
                          <Text
                            // ta={'right'}
                            size='sm'
                            fs={transaction?.type === 'saving' ? 'inherit' : 'italic'}
                            c={transaction?.type === 'saving' ? 'green.7' : 'red.7'}
                          >
                            {transaction?.type === 'saving' ? '+' : '-'} {formatCurrency(transaction?.amount)}
                          </Text>
                        </Table.Td>
                        <Table.Td w={'fit-content'}>
                          {/* <Button size='compact-sm'>Edit</Button> */}
                          <Group justify='flex-end'>
                            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}

                            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
                            <Menu shadow='md' width={200}>
                              <Menu.Target>
                                <ActionIcon variant='transparent' aria-label='Settings' c={'dark'}>
                                  <IconDots stroke={1.5} />
                                </ActionIcon>
                              </Menu.Target>

                              <Menu.Dropdown>
                                <Menu.Label>{transaction?.description}</Menu.Label>

                                <Menu.Divider />

                                <Menu.Item
                                  onClick={() => stack.open('edit-transaction')}
                                  leftSection={<IconEdit style={{ width: rem(20), height: rem(20) }} />}
                                >
                                  Edit
                                </Menu.Item>
                                <Menu.Item
                                  onClick={() => stack.open('delete-transaction')}
                                  color='red'
                                  leftSection={<IconTrash style={{ width: rem(20), height: rem(20) }} />}
                                >
                                  Delete
                                </Menu.Item>
                              </Menu.Dropdown>
                            </Menu>

                            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
                            {/* <Tooltip label={'Edit'}>
                              <ActionIcon variant='light' aria-label='Settings'>
                                <IconEdit style={{ width: '70%', height: '70%' }} stroke={1.5} />
                              </ActionIcon>
                            </Tooltip>
                            <Tooltip label={'Delete'}>
                              <ActionIcon variant='light' aria-label='Settings'>
                                <IconTrash style={{ width: '70%', height: '70%' }} stroke={1.5} />
                              </ActionIcon>
                            </Tooltip> */}
                            {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
                          </Group>
                        </Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>

                {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}

                <Modal.Stack>
                  <Modal
                    {...stack.register('new-transaction')}
                    title='Create new transaction'
                    size={'md'}
                    c='black'
                    removeScrollProps={{ enabled: false }}
                    radius={'md'}
                  >
                    <form ref={formRef} onSubmit={(event) => (event.preventDefault(), console.log('Submit New Goal Form', formRef))}>
                      <Stack gap={'md'}>
                        <SegmentedControl
                          value={transactionType}
                          onChange={setTransactionType}
                          color={transactionType === 'saving' ? 'green.9' : 'red.9'}
                          data={[
                            { label: 'Saving', value: 'saving' },
                            { label: 'Expense', value: 'expense' },
                            // { label: 'Earmark', value: 'earmark' },
                          ]}
                        />

                        <DateInput
                          label='Date'
                          description='The date of the transaction'
                          leftSection={<IconCalendarMonth />}
                          placeholder=''
                          size='md'
                          radius='md'
                          // withAsterisk
                          // error='Required Field'
                          value={dateValue}
                          onChange={setDateValue}
                          clearable
                        />

                        <TextInput
                          label='Description'
                          // description={transactionType === 'saving' ? 'Briefly describe the saving' : 'Briefly describe the expense'}
                          description={
                            transactionType === 'saving'
                              ? 'Briefly describe the saving'
                              : transactionType === 'expense'
                              ? 'Briefly describe the expense'
                              : 'Briefly describe the item to buy'
                          }
                          leftSection={<IconTag />}
                          placeholder=''
                          size='md'
                          radius='md'
                          // value={}
                          // withAsterisk
                          // error='Required Field'
                          data-autofocus
                        />
                        <TextInput
                          label='Amount'
                          description={transactionType === 'saving' ? 'How much are you saving?' : 'How much are you spending?'}
                          leftSection={<IconCurrencyDollar />}
                          placeholder='0'
                          size='md'
                          radius='md'
                          // value={}
                          // withAsterisk
                          // error='Required Field'
                          // data-autofocus
                        />

                        <Group justify='flex-end'>
                          <Button variant='outline' color='red'>
                            Reset
                          </Button>
                          <Button type='submit' color='indigo'>
                            Create Transaction
                          </Button>
                        </Group>
                      </Stack>
                    </form>
                  </Modal>

                  <Modal
                    {...stack.register('new-earmark')}
                    title='Create new earmark'
                    size={'md'}
                    c='black'
                    removeScrollProps={{ enabled: false }}
                    radius={'md'}
                  >
                    <form ref={formRef} onSubmit={(event) => (event.preventDefault(), console.log('Submit New Goal Form', formRef))}>
                      <Stack gap={'md'}>
                        {/* <SegmentedControl
                          value={transactionType}
                          onChange={setTransactionType}
                          color={transactionType === 'saving' ? 'green.9' : transactionType === 'expense' ? 'red.9' : 'yellow.9'}
                          data={[{ label: 'Earmark', value: 'earmark' }]}
                        /> */}
                        <TextInput
                          label='Description'
                          // description={transactionType === 'saving' ? 'Briefly describe the saving' : 'Briefly describe the expense'}
                          description={'Briefly describe the item to buy'}
                          leftSection={<IconTag />}
                          placeholder=''
                          size='md'
                          radius='md'
                          // value={}
                          // withAsterisk
                          // error='Required Field'
                          data-autofocus
                        />
                        <TextInput
                          label='Amount'
                          // description={transactionType === 'saving' ? 'How much are you saving?' : 'How much are you spending?'}
                          description={'How much does the item cost?'}
                          leftSection={<IconCurrencyDollar />}
                          placeholder='0'
                          size='md'
                          radius='md'
                          // value={}
                          // withAsterisk
                          // error='Required Field'
                          // data-autofocus
                        />

                        {/* TODO: only enable for earmarking (^) */}

                        <ColorInput
                          label='Palette'
                          description='Choose a color for your earmark'
                          defaultValue='#4b6ef5'
                          format='hex'
                          swatches={[
                            '#2e2e2e',
                            '#868e96',
                            '#fa5252',
                            '#e64980',
                            '#be4bdb',
                            '#7950f2',
                            '#4c6ef5',
                            '#228be6',
                            '#15aabf',
                            '#12b886',
                            '#40c057',
                            '#82c91e',
                            '#fab005',
                            '#fd7e14',
                          ]}
                          size='md'
                          radius='md'
                        />

                        <Group justify='flex-end'>
                          <Button variant='outline' color='red'>
                            Reset
                          </Button>
                          <Button type='submit' color='indigo'>
                            Create Earmark
                          </Button>
                        </Group>
                      </Stack>
                    </form>
                  </Modal>

                  <Modal
                    {...stack.register('edit-transaction')}
                    title='Edit transaction'
                    size={'md'}
                    c='black'
                    removeScrollProps={{ enabled: false }}
                    radius={'md'}
                  >
                    <form ref={formRef} onSubmit={(event) => (event.preventDefault(), console.log('Submit New Goal Form', formRef))}>
                      <Stack gap={'md'}>
                        {/* TODO: values should come from the transaction item (maybe via id?) */}
                        <SegmentedControl
                          value={transactionType}
                          onChange={setTransactionType}
                          color={transactionType === 'saving' ? 'green.9' : 'red.9'}
                          data={[
                            { label: 'Saving', value: 'saving' },
                            { label: 'Expense', value: 'expense' },
                            // { label: 'Earmark', value: 'earmark' },
                          ]}
                        />

                        <DateInput
                          label='Date'
                          description='The date of the transaction'
                          leftSection={<IconCalendarMonth />}
                          placeholder=''
                          size='md'
                          radius='md'
                          // withAsterisk
                          // error='Required Field'
                          value={dateValue}
                          onChange={setDateValue}
                          clearable
                        />

                        <TextInput
                          label='Description'
                          // description={transactionType === 'saving' ? 'Briefly describe the saving' : 'Briefly describe the expense'}
                          description={
                            transactionType === 'saving'
                              ? 'Briefly describe the saving'
                              : transactionType === 'expense'
                              ? 'Briefly describe the expense'
                              : 'Briefly describe the item to buy'
                          }
                          leftSection={<IconTag />}
                          placeholder=''
                          size='md'
                          radius='md'
                          // value={}
                          // withAsterisk
                          // error='Required Field'
                          data-autofocus
                        />
                        <TextInput
                          label='Amount'
                          description={transactionType === 'saving' ? 'How much are you saving?' : 'How much are you spending?'}
                          leftSection={<IconCurrencyDollar />}
                          placeholder='0'
                          size='md'
                          radius='md'
                          // value={}
                          // withAsterisk
                          // error='Required Field'
                          // data-autofocus
                        />

                        <Group justify='flex-end'>
                          <Button variant='outline' color='red'>
                            Reset
                          </Button>
                          <Button type='submit' color='indigo'>
                            Create Transaction
                          </Button>
                        </Group>
                      </Stack>
                    </form>
                  </Modal>

                  <Modal
                    {...stack.register('edit-goal')}
                    title='Edit Goal'
                    size={'md'}
                    c='black'
                    removeScrollProps={{ enabled: false }}
                    radius={'md'}
                  >
                    <form ref={formRef} onSubmit={(event) => (event.preventDefault(), console.log('Submit New Goal Form', formRef))}>
                      <Stack gap={'md'}>
                        <TextInput
                          label='Goal Name'
                          description={'The name of your goal'}
                          leftSection={<IconTag />}
                          placeholder=''
                          size='md'
                          radius='md'
                          value={goal?.name}
                          // withAsterisk
                          // error='Required Field'
                          // data-autofocus
                        />
                        <TextInput
                          label='Target'
                          description={'The total amount you need to save'}
                          leftSection={<IconCurrencyDollar />}
                          placeholder='0'
                          size='md'
                          radius='md'
                          value={formatCurrency(goal?.target, null, null, { trailingZeroDisplay: 'stripIfInteger' })}
                          // withAsterisk
                          // error='Required Field'
                          // data-autofocus
                        />
                        <DateInput
                          label='Save By Date'
                          description='The date by which you plan to finish your goal.'
                          leftSection={<IconCalendarMonth />}
                          placeholder=''
                          size='md'
                          radius='md'
                          // withAsterisk
                          // error='Required Field'
                          value={new Date(goal?.saveByDate)}
                          onChange={setDateValue}
                          clearable
                        />

                        <Group justify='flex-end'>
                          {/* <Button variant='outline' color='red'>
                            Reset
                          </Button> */}
                          <Button type='submit' color='indigo'>
                            Update Goal
                          </Button>
                        </Group>
                      </Stack>
                    </form>
                  </Modal>

                  <Modal
                    {...stack.register('delete-transaction')}
                    title='Delete transaction'
                    size={'md'}
                    c='black'
                    removeScrollProps={{ enabled: false }}
                    radius={'md'}
                  >
                    Delete transaction content
                  </Modal>

                  <Modal
                    {...stack.register('delete-goal')}
                    title='Delete goal'
                    size={'md'}
                    c='black'
                    removeScrollProps={{ enabled: false }}
                    radius={'md'}
                  >
                    Delete goal content
                  </Modal>
                </Modal.Stack>

                <Modal
                  // opened={opened}
                  // onClose={close}
                  opened={false}
                  onClose={() => false}
                  title={`New ${goal?.name} Transaction `}
                  // centered
                  size={'md'}
                  c='black'
                  removeScrollProps={{ enabled: false }}
                  radius={'md'}
                  // transitionProps={{ transition: 'fade' }}
                >
                  {/* <form onSubmit={form.onSubmit((values) => console.log(values))}>
                    <TextInput
                      withAsterisk
                      label="Email"
                      placeholder="your@email.com"
                      key={form.key('email')}
                      {...form.getInputProps('email')}
                    />

                    <Checkbox
                      mt="md"
                      label="I agree to sell my privacy"
                      key={form.key('termsOfService')}
                      {...form.getInputProps('termsOfService', { type: 'checkbox' })}
                    />

                    <Group justify="flex-end" mt="md">
                      <Button type="submit">Submit</Button>
                    </Group>
                  </form> */}
                  <form ref={formRef} onSubmit={(event) => (event.preventDefault(), console.log('Submit New Goal Form', formRef))}>
                    <Stack gap={'md'}>
                      <SegmentedControl
                        value={transactionType}
                        onChange={setTransactionType}
                        color={transactionType === 'saving' ? 'green.9' : transactionType === 'expense' ? 'red.9' : 'yellow.9'}
                        data={[
                          { label: 'Saving', value: 'saving' },
                          { label: 'Expense', value: 'expense' },
                          { label: 'Earmark', value: 'earmark' },
                        ]}
                      />
                      {transactionType !== 'earmark' && (
                        <DateInput
                          label='Date'
                          description='The date of the transaction'
                          leftSection={<IconCalendarMonth />}
                          placeholder=''
                          size='md'
                          radius='md'
                          // withAsterisk
                          // error='Required Field'
                          value={dateValue}
                          onChange={setDateValue}
                          clearable
                        />
                      )}
                      <TextInput
                        label='Description'
                        // description={transactionType === 'saving' ? 'Briefly describe the saving' : 'Briefly describe the expense'}
                        description={
                          transactionType === 'saving'
                            ? 'Briefly describe the saving'
                            : transactionType === 'expense'
                            ? 'Briefly describe the expense'
                            : 'Briefly describe the item to buy'
                        }
                        leftSection={<IconTag />}
                        placeholder=''
                        size='md'
                        radius='md'
                        // value={}
                        // withAsterisk
                        // error='Required Field'
                        data-autofocus
                      />
                      <TextInput
                        label='Amount'
                        // description={transactionType === 'saving' ? 'How much are you saving?' : 'How much are you spending?'}
                        description={
                          transactionType === 'saving'
                            ? 'How much are you saving?'
                            : transactionType === 'expense'
                            ? 'How much are you spending?'
                            : 'How much does the item cost?'
                        }
                        leftSection={<IconCurrencyDollar />}
                        placeholder='0'
                        size='md'
                        radius='md'
                        // value={}
                        // withAsterisk
                        // error='Required Field'
                        // data-autofocus
                      />

                      {/* TODO: only enable for earmarking (^) */}
                      {transactionType === 'earmark' && (
                        <ColorInput
                          label='Palette'
                          description='Choose a color for your goal'
                          defaultValue='#4b6ef5'
                          format='hex'
                          swatches={[
                            '#2e2e2e',
                            '#868e96',
                            '#fa5252',
                            '#e64980',
                            '#be4bdb',
                            '#7950f2',
                            '#4c6ef5',
                            '#228be6',
                            '#15aabf',
                            '#12b886',
                            '#40c057',
                            '#82c91e',
                            '#fab005',
                            '#fd7e14',
                          ]}
                          size='md'
                          radius='md'
                        />
                      )}

                      <Group justify='flex-end'>
                        <Button variant='outline' color='red'>
                          Reset
                        </Button>
                        <Button type='submit' color='indigo'>
                          Create Transaction
                        </Button>
                      </Group>
                    </Stack>
                  </form>
                </Modal>
                {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
              </Stack>
            </Card>
          </GridCol>

          <GridCol span={4}>
            {/* TODO: move card to its own component in order to 'use client' and keep page server-rendered */}
            <Card shadow='sm' padding='lg' radius='md' withBorder>
              <Stack gap={'sm'}>
                <Group grow align='center' gap={'xs'}>
                  {/* <Text size='xl' c='black' fw={600}>
                    Earmarks
                  </Text>
                  <Button
                    onClick={open}
                    disabled={opened && true}
                    size={'sm'}
                    variant='filled'
                    color='#516cf5'
                    // color='green.6'
                    // c={'white'}
                    radius={'md'}
                    justify='center'
                    leftSection={<IconCirclePlus />}
                  >
                    New Goal
                  </Button> */}

                  {/* TODO: will need to add edit / delete options */}
                  <Group justify='space-between'>
                    <Text size='xl' c='black)' fw={600}>
                      Earmarks
                    </Text>
                    <Button
                      // onClick={open}
                      // onClick={() => openModalWithFormValue('earmark')}
                      onClick={() => stack.open('new-earmark')}
                      disabled={opened}
                      size={'sm'}
                      variant='filled'
                      color='#516cf5'
                      // color='green.6'
                      // c={'white'}
                      radius={'md'}
                      justify='center'
                      leftSection={<IconCirclePlus />}
                    >
                      New Earmark
                    </Button>
                  </Group>
                  {/* TODO: add info tooltip */}
                </Group>

                <Center>
                  <RingProgress
                    size={225}
                    thickness={25}
                    roundCaps
                    sections={ringProgressData}
                    label={
                      <Text size='xl' ta='center'>
                        {formatCurrency(earmarkTotal)}
                      </Text>
                    }
                  />
                </Center>

                <Stack gap={'sm'}>
                  {goal?.earmarks?.map((earmark) => (
                    <>
                      <Divider variant='dashed' />

                      <Group key={earmark?.name} justify='space-between'>
                        <Group>
                          <ColorSwatch color={earmark?.color} radius={'sm'} size={18} />
                          <Text size='md'>{earmark?.name}</Text>
                        </Group>
                        <Text>{formatCurrency(earmark?.value)}</Text>
                      </Group>
                    </>
                  ))}
                  {/* {parseFloat(unallocatedSavings.toFixed(2)) !== 0.0 && totalCurrentValue < totalSavings && (
                    <Group justify='space-between'>
                      <Group>
                        <ColorSwatch color={'var(--mantine-color-gray-2)'} radius={'sm'} size={18} />
                        <Text>Unallocated</Text>
                      </Group>
                      <Text>{((parseFloat(unallocatedSavings.toFixed(2)) / totalSavings) * 100).toFixed(2)}%</Text>
                    </Group>
                  )} */}

                  {/* {!excessiveAllocations &&
                    MOCK_GOALS?.map((goal) => (
                      <Stack key={goal?.id} gap={'xs'}>
                        <Group justify='space-between'>
                          <Text>{goal?.name}</Text>
                          <Text>{((goal?.currentValue / totalSavings) * 100).toFixed(2)}%</Text>
                        </Group>
                        <ProgressRoot size={'md'} radius='xl'>
                          <ProgressSection
                            value={(goal?.currentValue / totalSavings) * 100}
                            color={goal?.color}
                            style={{ justifyContent: 'flex-end', borderRadius: 'var(--mantine-radius-xl)' }}
                          />
                        </ProgressRoot>
                      </Stack>
                    ))}
                  {parseFloat(unallocatedSavings.toFixed(2)) !== 0.0 && totalCurrentValue < totalSavings && (
                    <Stack gap={'xs'}>
                      <Group justify='space-between'>
                        <Text>Unallocated</Text>
                        <Text>{((parseFloat(unallocatedSavings.toFixed(2)) / totalSavings) * 100).toFixed(2)}%</Text>
                      </Group>
                      <ProgressRoot size={'md'} radius='xl'>
                        <ProgressSection
                          value={(unallocatedSavings / totalSavings) * 100}
                          color='gray.6'
                          style={{ justifyContent: 'flex-end', borderRadius: 'var(--mantine-radius-xl)' }}
                        />
                      </ProgressRoot>
                    </Stack>
                  )} */}
                </Stack>
              </Stack>
            </Card>
          </GridCol>
        </Grid>
      </Group>
    </Stack>
  );
};

export default GoalSummaryPage;
