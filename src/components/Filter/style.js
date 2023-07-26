import styled from "styled-components";
import { ReactComponent as houses } from "../../assets/icon/houses.svg";
import { ReactComponent as setting } from "../../assets/icon/setting.svg";
import { ReactComponent as search } from "../../assets/icon/search.svg";

const Container=styled.div`
max-width: 1440px;
padding: var(--padding);
display: flex;
justify-content: space-between;
margin: 10px auto;
`
const Icon=styled.div`
`
Icon.Houses=styled(houses)`
margin-right: 10px;
`
Icon.Setting=styled(setting)`
margin-right:10px;
`
Icon.Search=styled(search)`
margin-right:10px;
`
const Wrapper=styled.div`
width: 920px;
height: 420px;
padding: 20px;
`
const Content =styled.div`
display: flex;
gap: 20px;
margin-bottom: 30px;
`
export {Container,Icon,Wrapper,Content}