import create from 'zustand'

import { Copy } from 'types/index'

interface ArticleDataTypes {
  allStrapiArticleCopy: Copy[]
  setAllStrapiArticleCopy: (data: Copy[]) => void
  getCopyBySectionId: (param: string) => Copy | undefined
}
export const useArticleData = create<ArticleDataTypes>((set, get) => ({
  allStrapiArticleCopy: [],
  setAllStrapiArticleCopy: (data: Copy[]) => set({ allStrapiArticleCopy: data }),
  getCopyBySectionId: (param: string): Copy =>
    get().allStrapiArticleCopy.filter((copy: Copy) => copy.sectionId === param)[0],
}))
