import React, { createContext, useContext, PropsWithChildren } from 'react'

import { Copy, Feature, Team } from 'types/index'

interface StrapiContextProps {
  copies: Copy[]
  getCopyBySectionId: (param: string) => Copy | undefined

  features: Feature[]
  getFeatureBySectionId: (param: string) => Feature[]

  teams: Team[]
}

interface StrapiContextProviderProps {
  values: {
    copies: Copy[]
    features: Feature[]
    teams?: Team[]
  }
}

const StrapiContext = createContext<StrapiContextProps>({
  copies: [],
  features: [],
  teams: [],
  getCopyBySectionId: () => undefined,
  getFeatureBySectionId: () => [],
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

export { StrapiContextProvider, useStrapiContextValue, StrapiConsumer }

export default StrapiContext
