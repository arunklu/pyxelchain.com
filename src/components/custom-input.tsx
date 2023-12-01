import { Input, InputProps } from '@chakra-ui/react'
import { FC } from 'react'

const CustomInput: FC<InputProps> = ({ value, onChange, ...rest }) => (
  <Input
    borderRadius="6px"
    background="#00000012"
    color="#C3C4C3"
    mb="15px"
    value={value ?? ''}
    onChange={onChange}
    {...rest}
  />
)

export default CustomInput
