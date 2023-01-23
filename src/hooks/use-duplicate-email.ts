import { useQuery } from '@tanstack/react-query'

const useDuplicateEmail = (email: string) => {
  const { data } = useQuery(['buttonDownData'], () =>
    fetch('https://api.buttondown.email/v1/subscribers', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${process.env.NEXT_PUBLIC_BUTTONDOWN_TOKEN}`,
      },
    }).then((res) => res.json())
  )
  const result = data?.results?.map((a: { email: string }) => a.email).includes(email)
  return result
}

export default useDuplicateEmail
