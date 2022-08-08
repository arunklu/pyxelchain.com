export const LocalDate = (data: string) => {
  const date = new Date(data).toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
  return date
}
