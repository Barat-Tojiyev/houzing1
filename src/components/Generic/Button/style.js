import styled from "styled-components";

const getType=({type})=>{
    switch(type){
        case 'dark':return{
            background:'transparent',
            border:'1px solid #fff',
            color:'#fff'
        }
        case 'primary':return{
            background:'#0061DF',
            border:'1px solid #0061DF',
            color:'#fff'
        }
        case 'light':return{
            background:'#fff',
            border:'1px solid #E6E9EC',
            color:'#0D263B'
        }
        default :return{
            background:'#0061DF',
            border:'1px solid #0061DF',
            color:'#fff'
        }
    }
}

const Container=styled.button`
width:  ${({width})=> width ? width :'120px'};
height:  ${({height})=> height ? height :'44px'};
display: flex;
justify-content: center;
align-items: center;
font-weight:400;
font-size: 14px;
border-radius: 2px;
cursor: pointer;
:active{
    transform: scale(0.97);
}
${getType}

`

export {Container}