import type { Metadata } from 'next';
import { Inter, Montserrat, Poppins } from 'next/font/google';
import './globals.css';

// Fonts
const inter = Inter({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
});

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat'
});

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'Heritage Nest | Real Estate',
  description: "Your Portal to India's Exquisite Real Estate"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`w-screen h-screen ${montserrat.variable} ${poppins.variable} ${inter.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
