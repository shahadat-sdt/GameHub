import useData from "@/hooks/useData.ts";
import type {Genre} from "@/hooks/useGenres.ts";
import type {Platform} from "@/hooks/usePlatforms.ts";


export interface Game {
    id: number,
    name: string,
    background_image: string,
    parent_platforms: { platform: Platform }[],
    metacritic: number
}


const useGames = (selectedPlatform: Platform | null, selectedGenre: Genre | null) =>
    useData<Game>('/games', {
        params: {
            platforms: selectedPlatform?.id,
            genres: selectedGenre?.id

        }
    }, [selectedPlatform?.id, selectedGenre?.id]);


export default useGames;