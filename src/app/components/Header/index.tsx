import { HeaderContainer, HeaderContent, Img } from "./styles";
import logo from "@/public/Logo.svg";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Img src={logo} alt="" />
        
      </HeaderContent>
    </HeaderContainer>
  );
};
