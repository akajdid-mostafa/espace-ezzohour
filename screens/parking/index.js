import Layout from "@/components/Layout";
import HeroServices from "@/components/hero-services";
import IntroServices from "@/components/intro-services";
import Support from "@/components/support";
import mock from "@/constants/mock";

export default function ParkingPage() {
  return (
    <Layout>
      <HeroServices {...mock.serviceHeroData.parking} />
      <IntroServices {...mock.serviceIntroData.parking} />
      <Support data={mock.parking} />
    </Layout>
  );
}
