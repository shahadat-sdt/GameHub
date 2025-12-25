import {Button, Menu, MenuRoot, MenuTrigger} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";

interface Props {
    onSelectSortOrder: (sortOrder: string) => void;
    selectedSortOrder: string;
}

const SortSelector = ({onSelectSortOrder, selectedSortOrder}: Props) => {

    const sortOrders = [
        {value: '', label: "Relevance"},
        {value: '-added', label: "Date Added"},
        {value: 'name', label: "Name"},
        {value: '-released', label: "Release Date"},
        {value: '-rating', label: "Average Rating"},
        {value: '-metacritic', label: "Popularity"},

]
    const currentSortOrder = sortOrders.find((order) => selectedSortOrder === order.value);

    return (

        <MenuRoot>
            <MenuTrigger asChild>

                <Button variant='subtle'>
                    Order by: {currentSortOrder?.label || "Relevance"}
                    <BsChevronDown/></Button>

            </MenuTrigger>


            <Menu.Positioner>
                <Menu.Content>
                    {sortOrders.map(order =>
                        <Menu.Item onClick={() => onSelectSortOrder(order.value)}
                                   value={order.value}>{order.label}</Menu.Item>)}
                </Menu.Content>
            </Menu.Positioner>

        </MenuRoot>
    );
};

export default SortSelector;
