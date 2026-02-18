import { RootProvider } from 'fumadocs-ui/provider/next';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://ginyo.space/celstomp/docs'
  ),
  title: {
    default: 'Celstomp Docs',
    template: '%s | Celstomp Docs',
  },
  description: 'Documentation for Celstomp, a browser-based 2D handdrawn cel animation suite.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Celstomp Docs',
    description: 'Documentation for Celstomp, a browser-based 2D handdrawn cel animation suite.',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Celstomp Docs',
    description: 'Documentation for Celstomp, a browser-based 2D handdrawn cel animation suite.',
    images: ['/og-image.png'],
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider
          theme={{
            defaultTheme: 'dark',
            enableSystem: true,
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
