import { useGame } from "../../contexts/GameContext";
import { RulesImg, RulesModalBackground, RulesModalContainer, RulesModalExitButton, RulesModalTitle } from "./RulesModal.elements";

export default function RulesModal() {

  const { showRules } = useGame();

  return (
    <RulesModalBackground>
      <RulesModalContainer>
        <RulesModalTitle>Rules</RulesModalTitle>
        <RulesImg src="/images/image-rules.svg" alt="game rules" />
        <RulesModalExitButton onClick={() => showRules()}>
          <img src="/images/icon-close.svg" alt="close" />
        </RulesModalExitButton>
      </RulesModalContainer>
    </RulesModalBackground>
  );
}