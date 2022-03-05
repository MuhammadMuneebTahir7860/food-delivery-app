import { makeStyles} from '@material-ui/core/styles';



export const useStyles = makeStyles(() => ({
  appBar:{
    boxShadow:'none !important',
  },
  headerContainer:{
    display: 'flex', 
    flex: 1,
     justifyContent: 'space-between', 
  },
  grow: {
    flexGrow: 1,
    marginBottom:-15,
  },
  navList:{
    listStyle:'none',
    display:'inline-flex',
    marginTop:25,
  },
  navListText:{
    marginRight:30,
    display:'flex',
    justifyContent:'center',
  },
  btnContainer:{
    marginTop:-8,
  },
  cartIcon:{
    color:'#D3404D',
    marginLeft:30,
    fontSize:30,
    transition:".2s",
    '&:hover' :{
    transform:'scale(1.6)',
    cursor:'pointer'
    }
  },
}));