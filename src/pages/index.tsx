import { useQuery } from '@apollo/client'
import { Box } from '@chakra-ui/react'
import { SEO } from '@components/seo'
import Spinner from '@components/spinner'
import { StrapiContextProvider } from '@context/strapi-context'
import { HOME_QUERY } from '@graphql/queries/home'
import About from '@modules/home/about/about'
import Landing from '@modules/home/landing'
import Partnership from '@modules/home/partnership'
import Pyxis from '@modules/home/pyxis/pyxis'
import Roadmap from '@modules/home/roadmap'
import Team from '@modules/home/team'
import UpcomingProducts from '@modules/home/upcoming-products'
import Vision from '@modules/home/vision-problem-solution'
import { isBrowser } from 'framer-motion'
import React from 'react'
import {
  Copy,
  CopyEntity,
  Feature,
  FeatureEntity,
  TeamEntity,
  Team as TeamProps,
  UpcomingProductEntity,
} from 'types/index'

interface HomeQuery {
  allStrapiCopy: {
    data: CopyEntity[]
  }
  allStrapiFeature: {
    data: FeatureEntity[]
  }
  allStrapiTeam: {
    data: TeamEntity[]
  }
  upcomingProduct: {
    data: UpcomingProductEntity
  }
}

const Index: React.FC = () => {
  const { data, loading } = useQuery<HomeQuery>(HOME_QUERY)

  if (loading) return <Spinner />

  const values = {
    features: data?.allStrapiFeature.data.map((c) => c.attributes) as Feature[],
    copies: data?.allStrapiCopy.data.map((c) => c.attributes) as Copy[],
    teams: data?.allStrapiTeam.data.map((c) => c.attributes) as TeamProps[],
    upcomingProducts: data?.upcomingProduct.data as UpcomingProductEntity,
  }

  return isBrowser ? (
    <StrapiContextProvider values={values}>
      <Box mb={36}>
        <SEO title={values.copies[0]?.seo?.metatitle} description={values.copies[0].seo?.metadescription} />
        <Landing />
        <UpcomingProducts />
        <About />
        <Vision />
        <Pyxis />
        <Team />
        <Roadmap />
        <Partnership />
      </Box>
    </StrapiContextProvider>
  ) : (
    <Spinner />
  )
}

export default Index
