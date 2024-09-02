import { Card, Text } from '@mantine/core';

const Expenses = () => {
  return (
    <Card shadow='sm' padding='lg' radius='md' withBorder>
      <Text size='md' c='dimmed'>
        Expenses
      </Text>
      <Text c={'red'} fw={500} fz={'h3'}>
        - $1,590.37
      </Text>
    </Card>
  );
};

export default Expenses;
