import {Button, Menu, MenuItem, MenuRoot, MenuTrigger} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import usePlatforms, {type Platform} from "@/hooks/usePlatforms.ts";


interface Props {
    onSelectedPlatform: (platform: Platform) => void
    selectedPlatform: Platform | null
}

const PlatformSelector = ({selectedPlatform, onSelectedPlatform}: Props) => {


    const {data, error} = usePlatforms();

    if (error) return null

    return (
        <MenuRoot>
            <MenuTrigger asChild>

                <Button variant='subtle'>
                    {selectedPlatform?.name || "Platforms" }
                    <BsChevronDown/></Button>

            </MenuTrigger>


            <Menu.Positioner>
                <Menu.Content>
                    {data.map(platform => <MenuItem onClick={() => onSelectedPlatform(platform)}
                                                    value={platform.id.toString()}> {platform.name}</MenuItem>)}
                </Menu.Content>
            </Menu.Positioner>

        </MenuRoot>
    );
};

export default PlatformSelector;
