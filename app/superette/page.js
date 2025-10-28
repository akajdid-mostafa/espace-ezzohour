import EspaceSuperette from "@/screens/superette";
import { Metadata } from 'next';

export async function generateMetadata() {
  return {
    title: "Supérette Ouverte 7j/7 à Tanger (Courses, Snacks, Produits Locaux) - Espace Ezzohour",
    description: "Faites vos courses rapides à Tanger. Notre supérette 7j/7 propose produits alimentaires, snacks, boissons et produits locaux à prix accessibles.",
    canonical: "https://www.espace-ezzohour.ma/superette", 
    openGraph: {
      title: "Produits du Quotidien à Tout Moment à Tanger",
      description: "Votre supérette 7j/7 à Espace Ezzohour pour des courses faciles et rapides.",
    }
  };
}

export default function Superette() {
  return <EspaceSuperette />;
}
