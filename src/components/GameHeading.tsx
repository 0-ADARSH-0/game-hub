import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import usePlatform from "../hook/usePlatform";
import useGenre from "../hook/useGenre";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" fontSize={"5xl"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
