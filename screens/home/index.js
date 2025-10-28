import Layout from "@/components/Layout";
import Hero from "./hero";
import About from "./about";
import Categories from "./categories";
import Intro from "./intro";
// import ProductView from "../../components/product-view";
import Compare from "./compare";
import Marquee from "@/components/marquee";
// import Sales from "./sales";
// import Promo from "./promo";
// import Reviews from "./reviews";
// import BestSellers from "./best-sellers";
// import Marquees from "@/components/marquees";
import News from "./news";
import mock from "@/constants/mock";
import ResponsiveDesign from "./responsive-design";
// import icons from "@/constants/icons";
import Faqs from "./faqs";
import Features from "./features";

export default function HomePage({ products = mock.products }) {
  const product = products.filter((product) => product.slug === "eco-tunes")[0];

  console.log(product);

  return (
    <Layout>
      <Hero />
      <About />
      
      {/* Example 1: Default usage */}
      <ResponsiveDesign />
      
      {/* Example 2: Custom content for mobile experience */}
      <ResponsiveDesign
        image={{
          src: "/images/espace/cafe-restaurant.webp",
          alt: "Café Restaurant",
          width: 500,
          height: 400
        }}
        icon={{
          src: "/images/espace/cafe-restaurant-icon.svg",
          alt: "Café Restaurant Icon",
          width: 44,
          height: 44
        }}
        title="Café Restaurant"
        subtitle="Notre café restaurant sur place vous propose une terrasse agréable et une carte diversifiée, idéale du petit-déjeuner au dîner pour tous les goûts."
        reverse={true}
        href="/cafe-restaurant"
      />
      
      {/* Example 3: Custom content for fuel station */}
      {/* <ResponsiveDesign
        image={{
          src: "/images/espace/supette.png",
          alt: "Supérette",
          width: 500,
          height: 400
        }}
        icon={{
          src: "/images/espace/supette-icon.svg",
          alt: "Supérette Icon",
          width: 44,
          height: 44
        }}
        title="Supérette"
        subtitle="Trouvez dans notre supérette tout ce dont vous avez besoin : snacks, boissons, produits essentiels et courses rapides au même endroit.﻿ "
        href="/superette"
      /> */}
      
      {/* Example 4: Custom content for restaurant */}
      <ResponsiveDesign
        image={{
          src: "/images/espace/lavage-auto.webp",
          alt: "Lavage Auto",
          width: 500,
          height: 400
        }}
        icon={{
          src: "/images/espace/lavage-auto-icon.svg",
          alt: "Lavage Auto Icon",
          width: 44,
          height: 44
        }}
        title="Lavage Auto"
        subtitle="Facilitez-vous la vie avec le lavage auto professionnel dans le complexe : nettoyage manuel, automatique ou libre-service pendant votre pause."
        // reverse={true}
        href="/lavage-auto"
      />
      {/* Example 5: Custom content for fuel station */}
      <ResponsiveDesign
        image={{
          src: "/images/espace/garage-maintenance.webp",
          alt: "Garage maintenance",
          width: 500,
          height: 400
        }}
        icon={{
          src: "/images/espace/garage-maintenance-icon.svg",
          alt: "Garage maintenance Icon",
          width: 44,
          height: 44
        }}
        title="Garage maintenance"
        subtitle="Le garage Espaces Ezzohour prend soin de votre voiture avec entretien complet, vidange, pneus et techniciens qualifiés à proximité directe de tous nos services."
        reverse={true}
        href="/garage-maintenance"
      />

            {/* Example 6: Custom content for restaurant */}
            <ResponsiveDesign
        image={{
          src: "/images/espace/espace-jeux.webp",
          alt: "Espace Jeux",
          width: 500,
          height: 400
        }}
        icon={{
          src: "/images/espace/espace-jeux-icon.svg",
          alt: "Espace Jeux Icon",
          width: 44,
          height: 44
        }}
        title="Espace Jeux"
        subtitle="Vos enfants peuvent profiter d’un espace jeux sécurisé et gratuit, tout près des autres services, pour une visite en toute tranquillité chez Espaces Ezzohour."
        // reverse={true}
        href="/espace-jeux"
      />

       {/* Example 7: Custom content for fuel station */}
       <ResponsiveDesign
        image={{
          src: "/images/espace/parking.webp",
          alt: "Parking",
          width: 500,
          height: 400
        }}
        icon={{
          src: "/images/espace/parking-icon.svg",
          alt: "Parking Icon",
          width: 44,
          height: 44
        }}
        title="Parking"
        subtitle="Que vous visitiez Espaces Ezzohour ou soyez simplement de passage, notre parking gratuit et sécurisé accueille tous les véhicules pour un arrêt facile et serein."
        reverse={true}
        href="/parking"
      />

      {/* <Categories /> */}
      {/* <ProductView {...product} /> */}
      {/* <Compare /> */}
      <Faqs />
      <Marquee />
      {/* <Sales /> */}
      {/* <Promo /> */}
      {/* <Reviews /> */}
      {/* <BestSellers /> */}
      {/* <Marquees /> */}
      <Features />
      <News />
      <Intro />
    </Layout>
  );
}
