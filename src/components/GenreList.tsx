import useGenres from "@/hooks/useGenres.ts";
import {Button, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import getCroppedImageUrl from "@/services/image-url.ts";

const GenreList = () => {

    const {data, isLoading, error} = useGenres()
    if (isLoading) return <Spinner/>
    if (error) return null
    return (

        <List.Root listStyleType="none">
            {data.map(genre =>
                <ListItem key={genre.id} paddingY='5px'>
                    <HStack>

                        <Image boxSize='32px' src={getCroppedImageUrl(genre.image_background)} borderRadius={8}/>
                        <Button variant='ghost' fontSize='lg'>{genre.name}</Button>

                    </HStack>
                </ListItem>)}
        </List.Root>
    );
};

export default GenreList;
