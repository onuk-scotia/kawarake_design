import  styled from "styled-components";

export const Profile = () => {
    return(
      <StyledSection id="profile" className="contents">
        <div>
          <StyledH1 className="title">Profile</StyledH1>
        </div>
        
      </StyledSection>
    );
}

const StyledSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(75, 75, 81, 0.963);
  z-index: 0;
`;

const StyledH1 = styled.h1`
  font-size: 3.0rem;
  margin: 2.0rem;
  text-align: center;
`;