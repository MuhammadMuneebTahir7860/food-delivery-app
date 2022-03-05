import {db} from '../../config/Firebase';

export const GetResturants=(setResturantsLoading)=> async (dispatch)=>{

    try{
        setResturantsLoading(true)
        const getData=await db.collection('resturants').get();
        const dataArray=[];
        getData.forEach(item => {
            dataArray.push({docId:item.id,...item.data()});
        });
        dispatch(
            {
                type:'GET_RESTURANTS',
                payload:dataArray,
            }
        );
    }
    catch(error){
        console.log(error.message);
    }
    finally{
        setResturantsLoading(false)
    }
}