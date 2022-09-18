import styled from "styled-components";
import { mixinHeavyText, mixinLightText } from "../GlobalStyle";

export const FeatureBlockDescription = styled.div`
  ${mixinLightText}
  font-size: clamp(1.025rem, 3vw, 1.075rem);
`;

export const FeatureBlockHeading = styled.h3`
  ${mixinHeavyText}
  font-size: clamp(1.25rem, 3vw, 1.35rem);
`;

export const FeatureBlockIcon = styled.img``;

export const FeatureBlockBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.5rem;
`;

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
