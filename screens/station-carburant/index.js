import Layout from "@/components/Layout";
import HeroServices from "@/components/hero-services";
import IntroServices from "@/components/intro-services";
import Support from "@/components/support";
import mock from "@/constants/mock";

export default function StationCarburantPage() {
  return (
    <Layout>
      <HeroServices {...mock.serviceHeroData.station} />
      <IntroServices {...mock.serviceIntroData.station} />
      <Support data={mock.carburant} />
    </Layout>
  );
}
