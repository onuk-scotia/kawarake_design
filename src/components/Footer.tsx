import styled from "styled-components";

export const Footer = () => {
    return(
      <StyledFooter>
        <StyledP><small>&copy; 2023 Kawarake Design</small></StyledP>
      </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  text-align: center;
`;

const StyledP = styled.p`
  font-size: 1.2rem;
`;