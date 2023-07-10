import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (id: number) => void;
  setPlatformId: (id: number) => void;
  setSortorder: (order: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) =>
    set(() => ({ gameQuery: { searchText: searchText } })),
  setGenreId: (id) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId: id } })),
  setPlatformId: (id) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId: id } })),
  setSortorder: (order) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder: order } })),
}));

export default useGameQueryStore;
