import { createGlobalStyle, css } from "styled-components";

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  :root {
    --Dark-blue: hsl(233, 26%, 24%);
    --Lime-green: hsl(136, 65%, 51%);
    --Bright-cyan: hsl(192, 70%, 51%);
    --Grayish-blue: hsl(233, 8%, 62%);
    --Light-grayish-blue: hsl(220, 16%, 96%);
    --Very-light-gray: hsl(0, 0%, 98%);
    --White: hsl(0, 0%, 100%);
  }

  * {
    box-sizing: border-box;
    font-family: "Public Sans", sans-serif;
  }

  body {
    margin: 0;
  }
`;

export const mixinSection = css`
  width: 100%;
  padding: 0 clamp(1rem, 5vw, 5rem);
`;

export const mixinHeavyText = css`
  color: var(--Dark-blue);
  font-weight: 400;
  letter-spacing: 0.01ch;
  line-height: 2.35ch;
  margin: 0;
`;

export const mixinLightText = css`
  color: var(--Grayish-blue);
  font-weight: 400;
  letter-spacing: 0.01ch;
  line-height: 2.75ch;
  margin: 0;
`;

export const mixinButton = css`
  all: unset;
  text-align: center;
  user-select: none;
  font-size: 0.925rem;
  font-weight: 700;
  letter-spacing: 0.035ch;
  line-height: 2.25ch;
  border-radius: 3rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  padding: 0.75rem 1.75rem;
  transition: 0.25s;

  &:hover {
    cursor: pointer;
    filter: brightness(1.25);
  }
`;

export default GlobalStyle;
