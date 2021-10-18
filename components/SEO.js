import Head from "next/head";

export default function PageHeader({
  title = `Uni Cards - India's First Pay 1/3rd card`,
}) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/images/favicon.ico" />

      <meta
        name="description"
        content="India's First Pay 1/3rd card is here. Now pay in 3 parts over 3 months for no extra cost."
      />
      {/* Open graph used by facebook and linkedin */}
      <meta
        property="og:title"
        content="Uni Cards - India's First Pay 1/3rd card"
      />
      <meta
        property="og:description"
        content="India's First Pay 1/3rd card is here. Now pay in 3 parts over 3 months for no extra cost."
      />
      <meta property="og:image" content="/images/card_preview.jpeg" />
      <meta name="og:type" content="website" />

      {/** Twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@cards_uni" />
      <meta
        name="twitter:title"
        content="Uni Cards - India's First Pay 1/3rd card"
      />
      <meta
        name="twitter:description"
        content="India's First Pay 1/3rd card is here. Now pay in 3 parts over 3 months for no extra cost."
      />
      <meta name="twitter:image" content="/images/card_preview.jpeg" />
    </Head>
  );
}
