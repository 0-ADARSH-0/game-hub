import {
  HStack,
  List,
  ListItem,
  Image,
  SkeletonText,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenre from "../hook/useGenre";

import getCroppedImage from "../services/image-url";
import { Genre } from "../services/genreService";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenreId?: number;
}

const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
  const { data, error, isLoading } = useGenre();
  const genres = [...Array(30).keys()];
  if (isLoading)
    return (
      <>
        {genres.map((genre) => (
          <SkeletonText key={genre} marginY={"5px"} height={"10px"} />
        ))}
      </>
    );
  if (error) return null;
  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                src={getCroppedImage(genre.image_background)}
                boxSize={"32px"}
                borderRadius={8}
                objectFit={"cover"}
              />
              <Button
                whiteSpace={"normal"}
                textAlign={"left"}
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                fontSize={"lg"}
                variant={"link"}
                onClick={() => onSelectGenre(genre)}
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
