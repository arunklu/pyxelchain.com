import create from 'zustand'

import { Copy } from 'types/index'

interface FooterDataTypes {
  allStrapiFooterCopy: Copy[]
  setAllStrapiFooterCopy: (data: Copy[]) => void
  getCopyBySectionId: (param: string) => Copy | undefined
}
export const useFooterData = create<FooterDataTypes>((set, get) => ({
  allStrapiFooterCopy: [],
  setAllStrapiFooterCopy: (data: Copy[]) => set({ allStrapiFooterCopy: data }),
  getCopyBySectionId: (param: string): Copy =>
    get().allStrapiFooterCopy.filter((copy: Copy) => copy.sectionId === param)[0],
}))
