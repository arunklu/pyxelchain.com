export const isValidEmail = (email: string): boolean => {
  const pattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/
  return pattern.test(email)
}
