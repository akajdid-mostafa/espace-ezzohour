import Layout from "@/components/Layout";
import Hero from "./hero";
import About from "./about";
import Categories from "./categories";
import Intro from "./intro";
import ProductView from "../../components/product-view";
import Compare from "./compare";
import Marquee from "@/components/marquee";
import Sales from "./sales";
import Promo from "./promo";
import Reviews from "./reviews";
import BestSellers from "./best-sellers";
import Marquees from "@/components/marquees";
import News from "./news";
import mock from "@/constants/mock";

export default function HomePage({ products = mock.products }) {
  const product = products.filter((product) => product.slug === "eco-tunes")[0];

  console.log(product);

  return (
    <Layout>
      <Hero />
      <About />
      <Categories />
      <Intro />
      <ProductView {...product} />
      <Compare />
      <Marquee />
      <Sales />
      <Promo />
      <Reviews />
      <BestSellers />
      <Marquees />
      <News />
    </Layout>
  );
}
