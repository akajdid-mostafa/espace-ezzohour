import EspaceCafeRestaurant from "@/screens/cafe-restaurant";
import { Metadata } from 'next';

export async function generateMetadata() {
  return {
    title: "Café Restaurant (Petit-déjeuner, Déjeuner, Dîner) à Tanger - Espace Ezzohour",
    description: "Profitez de notre café-restaurant à Tanger pour une pause gourmande. Cuisine variée, cadre convivial et service 7j/7.",
    canonical: "https://ezzohour.ma/lavage-auto", 
    openGraph: {
      title: "Pause Gourmande à Tout Moment à Tanger",
      description: "Découvrez notre carte variée dans un espace confortable à Espace Ezzohour.",
    }
  };
}

export default function CafeRestaurant() {
  return <EspaceCafeRestaurant />;
}
