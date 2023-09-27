import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import styled from 'styled-components'
import { sliderItems } from '../Data'
import {mobile} from '../Responsive'

const Container = styled.div`
margin-top:20px;
width:100%;
height: 100vh;
display: flex;
position: relative;
overflow: hidden;

${mobile({display: 'none'})};
`

const Wrapper = styled.div`
display: flex;
height: 100%;
transition: all 1.5s ease;
transform: translateX(${(props) => props.slideIndex * -100}vw);
`

const Slide = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
background-color: #${props=> props.bg};
`

const ImgContainer = styled.div`
height: 100vh;
flex:1;
`

const Image = styled.img`
height: 100%;
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`

const Title = styled.h1`
font-size: 70px;
`
const Desc = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`

const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: #fff7f9;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
margin: auto;
left : ${props => props.direction === 'left' && '10px'};
right : ${props => props.direction === 'right' && '10px'};
margin: auto;
cursor: pointer;
opacity: 0.5;
z-index: 2;
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)

    const HandleClick = (direction) => {
        if(direction === 'left'){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
        }

        if(direction === 'right'){
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
        }
    }

  return (
    <Container>
      <Arrow direction='left' onClick = {() => HandleClick('left')}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (

            <Slide className='slide' bg={item.bg} key={item.id}>
        <ImgContainer className='image'>
            <Image src={item.img} />
        </ImgContainer>
        <InfoContainer>
            <Title>{item.title}</Title>
            <Desc>{item.desc}</Desc>
            <Link to='/productpage'>
            <Button>SHOP NOW</Button>
            </Link>
        </InfoContainer>
        </Slide>

        ))}
      </Wrapper>
      <Arrow direction='right' onClick = {() => HandleClick('right')}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  )
}

export default Slider
