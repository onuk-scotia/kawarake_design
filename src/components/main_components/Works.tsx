import styled from "styled-components";
import kawarakeImg from '../../public/img/works_img/sample1.png';
import kawarakeVipImg from '../../public/img/works_img/sample1.png';
import comingSoonImg from '../../public/img/works_img/sample1.png';

export const Works = () => {
  return(
    <StyledSection id="works" className="contents">
      <StyledDiv>
        <StyledH1 className="title">Works</StyledH1>
        <StyledGrid>
          <StyledGridItem>
            <StyledItemImg src={kawarakeImg} alt="spice&bar kawarake" />
            <StyledItemP>Spice&Bar 土器 -kawarake-</StyledItemP>
          </StyledGridItem>
          <StyledGridItem>
            <StyledItemImg src={kawarakeVipImg} alt="spice&bar kawarake vip room" />
            <StyledItemP>Spice&Bar 土器 -kawarake-</StyledItemP>
            <StyledItemP>VIP Room</StyledItemP>
          </StyledGridItem>
          <StyledGridItem>
            <StyledItemImg src={comingSoonImg} alt="coming soon!" />
            <StyledItemP>Coming Soon!</StyledItemP>
          </StyledGridItem>
          <StyledGridItem>
            <StyledItemImg src={comingSoonImg} alt="coming soon!" />
            <StyledItemP>Coming Soon!</StyledItemP>
          </StyledGridItem>
          <StyledGridItem>
            <StyledItemImg src={comingSoonImg} alt="coming soon!" />
            <StyledItemP>Coming Soon!</StyledItemP>
          </StyledGridItem>
          <StyledGridItem>
            <StyledItemImg src={comingSoonImg} alt="coming soon!" />
            <StyledItemP>Coming Soon!</StyledItemP>
          </StyledGridItem>
          <StyledGridItem>
            <StyledItemImg src={comingSoonImg} alt="coming soon!" />
            <StyledItemP>Coming Soon!</StyledItemP>
          </StyledGridItem>
          <StyledGridItem>
            <StyledItemImg src={comingSoonImg} alt="coming soon!" />
            <StyledItemP>Coming Soon!</StyledItemP>
          </StyledGridItem>
          <StyledGridItem>
            <StyledItemImg src={comingSoonImg} alt="coming soon!" />
            <StyledItemP>Coming Soon!</StyledItemP>
          </StyledGridItem>
        </StyledGrid>
      </StyledDiv>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(75, 75, 81, 0.963);
  padding: 0 4%;
  z-index: 0;
`;

const StyledDiv = styled.div`
  width: 90%;
  margin-top: 3rem;
`;

const StyledH1 = styled.h1`
  font-size: 3.0rem;
  margin: 2.0rem;
  text-align: center;
`;

const StyledGrid = styled.div`
  display: grid;
  gap: 26px;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  margin-top: 6%;
  margin-bottom: 50px;
`;

const StyledGridItem = styled.div`
`;

const StyledItemImg = styled.img`
  max-width: 100%;
  cursor: pointer;
  transition: 0.5s all ease-in-out;
  &:hover{
    transform: scale(1.05, 1.05);
    transition: 0.5s all ease-in-out;
  }
`;

const StyledItemP = styled.p`
  text-align: center;
  margin-top: 0.5rem;
`;