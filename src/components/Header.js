import { useState } from "react";
import styled from "styled-components";
import { RequestInviteBtn } from "./Buttons";
import logo from "../assets/logo.svg";
import iconMenuOpen from "../assets/icon-hamburger.svg";
import iconMenuClose from "../assets/icon-close.svg";
import { mixinLightText, mixinSection } from "../GlobalStyle";

export const HeaderMenuIcon = styled.img`
  display: none;
  user-select: none;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 800px) {
    display: block;
  }
`;

export const HeaderRequestInviteBtn = styled(RequestInviteBtn)`
  @media (max-width: 800px) {
    display: none;
  }
`;

export const HeaderLink = styled.p`
  ${mixinLightText}
  user-select: none;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    text-decoration-color: var(--Lime-green);
    text-decoration-thickness: 0.35rem;
    text-underline-offset: 2rem;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: clamp(1rem, 3vw, 1.75rem);

  @media (max-width: 800px) {
    display: none;
  }
`;

export const HeaderLogo = styled.img``;

export const HeaderBox = styled.header`
  ${mixinSection}
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  min-height: 5rem;
  background-color: var(--White);
  padding-top: 1rem;
  padding-bottom: 1rem;
  z-index: 2;
`;

const Header = ({ className }) => {
  const headerLinks = ["Home", "About", "Contact", "Blog", "Careers"];

  const [menuOpen, setMenuOpen] = useState(false);

  const displayHeaderLinks = () => {
    return headerLinks.map((link) => <HeaderLink>{link}</HeaderLink>);
  };

  return (
    <HeaderBox className={className}>
      <HeaderLogo src={logo} alt="logo" />
      <Links>{displayHeaderLinks()}</Links>
      <HeaderRequestInviteBtn />
      <HeaderMenuIcon
        src={menuOpen ? iconMenuClose : iconMenuOpen}
        alt={menuOpen ? "close-menu-icon" : "open-menu-icon"}
        onClick={() => setMenuOpen(!menuOpen)}
      />
    </HeaderBox>
  );
};

export default Header;
