import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOption: (option: string) => void;
  selectedSortOption: string;
}

const SortSelector = ({ onSelectSortOption, selectedSortOption }: Props) => {
  const sortOptions = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" },
  ];

  const getSortOptionLabel = sortOptions.find(
    (sortOption) => sortOption.value === selectedSortOption
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order By: {getSortOptionLabel?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOptions.map((sortOption) => (
          <MenuItem
            key={sortOption.value}
            value={sortOption.value}
            onClick={() => onSelectSortOption(sortOption.value)}
          >
            {sortOption.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
