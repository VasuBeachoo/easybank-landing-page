import styled from "styled-components";
import { RequestInviteBtn } from "../Buttons";
import introImg from "../../assets/image-mockups.png";

export const IntroImg = styled.img``;

export const IntroImgBox = styled.div``;

export const IntroParagraph = styled.p``;

export const IntroHeading = styled.h1``;

export const IntroTextBox = styled.div``;

export const IntroBox = styled.div``;

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
