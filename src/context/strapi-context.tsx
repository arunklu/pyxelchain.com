import React, { createContext, PropsWithChildren, useContext } from 'react'

import { Copy, Feature, Team, UpcomingProductEntity } from 'types/index'

interface StrapiContextProps {
  copies: Copy[]
  getCopyBySectionId: (param: string) => Copy | undefined

  features: Feature[]
  getFeatureBySectionId: (param: string) => Feature[]

  teams: Team[]
  upcomingProducts: UpcomingProductEntity
}

export interface StrapiContextProviderValues {
  copies: Copy[]
  features: Feature[]
  teams?: Team[]
  upcomingProducts?: UpcomingProductEntity
}

interface StrapiContextProviderProps {
  values: StrapiContextProviderValues
}

const StrapiContext = createContext<StrapiContextProps>({
  copies: [],
  features: [],
  teams: [],
  getCopyBySectionId: () => undefined,
  getFeatureBySectionId: () => [],
  upcomingProducts: {},
})

const StrapiContextProvider: React.FC<PropsWithChildren<StrapiContextProviderProps>> = ({ values, children }) => {
  const getCopyBySectionId = (sectionId: string) => {
    return values.copies.find((c) => c.sectionId === sectionId)
  }

  const getFeatureBySectionId = (sectionId: string) => {
    return values.features.filter((f) => f.sectionId === sectionId)
  }

  return (
    <StrapiContext.Provider
      value={{
        ...values,
        teams: values.teams || [],
        upcomingProducts: values.upcomingProducts || {},
        getCopyBySectionId,
        getFeatureBySectionId,
      }}
    >
      {children}
    </StrapiContext.Provider>
  )
}

const StrapiConsumer = StrapiContext.Consumer

const useStrapiContextValue = () => useContext(StrapiContext)

export { StrapiConsumer, StrapiContextProvider, useStrapiContextValue }

export default StrapiContext
