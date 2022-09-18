import styled from "styled-components";
import { RequestInviteBtn } from "./Buttons";
import logo from "../assets/logo.svg";
import { mixinLightText, mixinSection } from "../GlobalStyle";

export const HeaderLink = styled.p`
  ${mixinLightText}
  margin: 1.75rem 0;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: clamp(1rem, 3vw, 1.75rem);
`;

export const HeaderLogo = styled.img``;

export const HeaderBox = styled.header`
  ${mixinSection}
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  background-color: var(--White);
  z-index: 2;
`;

const Header = ({ className }) => {
  const headerLinks = ["Home", "About", "Contact", "Blog", "Careers"];

  const displayHeaderLinks = () => {
    return headerLinks.map((link) => <HeaderLink>{link}</HeaderLink>);
  };

  return (
    <HeaderBox className={className}>
      <HeaderLogo src={logo} alt="logo" />
      <Links>{displayHeaderLinks()}</Links>
      <RequestInviteBtn />
    </HeaderBox>
  );
};

export default Header;
