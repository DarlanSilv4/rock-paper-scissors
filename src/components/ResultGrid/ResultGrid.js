import { PickedContainer, PlayAgainButton, ResultContainer, ResultGridContainer, ResultText } from './ResultGrid.elements';
import { Button } from "../../components";
import { useGame } from "../../contexts/GameContext";

export default function ResultGrid() {

  const { result, playerChoice, cpuChoice, resetStates } = useGame();

  const resultMessage = (result) => {
    return result === "tie" ? "Draw Over" : `You ${result}`
  }

  return (
    <ResultGridContainer>
      <PickedContainer>
        <Button winner={result === "win"} disabled={true} size="big" type={playerChoice} />
        <span>You Picked</span>
      </PickedContainer>

      <PickedContainer>
        <Button winner={result === "lose"} disabled={true} size="big" type={cpuChoice} />
        <span>The House Picked</span>
      </PickedContainer>

      <ResultContainer>
        <ResultText>{resultMessage(result)}</ResultText>
        <PlayAgainButton onClick={() => resetStates()}>Play Again</PlayAgainButton>
      </ResultContainer>

    </ResultGridContainer>
  );
}