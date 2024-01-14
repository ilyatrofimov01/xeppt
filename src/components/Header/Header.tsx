import { headerLogo } from "assets";
import { HeaderContainer, HeaderContent } from "./styled-components";
import { HeaderLinks, HeaderButtonsSection } from "./components";

export function Header() {
  return (
    <HeaderContainer>
        <HeaderContent>
          <img src={headerLogo} alt="logo" />
          <HeaderLinks/>
          <HeaderButtonsSection/>
        </HeaderContent>
    </HeaderContainer>
  );
}