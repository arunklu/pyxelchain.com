import { Box, Button, Slider, SliderTrack, SliderFilledTrack, SliderThumb } from '@chakra-ui/react'
import React, { useRef } from 'react'

interface AudioPlayerProps {
  audioLink: string
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioLink }) => {
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

  return (
    <Box>
      <audio ref={audioRef}>
        <source src={audioLink} type="audio/ogg" />
        <source src={audioLink} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <Button onClick={play}>Play</Button>
      <Button onClick={pause}>Pause</Button>
      <Button onClick={forward}>Forward</Button>
      <Button onClick={backward}>backward</Button>
      <Button onClick={mute}>mute</Button>
      {Math.floor(curTime)}/{Math.floor(duration)}
      <Slider onChange={handleDrag} aria-label="slider-ex-1" value={curPercentage}>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
  )
}

export default AudioPlayer
