import {ADD_TO_CART,REMOVE_FROM_CART} from '../Constants'

const initialState = {
    cardData : []
};

export default function cardItems(state=[], action){
    
    switch(action.type){
       case ADD_TO_CART : 
            // console.warn("reducer",action);
            return [
                ...state,
                {cardData: action.data}
            ]
        case REMOVE_FROM_CART : 
          console.warn("reducer",action);
            const updatedCardData = state.slice(0, -1); // Create a new array without the last item and we r removing the items one by on onclick
            return updatedCardData;
        default :
          return state;
    }
}