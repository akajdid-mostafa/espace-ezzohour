import Jeux from "@/screens/espace-jeux";
import { Metadata } from 'next';

export async function generateMetadata() {
  return {
    title: "Espace de Jeux Gratuit pour Enfants à Tanger (Trampoline, Autos Tamponneuses) - Espace Ezzohour",
    description: "Découvrez notre espace de jeux 100% gratuit et sécurisé pour enfants à Tanger. Profitez des trampolines, autos tamponneuses et structures gonflables.",
    canonical: "https://ezzohour.ma/espace-jeux", 
    openGraph: {
      title: "Espace 100% Fun et Gratuit pour les Enfants à Tanger",
      description: "Pendant que vous profitez du restaurant, vos enfants s'amusent en toute sécurité (autos tamponneuses, trampolines...).",
    }
  };
}

export default function EspaceJeux() {
  return <Jeux />;
}
