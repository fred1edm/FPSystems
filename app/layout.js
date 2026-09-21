import { Inter, Sora } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
});

export const metadata = {
  title: 'FP Systems',
  description:
    'Sistematizamos negocios y empresas con soluciones digitales a medida: sistemas personalizados, páginas web, automatización e inteligencia artificial. Iquitos, Perú.',
  keywords: [
    'FP Systems',
    'sistemas a medida',
    'desarrollo web',
    'automatización',
    'inteligencia artificial',
    'Iquitos',
    'Perú',
  ],
  openGraph: {
    title: 'FP Systems',
    description:
      'Sistemas personalizados, páginas web y soluciones avanzadas con IA para negocios y empresas.',
    locale: 'es_PE',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`scroll-smooth ${inter.variable} ${sora.variable}`}>
      <body className="font-sans text-brand-darkGray bg-white antialiased selection:bg-brand-purpleBright selection:text-white">
        {children}
      </body>
    </html>
  );
}
