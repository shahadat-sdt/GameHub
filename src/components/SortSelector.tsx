import {Button, Menu, MenuRoot, MenuTrigger} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";

const SortSelector = () => {
    return (
        <MenuRoot>
            <MenuTrigger asChild>

                <Button variant='subtle'>
                    Order by: Relevance
                    <BsChevronDown/></Button>

            </MenuTrigger>


            <Menu.Positioner>
                <Menu.Content>
                    <Menu.Item value={"Name"}> Name</Menu.Item>
                </Menu.Content>
            </Menu.Positioner>

        </MenuRoot>
    );
};

export default SortSelector;
