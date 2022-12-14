import styled from "styled-components";
import ArticleBlock from "../ArticleBlock";
import imgCurrency from "../../assets/image-currency.jpg";
import imgRestaurant from "../../assets/image-restaurant.jpg";
import imgPlane from "../../assets/image-plane.jpg";
import imgConfetti from "../../assets/image-confetti.jpg";
import { mixinHeavyText, mixinSection } from "../../GlobalStyle";

export const ArticleBlocks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.75rem;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;
  }
`;

export const ArticlesHeading = styled.h2`
  ${mixinHeavyText}
  font-size: clamp(1.75rem, 5vw, 2rem);

  @media (max-width: 800px) {
    text-align: center;
  }
`;

export const ArticlesBox = styled.div`
  ${mixinSection}
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2.5rem;
  background-color: var(--Very-light-gray);
  padding-top: 5rem;
  padding-bottom: 5rem;

  @media (max-width: 800px) {
    align-items: center;
  }
`;

const Articles = ({ className }) => {
  const articleBlocks = [
    {
      img: {
        src: imgCurrency,
        alt: "currency-image",
      },
      authorName: "Claire Robson",
      title: "Receive money in any currency with no fees",
      sample:
        "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ...",
    },
    {
      img: {
        src: imgRestaurant,
        alt: "restaurant-image",
      },
      authorName: "Wilson Hutton",
      title: "Treat yourself without worrying about money",
      sample:
        "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ...",
    },
    {
      img: {
        src: imgPlane,
        alt: "plane-image",
      },
      authorName: "Wilson Hutton",
      title: "Take your Easybank card wherever you go",
      sample:
        "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you ...",
    },
    {
      img: {
        src: imgConfetti,
        alt: "confetti-image",
      },
      authorName: "Claire Robson",
      title: "Our invite-only Beta accounts are now live!",
      sample:
        "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ...",
    },
  ];

  const displayArticleBlocks = () => {
    let key = 3000;

    return articleBlocks.map((article) => (
      <ArticleBlock
        key={key++}
        img={article.img}
        authorName={article.authorName}
        title={article.title}
        sample={article.sample}
      />
    ));
  };

  return (
    <ArticlesBox className={className}>
      <ArticlesHeading>Latest Articles</ArticlesHeading>
      <ArticleBlocks>{displayArticleBlocks()}</ArticleBlocks>
    </ArticlesBox>
  );
};

export default Articles;
