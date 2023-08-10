import {combineReducers} from 'redux';
import cardItems from '../Reducers/reducer'

// export default combineReducers(
//     cardItems,
// )
  
const rootReducer = combineReducers({
    cardItems, // Use as a key-value pair
    // Other reducers can be added here in the future
  });
  
  export default rootReducer;
