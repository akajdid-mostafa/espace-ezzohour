import { DM_Sans, Inter } from "next/font/google";
import "../styles/index.css";
import cn from "classnames";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

export const metadata = {
  title: "Espace Ezzohour - Complexe Multi-Services Connecté au Maroc",
  description: "Découvrez Espace Ezzohour : station-service, restaurant, supérette et garage connectés. Programme de fidélité unifié, expérience client 360° et services intégrés.",
  keywords: "station-service Maroc, restaurant familial, supérette, garage auto, programme fidélité, complexe multi-services, ERP connecté",
  openGraph: {
    title: "Espace Ezzohour - Écosystème Commercial Connecté",
    description: "Station-service, restaurant, supérette et garage unis par un programme de fidélité unique. 1 MAD = 1 point sur tous nos services.",
    type: "website",
    locale: "fr_MA",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={cn(inter.variable, dmSans.variable)}>{children}</body>
    </html>
  );
}
