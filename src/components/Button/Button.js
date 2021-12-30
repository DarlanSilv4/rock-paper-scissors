import React from "react";
import { ButtonContainer, ButtonIconBackground } from "./Button.elements";

export default function Button({ type }) {

  const theme = {
    paper: { colors: ["hsl(230, 89%, 65%)", "hsl(230, 89%, 62%)", "hsl(229, 67%, 46%)"], url: "/images/icon-paper.svg" },
    rock: { colors: ["hsl(349, 70%, 56%)", "hsl(349, 71%, 52%)", "hsl(347, 74%, 35%)"], url: "/images/icon-rock.svg" },
    scissors: { colors: ["hsl(40, 84%, 53%)", "hsl(39, 89%, 49%)", "hsl(29, 78%, 44%)"], url: "/images/icon-scissors.svg" },
  }

  return (
    <React.Fragment>
      <ButtonContainer theme={theme[type]}>
        <ButtonIconBackground theme={theme[type]}>
          <img src={theme[type].url} alt="shape" />
        </ButtonIconBackground>
      </ButtonContainer>
    </React.Fragment>
  );
}