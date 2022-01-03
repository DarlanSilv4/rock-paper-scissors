import { useGame } from "../../contexts/GameContext"
import { RulesButtonContainer } from "./RulesButton.elements"

export default function RulesButton() {

  const { showRules } = useGame();

  return (
    <RulesButtonContainer onClick={() => showRules()}>
      <span>Rules</span>
    </RulesButtonContainer>
  )
}