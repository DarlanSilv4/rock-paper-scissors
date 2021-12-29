import { useState } from 'react';
import { ScoreboardContainer, Score, ScoreText } from "./Scoreboard.elements";

export default function Scoreboard() {

  const [score, setScore] = useState(12);

  return (
    <ScoreboardContainer>
      <ScoreText>Score</ScoreText>
      <Score>{score}</Score>
    </ScoreboardContainer>
  );
}