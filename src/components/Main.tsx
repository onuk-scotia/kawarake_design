import  styled from "styled-components";
import { Contact } from "./main_components/Contact";
import { Profile } from "./main_components/Profile";
import { Top } from "./main_components/Top";
import { Works } from "./main_components/Works";

export const Main = () => {
    return(
      <StyledMain>
        <Top />
        <Profile />
        <Works />
        <Contact />
      </StyledMain>
    );
};


const StyledMain = styled.main`
`;