import { Image, SimpleGrid } from "@chakra-ui/react";
import useScreenshots from "../hook/useScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshots(gameId);
  if (isLoading) return null;
  if (error) throw error;
  return (
    <SimpleGrid columns={{ md: 2, sm: 1 }} spacing={2}>
      {data?.results.map((image) => (
        <Image key={image.id} src={image.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
