import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Royalwood - Luxury Furniture Manufacturing | Custom Woodcraft Excellence',
  description: 'Discover premium handcrafted furniture by Royalwood. Over 25 years of excellence in custom woodworking, sustainable practices, and timeless design. From dining sets to office furniture.',
  keywords: 'luxury furniture, custom woodworking, handcrafted furniture, sustainable furniture, dining sets, bedroom furniture, office furniture, kitchen cabinets',
  authors: [{ name: 'Royalwood Manufacturing' }],
  openGraph: {
    title: 'Royalwood - Luxury Furniture Manufacturing',
    description: 'Premium handcrafted furniture with over 25 years of excellence',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}