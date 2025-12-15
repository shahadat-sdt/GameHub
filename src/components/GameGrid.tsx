
import {Text} from "@chakra-ui/react";
import useGames from "@/hooks/useGames.ts";



const GameGrid = () => {


    const {games, error} = useGames();
    return (
        <>
            {error && <Text>{error}</Text>}
            {games.map(game => <li key={game.id}> {game.name}</li>)}
        </>
    );
};

export default GameGrid;
