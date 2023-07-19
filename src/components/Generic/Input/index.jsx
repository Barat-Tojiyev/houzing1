import React from 'react'
import { Container } from './style'

export const Input = ({
  height,
  width,
  onChange,
  placeholder,
  name,
  value,
  defaultValue
}) => {
  return (
    <Container 
      onChange={onChange}
      height={height}
      width={width}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      name={name}
      />

 
    
  )
}
export default Input
