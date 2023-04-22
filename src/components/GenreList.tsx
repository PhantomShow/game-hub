import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";
import { wrap } from "framer-motion";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const genreSkeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  if (error) return null;

  return (
    <List>
      {isLoading &&
        genreSkeleton.map((g) => (
          <ListItem key={g} paddingY={"10px"}>
            <GenreListSkeleton />
          </ListItem>
        ))}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize={"48px"}
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              onClick={() => onSelectGenre(genre)}
              fontSize={"lg"}
              variant={"link"}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
