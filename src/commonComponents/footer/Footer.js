import './FooterStyle.css';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import UseFooter from './UseFooter';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));
export default function Footer(){
    const classes = useStyles();
    const[footerData]=UseFooter();
    return(
        <>
        <div className='footerSection'>
            <Container>
            <div className={classes.root}>
                    <Grid container spacing={3}>
                        {
                            footerData.map((text) => {
                                return (
                                    <Grid md={3} sm={6} xs={6} lg={3}>
                                        <ul className='footerLists'>
                                            <li>
                                                <p className='headings'>
                                                    {text.heading}
                                                </p>
                                            </li>
                                            <div className='footerText'>
                                                <li>{text.list1}</li>
                                                <li>{text.list2}</li>
                                                <li>{text.list3}</li>
                                                <li>{text.list4}</li>
                                                <li>{text.list5}</li>
                                                <li>{text.list6}</li>
                                            </div>
                                        </ul>
                                    </Grid>
                                )
                            })

                        }
                    </Grid>
                </div>

                <div className='followSection'>
                    <h3>
                        FOLLOW US
                        </h3>
                    <div className='follwerImages'>
                        <FacebookIcon />
                        <InstagramIcon />
                        <TwitterIcon />
                        <YouTubeIcon  />
                    </div>
                </div>
            </Container>
            </div>
            <div className='copyrightSection'>
                <p>Free Classifieds in Pakistan &nbsp; &nbsp; .<span>&#169;</span> 2006-2021 FOOD CORNER</p>
            </div>
            </>
    )
}