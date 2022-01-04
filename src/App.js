import React from "react";
import GlobalStyle, { Container } from "./globalStyles";
import { Header, RulesButton, RulesModal, ResultGrid, ButtonsGrid } from "./components";
import { useGame } from "./contexts/GameContext";

function App() {

  const { result, isRulesModalDisplayed } = useGame();

  return (
    <React.Fragment>
      {isRulesModalDisplayed ? <RulesModal /> : <React.Fragment></React.Fragment>}
      <GlobalStyle />
      <Container>
        <Header />
        {result != null ? <ResultGrid /> : <ButtonsGrid />}
        <RulesButton />
      </Container>
    </React.Fragment>
  );
}

export default App;
