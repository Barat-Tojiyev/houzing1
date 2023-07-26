import React from 'react'
import { Container,Content,Icon, Wrapper } from './style'
import { Button,Input } from '../Generic'
import { Dropdown } from 'antd'
import { useState } from 'react'


export const Filter = () => {

  const [open,setOpen]=useState(false)
  const onOpenChange=()=>{
    setOpen(!open)
  }
  const items = [
    {
      key: '1',
      label: (
       <Wrapper>
        <div className="subTitle">Address</div>
        <Content>
          <Input placeholder={'Country'}/>
          <Input placeholder={'Region'}/>
          <Input placeholder={'City'}/>
          <Input placeholder={'Zip_code'}/>
        </Content>
        <div className="subTitle">Apartment info</div>
        <Content>
          <Input placeholder={'Rooms'}/>
          <Input placeholder={'Size'}/>
          <Input placeholder={'Sorts'}/>
          
        </Content>
        <div className="subTitle">Price</div>
        <Content>
          <Input placeholder={'Min_Price'}/>
          <Input placeholder={'Max_Price'}/>
          
        </Content>
       </Wrapper>
      ),
    }
  ];
  return (
    <Container>
     
     <Input logo={ <Icon.Houses/>} height={'44px'} width={'830px'} 
     placeholder={'Enter an address, neighborhood, city, or ZIP code'}/>
     <Dropdown
      menu={{ items}} 
      onOpenChange={onOpenChange}
      trigger={'click'}
      open={open}
      placement="bottomRight"
      arrow
    >
      <div>

     <Button width={'130px'} type={'light'}><Icon.Setting/> Advanced</Button>
      </div>
      
    </Dropdown>
     <Button width={'130px'} type={'primary'}><Icon.Search/>  Search</Button>
    </Container>
  )
}
export default Filter