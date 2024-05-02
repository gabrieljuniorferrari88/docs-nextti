import { SiteConfig } from "@/types";

export const websiteUrl = process.env.NEXT_PUBLIC_VERCEL_URL;
export const githubBaseUrl =
  "https://github.com/gabrieljuniorferrari88/docs-nextti";

const siteConfig: SiteConfig = {
  repo: {
    url: githubBaseUrl,
    editUrl: `${githubBaseUrl}/edit/main/content`,
    blobUrl: `${githubBaseUrl}/blob/main`,
  },
  author: {
    name: "Gabriel Ferrari",
    github: "gabrieljuniorferrari88",
    email: "gabrieljuniorferrari88@gmail.com",
  },
  seo: {
    title: "Nextti",
    description: "Documentação: Nextti Sistemas",
    openGraph: {
      url: websiteUrl,
      type: "website",
      image: {
        url: `${websiteUrl}/static/images/banner.png`,
        width: 1240,
        height: 480,
        alt: "Documentação: Nextti Sistemas",
        type: "image/png",
      },
      locale: "pt_BR",
      siteName: "Docs - Nextti",
    },
    robots: "index, follow",
  },
};

export default siteConfig;
