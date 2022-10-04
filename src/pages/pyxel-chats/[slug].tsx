import { Box, Grid, GridItem } from '@chakra-ui/react'
import { Heading } from '@components/typography'
import PyxelChat from '@modules/pyxel-chat/pyxel-chat'
import ChatsCard from '@modules/pyxel-chats/chats-card'
import React from 'react'

interface ChatProps {}

const Chat: React.FC<ChatProps> = () => {
  return (
    <>
      <PyxelChat />
      <Box mt="160px">
        <Heading mb="42px" fontSize="36px" lineHeight="47px">
          You may also be interested in
        </Heading>
        <Grid gap="20px" templateColumns={{ base: 'repeat(1,1fr)', lg: 'repeat(2,1fr)', xl: 'repeat(3,1fr)' }}>
          {Array(6)
            .fill('yoyo')
            .map((chat, i: number) => (
              <GridItem h="602px" key={i}>
                <ChatsCard hoverable chat={chat} />
              </GridItem>
            ))}
        </Grid>
      </Box>
    </>
  )
}

export default Chat
