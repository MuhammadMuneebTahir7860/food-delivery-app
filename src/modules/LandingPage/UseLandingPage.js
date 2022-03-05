import React,{ useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { GetResturants } from "../../redux/actions/ResturantsActions";

export default function UseLandingPage(){
    const resturantsData=useSelector(state=>state.ResturantsReducer.resturants);
    const [spacing, setSpacing] = React.useState(1);
    const[resturantsLoading,setResturantsLoading]=React.useState(false);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(GetResturants(setResturantsLoading));
    },[])

    return[resturantsData,spacing,resturantsLoading]
}