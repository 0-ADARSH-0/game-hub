import { useQuery } from "@tanstack/react-query";
import genreService from "../services/genreService";
import Genre from "../entities/Genre";
import { FetchResponse } from "../services/api-client";
import genresList from "../data/genresList";

const useGenres = () => {
  return useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: genreService.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: genresList,
  });
};

export default useGenres;
