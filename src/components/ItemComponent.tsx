import React, { useState, useReducer, FormEvent } from "react";
import itemReducer from "../reducer/ItemReducer";
import { Item } from "../reducer/ItemState";

const ItemComponent = () => {
  // useReducer gives us access to the current state and the dispatch for our actions
  // to set it up, we pass it the reducer we want to utilize, and an initial state
  const [state, dispatch] = useReducer(itemReducer, { items: [] });
  const [itemInput, setItemInput] = useState("");

  const handleAddItem = (event: FormEvent) => {
    event.preventDefault()

    //create a newItem object 
    const newItem: Item = {
        name: itemInput,
        id: Date.now()
    }

    //add that newItem to our state that is being managed by useReducer
    // dispatch our ADD_ITEM action so we can access our ADD_ITEM reducer function, utilizing our newItem as the payload
    dispatch({ type: "ADD_ITEM", payload: newItem })
  };

  const handleRemoveItem = (id: number) => {
    console.log(id)
    dispatch({ type: "DELETE_ITEM", payload: id })
  }

  return (
    <>
      <h2>Item Form</h2>
      <form onSubmit={handleAddItem}>
        <input
          type="text"
          autoComplete="off"
          value={itemInput}
          onChange={(event) => setItemInput(event.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {state.items.map((item) => (
            <li key={item.id}>
                {item.name} <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </li>
        ))}
      </ul>
    </>
  );
};

export default ItemComponent;
