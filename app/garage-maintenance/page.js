import EspaceGarageMaintenance from "@/screens/garage-maintenance";
import { Metadata } from 'next';

export async function generateMetadata() {
  return {
    title: "Garage Maintenance & Entretien Auto (Vidange, Pneus) Tanger - Espace Ezzohour",
    description: "Entretien complet pour votre véhicule (voiture, utilitaire, poids lourd) à Tanger. Vidange, pneus, diagnostic et réparations par une équipe qualifiée.",
    canonical: "https://ezzohour.ma/garage-maintenance", 
    openGraph: {
      title: "Réparations Fiables pour Tous Véhicules à Tanger",
      description: "Notre garage à Espace Ezzohour prend en charge l'entretien complet de votre véhicule.",
    }
  };
}

export default function GarageMaintenance() {
  return <EspaceGarageMaintenance />;
}
