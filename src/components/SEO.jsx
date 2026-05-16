import { Helmet } from "react-helmet-async";

const defaultTitle = "Blacky Series Chill | Official Music Artist Website";
const defaultDescription =
  "Official website of Blacky Series Chill and Sadiq Khan. Explore original music, Spotify tracks, lyrics, artist journey, collaborations and latest releases.";
const defaultKeywords =
  "Blacky Series Chill, Sadiq Khan Music Artist, Indian Music Artist, Spotify Artist, Independent Music Artist, Original Lyrics, Music Collaboration, Jharkhand Music Artist, Garhwa Music Artist";
const defaultUrl = "https://yourdomain.com/";
const defaultImage = `${defaultUrl}og-image.jpg`;

function SEO({
  title = defaultTitle,
  description = defaultDescription,
  keywords = defaultKeywords,
  canonical = defaultUrl,
  image = defaultImage,
  schema = [],
}) {
  const schemas = Array.isArray(schema) ? schema : [schema];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Blacky Series Chill" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schemas.map((item, index) => (
        <script key={`${item?.["@type"] || "schema"}-${index}`} type="application/ld+json">
          {JSON.stringify(item)}
        </script>
      ))}
    </Helmet>
  );
}

export default SEO;
