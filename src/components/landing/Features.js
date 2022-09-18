import styled from "styled-components";
import FeatureBlock from "../FeatureBlock";
import iconOnline from "../../assets/icon-online.svg";
import iconBudgeting from "../../assets/icon-budgeting.svg";
import iconOnboarding from "../../assets/icon-onboarding.svg";
import iconApi from "../../assets/icon-api.svg";
import {
  mixinHeavyText,
  mixinLightText,
  mixinSection,
} from "../../GlobalStyle";

export const FeatureBlocks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 3.5rem;
  margin-top: 3rem;
`;

export const FeaturesParagraph = styled.p`
  ${mixinLightText}
  font-size:clamp(1.025rem, 3vw, 1.1rem);
  width: 70%;
  max-width: 50ch;
`;

export const FeaturesHeading = styled.h2`
  ${mixinHeavyText}
  font-size: clamp(1.65rem, 4vw, 2rem);
`;

export const FeaturesBox = styled.div`
  ${mixinSection}
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  background-color: var(--Light-grayish-blue);
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

const Features = ({ className }) => {
  const featureBlocks = [
    {
      icon: {
        src: iconOnline,
        alt: "online-banking-icon",
      },
      heading: "Online Banking",
      description:
        "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    },
    {
      icon: {
        src: iconBudgeting,
        alt: "simple-budgeting-icon",
      },
      heading: "Simple Budgeting",
      description:
        "See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.",
    },
    {
      icon: {
        src: iconOnboarding,
        alt: "fast-onboarding-icon",
      },
      heading: "Fast Onboarding",
      description:
        "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
    },
    {
      icon: {
        src: iconApi,
        alt: "open-api-icon",
      },
      heading: "Open API",
      description:
        "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    },
  ];

  const displayFeatureBlocks = () => {
    return featureBlocks.map((feature) => (
      <FeatureBlock
        icon={feature.icon}
        heading={feature.heading}
        description={feature.description}
      />
    ));
  };

  return (
    <FeaturesBox className={className}>
      <FeaturesHeading>Why choose Easybank?</FeaturesHeading>
      <FeaturesParagraph>
        We leverage Open Banking to turn your bank account into your financial
        hub. Control your finances like never before.
      </FeaturesParagraph>
      <FeatureBlocks>{displayFeatureBlocks()}</FeatureBlocks>
    </FeaturesBox>
  );
};

export default Features;
