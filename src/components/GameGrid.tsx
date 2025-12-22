import {SimpleGrid, Text} from "@chakra-ui/react";
import useGames from "@/hooks/useGames.ts";
import GameCard from "@/components/GameCard.tsx";
import GameCardContainer from "@/components/GameCardContainer.tsx";
import GameCardSkeleton from "@/components/GameCardSkeleton.tsx";


const GameGrid = () => {

    const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const { data, error, isLoading} = useGames();
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} gap={3} padding='10px'>
                {isLoading && skeleton.map(s =>
                    <GameCardContainer key={s}>
                        <GameCardSkeleton />
                    </GameCardContainer>)}

                {data.map(game =>
                    <GameCardContainer key={game.id}>
                        <GameCard  game={game}/>
                    </GameCardContainer>
                )}
            </SimpleGrid>

        </>
    );
};

export default GameGrid;
