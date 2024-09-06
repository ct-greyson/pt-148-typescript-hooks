//interface for our Item objects that has an id(number) and a name (string)
export interface Item {
    id: number,
    name: string
}

//interface that includes the property items, which will be a list of items
export interface ItemState {
    items: Item[] // an array of our Item type
    // itemSize: number
    // itemOwner: string
}