import styled from "styled-components";
import { ReactComponent as logo } from "../../assets/icon/logo.svg";
import { NavLink } from "react-router-dom";


const Container=styled.div`


`
const Main=styled.div`
background: var(--colorPrimary);
color: #fff;
`
const Wrapper =styled.div`
padding: var(--padding);
display: flex;
justify-content: space-between;
align-items: center;
height: 64px;
max-width: 1440px;
`
const Section=styled.div`
display: flex;
align-items: center;
cursor: ${({logo})=>logo&& 'pointer'};
`
const Logo=styled(logo)`
margin-right:12px;
`
const NavItem=styled(NavLink)`
margin-left: 20px;
color: #fff;
text-decoration:none;

:active{
    color: red;
}
`
export {Container,Wrapper,Section,Logo,NavItem, Main}