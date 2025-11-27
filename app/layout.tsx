import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Jouw trainingsplek na CrossFit 020 | Overstap naar Mobilis',
  description: 'CrossFit 020 sluit. We hebben een zorgeloze overgang geregeld bij Mobilis CrossFit: maand 1-2 via 020, maand 3 gratis, daarna doorlopend bij Mobilis.',
  openGraph: {
    title: 'Jouw trainingsplek na CrossFit 020',
    description: 'Zorgeloze overgang naar Mobilis CrossFit voor CrossFit 020 leden.',
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
