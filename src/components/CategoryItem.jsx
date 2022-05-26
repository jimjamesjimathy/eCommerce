import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mobile } from "../responsive";


const Container = styled.div`
  flex: 1;
  height: 90vh;
  position: relative;
  margin: 0 0.5%;
  box-shadow: 1px 1px 10px black;
  border-radius: 7px;
  transition: all 350ms ease-in-out;

  &:hover {
    transform: scale(1.03);
    opacity: 0.5;
  }
  `
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 7px;

  ${mobile({ height: "20vh" })}
`
const Info = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
  color: white;
  margin-bottom: 2%;
`
const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: #FFF;
  color: #666;
  cursor: pointer;
  font-weight: 500;
`


const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/products/${item.category}`}>
        <Image src={item.img} alt='...' />
        <Info>
          <Title>{item.title}</Title>
          <Button>Shop now!</Button>
        </Info>
      </Link>
    </Container>
  )
};

export default CategoryItem;