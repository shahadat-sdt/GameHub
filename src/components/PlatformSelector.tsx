import {Button, Menu, MenuItem, MenuRoot, MenuTrigger} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import usePlatforms from "@/hooks/usePlatforms.ts";

const PlatformSelector = () => {


    const {data, error} = usePlatforms();

    if (error) return null

    return (
        <MenuRoot>
            <MenuTrigger asChild>

                <Button variant='subtle'>Menu<BsChevronDown/></Button>

            </MenuTrigger>


            <Menu.Positioner>
                <Menu.Content>
                    {data.map(platform => <MenuItem value={platform.id.toString()}> {platform.name}</MenuItem>)}
                </Menu.Content>
            </Menu.Positioner>

        </MenuRoot>
    );
};

export default PlatformSelector;
