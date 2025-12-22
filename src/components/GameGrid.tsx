import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "@/hooks/useGames.ts";
import GameCard from "@/components/GameCard.tsx";
import GameCardContainer from "@/components/GameCardContainer.tsx";
import GameCardSkeleton from "@/components/GameCardSkeleton.tsx";


const GameGrid = () => {

    const skeleton = [1, 2, 3, 4, 5, 6];
    const {games, error, isLoading} = useGames();
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} gap={10} padding='10px'>
                {isLoading && skeleton.map(s =>
                    <GameCardContainer>
                        <GameCardSkeleton key={s}/>
                    </GameCardContainer>)}

                {games.map(game =>
                    <GameCardContainer>
                        <GameCard key={game.id} game={game}/>
                    </GameCardContainer>
                )}
            </SimpleGrid>

        </>
    );
};

export default GameGrid;
