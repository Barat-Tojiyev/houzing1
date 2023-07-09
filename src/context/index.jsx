import React from 'react'
import { createContext } from 'react'
import PropertiesContext from './properties'

const rootContext=createContext()

export const RootContext = ({children}) => {
  return (
    <rootContext.Provider>
        <PropertiesContext>
            {children}
        </PropertiesContext>
    </rootContext.Provider>
  )
}
export default RootContext
