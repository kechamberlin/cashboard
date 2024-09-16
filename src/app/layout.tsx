import '@mantine/core/styles.css';
import '@mantine/charts/styles.css';
import '@mantine/dates/styles.css';
import { Lexend } from 'next/font/google';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';

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
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  );
}
