import './App.css'
import {Grid, GridItem, HStack} from "@chakra-ui/react";
import Navbar from "@/components/NavBar.tsx";
import GameGrid from "@/components/GameGrid.tsx";
import GenreList from "@/components/GenreList.tsx";
import {useState} from "react";
import type {Genre} from "@/hooks/useGenres.ts";
import PlatformSelector from "@/components/PlatformSelector.tsx";
import type {Platform} from "@/hooks/usePlatforms.ts";
import SortSelector from "@/components/SortSelector.tsx";

export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
}

function App() {
    const [gameQuery, setGameQuery] = useState({} as GameQuery);

    return (
        <Grid
            templateAreas={{
                base: '"nav" "main"',
                lg: '"nav nav" "aside main"'
            }}
            templateColumns={{
                base: '1fr',
                lg: '200px 1fr'
            }}>
            <GridItem area={"nav"}>
                <Navbar/>
            </GridItem>

            <GridItem area={"aside"} display={{base: "none", lg: "Block"}} paddingX={5}>
                <GenreList selectedGenre={gameQuery.genre}
                           onSelectedGenre={(genre) => setGameQuery({...gameQuery, genre})}/>
            </GridItem>

            <GridItem area={"main"}>

                <HStack gap={5} marginBottom={5} paddingLeft={2}>
                    <PlatformSelector selectedPlatform={gameQuery.platform}
                                  onSelectedPlatform={(platform) => setGameQuery({...gameQuery, platform})}/>
                    <SortSelector/>
                </HStack>


                <GameGrid gameQuery={gameQuery}/>
            </GridItem>
        </Grid>

    )
}

export default App
