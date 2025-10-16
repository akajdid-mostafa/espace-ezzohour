import Layout from "@/components/Layout";
import HeroServices from "@/components/hero-services";
import IntroServices from "@/components/intro-services";
import Support from "@/components/support";
import mock from "@/constants/mock";

export default function SuperettePage() {
  return (
    <Layout>
      <HeroServices {...mock.serviceHeroData.superette} />
      <IntroServices {...mock.serviceIntroData.superette} />
      <Support data={mock.superette} />
    </Layout>
  );
}
