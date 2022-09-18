import styled from "styled-components";
import { RequestInviteBtn } from "./Buttons";
import logo from "../assets/logo.svg";
import iconFacebook from "../assets/icon-facebook.svg";
import iconYouTube from "../assets/icon-youtube.svg";
import iconTwitter from "../assets/icon-twitter.svg";
import iconPinterest from "../assets/icon-pinterest.svg";
import iconInstagram from "../assets/icon-instagram.svg";
import { mixinSection } from "../GlobalStyle";

export const Copyright = styled.p``;

export const CopyrightColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin-left: auto;
`;

export const FooterLink = styled.p`
  grid-area: auto / auto / span 1 / span 1;
`;

export const FooterLinks = styled.div`
  display: grid;
  grid-template: repeat(3, 1fr) / auto;
  grid-auto-flow: column;
`;

export const FooterSocialMediaIcon = styled.img``;

export const FooterSocialMediaIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const FooterLogo = styled.img``;

export const FooterLogoColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const FooterBox = styled.footer`
  ${mixinSection}
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: var(--Dark-blue);
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
