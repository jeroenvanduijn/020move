import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Overstap naar Mobilis CrossFit | CrossFit 020',
  description: 'Speciaal overstap-aanbod voor CrossFit 020 leden naar Mobilis CrossFit. Train 3 maanden bij Mobilis terwijl je nog maar 2 maanden betaalt.',
  openGraph: {
    title: 'Overstap naar Mobilis CrossFit | CrossFit 020',
    description: 'Speciaal overstap-aanbod voor CrossFit 020 leden naar Mobilis CrossFit.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
