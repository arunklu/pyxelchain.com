import React from 'react'
import { useMutation } from '@tanstack/react-query'
import { Box, FormControl, Input, Textarea, VStack, SimpleGrid } from '@chakra-ui/react'

import Button from '@components/button'
import useAppToast from '@hooks/use-app-toast'
import MarkdownRenderer, { HeadingRenderer } from '@components/markdown-renderer'
import { useStrapiContextValue } from '@context/strapi-context'

const Partnership: React.FC = () => {
  const { getCopyBySectionId } = useStrapiContextValue()
  const partnerCopy = getCopyBySectionId('home-partner')
  const { showToast } = useAppToast()
  const [fullName, setFullName] = React.useState<string>('')
  const [email, setEmail] = React.useState<string>('')
  const [partnershipDescription, setPartnershipDescription] = React.useState<string>('')
  const [howToPartner, setHowToPartner] = React.useState<string>('')

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutateAsync({ fullName, email, partnershipDescription, howToPartner })
  }

  const postPartnershipForm = async (data: {
    fullName: string
    email: string
    partnershipDescription: string
    howToPartner: string
  }) => {
    await fetch('https://formbucket.com/f/buk_4ZIdibmPdW8ITR8BFIAqyzL3', {
      method: 'post',
      body: JSON.stringify(data),
    }).then((res) => res.json())
  }

  const { isLoading, mutateAsync } = useMutation(postPartnershipForm, {
    onSuccess: () => {
      showToast('Successfully submitted Partnership form.', 'success')
      setFullName('')
      setEmail('')
      setHowToPartner('')
      setPartnershipDescription('')
    },
    onError: () => {
      showToast('Failed to submit Partnership form.', 'error')
    },
  })

  return (
    <SimpleGrid gap="10" columns={{ base: 1, md: 2 }}>
      <VStack maxW={{ base: 'full', md: '540px' }} spacing={2} justifyContent="center" mb={{ base: 12, md: 'inherit' }}>
        <HeadingRenderer title={partnerCopy?.title} titleWithGradient={partnerCopy?.titleWithGradient} />
        <MarkdownRenderer markdown={partnerCopy?.description} />
      </VStack>
      <Box
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
              <Input
                value={howToPartner}
                placeholder="How would you like to partner with us?"
                onChange={(e) => setHowToPartner(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <Textarea
                p="20px"
                css={{ border: '0.4px solid rgba(211, 216, 221, 0.09)' }}
                _hover={{ border: '0.4px solid rgba(211, 216, 221, 0.09)' }}
                _placeholder={{ color: '#C3C4C3', fontSize: 'sm', opacity: 0.5 }}
                rows={4}
                value={partnershipDescription}
                placeholder="Describe which part of our network you’re interested in collaborating on"
                onChange={(e) => setPartnershipDescription(e.target.value)}
              />
            </FormControl>
          </VStack>
          <Button w="full" type="submit">
            {isLoading ? 'Submitting' : 'Express Interest'}
          </Button>
        </form>
      </Box>
    </SimpleGrid>
  )
}

export default Partnership
