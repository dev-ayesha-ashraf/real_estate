import { Helmet } from "react-helmet-async";

export interface ShareItem {
  title: string;
  price: number;
  image: string;
  description?: string;
}

interface ShareMetaTagsProps {
  item: ShareItem | null;
}

export const ShareMetaTags = ({ item }: ShareMetaTagsProps) => {
  if (!item) return null;

  const imageUrl = `${import.meta.env.VITE_MEDIA_URL}/${item.image}`;
  const shareUrl = window.location.href;
  const title = `${item.title} - AWG ${Number(item.price).toLocaleString()}`;
  const description = item.description ?? "Check out this listing!";

  return (
    <Helmet>
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={shareUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={shareUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={imageUrl} />

      {/* WhatsApp specific */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
    </Helmet>
  );
};
