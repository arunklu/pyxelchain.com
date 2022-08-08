import React, { useRef, useEffect } from 'react'
import { Box, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Image } from '@chakra-ui/react'

interface PixelatorProps {
  imageFile: File
  width: number
  height: number
  duration: number
  maximumPixelFactor: number
}

const fileToDataUri = (file: File): Promise<string | ArrayBuffer | null> => {
  return new Promise((resolve) => {
    const reader = new FileReader()
    reader.addEventListener('load', () => {
      resolve(reader.result)
    })
    reader.readAsDataURL(file)
  })
}

const Pixelator: React.FC<PixelatorProps> = ({ imageFile, width, height, duration, maximumPixelFactor }) => {
  let timer: NodeJS.Timer
  let imgClone: HTMLImageElement
  const imgRef = useRef<HTMLImageElement>(null)

  const pixelateImage = (originalImage: HTMLImageElement, pixelFactor: number) => {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')

    const originalWidth = originalImage.width
    const originalHeight = originalImage.height

    canvas.width = originalWidth
    canvas.height = originalHeight

    context?.drawImage(originalImage, 0, 0, originalWidth, originalHeight)
    const originalImageData = context?.getImageData(0, 0, originalWidth, originalHeight).data

    if (pixelFactor !== 0) {
      for (let y = 0; y < originalHeight; y += pixelFactor) {
        for (let x = 0; x < originalWidth; x += pixelFactor) {
          // extracting the position of the sample pixel
          const pixelIndexPosition = (x + y * originalWidth) * 4
          // drawing a square replacing the current pixels
          if (context) {
            context.fillStyle = `rgba(
              ${originalImageData?.[pixelIndexPosition]},
              ${originalImageData?.[pixelIndexPosition + 1]},
              ${originalImageData?.[pixelIndexPosition + 2]},
              ${originalImageData?.[pixelIndexPosition + 3]}
            )`
            context.fillRect(x, y, pixelFactor, pixelFactor)
          }
        }
      }
    }
    if (imgRef.current) {
      imgRef.current.src = canvas.toDataURL()
    }
  }

  const animatePixelation = (seconds: number) => {
    const milliseconds = seconds * 1000
    let pixelFactorsLeft = maximumPixelFactor
    timer = setInterval(() => {
      if (pixelFactorsLeft <= 0) {
        clearInterval(timer)
      }
      pixelateImage(imgClone, pixelFactorsLeft)
      pixelFactorsLeft -= 1
    }, milliseconds / maximumPixelFactor)
  }

  const loadImgAsync = async () => {
    if (imgRef.current && imgClone) {
      imgRef.current.src = (await fileToDataUri(imageFile)) as string
      imgClone.src = (await fileToDataUri(imageFile)) as string
      pixelateImage(imgClone, maximumPixelFactor)
      animatePixelation(duration)
    }
  }

  useEffect(() => {
    loadImgAsync()
    return () => {
      if (timer) {
        clearInterval(timer)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageFile])

  const onSliderChange = (pixelFactor: number) => {
    if (imgClone) {
      pixelateImage(imgClone, pixelFactor)
    }
  }

  return (
    <Box>
      <Slider
        mb={8}
        aria-label="pixel-factor"
        defaultValue={0}
        max={maximumPixelFactor}
        step={1}
        onChange={onSliderChange}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Image
        width={width}
        height={height}
        draggable={false}
        ref={(ref) => {
          if (ref) {
            Object.assign(imgRef, {
              current: ref,
            })
            imgClone = ref.cloneNode(true) as HTMLImageElement
          }
        }}
      />
    </Box>
  )
}

export default Pixelator
