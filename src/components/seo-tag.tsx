import Head from "next/head";
import { getCanonicalUrl } from "./utils/utils";
import { LOGO_URL } from "@/src/config/constants/constants";

type SeoProps = {
  metadata: { title: string; description: string };
};

export default function SeoTag({ metadata: { title, description } }: SeoProps) {
  const canonicalUrl = getCanonicalUrl();

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* Open Graph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:image" content={LOGO_URL} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:description" content={description} />

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </Head>
  );
}
