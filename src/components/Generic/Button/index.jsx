import React from 'react'
import { Container } from './style'

export const Button = ({type,height,width,children,onClick}) => {
  return (
    <Container onClick={onClick} type={type} height={height} width={width}>
      {children || 'Generic Button'} 
        </Container>
  )
}
export default Button
