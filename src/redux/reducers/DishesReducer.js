


const initialState = {
    dishes: [],
};

const DishesReducer = (state = initialState, action) => {
    switch (action.type) {
            case 'GET_DISHES':
                return{
                ...state,
                dishes:action.payload,
            }
            
        default:
            return state;
    }
}

export default DishesReducer;