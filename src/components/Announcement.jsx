import styled from 'styled-components';

const Container = styled.div`
    height: 2vh;
    background-color: #B0D4BD;
    color: #000;
    display: flex;
    align-items: center;
    padding-left: 7vw;
    font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>Be sure to checkout this weeks sales!</Container>
  )
};

export default Announcement;