import { useState } from "react";
import { BrowserView, isTablet, MobileView } from "react-device-detect";
import { Link as Scroll, animateScroll } from 'react-scroll';
import styled from "styled-components";
import designImg from '../public/img/mobile_menu_img/light-img.png';

export const Header = () => {
  const [active, setActive] = useState(true);

  const menuToggle = () => {
    setActive(!active);
  };

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  }

  const scrollToBottom = () =>  {
    animateScroll.scrollToBottom();
  }

  const mobileScrollToTop = () => {
    animateScroll.scrollToTop();
    setActive(!active);
  }

  const mobileScrollToBottom = () =>  {
    animateScroll.scrollToBottom();
    setActive(!active);
  }

  return(
    <>
      <StyledHeader>
        <h2>Kawarake Design</h2>
        <MobileView>
          <StyledMenuToggle onClick={menuToggle}>
            <StyledSpan active={active}></StyledSpan>
            <StyledSpan active={active}></StyledSpan>
            <StyledSpan active={active}></StyledSpan>
          </StyledMenuToggle>
        </MobileView>
        {!isTablet && <BrowserView>
          <StyledNav>
            <StyledUl>
              <StyledLi><StyledScroll to="" smooth={true} onClick={scrollToTop} duration={500}>Top</StyledScroll></StyledLi>
              <StyledLi><StyledScroll to="profile" smooth={true} duration={500}>Profile</StyledScroll></StyledLi>
              <StyledLi><StyledScroll to="works" smooth={true} duration={500}>Works</StyledScroll></StyledLi>
              <StyledLi><StyledScroll to="" smooth={true} onClick={scrollToBottom} duration={500}>Contact</StyledScroll></StyledLi>
            </StyledUl>
          </StyledNav>
        </BrowserView>}
      </StyledHeader>
      <MobileView>
        <StyledMobileNav active={active}>
          <StyledImg src={designImg} alt="Kawarake Design"></StyledImg>
          <StyledMobileUl>
            <StyledMobileLi><StyledMobileScroll to="" smooth={true} onClick={mobileScrollToTop} duration={500}>Top</StyledMobileScroll></StyledMobileLi>
            <StyledMobileLi><StyledMobileScroll to="profile" smooth={true} onClick={menuToggle} duration={500}>Profile</StyledMobileScroll></StyledMobileLi>
            <StyledMobileLi><StyledMobileScroll to="works" smooth={true} onClick={menuToggle} duration={500}>Works</StyledMobileScroll></StyledMobileLi>
            <StyledMobileLi><StyledMobileScroll to="" smooth={true} onClick={mobileScrollToBottom} duration={500}>Contact</StyledMobileScroll></StyledMobileLi>
          </StyledMobileUl>
        </StyledMobileNav>
      </MobileView>    
    </>
  );
};

const StyledHeader = styled.header`
  position: sticky;
  padding: 0 3%;
  top: 0;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledMenuToggle = styled.div`
  display: block;
  cursor: pointer;
  position: relative;
  width: 3rem;
  height: 3rem;
  align-content: center;
`;

const StyledSpan = styled.span<{active: boolean}>`
  display: block;
  position: absolute;
  width: 1.8rem;
  margin-left: 0.3rem;
  border-bottom: solid 0.15rem black;
  transition: .40s ease-in-out;
  &:nth-child(1) { 
    top: ${props => (props.active ? "0.9rem" : "1.5rem")};
    transform: ${props => (props.active ? "none" : "rotate(-45deg)")};
  }
  &:nth-child(2) { 
    top: 1.5rem;
    display: ${props => (props.active ? "initial" : "none")};
  }
  &:nth-child(3) { 
    top: ${props => (props.active ? "2.1rem" : "1.5rem")};
    transform: ${props => (props.active ? "none" : "rotate(45deg)")};
  }
`;

const StyledNav = styled.nav`
`;

const StyledImg = styled.img`
  width: 18rem;
`;

const StyledUl = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-evenly;
`;

const StyledLi = styled.li`
  padding: 3% 0;
  border-radius: 5%;
  &:hover { background-color: black; }
`;

const StyledScroll = styled(Scroll)`
  color: rgba(75, 75, 81, 0.963);
  font-size: 1.5rem;
  text-decoration: none;
  padding: 1rem 1.4rem;
  cursor: pointer;
  transition: .40s ease-in-out;
  &:hover { color: white };
`

const StyledMobileNav = styled.nav<{active: boolean}>` 
  height: 100%;
  transform: ${props => (props.active ? "translateX(-150vw)" : "translateX(0vw)")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: black;
  transition: .40s ease-in-out;
  overflow: scroll;
  z-index: 1;
`;

const StyledMobileUl = styled.ul`
  list-style: none;
  height: 100%;
`;

const StyledMobileLi = styled.li`
  border-radius: 5%;
  display: block;
  margin: 1rem 2rem;
`;

const StyledMobileScroll = styled(Scroll)`
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
  border-bottom: 0.1rem solid white;
  cursor: pointer;
  transition: .40s ease-in-out;
  display: block;
  padding: 0 0;
`