import EspaceParking from "@/screens/parking";
import { Metadata } from 'next';

export async function generateMetadata() {
  return {
    title: "Parking Gratuit et Sécurisé 24/24 à Tanger - Espace Ezzohour",
    description: "Garez-vous facilement à Tanger. Notre parking est 100% gratuit, sécurisé, éclairé et accessible 24/24, avec accès direct à tous nos services.",
    canonical: "https://ezzohour.ma/parking", 
    openGraph: {
      title: "Stationnement Toujours Accessible 24/24 à Tanger",
      description: "Profitez de notre parking gratuit et sécurisé, avec accès direct à tous les services Espace Ezzohour.",
    }
  };
}

export default function Parking() {
  return <EspaceParking />;
}
