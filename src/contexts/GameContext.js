import React, { useEffect, useRef, useState } from "react";

export const GameContext = React.createContext({});

export default function GameProvider(props) {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [cpuChoice, setCpuChoice] = useState(null);

  const [result, setResult] = useState(null);
  const [score, setScore] = useState(0);

  const [loading, setLoading] = useState(false);

  const [isRulesModalDisplayed, setIsRulesModalDisplayed] = useState(false);

  const outcomes = useRef({ win: "win", lose: "lose", tie: "tie" });

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
      const scissorsVersus = { "paper": outcomes.current.win, "rock": outcomes.current.lose, "scissors": outcomes.current.tie };
      const paperVersus = { "paper": outcomes.current.tie, "rock": outcomes.current.win, "scissors": outcomes.current.lose };
      const rockVersus = { "paper": outcomes.current.lose, "rock": outcomes.current.tie, "scissors": outcomes.current.win };

      switch (playerChoice) {
        case "scissors":
          return scissorsVersus[cpuChoice];
        case "paper":
          return paperVersus[cpuChoice];
        case "rock":
          return rockVersus[cpuChoice];
        default: break;
      }
    }

    const result = match(playerChoice, cpuChoice);
    setResult(result);
    setLoading(true);

  }, [playerChoice]);

  useEffect(function changeScore() {
    if (result === outcomes.current.win) return setScore(score => score + 1);
    if (result === outcomes.current.lose) setScore(score => { return score > 0 ? score - 1 : 0 })
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
        isRulesModalDisplayed,
        loading,
        setLoading
      }}>
      {props.children}
    </GameContext.Provider>
  );

}

export const useGame = () => React.useContext(GameContext);