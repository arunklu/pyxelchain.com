import { IMAGE_ROOT_URL } from '@constants/urls'

export const getImageUrl = (value?: string) => `${IMAGE_ROOT_URL}${value}`
export const getDownloadLink = (value?: string) => `${IMAGE_ROOT_URL}${value}`
