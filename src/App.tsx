import './App.css'
import {Grid, GridItem} from "@chakra-ui/react";
import Navbar from "@/components/NavBar.tsx";
import GameGrid from "@/components/GameGrid.tsx";
import GenreList from "@/components/GenreList.tsx";
import {useState} from "react";
import type {Genre} from "@/hooks/useGenres.ts";
import PlatformSelector from "@/components/PlatformSelector.tsx";


function App() {

    const [selectedGenres, setSelectedGenres] = useState<Genre | null>(null)

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
                <GenreList selectedGenre={selectedGenres} onSelectedGenre={(genre)=>setSelectedGenres(genre)}/>
            </GridItem>

            <GridItem area={"main"}>

                <PlatformSelector/>
                <GameGrid selectedGenre={selectedGenres}/>
            </GridItem>
        </Grid>

    )
}

export default App
