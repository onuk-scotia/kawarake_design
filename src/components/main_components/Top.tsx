import  styled from "styled-components";

export const Top = () => {
    return(
      <StyledSection id="top" className="contents">
        <StyledTitleDiv>
          <StyledH1>Kawarake Design</StyledH1>
          <StyleH2>********</StyleH2>
        </StyledTitleDiv>
      </StyledSection>
    );
};

const StyledSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
`;

/*const StyledTitleDiv = styled.div`
  z-index: 1;
  position: absolute;
  top: 15%;
  left: 5%;
`;*/

const StyledTitleDiv = styled.div`
`;

const StyledH1 = styled.h1`
  font-size: 3.0rem;
  margin: 1.5rem 2.0rem;
  text-align: center;
  color: black;
`;

const StyleH2 = styled.h2`
  text-align: center;
  color: black;
`;