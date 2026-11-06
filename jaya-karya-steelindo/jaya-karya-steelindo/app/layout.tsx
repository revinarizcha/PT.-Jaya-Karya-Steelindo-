import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PT Jaya Karya Steelindo | Solusi Material Baja Terpercaya',
  description: 'Penyedia besi dan baja untuk kebutuhan konstruksi, properti, dan industri. Temukan besi beton, hollow, siku, plat baja, H-Beam, dan produk lainnya.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body>{children}</body></html>;
}
