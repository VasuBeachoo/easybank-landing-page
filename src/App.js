import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import LandingPage from "./components/landing/LandingPage";

const AppBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
`;

const App = () => {
  return (
    <AppBox>
      <GlobalStyle />
      <LandingPage />
    </AppBox>
  );
};

export default App;
