import { HeaderContainer, Logo } from './Header.elements.js';
import { Scoreboard } from '../../components';

export default function Header() {
  return (
    <HeaderContainer>
      <Logo src="/images/logo.svg" alt="logo" />
      <Scoreboard />
    </HeaderContainer>
  );
}