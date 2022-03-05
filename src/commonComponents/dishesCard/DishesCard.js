    


import Grid from '@material-ui/core/Grid';
import TextEllipsis from 'react-text-ellipsis';
import { Link } from 'react-router-dom';
import {useStyles} from './DishesCardStyle';

export default function DishesCard({ dishes }) {
    const classes = useStyles();
    return (
        <Grid className={classes.card} key={dishes} item lg={3} md={3} sm={6} xs={12}>
            <div className={classes.paper}>
                <Link className={classes.link} to={`/dishes/${dishes.docId}`}>
                    <div className={classes.imageDiv}>
                        <img className={classes.image} src={dishes.image} alt="" />
                    </div>
                    <TextEllipsis
                        lines={2}
                        tag={'p'}
                        ellipsisChars={'...'}
                        tagClass={'className'}
                        debounceTimeoutOnResize={200}
                        useJsOnly={true}>
                        <p className={classes.name}>{dishes.name}</p>
                    </TextEllipsis>
                </Link>
                <div> 
                </div>
                <div >
                    <p className={classes.location}>Rs.{dishes.price}</p>
                </div>

            </div>

        </Grid>
    )
}

