import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { GetCurrentUserUid} from"../redux/actions/UserAuthActions";

export default function GetCurrentUserUidHook(){
    const[uid,setUid]=useState('');
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(GetCurrentUserUid(setUid))
    },[])
    return[uid]
}