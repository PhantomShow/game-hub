import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameQueryStore from "../store";

const SortSelector = () => {
  const sortOptions = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-metacritic", label: "Metacritic" },
    { value: "-rating", label: "Average Rating" },
  ];

  const selectedSortOption = useGameQueryStore((s) => s.gameQuery.sortOption);
  const setSortOption = useGameQueryStore((s) => s.setSortOption);

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
            onClick={() => setSortOption(sortOption.value)}
          >
            {sortOption.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
