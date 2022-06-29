import styled from 'styled-components';
import ProductItem from './ProductItem';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { popularProducts } from '../data';

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  padding: 1%;
`

const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(category ? `http://localhost:5000/api/products?category=${category}` : 'http://localhost:5000/api/products');
        setProducts(response.data);
      } catch (err) {

      }
    }
    getProducts();
  }, [category]);
                                      // SECOND USE EFFECT

  useEffect(() => {
    category && setFilteredProducts(
      products.filter(item => Object.entries(filters).every(([key, value]) =>
        item[key].includes(value)
        )
      )
    );
  }, [products, category, filters]);
                                      // THIRD USE EFFECT

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);


  return (
    <Container>
      {
      category
        ? filteredProducts.map((item) => <ProductItem item={item} key={item.id} />)
        : popularProducts
            .slice(0, 8)
            .map((item) => <ProductItem item={item} key={item.id} />)
      }
    </Container>
  );
};

export default Products;