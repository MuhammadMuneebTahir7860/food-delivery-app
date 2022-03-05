
import { makeStyles} from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    signupForm:{
        width:'50%',
        marginTop:80,
        margin:'auto',
        padding: "5px 20px 5px 20px !important",
        borderRadius: 10,
        boxShadow: "5px 5px 15px 15px #eeeeee",
        "@media (max-width: 568px)": {
            width:"80%",
         },
    },
    signupHeading:{
        textAlign:'center',
        fontSize:25,
        fontWeight:'bold',
        color:'#D3404D'
    },
    avatarImage:{
        width:50,
        height:50,
        display:'flex',
        margin:'auto',
        color:'#D3404D',
        marginBottom:-40
    },
   formControl:{
    margin: theme.spacing(1),
    width:"100%",
    backgroundColor: "white",
   }
}));