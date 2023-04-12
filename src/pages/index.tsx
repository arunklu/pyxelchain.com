import React from 'react'
import axios from 'axios'
import { print } from 'graphql'
import { Box } from '@chakra-ui/react'
import { GetServerSideProps } from 'next'

import { SEO } from '@components/seo'
import Landing from '@modules/home/landing'
import About from '@modules/home/about/about'
import Vision from '@modules/home/vision-problem-solution'
import Team from '@modules/home/team'
import Roadmap from '@modules/home/roadmap'
import Partnership from '@modules/home/partnership'
import Pyxis from '@modules/home/pyxis/pyxis'
import { StrapiContextProvider } from '@context/strapi-context'

import { CopyEntity, FeatureEntity, TeamEntity, UpcomingProductEntity } from 'types/index'
import { HOME_QUERY } from '@graphql/queries/home'
import UpcomingProducts from '@modules/home/upcoming-products'

interface PageProps {
  data: {
    allStrapiCopy: {
      nodes: NonNullable<CopyEntity['attributes']>[]
    }
    allStrapiFeature: {
      nodes: NonNullable<FeatureEntity['attributes']>[]
    }
    allStrapiTeam: {
      nodes: NonNullable<TeamEntity['attributes']>[]
    }
    upcomingProduct: {
      data: UpcomingProductEntity
    }
  }
}

const Index: React.FC<PageProps> = ({ data }) => {
  const values = {
    copies: data.allStrapiCopy.nodes,
    features: data.allStrapiFeature.nodes,
    teams: data.allStrapiTeam.nodes,
    upcomingProducts: data.upcomingProduct.data,
  }

  return (
    <StrapiContextProvider values={values}>
      <Box mb={36}>
        <SEO
          title={data?.allStrapiCopy?.nodes[0]?.seo?.metatitle}
          description={data?.allStrapiCopy?.nodes[0]?.seo?.metadescription}
        />
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
    allStrapiTeam: {
      data: TeamEntity[]
    }
    upcomingProduct: {
      data: UpcomingProductEntity
    }
  }
}

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  const result = await axios.post<QueryResult>(process.env.NEXT_PUBLIC_API_URL as string, {
    query: print(HOME_QUERY),
  })

  const copyNodes = result.data.data.allStrapiCopy.data.map(
    (c) => c.attributes as NonNullable<CopyEntity['attributes']>
  )
  const featureNodes = result.data.data.allStrapiFeature.data.map(
    (c) => c.attributes as NonNullable<FeatureEntity['attributes']>
  )
  const teamNodes = result.data.data.allStrapiTeam.data.map(
    (c) => c.attributes as NonNullable<TeamEntity['attributes']>
  )

  const upcomingProduct = result.data.data.upcomingProduct

  return {
    props: {
      data: {
        allStrapiCopy: {
          nodes: copyNodes,
        },
        allStrapiFeature: {
          nodes: featureNodes,
        },
        allStrapiTeam: {
          nodes: teamNodes,
        },
        upcomingProduct,
      },
    },
  }
}
