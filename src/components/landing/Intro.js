import styled from "styled-components";
import { RequestInviteBtn } from "../Buttons";
import introBgDesktop from "../../assets/bg-intro-desktop.svg";
import introImg from "../../assets/image-mockups.png";
import {
  mixinHeavyText,
  mixinLightText,
  mixinSection,
} from "../../GlobalStyle";

export const IntroImg = styled.img`
  position: absolute;
  width: clamp(20rem, 100%, 35rem);

  @media (max-width: 800px) {
    position: static;
    transform: translateY(-3rem);
    width: clamp(10rem, 90%, 35rem);
  }
`;

export const IntroImgBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  min-width: 20rem;
  background: url(${introBgDesktop});
  background-size: cover;

  @media (max-width: 800px) {
    min-width: none;
  }
`;

export const IntroParagraph = styled.p`
  ${mixinLightText}
  font-size: clamp(1.05rem, 3vw, 1.1rem);
  max-width: 40ch;
`;

export const IntroHeading = styled.h1`
  ${mixinHeavyText}
  font-size: clamp(1.25rem, 7vw, 2.3rem);
  max-width: 15ch;
`;

export const IntroTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;
  min-width: 20rem;
  padding: 4rem 0;

  @media (max-width: 800px) {
    align-items: center;
    text-align: center;
  }
`;

export const IntroBox = styled.div`
  ${mixinSection}
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  gap: 3rem;
  background-color: var(--Very-light-gray);
  padding-right: 0;

  @media (max-width: 800px) {
    flex-direction: column-reverse;
    gap: 0;
    padding-left: 0;
    padding-bottom: 2rem;
  }
`;

const Intro = ({ className }) => {
  return (
    <IntroBox className={className}>
      <IntroTextBox>
        <IntroHeading>Next generation digital banking</IntroHeading>
        <IntroParagraph>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </IntroParagraph>
        <RequestInviteBtn />
      </IntroTextBox>
      <IntroImgBox>
        <IntroImg src={introImg} alt="mockups-image" />
      </IntroImgBox>
    </IntroBox>
  );
};

export default Intro;
