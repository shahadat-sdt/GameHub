import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "@/hooks/useGames.ts";
import GameCard from "@/components/GameCard.tsx";
import GameCardContainer from "@/components/GameCardContainer.tsx";
import GameCardSkeleton from "@/components/GameCardSkeleton.tsx";
import type {Genre} from "@/hooks/useGenres.ts";
import type {Platform} from "@/hooks/usePlatforms.ts";

interface Props {
    selectedGenre: Genre | null;
    selectedPlatform: Platform | null;
}

const GameGrid = ({selectedPlatform ,selectedGenre}: Props) => {

    const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const {data, error, isLoading} = useGames(selectedPlatform, selectedGenre);
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} gap={3} padding='10px'>
                {isLoading && skeleton.map(s =>
                    <GameCardContainer key={s}>
                        <GameCardSkeleton/>
                    </GameCardContainer>)}

                {data.map(game =>
                    <GameCardContainer key={game.id}>
                        <GameCard game={game}/>
                    </GameCardContainer>
                )}
            </SimpleGrid>

        </>
    );
};

export default GameGrid;
