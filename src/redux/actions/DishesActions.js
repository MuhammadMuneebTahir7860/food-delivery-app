import {db} from '../../config/Firebase';

export const GetDishes=(setDishesLoading)=> async (dispatch)=>{

    try{
        setDishesLoading(true)
        const getData=await db.collection('dishes').get();
        const dataArray=[];
        getData.forEach(item => {
            dataArray.push({docId:item.id,...item.data()});
        });
        dispatch(
            {
                type:'GET_DISHES',
                payload:dataArray,
            }
        );
    }
    catch(error){
        console.log(error.message);
    }
    finally{
        setDishesLoading(false)
    }
}