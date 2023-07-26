import React from 'react'
import { Container, Logo, NavItem, Section, Wrapper,Main } from './style'
import {navbar} from '../../utils/navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import Button from '../Generic/Button'
import Filter from '../Filter'

export const Navbar = () => {
  const navigate=useNavigate()
  return (
    <Container>
      <Main>
      
      <Wrapper>
        <Section logo onClick={()=>navigate('/home') }><Logo/> <h3>Houzing</h3></Section>
        <Section>
          {
            navbar.map(({path,title,hidden},index)=>{
              return !hidden &&(
               <NavItem className={({isActive})=>isActive && 'active'}          
                key={index} to={path}>{title}</NavItem>
              )
            })
          }
          
      
        </Section>
        <Section><Button onClick={()=>navigate('/signin')} type={'dark'}>Sing In</Button></Section>
      </Wrapper>
        
      </Main>
      <Filter/>
      <Outlet/>
    </Container>
  )
}
export default Navbar
