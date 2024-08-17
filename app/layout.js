import { Inter, Oswald } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar/Navbar';
import Footer from '@/components/footer/Footer';

const inter = Inter({ subsets: ['latin'] });
const oswald = Oswald({ subsets: ['latin'] });
import Wrapper from '@/components/smooth-scroll/Wrapper';

export const metadata = {
  title: 'Kraila Dev',
  description:
    'Portfolio of a professional web developer and designer passionate about solving problems and creating elegant designs. Explore my projects, skills, and experience.',
  keywords:
    'web development, web design, portfolio, kraila dev,UI/UX, portfolio, frontend development, backend development, JavaScript, React, CSS, HTML',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={oswald.className}>
        <Navbar />
        <Wrapper>
          {children}
          <Footer />
        </Wrapper>
      </body>
    </html>
  );
}
