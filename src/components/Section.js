import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';


function Section({title, description, leftBtnText, rightBtnText, backgroundImg}) {
  return (
    <Wrap bgImage = {backgroundImg}>
        <Fade bottom>
            <ItemText>
        
                <h1>{ title }</h1>
                <p>{ description }</p>
        
            </ItemText>
        </Fade>
    
        <Buttons>
            <Fade bottom>
            <ButtonGroup>
                <LeftButton>
                    { leftBtnText }
                </LeftButton>

                {rightBtnText &&            /*This done to make sure to apply the stying to the page related to LEFT BUTTON ONLY IF there is a need of RIGHT BUTTON there */
                    <RightButton>
                        {rightBtnText}
                    </RightButton>
                }
            </ButtonGroup>
            </Fade>
            <DownArrow src= "/images/down-arrow.svg" />
        
        </Buttons>
    
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vw;
    max-height:100%;
    background-size: cover;          /*The bg img will cover the screen only*/
    background-position: center;
    background-repeat: no-repeat;   
    background-image: url('/images/model-s.jpg');
    display: flex;                   /*To push the model name off from buttons to push the buttons down*/
    flex-direction: column;          /*To push the buttons from top to bottom*/
    justify-content: space-between;  /*Vertical Alignment */
    align-items: center;
    background-image: ${props => `url("/images/${props.bgImage}")`}
`

const ItemText = styled.div`
padding-top: 15vh;
text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    cursor: pointer;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`


const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color:white;
    display: flex;
    justify-content: center;        /*Shifts the content to the centre from left and right*/
    align-items: center;            /*Shifts the content to the center from top an bottom*/
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    margin: 8px;

`


const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.65;
    color: black;
`

const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div``