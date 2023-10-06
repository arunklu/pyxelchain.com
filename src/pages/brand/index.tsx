import React from 'react'

import { useQuery } from '@apollo/client'
import { SEO } from '@components/seo'
import Spinner from '@components/spinner'
import { StrapiContextProvider } from '@context/strapi-context'
import { BRAND_QUERY } from '@graphql/queries/brand'
import Brand from '@modules/brand/brand'
import { Copy, CopyEntity, Feature, FeatureEntity } from 'types/index'

interface BrandQuery {
  allStrapiCopy: {
    data: CopyEntity[]
  }
  allStrapiFeature: {
    data: FeatureEntity[]
  }
}

const Index: React.FC = () => {
  const { data, loading } = useQuery<BrandQuery>(BRAND_QUERY)

  if (loading) return <Spinner />

  const values = {
    copies: data?.allStrapiCopy.data.map((c) => c.attributes) as Copy[],
    features: data?.allStrapiFeature.data.map((c) => c.attributes) as Feature[],
  }

  const brandCopy = values.copies?.find((n) => n?.sectionId === 'brand-hero')

  return (
    <StrapiContextProvider values={values}>
      <SEO title={brandCopy?.seo?.metatitle} description={brandCopy?.seo?.metadescription} />
      <Brand />
    </StrapiContextProvider>
  )
}

export default Index
