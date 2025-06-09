import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Academia Naval',
  description: 'Página de login da Academia Naval',
  keywords: ['academia naval', 'angola', 'marinha', 'ensino', 'universidade', 'angola'],
  creator: 'Academia Naval',
  publisher: 'Academia Naval',
  applicationName: 'Academia Naval',
  authors: [{ name: 'Academia Naval' }],
  openGraph: {
    title: 'Academia Naval',
    description: 'Página de login da Academia Naval',
    url: 'https://siga-academia-naval.vercel.app',
    siteName: 'Academia Naval',
    images: [
      {
        url: '/og-image.jpg', // Adicione uma imagem na pasta public
        width: 1200,
        height: 630,
        alt: 'Academia Naval Logo',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Academia Naval - Login',
    description: 'Página de login da Academia Naval',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full">
      <body className={`${inter.className} antialiased h-full`}>{children}</body>
    </html>
  );
}