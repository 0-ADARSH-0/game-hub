import { useQuery } from "@tanstack/react-query";
import platformService from "../services/platformService";
import { FetchResponse } from "../services/api-client";
import platformsList from "../data/platformsList";
import Platform from "../entities/Platform";

const usePlatforms = () => {
  return useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: platformService.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: platformsList,
  });
};

export default usePlatforms;
