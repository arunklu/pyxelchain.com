import { Divider } from '@chakra-ui/react'
import ChatsList from '@modules/pyxel-chats/chats-list'
import PCMarquee from '@modules/pyxel-chats/marquee'
import PyxelChats from '@modules/pyxel-chats/pyxel-chats'
import React from 'react'

interface IndexProps {}

const Index: React.FC<IndexProps> = () => {
  return (
    <>
      <PyxelChats />
      <PCMarquee />
      <Divider w="full" color="#C9D2D8" mt="59px" opacity={0.1} />
      <ChatsList />
    </>
  )
}

export default Index
