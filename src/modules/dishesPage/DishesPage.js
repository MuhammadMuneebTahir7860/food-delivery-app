import './DishesPageStyle.css';
import { useParams } from 'react-router-dom';
import UseDishesPage from './UseDishesPage';
import { useEffect } from 'react';
import DishesCard from '../../commonComponents/dishesCard/DishesCard';
import Grid from '@material-ui/core/Grid';
import SkeletonLoader from '../../commonComponents/skeletonLoader/SkeletonLoader';
import Container from '@material-ui/core/Container';

export default function DishesPage() {
    const { name } = useParams();
    const [setResturantName, dishesData,dishesLoading,spacing] = UseDishesPage();
    useEffect(() => {
        setResturantName(name)
    }, [])
    return (
        <div className='dishesContainer'>
            <Container>
            <h1 className='dishesHeading'>Dishes</h1>
                <Grid container className="root" spacing={2}>
                    <Grid item xs={12} >
                        <Grid container spacing={spacing}>
                        {dishesLoading && 
                                <div className='loader'>
                                <SkeletonLoader />
                                </div>
                                }
                            {
                                dishesData.map((item) => {
                                    return (
                                        <DishesCard dishes={item} />
                                    )
                                })
                            }
                        </Grid>
                    </Grid >
                </Grid >
            </Container>
        </div >
    )
}