import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../services/platformService";
import usePlatforms from "../hook/usePlatforms";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatfomId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatfomId }: Props) => {
  const { data, error } = usePlatforms();
  const selectedPlatfom = data.results.find((p) => p.id == selectedPlatfomId);
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatfom?.name || "Platform"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => onSelectPlatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
