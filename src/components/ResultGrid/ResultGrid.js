import { PickedContainer, PlayAgainButton, ResultContainer, ResultGridContainer, ResultText } from './ResultGrid.elements';
import { Button } from "../../components";
import { useGame } from "../../contexts/GameContext";
import { useEffect, useState } from 'react/cjs/react.development';

export default function ResultGrid() {

  const { result, playerChoice, cpuChoice, resetStates, loading, setLoading } = useGame();

  const [cpuType, setCpuType] = useState("rock");

  useEffect(function loadingAnimation() {
    let indexCpuType = 0;

    const changeCpuType = () => {
      const options = ["paper", "rock", "scissors"];
      const type = options[indexCpuType];
      setCpuType(type);

      indexCpuType += 1;
      if (indexCpuType > 2) indexCpuType = 0;
    }

    const cpuButtonAnimation = setInterval(() => {
      changeCpuType();
    },
      100);

    setTimeout(() => {
      clearInterval(cpuButtonAnimation);
      setCpuType(cpuChoice);
      setLoading(false);
    }, 1000);
  }, [result, cpuChoice, setLoading]);

  const resultMessage = (result) => {
    return result === "tie" ? "Draw" : `You ${result}`
  }

  return (
    <ResultGridContainer>
      <PickedContainer>
        <Button winner={!loading && result === "win"} disabled={true} size="big" type={playerChoice} />
        <span>You Picked</span>
      </PickedContainer>

      <PickedContainer>
        <Button winner={!loading && result === "lose"} disabled={true} size="big" type={cpuType} />
        <span>The House Picked</span>
      </PickedContainer>


      {!loading &&
        <ResultContainer>
          <ResultText>{resultMessage(result)}</ResultText>
          <PlayAgainButton onClick={() => resetStates()}>Play Again</PlayAgainButton>
        </ResultContainer>
      }
    </ResultGridContainer>
  );
}