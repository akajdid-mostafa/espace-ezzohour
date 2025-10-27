import Layout from "@/components/Layout";
import Hero from "./hero";
import Maps from "./maps";
import ContactForm from "./contact-form";

export default function ContactUsPage() {
  return (
    <Layout>
      <Hero />
      <ContactForm />
      <Maps />
    </Layout>
  );
}
