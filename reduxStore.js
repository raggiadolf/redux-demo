import { createStore } from "redux";

const initialState = {
  name: "GenericName"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_NAME":
      return { ...state, name: action.payload.name };
    default:
      return state;
  }
};

export default (store = createStore(reducer, initialState));
