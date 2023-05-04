import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  searchText?: string;
  sortOption?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOption: (sortOption: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setGenreId: (genreId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
  setPlatformId: (platformId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
  setSortOption: (sortOption) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOption } })),
}));

export default useGameQueryStore;
