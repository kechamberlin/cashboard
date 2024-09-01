import { Card, Text } from '@mantine/core';

const Income = () => {
  return (
    <Card shadow='sm' padding='lg' radius='md' withBorder>
      <Text size='md' c='dimmed'>
        Income
      </Text>
      <Text c={'green'} fw={500} fz={'h3'}>
        + $3,867.24
      </Text>
    </Card>
  );
};

export default Income;
