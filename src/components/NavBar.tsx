import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/GAMEHUB_LOGO_BLACK_PNG.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

export const NavBar = () => (
  <HStack padding={"10px"}>
    <Image src={logo} width={100} objectFit={"cover"} borderRadius={10} />
    <SearchInput />
    <ColorModeSwitch />
  </HStack>
);
