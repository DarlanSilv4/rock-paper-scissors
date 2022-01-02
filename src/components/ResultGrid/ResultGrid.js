import { PickedContainer, PlayAgainButton, ResultContainer, ResultGridContainer, ResultText } from './ResultGrid.elements';
import { Button } from "../../components";

export default function ResultGrid() {
  return (
    <ResultGridContainer>
      <PickedContainer>
        <Button winner={true} disabled={true} size="big" type="paper" />
        <span>You Picked</span>
      </PickedContainer>

      <PickedContainer>
        <Button disabled={true} size="big" type="rock" />
        <span>The House Picked</span>
      </PickedContainer>

      <ResultContainer>
        <ResultText>You Win</ResultText>
        <PlayAgainButton>Play Again</PlayAgainButton>
      </ResultContainer>

    </ResultGridContainer>
  );
}