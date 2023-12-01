import { Box, Button, Text } from '@chakra-ui/react'
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
          <div>
            <Button onClick={onCancelClick} mr="20px" className="event-date-picker-cancel-button">
              <Text variant="14" color="#344054">
                Cancel
              </Text>
            </Button>
            <Button onClick={onSelectClick} className="event-date-picker-select-date-button">
              <Text variant="14" color="white">
                Select Date
              </Text>
            </Button>
          </div>
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
    setSelectedDate(null)
    onChange(null)
    calRef.current?.setOpen(false)
  }

  const onSelectDate = () => {
    onChange(selectedDate)
    calRef.current?.setOpen(false)
  }

  return (
    <DatePicker
      ref={calRef}
      placeholderText={placeHolderText}
      shouldCloseOnSelect={false}
      onChange={(date) => {
        setSelectedDate(date)
      }}
      selected={selectedDate || value}
      customInput={<CustomInput w="100%" />}
      calendarStartDay={1}
      calendarContainer={generateStyledContainer(onCancel, onSelectDate)}
    />
  )
}

export default CustomDatePicker
