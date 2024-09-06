import { Item } from "./ItemState";

type ItemActions =
    { type: "ADD_ITEM", payload: Item } |
    { type: "DELETE_ITEM", payload: number }

export default ItemActions;