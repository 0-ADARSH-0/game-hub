import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/GAMEHUB_LOGO_BLACK_PNG.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

export const NavBar = ({ onSearch }: Props) => (
  <HStack padding={"10px"}>
    <Image src={logo} width={100} objectFit={"cover"} borderRadius={10} />
    <SearchInput onSearch={onSearch} />
    <ColorModeSwitch />
  </HStack>
);
