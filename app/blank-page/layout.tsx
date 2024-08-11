import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Blank Page',
  description: 'This is a blank page layout'
};
const layout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default layout;
