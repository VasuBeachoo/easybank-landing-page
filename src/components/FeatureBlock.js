import styled from "styled-components";
import { mixinHeavyText, mixinLightText } from "../GlobalStyle";

export const FeatureBlockDescription = styled.div`
  ${mixinLightText}
`;

export const FeatureBlockHeading = styled.h3`
  ${mixinHeavyText}
`;

export const FeatureBlockIcon = styled.img``;

export const FeatureBlockBox = styled.div``;

const FeatureBlock = ({ className, icon, heading, description }) => {
  return (
    <FeatureBlockBox className={className}>
      <FeatureBlockIcon src={icon.src} alt={icon.alt} />
      <FeatureBlockHeading>{heading}</FeatureBlockHeading>
      <FeatureBlockDescription>{description}</FeatureBlockDescription>
    </FeatureBlockBox>
  );
};

export default FeatureBlock;
