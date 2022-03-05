import Grid from '@material-ui/core/Grid';
import TextEllipsis from 'react-text-ellipsis';
import { Link } from 'react-router-dom';
import {useStyles} from './ResturantsCarsStyle';

export default function ResturantsCard({ resturants }) {
    const classes = useStyles();
    return (
        <Grid className={classes.card} key={resturants} item lg={3} md={3} sm={6} xs={12}>
            <div className={classes.paper}>
                <Link className={classes.link} to={`/resturants/${resturants.name}`}>
                    <div className={classes.imageDiv}>
                        <img className={classes.image} src={resturants.image} alt="" />
                    </div>
                    <TextEllipsis
                        lines={2}
                        tag={'p'}
                        ellipsisChars={'...'}
                        tagClass={'className'}
                        debounceTimeoutOnResize={200}
                        useJsOnly={true}>
                        <p className={classes.name}>{resturants.name}</p>
                    </TextEllipsis>
                </Link>
                <div> 
                </div>
                <div >
                    <p className={classes.location}>{resturants.location}</p>
                </div>

            </div>

        </Grid>
    )
}

