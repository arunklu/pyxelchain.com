import React from 'react'
import axios from 'axios'
import { print } from 'graphql'
import { GetServerSideProps } from 'next'

import { SEO } from '@components/seo'
import Brand from '@modules/brand/brand'
import { StrapiContextProvider } from '@context/strapi-context'
import { BRAND_QUERY } from '@graphql/queries/brand'

import { CopyEntity, FeatureEntity } from 'types/index'

interface PageProps {
  data: {
    allStrapiCopy: {
      nodes: NonNullable<CopyEntity['attributes']>[]
    }
    allStrapiFeature: {
      nodes: NonNullable<FeatureEntity['attributes']>[]
    }
  }
}

const Index: React.FC<PageProps> = ({ data }) => {
  const values = {
    copies: data.allStrapiCopy.nodes,
    features: data.allStrapiFeature.nodes,
  }

  const brandCopy = data.allStrapiCopy.nodes.find((n) => n.sectionId === 'brand-hero')
  return (
    <StrapiContextProvider values={values}>
      <SEO title={brandCopy?.seo?.metatitle} description={brandCopy?.seo?.metadescription} />
      <Brand />
    </StrapiContextProvider>
  )
}

export default Index

interface QueryResult {
  data: {
    allStrapiCopy: {
      data: CopyEntity[]
    }
    allStrapiFeature: {
      data: FeatureEntity[]
    }
  }
}

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  const result = await axios.post<QueryResult>(process.env.NEXT_PUBLIC_API_URL as string, {
    query: print(BRAND_QUERY),
  })

  const copyNodes = result.data.data.allStrapiCopy.data.map(
    (c) => c.attributes as NonNullable<CopyEntity['attributes']>
  )
  const featureNodes = result.data.data.allStrapiFeature.data.map(
    (c) => c.attributes as NonNullable<FeatureEntity['attributes']>
  )

  return {
    props: {
      data: {
        allStrapiCopy: {
          nodes: copyNodes,
        },
        allStrapiFeature: {
          nodes: featureNodes,
        },
      },
    },
  }
}
