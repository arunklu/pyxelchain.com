import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import Marquee from 'react-fast-marquee'

const PCMarquee: React.FC = () => {
  return (
    <Box mt="140px">
      <Marquee gradientColor={[2, 6, 21]} speed={100}>
        <Image mx="15px" src="/podcast/listen-notes.svg" />
        <Image mx="15px" src="/podcast/google-podcasts.svg" />
        <Image mx="15px" src="/podcast/stitcher.svg" />
        <Image mx="15px" src="/podcast/youtube.svg" />
        <Image mx="15px" src="/podcast/amazon-music.svg" />
        <Image mx="15px" src="/podcast/spotify.svg" />
        <Image mx="15px" src="/podcast/apple-podcast.svg" />
      </Marquee>
    </Box>
  )
}

export default PCMarquee
