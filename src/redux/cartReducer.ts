import { Reducer } from "redux";
import { ProductInterface } from "../interface/ProductInterface";

export interface AppState {
  cart: number;
  items: ProductInterface[];
}

interface UpdateCartCountAction {
  type: "UPDATE_CART_COUNT";
  payload: number;
}

interface AddItemToCartAction {
  type: "ADD_ITEM_TO_CART";
  payload: ProductInterface;
}

interface RemoveItemFromCartAction {
  type: "REMOVE_ITEM_FROM_CART";
  payload: number;
}

interface IncrementItemQuantityAction {
  type: "INCREMENT_ITEM_QUANTITY";
  payload: number; // Item ID
}

interface DecrementItemQuantityAction {
  type: "DECREMENT_ITEM_QUANTITY";
  payload: number; // Item ID
}

interface EmptyCartAction {
  type: "EMPTY_CART";
}

type AppAction =
  | UpdateCartCountAction
  | AddItemToCartAction
  | RemoveItemFromCartAction
  | IncrementItemQuantityAction
  | DecrementItemQuantityAction
  | EmptyCartAction;
export const initialState: AppState = {
  cart: 0,
  items: [],
};

const rootReducer: Reducer<AppState, AppAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "UPDATE_CART_COUNT":
      return {
        ...state,
        cart: action.payload,
      };
    case "ADD_ITEM_TO_CART":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "REMOVE_ITEM_FROM_CART":
      return {
        items: state.items.filter((item) => item.id !== action.payload),
        cart: state.cart - 1,
      };

    case "INCREMENT_ITEM_QUANTITY": {
      const updatedItems = state.items.map((item) => {
        if (item.id === action.payload) {
          const newQuantity = item.quantity ? item.quantity + 1 : 1;

          return {
            ...item,
            quantity: newQuantity,
          };
        }
        return item;
      });

      return {
        ...state,
        items: updatedItems,
      };
    }

    case "DECREMENT_ITEM_QUANTITY": {
      const updatedItems = state.items.map((item) => {
        if (
          item.id === action.payload &&
          (item.quantity ? item.quantity : 1) > 1
        ) {
          return {
            ...item,
            quantity: item.quantity ? item.quantity - 1 : 1,
          };
        }
        return item;
      });

      return {
        ...state,
        items: updatedItems,
      };
    }
    case "EMPTY_CART": {
      return {
        ...state,
        items: [],
      };
    }

    default:
      return state;
  }
};

export const updateCartCount = (count: number): UpdateCartCountAction => {
  return {
    type: "UPDATE_CART_COUNT",
    payload: count,
  };
};

export const addItemToCart = (item: ProductInterface): AddItemToCartAction => {
  return {
    type: "ADD_ITEM_TO_CART",
    payload: item,
  };
};

export const removeItemFromCart = (index: number): RemoveItemFromCartAction => {
  return {
    type: "REMOVE_ITEM_FROM_CART",
    payload: index,
  };
};

export const incrementItemQuantity = (
  id: number
): IncrementItemQuantityAction => {
  return {
    type: "INCREMENT_ITEM_QUANTITY",
    payload: id,
  };
};

export const decrementItemQuantity = (
  itemId: number
): DecrementItemQuantityAction => {
  return {
    type: "DECREMENT_ITEM_QUANTITY",
    payload: itemId,
  };
};
export const emptyCart = (): EmptyCartAction => {
  return {
    type: "EMPTY_CART",
  };
};

export default rootReducer;
