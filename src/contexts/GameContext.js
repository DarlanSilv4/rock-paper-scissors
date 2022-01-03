import React, { useEffect, useState } from "react";

export const GameContext = React.createContext({});

export default function GameProvider(props) {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [cpuChoice, setCpuChoice] = useState(null);

  const [result, setResult] = useState(null);
  const [score, setScore] = useState(0);

  const [isRulesModalDisplayed, setIsRulesModalDisplayed] = useState(false);

  const outcomes = { win: "win", lose: "lose", tie: "tie" };

  const resetStates = () => {
    setPlayerChoice(null);
    setCpuChoice(null);
    setResult(null);
  }

  useEffect(function cpuChoose() {
    if (playerChoice == null) return;

    const options = ["paper", "rock", "scissors"];
    const indexRandom = Math.floor(Math.random() * 3);

    const cpuChoice = options[indexRandom];
    setCpuChoice(cpuChoice);

    const match = (playerChoice, cpuChoice) => {
      const scissorsVersus = { "paper": outcomes.win, "rock": outcomes.lose, "scissors": outcomes.tie };
      const paperVersus = { "paper": outcomes.tie, "rock": outcomes.win, "scissors": outcomes.lose };
      const rockVersus = { "paper": outcomes.lose, "rock": outcomes.tie, "scissors": outcomes.win };

      switch (playerChoice) {
        case "scissors":
          return scissorsVersus[cpuChoice];
        case "paper":
          return paperVersus[cpuChoice];
        case "rock":
          return rockVersus[cpuChoice];
      }
    }

    const result = match(playerChoice, cpuChoice);
    setResult(result);

  }, [playerChoice]);

  useEffect(function changeScore() {
    if (result !== outcomes.win) return;
    setScore(score => score + 1);
  }, [result]);


  const showRules = () => { setIsRulesModalDisplayed(!isRulesModalDisplayed) }

  return (
    <GameContext.Provider
      value={{
        playerChoice,
        setPlayerChoice,
        cpuChoice,
        setCpuChoice,
        result,
        score,
        resetStates,
        showRules,
        isRulesModalDisplayed
      }}>
      {props.children}
    </GameContext.Provider>
  );

}

export const useGame = () => React.useContext(GameContext);