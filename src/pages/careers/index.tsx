import React from 'react'
import axios from 'axios'
import { print } from 'graphql'
import { Box } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'

import { SEO } from '@components/seo'
import KeyValues from '@modules/careers/key-values'
import Culture from '@modules/careers/culture'
import OurPerks from '@modules/careers/our-perks'
import Careers from '@modules/careers/careers'
import { useCareersData } from '@store/useCareersData'
import { CAREER_QUERY } from '@graphql/queries/career'

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
  const { setAllStrapiCareersCopy, setAllStrapiCareersFeature } = useCareersData()

  React.useEffect(() => {
    setAllStrapiCareersCopy(data.allStrapiCopy.nodes)
  }, [setAllStrapiCareersCopy, data])

  React.useEffect(() => {
    setAllStrapiCareersFeature(data.allStrapiFeature.nodes)
  }, [setAllStrapiCareersFeature, data])

  const careersCopy = data.allStrapiCopy.nodes.find((n) => n.sectionId === 'careers-hero')
  return (
    <Box mt={{ base: '64px', md: '80px', lg: '110px' }}>
      <SEO title={careersCopy?.seo?.metatitle} description={careersCopy?.seo?.metadescription} />
      <Careers />
      <KeyValues />
      <OurPerks />
      <Culture />
    </Box>
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
    query: print(CAREER_QUERY),
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
