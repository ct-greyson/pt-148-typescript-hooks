import { ItemState } from "./ItemState";
import ItemActions from "./ItemActions";

// state - the state parameter gives us access to the current state we are keeping track of
// action - specifies the type of the action/which reducer function to run, and includes the payload
//our item Reducer will always return our updated state
const itemReducer = (state: ItemState, action: ItemActions): ItemState => {
    //switch statement - alternative syntax for if else statements
    switch(action.type){
        case "ADD_ITEM":
            console.log("Add Item clicked!")
            console.log(action.payload)
            // getting access to the data we passed in our payload through the dispatch
            const newItem = action.payload;
            
            //state.items - our current items array state

            const newItemState = [...state.items, newItem]

            //take our existing state and replace it with our new state variable 
            // ...state makes it so we can grab all of the other properties that our object might contain.  we then overwrite the properties we are trying to update by specifying them after the ...state
            return { ...state, items: newItemState }
        case "DELETE_ITEM":
            console.log("here im deleting!")
            // action.payload will be the id we need to delete by
            // .filter() - delete by id - MOST COMMON WAY TO DELETE FROM ARRAYS IN REACT!!!!
            // check every item inside our state
            // if item.id does not equal our action.payload, add it to our result
            // this makes it so we keep every item EXCEPT the one whose id we're trying to delete
            const removeItemState = state.items.filter((item) => item.id !== action.payload)

            return { ...state, items: removeItemState }
        default:
            return state;
    }

}

export default itemReducer