import { DM_Sans, Inter } from "next/font/google";
import "../styles/index.css";
import cn from "classnames";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

export const metadata = {
  title:
    "Espace Ezzohour - Complexe Multi-Services à Tanger (Station, Restaurant, Garage)",
  description:
    "Simplifiez votre quotidien à Tanger. Espace Ezzohour réunit station Afriquia, café-restaurant, supérette, garage, lavage auto et espace jeux gratuit. Parking gratuit sur place.",
  keywords:
    "Espace Ezzohour, complexe multi-services Tanger, station-service Tanger, restaurant Tanger, supérette Tanger, garage auto Tanger, lavage auto Tanger, espace jeux enfants Tanger, parking gratuit Tanger",
  openGraph: {
    title: "Espace Ezzohour: Votre Destination Quotidienne à Tanger",
    description:
      "Tous vos services en un seul lieu : Station Afriquia, Restaurant, Supérette, Garage, Lavage Auto, Espace Jeux et Parking Gratuit.",
    type: "website",
    locale: "fr_MA",
    url: "https://ezzohour.ma/",
    siteName: "Espace Ezzohour",
    images: [
      {
        url: "https://ezzohour.ma/images/logo/espace-ezzohour-logo.svg",
        width: 800,
        height: 600,
        alt: "Logo Espace Ezzohour",
      },
    ],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://ezzohour.ma/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta name="apple-mobile-web-app-title" content="Ezzohour" />
        <meta
          name="title"
          content="Espace Ezzohour - Complexe Multi-Services à Tanger (Station, Restaurant, Garage)"
        />
        <meta
          name="description"
          content="Simplifiez votre quotidien à Tanger avec Espace Ezzohour : station Afriquia, café-restaurant, supérette, garage, lavage auto et espace jeux gratuit."
        />
        <meta
          name="keywords"
          content="EZZOHOUR, Tanger, services, café, restaurant, lavage auto, station carburant, supérette, garage"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ezzohour.ma/" />
        <meta property="og:title" content="Espace Ezzohour" />
        <meta
          property="og:description"
          content="Votre complexe multi-services à Tanger : Station Afriquia, Restaurant, Garage, Lavage Auto, Supérette, Espace Jeux et Parking Gratuit."
        />
        <meta
          property="og:image"
          content="https://ezzohour.ma/images/logo/espace-ezzohour-logo.svg"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ezzohour.ma/" />
        <meta property="og:site_name" content="Espace Ezzohour" />
        <meta property="og:locale" content="fr_MA" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="preload"
          href="/images/sliders/espace-ezzohour.webp"
          as="image"
          type="image/webp"
          fetchpriority="high"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
    /* Add critical CSS here */
    .slide_backgroundImage__RKQVO {
      background-size: cover;
      background-position: center;
      /* Other critical styles */
    }
  `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Espace Ezzohour",
              image: "https://ezzohour.ma/images/logo/espace-ezzohour-logo.svg",
              "@id": "https://ezzohour.ma",
              url: "https://ezzohour.ma",
              telephone: "+212661918720",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Espace Ezzohour, Tanger, Maroc",
                addressLocality: "Tanger",
                postalCode: "90000",
                addressCountry: "MA",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday",
                  ],
                  opens: "07:00",
                  closes: "00:00",
                },
              ],
              sameAs: [
                "https://www.facebook.com/profile.php?id=61581691160238",
                "https://www.instagram.com/espace.ezzohour/",
                "https://www.tiktok.com/@espace.ezzohour?_t=ZS-90nIVncyHhv&_r=1",
              ],
            }),
          }}
        />
      </head>
      <body className={cn(inter.variable, dmSans.variable)}>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-1GCJ448N4Y"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1GCJ448N4Y');
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
