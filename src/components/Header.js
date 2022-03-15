import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from "../features/car/carSlice"
import { useSelector } from 'react-redux';
import Fade from 'react-reveal/Fade';

function Header() {

  const [burgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
        <a>
          <img src="/images/logo.svg" alt="" />
        </a>
        
        <Menu>
          {cars && cars.map((car, index)=> 
            <a key={index} href="#">{car}</a>
          )}
        </Menu>

        <RightMenu>
          <a href="#">Shop</a>
          <a href="#">Account</a>
        
        
        <CustomMenu onClick={()=>setBurgerStatus(true)} />
        </RightMenu>

        <BurgerNav show={burgerStatus}>

        
        <CloseWrapper>
          <CustomClose onClick={()=>setBurgerStatus(false)} />
        </CloseWrapper>
        
        {cars && cars.map((car, index)=> 
          <li key= {index}> <a href="#">{car}</a></li> 
          )}

          <li> <a href="#">Existing Inventory</a></li> 
          <li> <a href="#">Used Inventory</a></li> 
          <li> <a href="#">Trade-In</a></li> 
          <li> <a href="#">test Drive</a></li> 
          <li> <a href="#">CyberTruck</a></li> 
          <li> <a href="#">Roadster</a></li> 
          <li> <a href="#">Semi</a></li> 

        </BurgerNav>
        

    </Container>



  )
}

export default Header

const Container = styled.div`
  min-height:60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

`
const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;                    /*f an element has flex: 1 , the size of all of the other elements will have the same width as their content, but the element with flex: 1 will have the remaining full space given to it.*/
  justify-content: center;  



  a{
      font-weight: 600;
      text-transform: uppercase;
      padding: 0 10px;
      flex-wrap: nowrap;
      :hover{
        color: white;
        opacity: 0.8;
      }
  }

  @media(max-width: 768px) {
      display: none;
  }
`

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a{
      font-weight: 600;
      text-transform: uppercase;
      margin-right: 10px;
      :hover{
        color: white;
        opacity: 0.8;
      }
  }
`

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 100;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;      //aligns the text to the left
  transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
  transition: 0.2s;
  opacity: 0.93;
  li {
      padding: 15px 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
`

const CloseWrapper = styled.div`
  //used to shift the close button to the right by making a box around the close icon
  display: flex;
  justify-content: flex-end;
`

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`