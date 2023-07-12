import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/GAMEHUB_LOGO_BLACK_PNG.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

export const NavBar = () => (
  <HStack padding={"10px"}>
    <Link to="/">
      <Image src={logo} width={100} objectFit={"cover"} borderRadius={10} />
    </Link>
    <SearchInput />
    <ColorModeSwitch />
  </HStack>
);
