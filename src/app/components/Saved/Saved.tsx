import { Card, Text } from '@mantine/core';

const Saved = () => {
  return (
    <Card shadow='sm' padding='lg' radius='md' withBorder>
      <Text size='md' c='dimmed'>
        Saved
      </Text>
      <Text c={'green'} fw={'bold'} fz={'h3'}>
        + $2,276.87
      </Text>
    </Card>
  );
};

export default Saved;
