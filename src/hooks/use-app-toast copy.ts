import { useRef } from 'react'
import { useToast } from '@chakra-ui/react'
import { UseToastOptions } from '@chakra-ui/toast'

const useAppToast = () => {
  const toast = useToast()
  const toastRef = useRef<string | number | undefined>()

  const showToast = (description: string, status: UseToastOptions['status'], duration = 3000) => {
    if (toastRef.current) toast.close(toastRef.current)
    toastRef.current = toast({
      variant: 'left-accent',
      containerStyle: { color: 'black' },
      description,
      status,
      position: 'top-right',
      duration,
    })
  }

  return { showToast }
}

export default useAppToast
