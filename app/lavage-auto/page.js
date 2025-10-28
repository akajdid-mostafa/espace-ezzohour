import EspaceLavageAuto from "@/screens/lavage-auto";
import { Metadata } from 'next';

export async function generateMetadata() {
  return {
    title: "Lavage Auto (Voitures, Poids Lourds) 7j/7 à Tanger - Espace Ezzohour",
    description: "Un lavage auto complet et rapide à Tanger pour tous véhicules (voitures, utilitaires, poids lourds). Service expert 7j/7 pour une brillance parfaite.",
    canonical: "https://ezzohour.ma/lavage-auto",
    openGraph: {
      title: "Lavage Auto Complet et Rapide à Tanger",
      description: "Service de lavage expert 7j/7 à Espace Ezzohour pour tous types de véhicules.",
    }
  };
}

export default function LavageAuto() {
  return <EspaceLavageAuto />;
}
