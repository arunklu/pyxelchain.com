import React from 'react'
import axios from 'axios'
import { print } from 'graphql'
import { GetServerSideProps } from 'next'

import { SEO } from '@components/seo'
import Brand from '@modules/brand/brand'
import { useBrandData } from '@store/useBrandData'
import { BRAND_QUERY } from '@graphql/queries/brand'

import { CopyEntity, FeatureEntity } from 'types/index'
import { useFooterData } from '@store/useFooterData'

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
  const { setAllStrapiBrandCopy, setAllStrapiBrandFeature } = useBrandData()
  const { setAllStrapiFooterCopy } = useFooterData()

  React.useEffect(() => {
    setAllStrapiBrandCopy(data.allStrapiCopy.nodes)
    setAllStrapiFooterCopy(data.allStrapiCopy.nodes)
  }, [setAllStrapiBrandCopy, setAllStrapiFooterCopy, data])

  React.useEffect(() => {
    setAllStrapiBrandFeature(data.allStrapiFeature.nodes)
  }, [setAllStrapiBrandFeature, data])

  const brandCopy = data.allStrapiCopy.nodes.find((n) => n.sectionId === 'brand-hero')
  return (
    <>
      <SEO title={brandCopy?.seo?.metatitle} description={brandCopy?.seo?.metadescription} />
      <Brand />
    </>
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
