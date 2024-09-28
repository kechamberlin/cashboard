import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';
import '@mantine/dates/styles.css';
import { Lexend } from 'next/font/google';
import { Card, ColorSchemeScript, Container, Grid, GridCol, MantineProvider } from '@mantine/core';
import NavDrawer from './components/NavDrawer/NavDrawer';
import './globals.css';

const lexend = Lexend({ subsets: ['latin'], weight: '400' });

// export const metadata = {
//   title: 'Cashboard',
//   description: 'A personal finance application for those who prefer to micromanage their budget.',
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={lexend.className}>
        <MantineProvider>
          <Container p={0} fluid bd={0}>
            <Grid grow gutter={0}>
              {/* TODO: mih={'100vh'} should be for desktop only.  Responsive view should be icons / collapsed. */}
              <GridCol span={2} p={32} mih={'100vh'}>
                <NavDrawer />
              </GridCol>

              <GridCol span={10} p={8}>
                <Card radius={25} bg={'#f6f8fc'} h={'100%'}>
                  {children}
                </Card>
              </GridCol>
            </Grid>
          </Container>
        </MantineProvider>
      </body>
    </html>
  );
}
