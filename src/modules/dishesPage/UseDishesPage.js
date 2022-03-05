import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import {GetDishes} from '../../redux/actions/DishesActions';



export default function UseDishesPage(){
    const[resturantName,setResturantName]=useState('');
    const[dishesLoading,setDishesLoading]=useState(false);
    const [spacing, setSpacing] = useState(1);
    const dispatch=useDispatch();
    const dishesData=useSelector(state=>state.DishesReducer.dishes);
    useEffect(()=>{
        dispatch(GetDishes(setDishesLoading));
    },[])
    // const newArray=resturantsData.fil
    return[setResturantName,dishesData,dishesLoading,spacing]
}