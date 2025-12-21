import {Card, Heading, HStack, Image} from "@chakra-ui/react";
import type {Game} from "@/hooks/useGames.ts";
import PlatformList from "@/components/PlatformList.tsx";
import CriticScore from "@/components/CriticScore.tsx";
import getCroppedUrl from "@/services/image-url.ts";

interface Props {
    game: Game;
}

const GameCard = ({game}: Props) => {
    return (
        <Card.Root>
            <Image src={getCroppedUrl(game.background_image)}/>
            <Card.Body>
                <Heading fontSize='2xl'>{game.name}</Heading>
                <HStack justifyContent="space-between">

                    <PlatformList platforms={game.parent_platforms.map((p => p.platform))}/>
                    <CriticScore score={game.metacritic}/>

                </HStack>
            </Card.Body>

        </Card.Root>
    );
};

export default GameCard;
