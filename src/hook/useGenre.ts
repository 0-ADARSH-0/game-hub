import { useQuery } from "@tanstack/react-query";
import genreService, { Genre } from "../services/genreService";
import { FetchResponse } from "../services/api-client";
import genresList from "../data/genresList";

const useGenre = () => {
  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: genreService.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: genresList,
  });
};

export default useGenre;
