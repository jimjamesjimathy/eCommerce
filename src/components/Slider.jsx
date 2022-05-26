import { useState } from 'react';
import { sliderItems } from '../data';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from "../responsive";



const Container = styled.div`
    height: calc(100vh - 9vh);
    top: 0;
    width: 100%;
    display: flex;
    position: relative;

    ${mobile({ display: "none" })}
`
const Arrow = styled.div`
    height: 15vh;
    width: 2vw;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction === 'left' && '10px'};
    right: ${(props) => props.direction === 'right' && '10px'};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
    transition: 350ms all ease-in-out;

    &:hover {
        background-color: rgba(0, 0, 0, 0.9);
    }
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    transition: all 1s ease-in-out;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`
const Slide = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
`
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Image = styled.img`
    height: 80%;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`
const Title = styled.h1`
  font-size: 70px;
`;

const Description = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };


    return (
        <Container>
            <Arrow direction='left' onClick={() => handleClick('left')}>
                <ArrowLeftOutlined />
            </Arrow>

            <Wrapper slideIndex={slideIndex}>

                {sliderItems.map((item) => (
                    <Slide key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} alt='...' />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Description>{item.desc}</Description>
                            <Button>Show now!</Button>
                        </InfoContainer>
                    </Slide>
                ))}

            </Wrapper>

            <Arrow direction='right' onClick={() => handleClick('right')}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
};

export default Slider;