import React from 'react'
import { Container } from './style'
import {Button, Input} from '../Generic'


export const Home = () => {
  return (
    <Container>Home Houzing
      <Button type={'light'}>Salom</Button>
      <Input placeholder={'enter name'} width={'200px'}/>
    </Container>

  )
}
export default Home
