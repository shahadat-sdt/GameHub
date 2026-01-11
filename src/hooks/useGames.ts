import useData from "@/hooks/useData.ts";
import type {Platform} from "@/hooks/usePlatforms.ts";
import type {GameQuery} from "@/App.tsx";


export interface Game {
    id: number,
    name: string,
    background_image: string,
    parent_platforms: { platform: Platform }[],
    metacritic: number
}


const useGames = (gameQuery: GameQuery) =>
    useData<Game>('/games', {
        params: {
            platforms: gameQuery.platform?.id,
            genres: gameQuery.genre?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText

        }
    }, [gameQuery]);


export default useGames;