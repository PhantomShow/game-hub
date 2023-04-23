import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectOption: (option: String) => void;
  selectedOption: String;
}

const SortSelector = ({ onSelectOption, selectedOption }: Props) => {
  const sortOptions = ["Relevance", "Date added", "Name"];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />} marginX={10}>
        Order By: {selectedOption}
      </MenuButton>
      <MenuList>
        {sortOptions.map((option) => (
          <MenuItem key={option} onClick={() => onSelectOption(option)}>
            {option}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
