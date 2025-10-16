import Layout from "@/components/Layout";
import Hero from "./hero";
import Intro from "./intro";
import Values from "./values";
import Marquee from "@/components/marquee";
import Vision from "./vision";
import History from "./history";
import Companies from "./companies";
import Support from "@/components/support";
import mock from "@/constants/mock";

export default function AboutPage() {
  return (
    <Layout>
      <Hero />
      <Intro />
      <Support data={mock.carburant} />
      <Values />
      <Marquee />
      <Vision />
      <History />
      <Companies />
    </Layout>
  );
}
