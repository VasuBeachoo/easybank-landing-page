import styled from "styled-components";
import { RequestInviteBtn } from "./Buttons";
import logo from "../assets/logo.svg";

export const HeaderLink = styled.p``;

export const Links = styled.div``;

export const HeaderLogo = styled.img``;

export const HeaderBox = styled.header``;

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
