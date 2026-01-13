import useGenres, {type Genre} from "@/hooks/useGenres.ts";
import {Button, Heading, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import getCroppedImageUrl from "@/services/image-url.ts";

interface Props {
    onSelectedGenre: (genre: Genre) => void
    selectedGenre: Genre | null
}

const GenreList = ({selectedGenre, onSelectedGenre}: Props) => {

    const {data, isLoading, error} = useGenres()
    if (isLoading) return <Spinner/>
    if (error) return null
    return (
        <>


            <Heading fontSize='2xl' marginBottom={3}>Genres</Heading>
            <List.Root listStyleType="none">
                {data.map(genre =>
                    <ListItem key={genre.id} paddingY='5px'>
                        <HStack>
                            <Image boxSize='32px' objectFit='cover' src={getCroppedImageUrl(genre.image_background)}
                                   borderRadius={8}/>
                            <Button whiteSpace='normal' textAlign='left' onClick={() => onSelectedGenre(genre)}
                                    variant={genre.id === selectedGenre?.id ? 'subtle' : 'ghost'}
                                    fontSize='lg'>{genre.name}</Button>
                        </HStack>
                    </ListItem>)}

            </List.Root>
        </>
    );
};

export default GenreList;
