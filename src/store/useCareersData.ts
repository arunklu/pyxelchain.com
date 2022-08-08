import create from 'zustand'

import { Copy, Feature } from 'types/index'

interface CareersDataTypes {
  allStrapiCareersCopy: Copy[]
  setAllStrapiCareersCopy: (data: Copy[]) => void
  getCopyBySectionId: (param: string) => Copy | undefined

  allStrapiCareersFeature: Feature[]
  setAllStrapiCareersFeature: (data: Feature[]) => void
  getCareersFeatureBySectionId: (param: string) => Feature[]
}
export const useCareersData = create<CareersDataTypes>((set, get) => ({
  allStrapiCareersCopy: [],
  setAllStrapiCareersCopy: (data: Copy[]) => set({ allStrapiCareersCopy: data }),
  getCopyBySectionId: (param: string): Copy =>
    get().allStrapiCareersCopy.filter((copy: Copy) => copy.sectionId === param)[0],

  allStrapiCareersFeature: [],
  setAllStrapiCareersFeature: (data: Feature[]) => set({ allStrapiCareersFeature: data }),
  getCareersFeatureBySectionId: (param: string): Feature[] =>
    get().allStrapiCareersFeature.filter((feature: Feature) => feature.sectionId === param),
}))
