import { Box, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Flex, HStack, Image } from '@chakra-ui/react'
import { FaPlayCircle } from '@react-icons/all-files/fa/FaPlayCircle'
import { FaPauseCircle } from '@react-icons/all-files/fa/FaPauseCircle'
import { MdVolumeUp } from '@react-icons/all-files/md/MdVolumeUp'
import { MdVolumeOff } from '@react-icons/all-files/md/MdVolumeOff'
import { AiFillStepBackward } from '@react-icons/all-files/ai/AiFillStepBackward'
import { AiFillStepForward } from '@react-icons/all-files/ai/AiFillStepForward'
import { Text } from '@components/typography'
import React, { useRef } from 'react'

interface AudioPlayerProps {
  audioLink: string
  title: string
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioLink, title }) => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [curTime, setCurTime] = React.useState<number>(0)
  const [duration, setDuration] = React.useState<number>(0.001)
  const [curPercentage, setCurPercentage] = React.useState<number>()

  React.useEffect(() => {
    const setAudioData = () => {
      setDuration(audioRef!.current!.duration)
      setCurTime(audioRef!.current!.currentTime)
      setCurPercentage((audioRef!.current!.currentTime / audioRef!.current!.duration) * 100)
    }

    const setAudioTime = () => setCurTime(audioRef!.current!.currentTime)

    audioRef.current?.addEventListener('loadeddata', setAudioData)
    audioRef.current?.addEventListener('timeupdate', setAudioTime)

    const audData = () => audioRef?.current?.removeEventListener('loadeddata', setAudioData)
    const audTime = () => audioRef?.current?.removeEventListener('timeupdate', setAudioTime)

    setAudioData()

    return () => {
      audData()
      audTime()
    }
  })

  const play = () => {
    audioRef?.current?.play()
  }

  const pause = () => {
    audioRef?.current?.pause()
  }

  const forward = () => {
    audioRef!.current!.currentTime += 10
  }

  const backward = () => {
    audioRef!.current!.currentTime -= 10
  }

  const mute = () => {
    const muted = audioRef!.current!.muted
    if (muted) {
      audioRef!.current!.muted = false
    } else {
      audioRef!.current!.muted = true
    }
  }
  const handleDrag = (e: number) => {
    setCurPercentage(e)
    audioRef!.current!.currentTime = (duration / 100) * e
  }
  const toTime = (seconds: number) => {
    const date = new Date(0)
    date.setSeconds(seconds)
    return date.toISOString().substr(11, 8)
  }
  return (
    <Flex gap={3} flexDir="column" justifyContent="space-between" alignItems="" w="full">
      <audio ref={audioRef}>
        <source src={audioLink} type="audio/ogg" />
        <source src={audioLink} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <Text mt="9px" fontWeight={500} color="white">
        {title}
      </Text>
      <Text fontWeight={500} color="white">
        {toTime(curTime)} / {toTime(duration)}
      </Text>
      <Slider colorScheme="audio" onChange={handleDrag} aria-label="slider-ex-1" value={curPercentage}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb bg="#5CD1B4" />
      </Slider>
      <Flex mt="10px" mb="27px">
        <Box cursor="pointer" mt="30px" onClick={mute}>
          {!audioRef?.current?.muted && <MdVolumeUp fontSize={28} />}
          {audioRef?.current?.muted && <MdVolumeOff fontSize={28} />}
        </Box>
        <HStack gap="2px" justifyContent="center" alignItems="center" w="full">
          <HStack cursor="pointer" gap="2px" onClick={backward}>
            <AiFillStepBackward fontSize={37} />
            <Image src="/podcast/backward.svg" />
          </HStack>
          <HStack cursor="pointer" alignItems="center" justifyContent="center">
            {audioRef?.current?.paused && <FaPlayCircle onClick={play} fontSize={50} />}
            {!audioRef?.current?.paused && <FaPauseCircle onClick={pause} fontSize={50} />}
          </HStack>
          <HStack cursor="pointer" gap="2px" onClick={forward}>
            <Image src="/podcast/forward.svg" />
            <AiFillStepForward fontSize={37} />
          </HStack>
        </HStack>
      </Flex>
    </Flex>
  )
}

export default AudioPlayer
