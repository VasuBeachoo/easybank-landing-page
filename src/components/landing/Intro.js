import styled from "styled-components";
import { RequestInviteBtn } from "../Buttons";
import introImg from "../../assets/image-mockups.png";
import {
  mixinHeavyText,
  mixinLightText,
  mixinSection,
} from "../../GlobalStyle";

export const IntroImg = styled.img``;

export const IntroImgBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const IntroParagraph = styled.p`
  ${mixinLightText}
`;

export const IntroHeading = styled.h1`
  ${mixinHeavyText}
`;

export const IntroTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const IntroBox = styled.div`
  ${mixinSection}
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: var(--Very-light-gray);
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
