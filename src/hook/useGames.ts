import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import gamesService, { Game } from "../services/gamesService";
import { FetchResponse } from "../services/api-client";

const useGames = (gameQuery: GameQuery) => {
  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games"],
    queryFn: gamesService.getAll,
  });
};

export default useGames;
