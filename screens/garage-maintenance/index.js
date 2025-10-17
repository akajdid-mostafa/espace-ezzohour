import Layout from "@/components/Layout";
import HeroServices from "@/components/hero-services";
import IntroServices from "@/components/intro-services";
import Support from "@/components/support";
import mock from "@/constants/mock";

export default function EspaceGarageMaintenance() {
  return (
    <Layout>
      <HeroServices {...mock.serviceHeroData.garage} />
      <IntroServices {...mock.serviceIntroData.garage} />
      <Support data={mock.garage} />
    </Layout>
  );
}
