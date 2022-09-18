import styled from "styled-components";
import { RequestInviteBtn } from "./Buttons";
import logo from "../assets/logo.svg";
import iconFacebook from "../assets/icon-facebook.svg";
import iconYouTube from "../assets/icon-youtube.svg";
import iconTwitter from "../assets/icon-twitter.svg";
import iconPinterest from "../assets/icon-pinterest.svg";
import iconInstagram from "../assets/icon-instagram.svg";
import { mixinSection } from "../GlobalStyle";

export const Copyright = styled.p`
  color: var(--Grayish-blue);
  font-size: 0.925rem;
  opacity: 0.8;
  margin: 0;
`;

export const CopyrightColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 1.5rem;
  margin-left: auto;

  @media (max-width: 800px) {
    align-items: center;
    text-align: center;
    gap: 1.75rem;
    margin-left: 0;
  }
`;

export const FooterLink = styled.p`
  grid-area: auto / auto / span 1 / span 1;
  user-select: none;
  color: var(--Very-light-gray);
  font-size: 0.95rem;
  font-weight: 400;
  line-height: 2.5ch;
  margin: 0;
  transition: 0.2s;

  &:hover {
    cursor: pointer;
    color: var(--Lime-green);
  }
`;

export const FooterLinks = styled.div`
  display: grid;
  grid-template: repeat(3, 1fr) / auto;
  grid-auto-flow: column;
  row-gap: 1rem;
  column-gap: 4rem;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1.5rem;
    text-align: center;
  }
`;

export const FooterSocialMediaIcon = styled.img`
  user-select: none;

  &:hover {
    cursor: pointer;
    filter: brightness(0) saturate(100%) invert(82%) sepia(91%) saturate(6352%)
      hue-rotate(59deg) brightness(87%) contrast(87%);
  }
`;

export const FooterSocialMediaIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (max-width: 800px) {
    gap: 1.5rem;
  }
`;

export const FooterLogo = styled.img`
  filter: brightness(0) invert(1);
`;

export const FooterLogoColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2.75rem;

  @media (max-width: 800px) {
    align-items: center;
  }
`;

export const FooterBox = styled.footer`
  ${mixinSection}
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  gap: 5rem;
  background-color: var(--Dark-blue);
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  z-index: 2;

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 3rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`;

const Footer = ({ className }) => {
  const socialMediaIcons = [
    { src: iconFacebook, alt: "facebook-icon" },
    { src: iconYouTube, alt: "youtube-icon" },
    { src: iconTwitter, alt: "twitter-icon" },
    { src: iconPinterest, alt: "pinterest-icon" },
    { src: iconInstagram, alt: "instagram-icon" },
  ];

  const footerLinks = [
    "About Us",
    "Contact",
    "Blog",
    "Careers",
    "Support",
    "Privacy Policy",
  ];

  const displaySocialMediaIcons = () => {
    return socialMediaIcons.map((icon) => (
      <FooterSocialMediaIcon src={icon.src} alt={icon.alt} />
    ));
  };

  const displayFooterLinks = () => {
    return footerLinks.map((link) => <FooterLink>{link}</FooterLink>);
  };

  return (
    <FooterBox className={className}>
      <FooterLogoColumn>
        <FooterLogo src={logo} alt="logo" />
        <FooterSocialMediaIcons>
          {displaySocialMediaIcons()}
        </FooterSocialMediaIcons>
      </FooterLogoColumn>
      <FooterLinks>{displayFooterLinks()}</FooterLinks>
      <CopyrightColumn>
        <RequestInviteBtn />
        <Copyright>&copy; Easybank. All rights reserved</Copyright>
      </CopyrightColumn>
    </FooterBox>
  );
};

export default Footer;
