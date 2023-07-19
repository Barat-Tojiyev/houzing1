import styled from "styled-components";



const Container=styled.input`
width:  ${({width})=> width ? width :'100%'};
height:  ${({height})=> height ? height :'44px'};
font-weight:400;
font-size: 14px;
border-radius: 2px;
outline:none;
border:1px solid #E6E9EC;

`

export {Container}