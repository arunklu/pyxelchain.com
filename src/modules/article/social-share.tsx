import React from 'react'
import { Flex, Image } from '@chakra-ui/react'
import { FacebookShareButton, TwitterShareButton } from 'react-share'

import Link from '@components/link'

interface SocialShareProps {
  url: string
  title: string
  description: string
  hashtags: string[]
}

const SocialShare: React.FC<SocialShareProps> = ({ url, title, hashtags }) => {
  return (
    <Flex gap="15px">
      <FacebookShareButton url={url} quote={title}>
        <Image src="/socials/fb.svg" />
      </FacebookShareButton>
      <TwitterShareButton url={url} title={title} hashtags={hashtags}>
        <Image src="/socials/twitter.svg" />
      </TwitterShareButton>
      {/* <InstapaperShareButton url={url} title={title}>
        <Image src="/socials/ig.svg" />
      </InstapaperShareButton> */}
      <Link href={`https://www.linkedin.com/sharing/share-offsite/?url=${url}`}>
        <Image src="/socials/linkedin.svg" />
      </Link>
    </Flex>
  )
}

export default SocialShare
