import { useState } from "react"
import { useDispatch } from "react-redux";
import { userSignUp } from "../../redux/actions/UserAuthActions";


export default function UseUserSignup(){
    const dispatch=useDispatch();
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[country,setCountry]=useState('');
    const [city, setCity] = useState('');
    const[phoneNumber,setPhoneNumber]=useState('');
    const[userName,setUserName]=useState('');
    const[signupLoading,setSignupLoading]=useState(false);
    const signupHandler = () =>{
        const userData={
            email,
            password,
            city,
            country,
            phoneNumber,
            userName,
        }
        if(email!='' && password!='' && country!='' && city!='' && phoneNumber!='' && userName!=''){
            dispatch(userSignUp(userData,setSignupLoading))
        }
        else{
            alert('All fields are required')
        }

    }
    return[signupHandler,signupLoading,setSignupLoading,email,setEmail,password,setPassword,country,setCountry,city, setCity,phoneNumber,setPhoneNumber,userName,setUserName]
}