import  styled from "styled-components";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";

export const Home = () => {
    return(
      <StyledDiv>
        <Header />
        <Main />
        <Footer />
      </StyledDiv>
    );
};

const StyledDiv = styled.div`
  font-size: 100%;
  font-family: 'Times New Roman', Times, serif;
`;