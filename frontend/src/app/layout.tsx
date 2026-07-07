import type { Metadata } from 'next';
import { Montserrat, Roboto } from 'next/font/google';
import './globals.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastProvider } from '@/components/ToastProvider';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'MyFlix',
  description: 'Salve e avalie seus filmes favoritos com MyFlix!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${montserrat.variable} ${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col max-w-7xl mx-auto">
        {children}
        <ToastProvider />
      </body>
    </html>
  );
}
