import styled from "styled-components";
import { RequestInviteBtn } from "../Buttons";
import introImg from "../../assets/image-mockups.png";
import { mixinSection } from "../../GlobalStyle";

export const IntroImg = styled.img``;

export const IntroImgBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const IntroParagraph = styled.p``;

export const IntroHeading = styled.h1``;

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