import create from 'zustand'

import { Copy, Feature } from 'types/index'

interface BrandDataTypes {
  allStrapiBrandCopy: Copy[]
  setAllStrapiBrandCopy: (data: Copy[]) => void
  getCopyBySectionId: (param: string) => Copy | undefined

  allStrapiBrandFeature: Feature[]
  setAllStrapiBrandFeature: (data: Feature[]) => void
  getBrandFeatureBySectionId: (param: string) => Feature[]
}
export const useBrandData = create<BrandDataTypes>((set, get) => ({
  allStrapiBrandCopy: [],
  setAllStrapiBrandCopy: (data: Copy[]) => set({ allStrapiBrandCopy: data }),
  getCopyBySectionId: (param: string): Copy =>
    get().allStrapiBrandCopy.filter((copy: Copy) => copy.sectionId === param)[0],

  allStrapiBrandFeature: [],
  setAllStrapiBrandFeature: (data: Feature[]) => set({ allStrapiBrandFeature: data }),
  getBrandFeatureBySectionId: (param: string): Feature[] =>
    get().allStrapiBrandFeature.filter((feature: Feature) => feature.sectionId === param),
}))
