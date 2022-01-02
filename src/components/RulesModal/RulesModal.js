import { RulesImg, RulesModalBackground, RulesModalContainer, RulesModalExitButton, RulesModalTitle } from "./RulesModal.elements";

export default function RulesModal() {
  return (
    <RulesModalBackground>
      <RulesModalContainer>
        <RulesModalTitle>Rules</RulesModalTitle>
        <RulesImg src="/images/image-rules.svg" />
        <RulesModalExitButton>
          <img src="/images/icon-close.svg" />
        </RulesModalExitButton>
      </RulesModalContainer>
    </RulesModalBackground>
  );
}