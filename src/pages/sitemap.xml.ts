import { NextApiRequest, NextApiResponse } from "next";
import { products } from "@/data/products";

const BASE_URL = "https://www.bitgadget.store";

function generateSiteMap() {
  const staticPages = [
    "",
    "/about",
    "/privacy",
  ];

  const productPages = products.map(
    (product) => `/product/${product.id}`
  );

  const allPages = [...staticPages, ...productPages];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
    .map(
      (path) => `
    <url>
      <loc>${BASE_URL}${path}</loc>
    </url>
  `
    )
    .join("")}
</urlset>
`;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Content-Type", "text/xml");
  res.write(generateSiteMap());
  res.end();
}