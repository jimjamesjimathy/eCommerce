import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
  } from "@material-ui/icons";
  import { Link } from 'react-router-dom';
  import styled from 'styled-components';
  
  const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.3);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
  `;
const Container = styled.div`
  height: 40%;
  width: 20%;
  margin: 0 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #2E3138;
  position: relative;
  border-radius: 7px;
  padding: 15px 20px;

  &:hover ${Info}{
    opacity: 1;
  }
`
const Circle = styled.div`
  height: 375px;
  width: 375px;
  border-radius: 50%;
  background-color: #FFFFFF;
  position: absolute;
`
const Image = styled.img`
  height: 75%;
  z-index: 2;
`
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #1C1D22;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover {
    background-color: #e9f5f5;
    color: #2E3138;
    border: .1px solid #1C1D22;
    transform: scale(1.5);
  }
`


const ProductItem = ({ item }) => {
  return (
    <Container>
        <Circle />
        <Image src={item.img} />
        <Info>
            <Icon>
                <ShoppingCartOutlined />
            </Icon>
            <Icon>
              <Link to={`/product/${item._id}`}>
                <SearchOutlined />
              </Link>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined />
            </Icon>
        </Info>
    </Container>
  )
};

export default ProductItem;