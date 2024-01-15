import { headerLogo } from "assets";
import { HeaderContainer, HeaderContent, LogoImage } from "./styled-components";
import { HeaderLinks, HeaderButtonsSection, BurgerMenu } from "./components";

export function Header() {
  return (
    <HeaderContainer>
        <HeaderContent>
          <BurgerMenu/>
          <LogoImage src={headerLogo} alt="logo" />
          <HeaderLinks/>
          <HeaderButtonsSection/>
        </HeaderContent>
    </HeaderContainer>
  );
}