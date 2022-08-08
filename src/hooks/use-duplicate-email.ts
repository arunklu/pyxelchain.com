import { useQuery } from '@tanstack/react-query'

const useDuplicateEmail = (email: string) => {
  const { data } = useQuery(['buttonDownData'], () =>
    fetch('https://api.buttondown.email/v1/subscribers', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Token bb2629d3edee4aa29d6a4ab03b1cdd46',
      },
    }).then((res) => res.json())
  )
  const result = data?.results?.map((a: { email: string }) => a.email).includes(email)
  return result
}

export default useDuplicateEmail
