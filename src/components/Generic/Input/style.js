import styled from "styled-components";



const Container=styled.input`
width:  ${({width})=> width ? width :'100%'};
height:  ${({height})=> height ? height :'44px'};
font-weight:400;
font-size: 14px;
border-radius: 2px;
outline:none;
border:1px solid #E6E9EC;
padding-left:${({logo})=>logo ? '40px': '10px'};

`
const Wrapper=styled.div`
width: fit-content;
display: flex;
align-items: center;
position: relative;
`
const Icon=styled.div`
position: absolute;
margin-left: 10px;
`

export {Container,Wrapper,Icon}