import styled from "styled-components";
import { RequestInviteBtn } from "./Buttons";
import logo from "../assets/logo.svg";
import iconFacebook from "../assets/icon-facebook.svg";
import iconYouTube from "../assets/icon-youtube.svg";
import iconTwitter from "../assets/icon-twitter.svg";
import iconPinterest from "../assets/icon-pinterest.svg";
import iconInstagram from "../assets/icon-instagram.svg";

export const Copyright = styled.p``;

export const CopyrightColumn = styled.div``;

export const FooterLink = styled.p``;

export const FooterLinks = styled.div``;

export const FooterSocialMediaIcon = styled.img``;

export const FooterSocialMediaIcons = styled.div``;

export const FooterLogo = styled.img``;

export const FooterLogoColumn = styled.div``;

export const FooterBox = styled.footer``;

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
