import { Box, chakra, Flex, Input, InputProps, Text } from '@chakra-ui/react'
import Button from '@components/button'
import { sizes } from '@constants/textSizes'
import { FC } from 'react'

const CustomInput: FC<InputProps> = ({ ...rest }) => (
  <Input {...rest} borderRadius="6px" background="#00000012" color="#C3C4C3" mb="15px" />
)

const SuggestAnEvent = () => {
  return (
    <Box
      id="suggest"
      mt={{
        base: '80px',
        lg: '120px',
      }}
    >
      <Flex
        gap={{
          base: '60px',
          lg: '74px',
        }}
        flexDir={{
          base: 'column',
          lg: 'row',
        }}
      >
        <Box>
          <Text {...sizes[64]} fontFamily="Iosevka">
            Want to{' '}
            <chakra.span className="active" display="inline">
              Suggest an <br />
              Event to Us?
            </chakra.span>
          </Text>
          <Text {...sizes[16]} mt="10px" color="#c3c4c3">
            Do you have an event you think we should attend? Give us a few details and we'll check it out! This is a
            dummy text and another one to make this section long and longer.
          </Text>
        </Box>
        <Box
          bg="#040a1c"
          maxW={{
            base: '',
            lg: '598px',
          }}
          p={{
            base: '24px',
            lg: '43px',
          }}
          w="100%"
        >
          <CustomInput placeholder="Event Name" />
          <CustomInput placeholder="Describe the event you think we should attend" />
          <CustomInput placeholder="Event URL" />
          <CustomInput placeholder="Your Full Name" />
          <CustomInput placeholder="Your Email Address" />
          <Button
            mt={{
              base: '35px',
              lg: '40px',
            }}
            w="100%"
          >
            <Text size="16px" fontWeight="normal" color="white">
              Submit Suggestion
            </Text>
          </Button>
        </Box>
      </Flex>
    </Box>
  )
}

export default SuggestAnEvent
