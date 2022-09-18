import styled from "styled-components";
import { RequestInviteBtn } from "./Buttons";
import logo from "../assets/logo.svg";
import { mixinSection } from "../GlobalStyle";

export const HeaderLink = styled.p``;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const HeaderLogo = styled.img``;

export const HeaderBox = styled.header`
  ${mixinSection}
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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
