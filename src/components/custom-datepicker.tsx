import { Box, Button, Image, Text } from '@chakra-ui/react'
import dayjs from 'dayjs'
import { FC, ReactElement, useRef, useState } from 'react'
import DatePicker, { CalendarContainer } from 'react-datepicker'
import { ControllerRenderProps } from 'react-hook-form'
import CustomInput from './custom-input'

const generateStyledContainer =
  (onCancelClick: () => void, onSelectClick: () => void) =>
  ({ children }: { children: ReactElement }) => {
    return (
      <Box p="16px" bg="white" color="#fff" borderRadius="8px">
        <CalendarContainer>
          <div style={{ position: 'relative' }}>{children}</div>
          <Box width="100%" ml="-16px" h="1px" pos="absolute" bg="#E4E7EC" />
          <Button onClick={onCancelClick} mr="20px" className="event-date-picker-cancel-button" mt="1rem">
            <Text variant="14" color="#344054">
              Cancel
            </Text>
          </Button>
          <Button onClick={onSelectClick} className="event-date-picker-select-date-button" mt="1rem">
            <Text variant="14" color="white">
              Select Date
            </Text>
          </Button>
        </CalendarContainer>
      </Box>
    )
  }

const CustomDatePicker: FC<
  Pick<ControllerRenderProps, 'onChange' | 'value'> & {
    placeHolderText?: string
  }
> = ({ value, onChange, placeHolderText }) => {
  const calRef = useRef<DatePicker>(null)
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)

  const onCancel = () => {
    // if (!selectedDate) {
    //   calRef.current?.setOpen(false)
    // } else {
    //   setSelectedDate(null)
    //   onChange(null)
    //   calRef.current?.setOpen(false)
    // }
    calRef.current?.setOpen(false)
  }

  const onSelectDate = () => {
    onChange(selectedDate ?? new Date())
    calRef.current?.setOpen(false)
  }

  return (
    <Box pos="relative">
      <Box pos="absolute" right="0" mt="18px" mr="18px">
        <Image src="/svg/calendar.svg" alt="Calendar Icon" />
      </Box>
      <DatePicker
        ref={calRef}
        placeholderText={placeHolderText}
        shouldCloseOnSelect={false}
        onChange={(date) => {
          setSelectedDate(date)
        }}
        minDate={dayjs().toDate()}
        selected={selectedDate || value}
        customInput={<CustomInput w="100%" />}
        calendarStartDay={1}
        calendarContainer={generateStyledContainer(onCancel, onSelectDate)}
        onClickOutside={() => {
          calRef.current?.setOpen(true)
        }}
      />
    </Box>
  )
}

export default CustomDatePicker
