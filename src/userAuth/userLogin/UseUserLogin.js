
import { useState } from "react"
import { useDispatch } from "react-redux";
import { userLogin } from "../../redux/actions/UserAuthActions";


export default function UseUserLogin(){
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[loginLoading,setLoginLoading]=useState(false);
    const dispatch=useDispatch();
    const loginHandler = () =>{
        const userData={
            email,
            password,
        }
        if(email!='' && password!=''){
        dispatch(userLogin(userData,setLoginLoading))
        }
        else{
            alert('All fields are required');
        }
    }
    return[loginHandler,loginLoading,setLoginLoading,email,setEmail,password,setPassword]
}