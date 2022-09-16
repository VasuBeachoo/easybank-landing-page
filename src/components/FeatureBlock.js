import styled from "styled-components";

export const FeatureBlockDescription = styled.div``;

export const FeatureBlockHeading = styled.h3``;

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
