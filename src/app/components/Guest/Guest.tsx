import { SignIn } from '@clerk/nextjs';
import { Center, Container, Group, Stack, Text } from '@mantine/core';

const Guest = () => {
  return (
    <Container size={'xl'}>
      <Center>
        <Group>
          <SignIn routing='hash' />
          <Stack>
            <Text c={'var(--mantine-color-white)'} size='xl'>
              Welcome to Cashboard!
            </Text>
            <Text c={'var(--mantine-color-white)'}>
              Cashboard is a personal finance application for those who like to micro-manage their budgets.
            </Text>
            <Text c={'var(--mantine-color-white)'}>Please log in to continue.</Text>
          </Stack>
        </Group>
      </Center>
    </Container>
  );
};

export default Guest;
