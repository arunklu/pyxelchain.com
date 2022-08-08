export const calculateReadTime = (p: string) => {
  const paragraph = p.trim().split(/\s+/).length
  const wpm = 200
  const readTime = Math.ceil(paragraph / wpm)
  return readTime <= 1 ? `${readTime} min` : `${readTime} mins`
}
