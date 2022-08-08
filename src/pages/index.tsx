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
import { useHomeData } from '@store/useHomeData'

import { CopyEntity, FeatureEntity, TeamEntity } from 'types/index'
import { HOME_QUERY } from '@graphql/queries/home'

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
  }
}

const Index: React.FC<PageProps> = ({ data }) => {
  const { setAllStrapiHomeCopy, setAllStrapiHomeFeature, setAllStrapiTeams } = useHomeData()

  React.useEffect(() => {
    setAllStrapiHomeCopy(data.allStrapiCopy.nodes)
  }, [setAllStrapiHomeCopy, data])

  React.useEffect(() => {
    setAllStrapiHomeFeature(data.allStrapiFeature.nodes)
  }, [setAllStrapiHomeFeature, data])

  React.useEffect(() => {
    setAllStrapiTeams(data.allStrapiTeam.nodes)
  }, [setAllStrapiTeams, data])

  return (
    <Box mb={36}>
      <SEO
        title="PyxelChain Technology"
        description="We are building blockchain software to put power and security back in the hands of the users."
      />
      <Landing />
      <About />
      <Vision />
      <Pyxis />
      <Team />
      <Roadmap />
      <Partnership />
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
    allStrapiTeam: {
      data: TeamEntity[]
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
      },
    },
  }
}
