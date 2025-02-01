'use client';

import { AreaChart, BarChart } from '@mantine/charts';
import {
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
  Modal,
  ProgressRoot,
  ProgressSection,
  RingProgress,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  ThemeIcon,
  Tooltip,
  ScrollArea,
} from '@mantine/core';
import { MonthPickerInput } from '@mantine/dates';
import { useDisclosure } from '@mantine/hooks';
import {
  IconAlertCircle,
  IconCalendarMonth,
  IconChevronRight,
  IconCircle,
  IconCircleCheckFilled,
  IconCirclePlus,
  IconCurrencyDollar,
  IconInfoCircle,
  IconProgress,
  IconTag,
  IconTrendingUp,
} from '@tabler/icons-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef, useState } from 'react';
import formatCurrency from '../utils/format-currency';

const SavingsPage = () => {
  // TODO: Refactor and clean up file

  const pathname = usePathname();

  const [cashflow, setCashflow] = useState('income');

  const date = new Date();

  const [month, setMonth] = useState<Date | null>(date);

  const [opened, { open, close }] = useDisclosure(false);

  // const totalSavings = 0; // zero // TODO: check INFINITY when MOCK_GOALS is active
  // const totalSavings = 50429.74; // allocation exceeds ~$5,000
  // const totalSavings = 55307.09; // allocation exceeds
  const totalSavings = 55307.1; // allocation equal
  // const totalSavings = 55307.11; // allocation under
  // const totalSavings = 65797.21; // $5,000 leftover
  // const totalSavings = 144074.69; // $88,767.59 leftover

  const MOCK_GOALS = [
    // TODO: is initialSavings needed? may even cause an issue with calculations
    {
      id: '0a',
      name: 'Family Savings',
      initialSavings: 0,
      currentValue: 24433.79,
      target: 25000,
      color: 'var(--mantine-color-yellow-5)',
    },
    { id: '1a', name: 'Baby', initialSavings: 0, currentValue: 5212.64, target: 15000, color: 'var(--mantine-color-pink-5)' },
    { id: '2a', name: 'Maternity Leave', initialSavings: 0, currentValue: 2500, target: 2500, color: '#cadaf8' },
    { id: '3a', name: 'House Down Payment', initialSavings: 0, currentValue: 6842.03, target: 25000, color: '#d8ead2' },
    { id: '4a', name: 'Rainy Day Fund', initialSavings: 0, currentValue: 2500, target: 2500, color: '#77a5af' },
    { id: '5a', name: 'Home Gym', initialSavings: 0, currentValue: 2000, target: 2000, color: '#e99999' },
    { id: '6a', name: 'Disney Passes', initialSavings: 0, currentValue: 1000, target: 3298, color: '#d61f27' },
    { id: '7a', name: 'Vacation Fund', initialSavings: 0, currentValue: 500, target: 10000, color: '#ffe5a1' },
    { id: '8a', name: 'Upgrade PC', initialSavings: 0, currentValue: 0, target: 5000, color: 'var(--mantine-color-violet-5)' },
    { id: '9a', name: 'CIT Interest', initialSavings: 0, currentValue: 1689.8, target: 0, color: '#a3c4ca' },
    { id: '10b', name: 'Schools First Baseline', initialSavings: 0, currentValue: 2000.55, target: 2000, color: '#ed95e5' },
    { id: '11b', name: 'Wedding Party', initialSavings: 0, currentValue: 908.66, target: 1100, color: '#b8860b' },
    { id: '12b', name: 'SF Summer Saver', initialSavings: 0, currentValue: 2140.61, target: 6000, color: '#ffbafa' },
    { id: '13b', name: 'SF Paycheck Planner', initialSavings: 0, currentValue: 3579.02, target: 12000, color: '#ffbafa' },
  ];

  const totalCurrentValue = MOCK_GOALS.reduce((sum, goal) => sum + goal.currentValue, 0); // $55,307.10

  const excessiveAllocations = totalCurrentValue > totalSavings;

  const unallocatedSavings = totalSavings - totalCurrentValue;

  const ringProgressData = MOCK_GOALS?.sort((a, b) => b.currentValue - a.currentValue).map((goal) => ({
    value: (goal?.currentValue / totalSavings) * 100,
    color: goal?.color,
    tooltip: `${goal?.name} - ${formatCurrency(goal?.currentValue, null, null, { trailingZeroDisplay: 'stripIfInteger' })}`,
  }));

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

  const MOCK_DATA = [
    // TODO: Define a data structure, ex:
    //    { month: '', year: ??, balance: 1014.21, }
    // note: month should come from a timestamp, and can be formatted on FE
    // ie, shortened month will NOT be in the data

    { month: 'Jan', savings: 28582.56 },
    { month: 'Feb', savings: 29249.1 },
    { month: 'Mar', savings: 31326.99 },
    { month: 'Apr', savings: 30268.51 },
    { month: 'May', savings: 28792.31 },
    { month: 'Jun', savings: 23799.03 },
    { month: 'Jul', savings: 23384.29 },
    { month: 'Aug', savings: 24461.95 },
    { month: 'Sep', savings: 23034.68 },
    { month: 'Oct', savings: 26411.71 },
    { month: 'Nov', savings: 30709.25 },
    { month: 'Dec', savings: 32646.43 },
    // { month: 'Oct', income: null, expenses: null },
    // { month: 'Nov', income: null, expenses: null },
    // { month: 'Dec', income: null, expenses: null },
  ];

  const BAR_CHART_MOCK_DATA = [
    // TODO: Define a data structure, ex:
    //    { month: '', year: ??, balance: 1014.21, }
    // note: month should come from a timestamp, and can be formatted on FE
    // ie, shortened month will NOT be in the data

    { month: 'Jan', savings: 28582.56 },
    { month: 'Feb', savings: 29249.1 },
    { month: 'Mar', savings: 31326.99 },
    { month: 'Apr', savings: 30268.51 },
    { month: 'May', savings: 28792.31 },
    { month: 'Jun', savings: 23799.03 },
    { month: 'Jul', savings: 23384.29 },
    { month: 'Aug', savings: 24461.95 },
    { month: 'Sep', savings: 23034.68 },
    { month: 'Oct', savings: 26411.71 },
    { month: 'Nov', savings: 30709.25 },
    { month: 'Dec', savings: 32646.43 },
    // { month: 'Oct', income: null, expenses: null },
    // { month: 'Nov', income: null, expenses: null },
    // { month: 'Dec', income: null, expenses: null },
  ];

  return (
    <Stack align='stretch' justify='center' p={'md'}>
      <Grid>
        <GridCol span={12}>
          {/* <Card shadow='sm' padding='lg' radius='md' withBorder> */}
          <Stack>
            <Group justify='space-between'>
              <Text size='xl' c='black' fw={600}>
                Savings Overview
              </Text>
              <MonthPickerInput
                value={month}
                onChange={setMonth}
                aria-label='Month Picker Input'
                leftSection={<IconCalendarMonth stroke={1.5} />}
                leftSectionPointerEvents='none'
                radius='md'
                size='md'
                variant='filled'
              />
            </Group>

            {/* TODO: fix wrap prop (ie, maybe remove it??) */}
            <Group grow wrap='nowrap' align='flex-start'>
              <GridCol span={8} p={0}>
                <Card withBorder radius={8}>
                  <Stack gap={0}>
                    <Text size='lg' fw={600}>
                      Yearly Growth
                    </Text>
                    {/* <Text c={'dimmed'} size='xs' fs={'italic'}>
                      Jan to Dec 2024
                    </Text> */}
                  </Stack>
                  <BarChart
                    h={325}
                    data={MOCK_DATA}
                    dataKey='month'
                    // valueFormatter={(value) =>
                    //   new Intl.NumberFormat('en-US', {
                    //     style: 'currency',
                    //     currency: 'USD',
                    //     trailingZeroDisplay: 'stripIfInteger',
                    //   }).format(value)
                    // }
                    // valueFormatter={formatCurrency}
                    series={[{ name: 'savings', label: 'Savings', color: 'green.7' }]}
                    type='stacked'
                    tooltipAnimationDuration={200}
                    withLegend
                    barProps={{ radius: 8 }}
                  />

                  {/* <AreaChart
                  h={300}
                  data={MOCK_DATA}
                  dataKey='month'
                  series={[{ name: 'savings', label: 'Savings', color: 'green.7' }]}
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
                  // referenceLines={[
                  //   { y: 25750, label: 'Average 2024', color: 'green.9' },
                  //   { y: 20500, label: 'Average 2023', color: 'red.9' },
                  // ]}
                /> */}
                </Card>
              </GridCol>

              <GridCol span={'auto'} p={0}>
                <Card withBorder radius={8}>
                  <Stack gap={'md'}>
                    <Group justify='space-between' align='flex-start'>
                      <Stack gap={0}>
                        <Text size='lg' fw={600}>
                          Total Savings
                        </Text>
                        <Text c={'dimmed'} size='xs' fs={'italic'}>
                          from last month
                        </Text>
                      </Stack>

                      <Group>
                        <Badge color='green.9' leftSection={<IconTrendingUp />} size='lg'>
                          {/* <Badge color='green.9' leftSection={<IconArrowUpRight />} size='lg'> */}
                          +5.2%
                        </Badge>
                        <Text c={'green.7'} fw={'bold'} fz={'h3'}>
                          {new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD',
                            trailingZeroDisplay: 'stripIfInteger',
                          }).format(totalSavings)}
                        </Text>
                      </Group>
                    </Group>

                    {/* TODO: remove or keep? */}
                    {/* <Divider variant='solid' /> */}

                    {/* <Group justify='space-between'>
                      <Group gap={'xs'}>
                        <Text c={'dimmed'} fs={'italic'} size='sm'>
                          Goals
                        </Text>
                      </Group>
                      <Text c={'dimmed'} fs={'italic'} size='sm'>
                        {new Intl.NumberFormat('en-US', {
                          style: 'currency',
                          currency: 'USD',
                          trailingZeroDisplay: 'stripIfInteger', // TODO: remove?
                        }).format(totalCurrentValue)}
                      </Text>
                    </Group> */}

                    <ScrollArea h={275} offsetScrollbars scrollHideDelay={0}>
                      <Stack>
                        {MOCK_GOALS?.sort((a, b) => b.currentValue - a.currentValue)?.map((goal) => (
                          <>
                            <Divider variant='dashed' />

                            <Group justify='space-between' key={goal?.id}>
                              <Group gap={'xs'}>
                                <Tooltip
                                  label={
                                    goal?.currentValue >= goal?.target
                                      ? 'Target Reached'
                                      : goal?.currentValue < goal?.target && goal?.currentValue > 0
                                      ? `In Progress: ${((goal?.currentValue / goal?.target) * 100).toFixed(0)}% of target`
                                      : 'Not Started'
                                  }
                                >
                                  <ThemeIcon size='sm' variant='white' c={goal?.color}>
                                    {goal?.currentValue >= goal?.target && <IconCircleCheckFilled fill={goal?.color} />}
                                    {goal?.currentValue < goal?.target && goal?.currentValue > 0 && <IconProgress fill={goal?.color} />}
                                    {goal?.currentValue === 0 && <IconCircle />}
                                  </ThemeIcon>
                                </Tooltip>
                                {/* <ColorSwatch color={goal?.color} radius={'sm'} size={14} /> */}
                                <Text c={'dimmed'} fs={'italic'} size='sm'>
                                  {goal?.name}
                                </Text>
                              </Group>
                              <Text c={'dimmed'} fs={'italic'} size='sm'>
                                {new Intl.NumberFormat('en-US', {
                                  style: 'currency',
                                  currency: 'USD',
                                  // trailingZeroDisplay: 'stripIfInteger', // TODO: remove?
                                }).format(goal?.currentValue)}
                              </Text>
                            </Group>

                            {/* TODO: remove or keep? */}
                            {/* <Divider variant='dashed' /> */}
                          </>
                        ))}

                        {/* TODO: refactor */}
                        {parseFloat(unallocatedSavings.toFixed(2)) !== 0.0 && (
                          <>
                            <Divider variant='dashed' />
                            <Group justify='space-between'>
                              <Group gap={'xs'}>
                                {excessiveAllocations && (
                                  <Tooltip label={'Your allocations exceed your total savings.  Please check your calculations.'}>
                                    <ThemeIcon size='sm' variant='transparent' c={'red'}>
                                      <IconAlertCircle fill='transparent' />
                                    </ThemeIcon>
                                  </Tooltip>
                                )}
                                {totalCurrentValue < totalSavings && (
                                  <Tooltip label={'How much you have left over for goals'}>
                                    <ThemeIcon size='sm' variant='transparent' c={'black'}>
                                      <IconInfoCircle fill='transparent' color='var(--mantine-color-gray-6)' />
                                    </ThemeIcon>
                                  </Tooltip>
                                )}
                                <Text c={'dimmed'} fs={'italic'} size='sm'>
                                  {excessiveAllocations ? 'Excessive allocations' : 'Unallocated'}
                                </Text>
                              </Group>
                              <Text c={'dimmed'} fs={'italic'} size='sm'>
                                {new Intl.NumberFormat('en-US', {
                                  style: 'currency',
                                  currency: 'USD',
                                  trailingZeroDisplay: 'stripIfInteger', // TODO: remove?
                                }).format(unallocatedSavings)}
                              </Text>
                            </Group>
                          </>
                        )}
                      </Stack>
                    </ScrollArea>
                  </Stack>
                </Card>
              </GridCol>
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
                    Goals & Allocations
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
                  </Button>
                </Group>

                <SimpleGrid type='container' cols={{ base: 1, '600px': 2 }}>
                  {MOCK_GOALS?.length === 0 && <Text c={'dimmed'}>You do not have any savings goals.</Text>}
                  {MOCK_GOALS?.sort((a, b) => b.currentValue - a.currentValue)?.map((goal) => (
                    <Card key={goal?.id} radius={'md'} withBorder>
                      <Stack gap={'md'}>
                        <Group justify='space-between' align='flex-start'>
                          <Stack gap={0}>
                            <Text c={'black'} fw={600}>
                              {goal?.name}
                            </Text>
                          </Stack>

                          {goal?.target > 0 ? (
                            <Group gap='xs'>
                              <Text c={'dimmed'}>
                                {new Intl.NumberFormat('en-US', {
                                  style: 'currency',
                                  currency: 'USD',
                                  trailingZeroDisplay: 'stripIfInteger',
                                }).format(goal?.currentValue)}
                              </Text>
                              <Text>/</Text>
                              <Text>
                                {new Intl.NumberFormat('en-US', {
                                  style: 'currency',
                                  currency: 'USD',
                                  trailingZeroDisplay: 'stripIfInteger', // TODO: remove?
                                }).format(goal?.target)}
                              </Text>
                            </Group>
                          ) : (
                            // <Text c='dimmed' fs={'italic'}>
                            //   No Target
                            // </Text>
                            <Text>
                              {new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD',
                                trailingZeroDisplay: 'stripIfInteger', // TODO: remove?
                              }).format(goal?.currentValue)}
                            </Text>
                          )}
                        </Group>

                        <ProgressRoot size={10} radius='xl'>
                          <ProgressSection
                            value={goal?.target === 0 && goal?.currentValue > 0 ? 100 : (goal?.currentValue / goal?.target) * 100}
                            color={goal?.color}
                            style={{ justifyContent: 'flex-end', borderRadius: 'var(--mantine-radius-xl)' }}
                          >
                            {/* <ProgressLabel mr={'xs'} fz={'lg'}>
                              {new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD',
                                trailingZeroDisplay: 'stripIfInteger',
                              }).format(goal?.currentValue)}
                            </ProgressLabel> */}
                          </ProgressSection>
                        </ProgressRoot>

                        <Group justify='space-between'>
                          <Group gap={'xs'}>
                            <Text c={'dimmed'} fs={'italic'}>
                              {/* TODO: Refactor into a function with if/else || switch statement */}
                              {goal?.currentValue >= goal?.target && goal?.target > 0 && 'Target reached'}
                              {goal?.currentValue < goal?.target &&
                                goal?.currentValue > 0 &&
                                `In Progress: ${((goal?.currentValue / goal?.target) * 100)?.toFixed(0)}% of target`}
                              {goal?.target === 0 && goal?.currentValue > 0 && 'No target'}
                              {goal?.target > 0 && goal?.currentValue === 0 && 'Not Started'}
                            </Text>
                            {goal?.currentValue >= goal?.target && goal?.target > 0 && (
                              <ThemeIcon size='md' variant='white' c={'var(--mantine-color-indigo-5)'}>
                                <IconCircleCheckFilled fill='green' />
                              </ThemeIcon>
                            )}
                          </Group>
                          <Button
                            component={Link}
                            href={`${pathname}/${goal?.id}`}
                            size='sm'
                            variant='light'
                            radius={'md'}
                            color='#516cf5'
                            rightSection={<IconChevronRight />}
                          >
                            View Details
                          </Button>
                        </Group>
                      </Stack>
                    </Card>
                  ))}
                </SimpleGrid>

                <Modal
                  opened={opened}
                  onClose={close}
                  title='New Savings Goal'
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
                      <TextInput
                        label='Goal Name'
                        description='What are you saving for?'
                        leftSection={<IconTag />}
                        placeholder=''
                        size='md'
                        radius='md'
                        // value={'Some Thing'}
                        // withAsterisk
                        // error='Required Field'
                        data-autofocus
                      />
                      <TextInput
                        label='Target'
                        description='How much do you need?'
                        leftSection={<IconCurrencyDollar />}
                        placeholder='0'
                        size='md'
                        radius='md'
                        // value={}
                        // withAsterisk
                        // error='Required Field'
                        // data-autofocus
                      />
                      <TextInput
                        label='Initial Savings'
                        description='How much do you want to start with?'
                        leftSection={<IconCurrencyDollar />}
                        placeholder='0'
                        size='md'
                        radius='md'
                        // value={}
                        // withAsterisk
                        // error='Required Field'
                        // data-autofocus
                      />

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

                      <Group justify='flex-end'>
                        <Button variant='outline' color='red'>
                          Reset
                        </Button>
                        <Button type='submit' color='indigo'>
                          Create Goal
                        </Button>
                      </Group>
                    </Stack>
                  </form>
                </Modal>
              </Stack>
            </Card>
          </GridCol>

          <GridCol span={4}>
            {/* TODO: move card to its own component in order to 'use client' and keep page server-rendered */}
            <Card shadow='sm' padding='lg' radius='md' withBorder>
              <Stack gap={'sm'}>
                <Group grow align='center' gap={'xs'}>
                  <Text size='xl' c='black' fw={600}>
                    Savings Allocation
                  </Text>
                </Group>

                <Center>
                  <RingProgress
                    size={225}
                    thickness={25}
                    roundCaps
                    sections={ringProgressData}
                    label={
                      <Text size='xl' ta='center'>
                        {new Intl.NumberFormat('en-US', {
                          style: 'currency',
                          currency: 'USD',
                          trailingZeroDisplay: 'stripIfInteger',
                        }).format(totalSavings)}
                      </Text>
                    }
                  />
                </Center>

                <Stack gap={'sm'}>
                  {MOCK_GOALS?.map((goal) => (
                    <Group key={goal?.id} justify='space-between'>
                      <Group>
                        <ColorSwatch color={goal?.color} radius={'sm'} size={18} />
                        <Text size='md'>{goal?.name}</Text>
                      </Group>
                      <Text>{((goal?.currentValue / totalSavings) * 100).toFixed(2)}%</Text>
                    </Group>
                  ))}
                  {parseFloat(unallocatedSavings.toFixed(2)) !== 0.0 && totalCurrentValue < totalSavings && (
                    <Group justify='space-between'>
                      <Group>
                        <ColorSwatch color={'var(--mantine-color-gray-2)'} radius={'sm'} size={18} />
                        <Text>Unallocated</Text>
                      </Group>
                      <Text>{((parseFloat(unallocatedSavings.toFixed(2)) / totalSavings) * 100).toFixed(2)}%</Text>
                    </Group>
                  )}

                  {!excessiveAllocations &&
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
                  )}
                </Stack>
              </Stack>
            </Card>
          </GridCol>
        </Grid>
      </Group>
    </Stack>
  );
};

export default SavingsPage;
