import Layout from "@/components/Layout";
import HeroServices from "@/components/hero-services";
import IntroServices from "@/components/intro-services";
import Support from "@/components/support";
import mock from "@/constants/mock";

export default function LavageAutoPage() {
  return (
    <Layout>
      <HeroServices {...mock.serviceHeroData.lavage} />
      <IntroServices {...mock.serviceIntroData.lavage} />
      <Support data={mock.lavage} />
    </Layout>
  );
}
