import { Send } from "@material-ui/icons";
import styled from 'styled-components';
import { mobile } from "../responsive";


const Container = styled.div`
    height: 60vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 3rem;
    font-weight: 400;
`
const Description = styled.div`
    font-size: 2rem;
    font-weight: 300;
    margin-bottom: 1.5%;

    ${mobile({ textAlign: "center" })}
`
const InputContainer = styled.div`
    width: 30%;
    height: 7%;
    background-color: #FFF;
    display: flex;
    justify-content: space-between;
    border: 1px solid #777;

    ${mobile({ width: "80%" })}
`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: dodgerblue;
    color: #FFF;
`


const NewsLetter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get updates about latest products!</Description>
            <InputContainer>
                <Input placeholder='enter e-mail' />
                <Button>
                    <Send />
                </Button>
            </InputContainer>
        </Container>
    )
};

export default NewsLetter;