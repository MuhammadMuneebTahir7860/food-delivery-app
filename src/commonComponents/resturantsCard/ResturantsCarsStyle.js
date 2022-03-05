import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles(() => ({
    card: {
        marginBottom: 10,
    },
    paper: {
        height: "auto",
        padding: "5px 20px 5px 20px !important",
        lineHeight: .3,
    },
    image: {
        margin: 'auto',
        display: "flex",
        width: '100%',
        height: '100%',
        marginBottom: -30,
        "@media (max-width: 968px)": {
            height: '100%',
        },
        "@media (max-width: 568px)": {
            width: '100%',
            height: '100%',
        },
    },
    imageDiv: {
        height: 160,
        "@media (max-width: 968px)": {
            height: 230,
        },
        "@media (max-width: 668px)": {
            height: 230,
        },
        "@media (max-width: 568px)": {
            height: "auto",
        },
        '&:hover' :{
            transition:".4s",
            transform:"scale(1.1)",
        }
    },
    name:{
        "@media (max-width: 568px)": {
            marginTop:43,
        },
    },
    link: {
        textDecoration: "none !important",
        color: "black !important",
    }
}));