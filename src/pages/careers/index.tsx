import React from 'react'

import { CAREER_QUERY } from '@graphql/queries/career'

import { useQuery } from '@apollo/client'
import { Box } from '@chakra-ui/react'
import { SEO } from '@components/seo'
import { StrapiContextProvider } from '@context/strapi-context'
import Careers from '@modules/careers/careers'
import Culture from '@modules/careers/culture'
import KeyValues from '@modules/careers/key-values'
import OurPerks from '@modules/careers/our-perks'
import { isBrowser } from '@utils/env-utils'
import { Copy, CopyEntity, Feature, FeatureEntity } from 'types/index'

interface CareerQuery {
  allStrapiCopy: {
    data: CopyEntity[]
  }
  allStrapiFeature: {
    data: FeatureEntity[]
  }
}

const Index: React.FC = () => {
  const { data, loading } = useQuery<CareerQuery>(CAREER_QUERY)

  if (loading) {
    return null
  }

  const values = {
    copies: data?.allStrapiCopy.data.map((c) => c.attributes) as Copy[],
    features: data?.allStrapiFeature.data.map((c) => c.attributes) as Feature[],
  }

  const careersCopy = values.copies?.find((n) => n?.sectionId === 'careers-hero')

  return isBrowser ? (
    <StrapiContextProvider values={values}>
      <Box mt={{ base: '64px', md: '80px', lg: '110px' }}>
        <SEO title={careersCopy?.seo?.metatitle} description={careersCopy?.seo?.metadescription} />
        <Careers />
        <KeyValues />
        <OurPerks />
        <Culture />
      </Box>
    </StrapiContextProvider>
  ) : null
}

export default Index
