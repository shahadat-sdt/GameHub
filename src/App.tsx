import './App.css'
import {Grid, GridItem} from "@chakra-ui/react";
import Navbar from "@/components/NavBar.tsx";
import GameGrid from "@/components/GameGrid.tsx";
import GenreList from "@/components/GenreList.tsx";
import {useState} from "react";
import type {Genre} from "@/hooks/useGenres.ts";
import PlatformSelector from "@/components/PlatformSelector.tsx";
import type {Platform} from "@/hooks/usePlatforms.ts";


function App() {

    const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null)
    const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)

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
                <GenreList selectedGenre={selectedGenre} onSelectedGenre={(genre)=>setSelectedGenre(genre)}/>
            </GridItem>

            <GridItem area={"main"}>

                <PlatformSelector selectedPlatform={selectedPlatform} onSelectedPlatform={(platform) => setSelectedPlatform(platform)}/>
                <GameGrid selectedPlatform={selectedPlatform} selectedGenre={selectedGenre}/>
            </GridItem>
        </Grid>

    )
}

export default App
