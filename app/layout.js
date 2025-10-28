import { DM_Sans, Inter } from "next/font/google";
import "../styles/index.css";
import cn from "classnames";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

// export const metadata = {
//   title: "Espace Ezzohour - Complexe Multi-Services Connecté au Maroc",
//   description: "Découvrez Espace Ezzohour : station-service, restaurant, supérette et garage connectés. Programme de fidélité unifié, expérience client 360° et services intégrés.",
//   keywords: "station-service Maroc, restaurant familial, supérette, garage auto, programme fidélité, complexe multi-services, ERP connecté",
//   openGraph: {
//     title: "Espace Ezzohour - Écosystème Commercial Connecté",
//     description: "Station-service, restaurant,",
//     type: "website",
//     locale: "fr_MA",
//   },
// };
export const metadata = {
  title: "Espace Ezzohour - Complexe Multi-Services à Tanger (Station, Restaurant, Garage)",
  description: "Simplifiez votre quotidien à Tanger[cite: 39]. Espace Ezzohour réunit station Afriquia , café-restaurant , supérette , garage , lavage auto  et espace jeux gratuit. Parking gratuit sur place.",
  keywords: "Espace Ezzohour, complexe multi-services Tanger, station-service Tanger, restaurant Tanger, supérette Tanger, garage auto Tanger, lavage auto Tanger, espace jeux enfants Tanger, parking gratuit Tanger",
  openGraph: {
    title: "Espace Ezzohour: Votre Destination Quotidienne à Tanger ",
    description: "Tous vos services en un seul lieu: Station Afriquia, Restaurant, Supérette, Garage, Lavage Auto, Espace Jeux et Parking Gratuit.",
    type: "website",
    locale: "fr_MA",
    url: "https://ezzohour.ma/", 
    images: ['https://ezzohour.ma/images/logo/logo.svg'], 
  },
  robots: "index, follow",
  canonical: "https://ezzohour.ma/",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <meta name="apple-mobile-web-app-title" content="Ezzohour" />
      <body className={cn(inter.variable, dmSans.variable)}>{children}</body>
    </html>
  );
}
