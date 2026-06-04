import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { DM_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Unha de Gel Capão Redondo | Manicure, Pedicure e Nail Art',
  description: 'Transforme suas unhas em obras de arte na Unha de Gel Capão Redondo. Oferecemos unhas de gel duradouras, nail art exclusiva, manicure e pedicure completas na Zona Sul SP. Agende seu horário!',
  keywords: ["unha de gel, unhas decoradas, manicure, pedicure, nail art, Capão Redondo, Zona Sul SP, salão de beleza, alongamento de unhas"],
  openGraph: {
    "title": "Unha de Gel Capão Redondo | Manicure, Pedicure e Nail Art",
    "description": "Transforme suas unhas em obras de arte na Unha de Gel Capão Redondo. Oferecemos unhas de gel duradouras, nail art exclusiva, manicure e pedicure completas na Zona Sul SP. Agende seu horário!",
    "url": "https://www.unhadegelcapaoredondo.com.br",
    "siteName": "Unha de Gel Capão Redondo",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/beautiful-female-hands-finger-nail-treatment-making-process-professional-nail-file-drill-action-beauty-hand-care-concept_343596-1827.jpg",
        "alt": "Beautiful gel nails with intricate art"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Unha de Gel Capão Redondo | Manicure, Pedicure e Nail Art",
    "description": "Transforme suas unhas em obras de arte na Unha de Gel Capão Redondo. Oferecemos unhas de gel duradouras, nail art exclusiva, manicure e pedicure completas na Zona Sul SP. Agende seu horário!",
    "images": [
      "http://img.b2bpic.net/free-photo/beautiful-female-hands-finger-nail-treatment-making-process-professional-nail-file-drill-action-beauty-hand-care-concept_343596-1827.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${dmSans.variable} ${inter.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
