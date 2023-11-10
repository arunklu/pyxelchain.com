const formatDate = (inputDateStr: string, withoutYear?: boolean): string => {
  const inputDate = new Date(inputDateStr)

  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

  const day = inputDate.getDate()
  const month = monthNames[inputDate.getMonth()]
  const year = inputDate.getFullYear()

  const formattedDate = `${month} ${day}`

  if (!withoutYear) {
    return `${formattedDate}, ${year}`
  }

  return formattedDate
}

export default formatDate
