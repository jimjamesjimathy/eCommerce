import styled from 'styled-components';
import CategoryItem from './CategoryItem';
import { categories } from '../data';
import { mobile } from "../responsive";



const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  padding: 1%;
  background-color: #2E3138;

  ${mobile({ padding: "0px", flexDirection:"column" })}
`
const Title = styled.h1`
  font-size: 3rem;
  width: 100%;
  text-align: center;
  font-weight: 400;
  color: #FFF;
`

const Categories = () => {
  return (
    <Container>
      <Title>Categories</Title>
        {categories.map((item) => (
            <CategoryItem key={item.id} item={item}/>
        ))}
    </Container>
  )
};

export default Categories;