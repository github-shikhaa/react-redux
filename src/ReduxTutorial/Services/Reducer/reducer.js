import { ADD_TO_CART }  from "../constants";

const initalState = {
  cardData: [],
};
export default function cardItems(state = [], action) {
  switch (action.type) {
     case ADD_TO_CART:
        console.warn('reducer',action);
        return [
            ...state,
          {
            cardData: action.data,
          }
        ];

         break;
     default:
         return state;
  }
}
