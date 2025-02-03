import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';
import '@mantine/dates/styles.css';
import { Lexend } from 'next/font/google';
import { Card, Center, ColorSchemeScript, Container, Grid, GridCol, Group, MantineProvider, Stack, Text } from '@mantine/core';
import NavDrawer from './components/NavDrawer/NavDrawer';
import './globals.css';
import { ClerkProvider, SignedIn, SignedOut, SignIn } from '@clerk/nextjs';
import { checkUser } from './lib/checkUser';
import Guest from './components/Guest/Guest';
import { currentUser } from '@clerk/nextjs/server';

const lexend = Lexend({ subsets: ['latin'], weight: ['400'] });

// TODO: put metadata here, not page (double check)
// export const metadata = {
//   title: 'Cashboard',
//   description: 'A personal finance application for those who prefer to micromanage their budget.',
// };

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const user = await currentUser();

  return (
    <ClerkProvider>
      <html lang='en'>
        <head>
          <ColorSchemeScript />
        </head>
        <body className={lexend.className}>
          <MantineProvider>
            {/* If NOT signed in */}
            {!user ? (
              <Guest />
            ) : (
              <Container p={0} fluid bd={0}>
                <Grid grow gutter={0}>
                  {/* TODO: mih={'100vh'} should be for desktop only.  Responsive view should be icons / collapsed. */}
                  <GridCol span={2} p={32} mih={'100vh'}>
                    {/* TODO: little clerk error here?? */}
                    <NavDrawer userName={user?.firstName} />
                  </GridCol>

                  <GridCol span={10} p={8}>
                    <Card radius={25} bg={'#f6f8fc'} h={'100%'}>
                      {children}
                    </Card>
                  </GridCol>
                </Grid>
              </Container>
            )}
            {/* </SignedIn> */}
          </MantineProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
