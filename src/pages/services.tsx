import { useMutation, useQuery } from '@apollo/client'
import { Box, Flex, FormControl, Input, SimpleGrid, Textarea, VStack } from '@chakra-ui/react'
import Button from '@components/button'
import MarkdownRenderer, { HeadingRenderer } from '@components/markdown-renderer'
import { SEO } from '@components/seo'
import Spinner from '@components/spinner'
import { CREATE_SERVICES } from '@graphql/mutations/create-services'
import { SERVICES_QUERY } from '@graphql/queries/services'
import useAppToast from '@hooks/use-app-toast'
import React from 'react'
import { CopyEntity } from 'types/index'

interface ServicesQuery {
  allStrapiCopy: {
    data: CopyEntity[]
  }
}

const Services: React.FC = () => {
  const { data, loading: isLoading } = useQuery<ServicesQuery>(SERVICES_QUERY)
  const servicesCopy = data?.allStrapiCopy.data
    .map((c) => c.attributes as NonNullable<CopyEntity['attributes']>)
    ?.find((q) => q.sectionId === 'service-hero')

  const { showToast } = useAppToast()
  const [fullName, setFullName] = React.useState<string>('')
  const [email, setEmail] = React.useState<string>('')
  const [description, setDescription] = React.useState<string>('')

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    createService({
      variables: {
        data: {
          full_name: fullName,
          email,
          description,
          publishedAt: new Date().toISOString(),
        },
      },
    })
  }
  const [createService, { loading }] = useMutation(CREATE_SERVICES, {
    onCompleted: () => {
      showToast('Successfully submitted Services form.', 'success')
      setFullName('')
      setEmail('')
      setDescription('')
    },
    onError: () => {
      showToast('Failed to submit Services form.', 'error')
    },
  })

  if (isLoading) {
    return <Spinner />
  }

  return (
    <SimpleGrid my={{ base: '64px', md: '80px', lg: '111px' }} gap="10" columns={{ base: 1, md: 2 }}>
      <Box maxW={{ base: 'full', md: '600px' }} mb={{ base: 12, md: 'inherit' }}>
        <SEO title={servicesCopy?.seo?.metatitle} description={servicesCopy?.seo?.metadescription} />
        <HeadingRenderer mobilecenter title={servicesCopy?.title} titleWithGradient={servicesCopy?.titleWithGradient} />
        <Flex flexDir="column" gap={4} mt="10px">
          <MarkdownRenderer markdown={servicesCopy?.description} />
        </Flex>
      </Box>
      <Box
        h="480px"
        p={{ base: 5, lg: 12 }}
        maxW={{ base: 'full', md: '598px' }}
        w="full"
        bgGradient="linear(to-b, rgba(211, 216, 221, 0.1) -149.6%, rgba(4, 38, 102, 0.1) 128.91%)"
        rounded="14px"
      >
        <form onSubmit={handleFormSubmit}>
          <VStack spacing={4} mb={8}>
            <FormControl isRequired>
              <Input value={fullName} placeholder="Full name" onChange={(e) => setFullName(e.target.value)} />
            </FormControl>
            <FormControl isRequired>
              <Input
                type="email"
                value={email}
                placeholder="Email address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <Textarea
                p="20px"
                css={{ border: '0.4px solid rgba(211, 216, 221, 0.09)' }}
                _hover={{ border: '0.4px solid rgba(211, 216, 221, 0.09)' }}
                _placeholder={{ color: '#C3C4C3', fontSize: 'sm', opacity: 0.5 }}
                rows={4}
                value={description}
                placeholder="Describe your business need."
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormControl>
          </VStack>
          <Button w="full" type="submit">
            {loading ? 'Submitting' : 'Contact Us'}
          </Button>
        </form>
      </Box>
    </SimpleGrid>
  )
}

export default Services
