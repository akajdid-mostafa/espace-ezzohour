import Layout from "@/components/Layout";
import HeroServices from "@/components/hero-services";
import IntroServices from "@/components/intro-services";
import Support from "@/components/support";
import mock from "@/constants/mock";

export default function Jeux() {
  return (
    <Layout>
      <HeroServices {...mock.serviceHeroData.jeux} />
      <IntroServices {...mock.serviceIntroData.jeux} />
      <Support data={mock.jeux} />
    </Layout>
  );
}
