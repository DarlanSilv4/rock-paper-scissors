import { ScoreboardContainer, Score, ScoreText } from "./Scoreboard.elements";
import { useGame } from "../../contexts/GameContext.js";
import { useEffect, useState } from 'react';

export default function Scoreboard() {

  const { score, loading } = useGame();

  const [updatedScore, setUpdatedScore] = useState(0);

  useEffect(function updateScore() {
    if (!loading) setUpdatedScore(score);
  }, [score, loading, setUpdatedScore])

  return (
    <ScoreboardContainer>
      <ScoreText>Score</ScoreText>
      <Score>{updatedScore}</Score>
    </ScoreboardContainer>
  );
}