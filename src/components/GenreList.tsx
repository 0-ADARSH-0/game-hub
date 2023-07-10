import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres from "../hook/useGenres";

import getCroppedImage from "../services/image-url";
import useGameQueryStore from "../stores/useGameQueryStore";

const GenreList = () => {
  const { data, error } = useGenres();
  const seletedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
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
                fontWeight={genre.id === seletedGenreId ? "bold" : "normal"}
                fontSize={"lg"}
                variant={"link"}
                onClick={() => setGenreId(genre.id)}
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
