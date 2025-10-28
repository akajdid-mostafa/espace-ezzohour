import StationCarburant from "@/screens/station-carburant";
import { Metadata } from 'next';

export async function generateMetadata() {
  return {
    title: "Station Service Afriquia 24/7 Tanger - Espace Ezzohour",
    description: "Faites le plein 24h/24 à notre station Afriquia à Tanger. Carburants de qualité, service rapide et lubrifiants Afriquia disponibles.",
    canonical: "https://ezzohour.ma/station-carburant", 
    openGraph: {
      title: "Station Carburant Premium 24/24 à Tanger",
      description: "Service rapide et fiable, carburants de qualité Afriquia à Espace Ezzohour, Tanger.",
    }
  };
}

export default function StationCarburantPage() {
  return <StationCarburant />;
}
