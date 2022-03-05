import { GetUserOnAuthStateChanged } from "../redux/actions/UserAuthActions";
import { useDispatch } from "react-redux";
import { useEffect,useState} from "react";
export default function GetUserOnAuthStateChangedHook(){
    const dispatch=useDispatch(); 
    const[loading,setLoading]=useState(true);
    useEffect(()=>{
      dispatch(GetUserOnAuthStateChanged(setLoading));
    },[])
    setTimeout(() => {
      setLoading(false)
    },2000);
    return[loading]
}