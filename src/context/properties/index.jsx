import React, { useReducer } from 'react'
import { createContext } from 'react'
import { reducer } from './reducer'

const propertiesContext=createContext()

export const PropertiesContext = ({children}) => {
  const [state,dispatch]=useReducer(reducer,0)
  return (
    <propertiesContext.Provider value={[state,dispatch]}>
        {children}
    </propertiesContext.Provider>
  )
}
export default PropertiesContext
