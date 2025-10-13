import Layout from "@/components/Layout";
import Hero from "./hero";
import Menu from "./menu";
import Features from "./features";
import Loyalty from "./loyalty";

export default function RestaurantPage() {
  return (
    <Layout>
      <Hero />
      <Menu />
      <Features />
      <Loyalty />
    </Layout>
  );
}
