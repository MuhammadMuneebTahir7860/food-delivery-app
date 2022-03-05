


const initialState = {
    resturants: [],
};

const ResturantsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_RESTURANT':
        const resturant=state.resturants;
            return {
                ...state,
                resturants:[...resturant,action.payload]
            }
            case 'DELETE_RESTURANT':{
                const newArray=state.resturants.filter((item)=>{
                    if(item.docId!=action.payload){
                        return item;
                    }
                })
                return{
                    ...state,
                    resturants:newArray,
                }
            }
            case 'UPDATE_RESTURANT':{
                let updateDataArray=state.resturants.map((item)=>{
                    if(action.payload.docId==item.docId){
                        return action.payload.editedData
                    }
                    else{
                        return item
                    }
                })
                console.log(updateDataArray);
                return{
                    ...state,
                    resturants:updateDataArray,
                }
            }
            case 'GET_RESTURANTS':
                return{
                ...state,
                resturants:action.payload,
            }
            
        default:
            return state;
    }
}

export default ResturantsReducer;