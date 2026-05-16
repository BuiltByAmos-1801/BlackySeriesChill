# Blacky Series Chill

Advanced React/Vite artist portfolio for **Sadiq Khan**, the music artist and personal brand behind **Blacky Series Chill**.

## Tech Stack

- React
- Vite
- Framer Motion
- Lucide React icons
- React Helmet Async
- Sitemap tooling
- No PHP

## Run Locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## SEO Features Added

- Dynamic SEO component: `src/components/SEO.jsx`
- React Helmet Async setup in `src/main.jsx`
- Dynamic title, meta description, keywords and canonical URL
- Open Graph and Twitter card tags
- JSON-LD schema for `MusicGroup`, `Person`, `WebSite`, `Organization` and `FAQPage`
- SEO-friendly FAQ section
- Public `robots.txt`, `sitemap.xml`, `manifest.json`, `favicon.ico` and `og-image.jpg`
- WebP versions of major website images in `src/images/webp`
- Descriptive image alt text, lazy loading, and width/height attributes
- Semantic homepage H1 and section H2 headings

## Update Domain URL

Before deploying, replace `https://yourdomain.com` in:

- `src/App.jsx`
- `src/components/SEO.jsx`
- `vite.config.js`
- `public/robots.txt`
- `public/sitemap.xml`

Use your final domain, for example:

```txt
https://blackyserieschill.com
```

## Submit Sitemap To Google Search Console

1. Deploy the website.
2. Open [Google Search Console](https://search.google.com/search-console).
3. Add and verify your domain property.
4. Go to **Sitemaps**.
5. Submit:

```txt
https://yourdomain.com/sitemap.xml
```

## Replace Open Graph Image

The current OG image is:

```txt
public/og-image.jpg
```

Replace it with a 1200x630 JPG image for the best social sharing preview.

## Add Google Analytics Later

Add the Google Analytics script in `index.html`, or use a React analytics package. Place the tracking code in the `<head>` and keep it async so performance stays strong.

## Image Optimization

The local JPEG images were converted to WebP using:

```bash
python scripts/convert_images.py
```

Run it again after replacing source images.
