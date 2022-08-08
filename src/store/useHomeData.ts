import create from 'zustand'

import { Copy, Feature, Team } from 'types/index'

interface HomeDataTypes {
  allStrapiHomeCopy: Copy[]
  setAllStrapiHomeCopy: (data: Copy[]) => void
  getCopyBySectionId: (param: string) => Copy

  allStrapiHomeFeature: Feature[]
  setAllStrapiHomeFeature: (data: Feature[]) => void
  getHomeFeatureBySectionId: (param: string) => Feature[]

  allStrapiTeams: Team[]
  setAllStrapiTeams: (data: Team[]) => void
}
export const useHomeData = create<HomeDataTypes>((set, get) => ({
  allStrapiHomeCopy: [],
  setAllStrapiHomeCopy: (data: Copy[]) => set({ allStrapiHomeCopy: data }),
  getCopyBySectionId: (param: string): Copy =>
    get().allStrapiHomeCopy.filter((copy: Copy) => copy.sectionId === param)[0],

  allStrapiHomeFeature: [],
  setAllStrapiHomeFeature: (data: Feature[]) => set({ allStrapiHomeFeature: data }),
  getHomeFeatureBySectionId: (param: string): Feature[] =>
    get().allStrapiHomeFeature.filter((feature: Feature) => feature.sectionId === param),

  allStrapiTeams: [],
  setAllStrapiTeams: (data: Team[]) => set({ allStrapiTeams: data }),
}))
