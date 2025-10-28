import ContactUsPage from "@/screens/contact-us";
import { Metadata } from 'next';

export async function generateMetadata() {
  return {
    title: "Contacter Espace Ezzohour - Multi-Services à Tanger",
    description: "Contactez-nous pour toute question. Retrouvez notre adresse à Tanger, email, et formulaire de contact. Nous sommes là pour vous aider.",
    canonical: "https://ezzohour.ma/contact-us", 
    openGraph: {
      title: "Contactez Espace Ezzohour à Tanger",
      description: "Une question ? Une suggestion ? Contactez notre complexe multi-services à Tanger.",
    }
  };
}

export default function ContactUs() {
  return <ContactUsPage />;
}
