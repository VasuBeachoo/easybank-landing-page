import styled from "styled-components";
import Header from "../Header";
import Intro from "./Intro";
import Features from "./Features";
import Articles from "./Articles";
import Footer from "../Footer";

export const LandingPageBox = styled.div``;

const LandingPage = ({ className }) => {
  return (
    <LandingPageBox className={className}>
      <Header />
      <Intro />
      <Features />
      <Articles />
      <Footer />
    </LandingPageBox>
  );
};

export default LandingPage;
