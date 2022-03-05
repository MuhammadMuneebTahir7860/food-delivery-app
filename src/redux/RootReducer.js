
import { combineReducers} from 'redux';
import ResturantsReducer from './reducers/ResturantsReducer';
import DishesReducer from './reducers/DishesReducer';
import UserAuthReducer from './reducers/UserAuthReducer';
const RootReducer=combineReducers({
    ResturantsReducer,
    DishesReducer,
    UserAuthReducer,
})

export default RootReducer;