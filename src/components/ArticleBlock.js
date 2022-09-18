import styled from "styled-components";
import { mixinHeavyText, mixinLightText } from "../GlobalStyle";

export const ArticleBlockSample = styled.p`
  ${mixinLightText}
  font-size: clamp(0.85rem, 1.5vw, 1rem);
  max-width: 50ch;

  @media (max-width: 800px) {
    font-size: clamp(0.9rem, 2vw, 1rem);
  }
`;

export const ArticleBlockTitle = styled.h3`
  ${mixinHeavyText}
  font-size: clamp(1rem, 1.75vw, 1.5rem);
  transition: 0.25s;

  @media (max-width: 800px) {
    font-size: clamp(1rem, 2vw, 1rem);
  }
`;

export const ArticleBlockAuthor = styled.p`
  ${mixinLightText}
  font-size: clamp(0.75rem, 1.35vw, 1rem);

  @media (max-width: 800px) {
    font-size: clamp(0.85rem, 2vw, 1rem);
  }
`;

export const ArticleBlockTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 1.5rem;
`;

export const ArticleBlockImg = styled.img`
  width: 100%;
  border-radius: 0.5rem 0.5rem 0 0;
`;

export const ArticleBlockBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  user-select: none;
  background-color: var(--White);
  border-radius: 0.5rem;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;

  &:hover {
    cursor: pointer;
    ${ArticleBlockTitle} {
      color: var(--Lime-green);
    }
  }

  @media (max-width: 800px) {
    width: 80%;
  }
`;

const ArticleBlock = ({ className, img, authorName, title, sample }) => {
  return (
    <ArticleBlockBox className={className}>
      <ArticleBlockImg src={img.src} alt={img.alt} />
      <ArticleBlockTextBox>
        <ArticleBlockAuthor>By {authorName}</ArticleBlockAuthor>
        <ArticleBlockTitle>{title}</ArticleBlockTitle>
        <ArticleBlockSample>{sample}</ArticleBlockSample>
      </ArticleBlockTextBox>
    </ArticleBlockBox>
  );
};

export default ArticleBlock;
