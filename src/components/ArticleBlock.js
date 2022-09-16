import styled from "styled-components";

export const ArticleBlockSample = styled.p``;

export const ArticleBlockTitle = styled.h3``;

export const ArticleBlockAuthor = styled.p``;

export const ArticleBlockTextBox = styled.div``;

export const ArticleBlockImg = styled.img``;

export const ArticleBlockBox = styled.div``;

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
