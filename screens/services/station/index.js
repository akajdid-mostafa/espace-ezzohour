import Layout from "@/components/Layout";
import Hero from "./hero";
import Services from "./services";
import Loyalty from "./loyalty";
import Features from "./features";

export default function StationPage() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Features />
      <Loyalty />
    </Layout>
  );
}
