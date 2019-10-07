import * as actionTypes from "../actions/types";

const initialState = {
  items: [
    {
      drink: "Latte",
      option: "Small",
      quantity: 2
    },
    {
      drink: "Espresso",
      option: "Large",
      quantity: 1
    }
  ]
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      let addItem = state.items.find(
        add =>
          action.payload.drink === add.drink &&
          action.payload.option === add.option
      );
      if (addItem) {
        addItem.quantity += action.payload.quantity;
        return {
          ...state,
          items: [...state.items]
        };
      } else {
        return {
          ...state,
          items: state.items.concat(action.payload)
        };
      }
    case actionTypes.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(a => a !== action.payload)
      };
    case actionTypes.CHECKOUT:
      return {
        ...state,
        items: []
      };
    default:
      return state;
  }
};

export default cartReducer;
