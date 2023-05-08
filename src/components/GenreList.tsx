import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";
import GenreListSkeleton from "./GenreListSkeleton";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const genreSkeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

  if (error) return null;

  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {isLoading &&
          genreSkeleton.map((g) => (
            <ListItem key={g} paddingY={"10px"}>
              <GenreListSkeleton />
            </ListItem>
          ))}
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize={"48px"}
                borderRadius={8}
                objectFit={"cover"}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
                onClick={() => setSelectedGenreId(genre.id)}
                fontSize={"lg"}
                variant={"link"}
                whiteSpace={"normal"}
                textAlign={"left"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
