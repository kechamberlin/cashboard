import { Card, Group, Text } from '@mantine/core';

const TotalBalance = () => {
  return (
    <Card shadow='sm' padding='lg' radius='md' withBorder h={'100%'}>
      <Text size='md' c='dimmed'>
        Total Balance
      </Text>
      <Text c={'green'} fw={'bolder'} fz={'h2'}>
        $148,098.57
      </Text>

      <Group justify='space-between' mt='md' mb='xs'>
        <Text>Checking</Text>
        <Text>$10,140.21</Text>
      </Group>

      <Group justify='space-between' mt='md' mb='xs'>
        <Text>Savings</Text>
        <Text>$52,718.22</Text>
      </Group>

      <Group justify='space-between' mt='md' mb='xs'>
        <Text>Investments</Text>
        <Text>$85,240.14</Text>
      </Group>
    </Card>
  );
};

export default TotalBalance;
