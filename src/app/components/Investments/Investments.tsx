import { Card, Text } from '@mantine/core';

const Investments = () => {
  return (
    <Card shadow='sm' padding='lg' radius='md' withBorder>
      <Text size='md' c='dimmed'>
        Investments
      </Text>
      <Text c={'green'} fw={500} fz={'h3'}>
        $85,240.14
      </Text>
    </Card>
  );
};

export default Investments;
