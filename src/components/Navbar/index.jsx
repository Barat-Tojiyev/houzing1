import React from 'react'
import { Container, Logo, NavItem, Section, Wrapper,Main } from './style'
import {navbar} from '../../utils/navbar'
import { Outlet, useNavigate } from 'react-router-dom'

export const Navbar = () => {
  const navigate=useNavigate()
  return (
    <Container>
      <Main>
      
      <Wrapper>
        <Section logo onClick={()=>navigate('/home') }><Logo/> <h3>Houzing</h3></Section>
        <Section>
          {
            navbar.map(({path,title},index)=>{
              return(
               <NavItem className={({isActive})=>isActive && 'active'}          
                key={index} to={path}>{title}</NavItem>
              )
            })
          }
          
      
        </Section>
        <Section><button>Sing In</button></Section>
      </Wrapper>
        
      </Main>
      <Outlet/>
    </Container>
  )
}
export default Navbar
