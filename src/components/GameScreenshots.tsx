import React from "react";
import useScreenshots from "../hooks/useScreenshots";
import { Image, SimpleGrid } from "@chakra-ui/react";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);

  if (isLoading) return null;
  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={2}>
      {data?.results?.map((s) => (
        <Image src={s.image} key={s.id} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
