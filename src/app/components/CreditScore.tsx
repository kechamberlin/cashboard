import { Card, Text } from '@mantine/core';

const CreditScore = () => {
  return (
    <Card shadow='sm' padding='lg' radius='md' withBorder>
      <Text size='md' c='dimmed'>
        Credit Score
      </Text>
      <Text c={'green'} fw={500} fz={'h3'}>
        799
      </Text>
    </Card>
  );
};

export default CreditScore;
