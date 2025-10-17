import Layout from "@/components/Layout";
import HeroServices from "@/components/hero-services";
import IntroServices from "@/components/intro-services";
import Support from "@/components/support";
import mock from "@/constants/mock";

export default function EspaceCafeRestaurant() {
  return (
    <Layout>
      <HeroServices {...mock.serviceHeroData.restaurant} />
      <IntroServices {...mock.serviceIntroData.restaurant} />
      <Support data={mock.restaurant} />
    </Layout>
  );
}
