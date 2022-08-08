import React from 'react'

interface SEOTypes {
  title?: string
  description?: string
  pathname?: string
  children?: React.ReactNode
  seoimage?: string
}
export const SEO: React.FC<SEOTypes> = ({
  seoimage = 'https://pyxiscms.gameficap.com/uploads/seo_preview_acdbd96b4b.png',
  title,
  description,
  pathname,
  children,
}) => {
  const seo = {
    title,
    description,
    image: seoimage,
    url: pathname,
  }
  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {/* opengraph */}
      <meta name="og:type" content="website" />
      <meta name="og:url" content={seo.url} />
      <meta name="og:title" content={seo.title} />
      <meta name="og:description" content={seo.description} />
      <meta name="og:image" content={seo.image} />
      <meta name="og:image:width" content="500" />
      <meta name="og:image:height" content="500" />

      {/* twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      {/* <meta name="twitter:creator" content={seo.twitterUsername} /> */}
      <link rel="icon" href="/svg/logo.svg" />
      {children}
    </>
  )
}
