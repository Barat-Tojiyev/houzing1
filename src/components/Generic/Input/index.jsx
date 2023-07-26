import React from 'react'
import { Container, Wrapper,Icon } from './style'

export const Input = ({
  height,
  width,
  onChange,
  placeholder,
  name,
  value,
  defaultValue,
  logo
}) => {
  return (
    <Wrapper>
<Icon>{logo}</Icon>
      <Container 
        onChange={onChange}
        height={height}
        width={width}
        placeholder={placeholder}
        value={value}
        defaultValue={defaultValue}
        name={name}
        logo={logo}
        />
    </Wrapper>

 
    
  )
}
export default Input
