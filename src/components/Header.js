import { useState, useEffect } from "react";
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

  @media (max-width: 800px) {
    color: var(--Dark-blue);
  }
`;

export const MobileLinks = styled.div`
  display: none;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    background-color: var(--Dark-blue);
    padding: 1.75rem;

    ${HeaderLink} {
      color: var(--White);
      font-size: 1.05rem;

      text-underline-offset: 0.5rem;
    }
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
`;

export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  z-index: 2;
`;

const Header = ({ className }) => {
  const headerLinks = ["Home", "About", "Contact", "Blog", "Careers"];

  const [menuOpen, setMenuOpen] = useState(false);

  const handleResize = () => {
    if (window.innerWidth > 800) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  const displayHeaderLinks = () => {
    let key = 1000;

    return headerLinks.map((link) => (
      <HeaderLink key={key++}>{link}</HeaderLink>
    ));
  };

  return (
    <HeaderContainer className={className}>
      <HeaderBox>
        <HeaderLogo src={logo} alt="logo" />
        <Links>{displayHeaderLinks()}</Links>
        <HeaderRequestInviteBtn />
        <HeaderMenuIcon
          src={menuOpen ? iconMenuClose : iconMenuOpen}
          alt={menuOpen ? "close-menu-icon" : "open-menu-icon"}
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </HeaderBox>
      {menuOpen && <MobileLinks>{displayHeaderLinks()}</MobileLinks>}
    </HeaderContainer>
  );
};

export default Header;
