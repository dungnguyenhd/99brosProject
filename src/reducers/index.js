import { combineReducers } from 'redux';
import {
  GET_ALL_PRODUCT,
  GET_NUMBER_CART,
  ADD_CART,
  DECREASE_QUANTITY,
  INCREASE_QUANTITY,
  DELETE_CART,
} from '../actions';

const initProduct = {
  numberCart: 0,
  Carts: [],
  _products: [],
};

function todoProduct(state = initProduct, action) {
  switch (action.type) {
    case GET_NUMBER_CART:
      return {
        ...state,
      };
    case ADD_CART:
      case ADD_CART:
        var addNumberCart = 0;
        if (state.numberCart == 0) {
          let cart = {
            id: action.payload.id,
            quantity: 1,
            tennha: action.payload.tennha,
            anh: action.payload.anh,
            mucgia: action.payload.mucgia,
            mota: action.payload.mota,
          };
          state.Carts.push(cart);
          addNumberCart = 1;
        } else {
          var listId = [];
          for(var i=0; i<state.Carts.length; i++){
            listId.push(state.Carts[i].id);
          }

          if(listId.length>0){
            if(!listId.includes(action.payload.id)){
              let _cart = {
                id: action.payload.id,
                quantity: 1,
                tennha: action.payload.tennha,
                anh: action.payload.anh,
                mucgia: action.payload.mucgia,
                mota: action.payload.mota,
              };
              state.Carts.push(_cart);
              addNumberCart = 1;
            }
          }
        }
        return {
          ...state,
          numberCart: state.numberCart + addNumberCart,
        };
    case INCREASE_QUANTITY:
      state.numberCart++;
      state.Carts[action.payload].quantity++;

      return {
        ...state,
      };
    case DECREASE_QUANTITY:
      let quantity = state.Carts[action.payload].quantity;
      if (quantity > 1) {
        state.numberCart--;
        state.Carts[action.payload].quantity--;
      }

      return {
        ...state,
      };
    case DELETE_CART:
      console.log("Delete cart");
      console.log(action.payload);
      let quantity_ = state.Carts[action.payload].quantity;
      return {
        ...state,
        numberCart: state.numberCart - quantity_,
        Carts: state.Carts.filter((item) => {
          return item.id != state.Carts[action.payload].id;
        }),
      };
    default:
      return state;
  }
}
const ShopApp = combineReducers({
  _todoProduct: todoProduct,
});
export default ShopApp;
