import { ScoreboardContainer, Score, ScoreText } from "./Scoreboard.elements";
import { useGame } from "../../contexts/GameContext.js";

export default function Scoreboard() {

  const { score } = useGame();

  return (
    <ScoreboardContainer>
      <ScoreText>Score</ScoreText>
      <Score>{score}</Score>
    </ScoreboardContainer>
  );
}