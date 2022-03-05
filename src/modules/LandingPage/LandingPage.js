import './LandingPageStyle.css';
import bannerImage from '../../assets/banner.jpg';
import Container from '@material-ui/core/Container';
import UseLandingPage from './UseLandingPage';
import ResturantsCard from '../../commonComponents/resturantsCard/ResturantsCard';
import Grid from '@material-ui/core/Grid';
import SkeletonLoader from '../../commonComponents/skeletonLoader/SkeletonLoader';
export default function LandingPage() {
    const [resturantsData, spacing,resturantsLoading] = UseLandingPage();
    return (
        <div>
            <div className='headingContainer'>
                <h1><span className='everythingText'>Everything</span> Availible</h1>
            </div>
            <div className='textContainer'>
                <p className='textStyle'>
                    Food, groceries, fresh milk, medicines, and a lot more on Pakistan’s <br />
                    favourite delivery app.
                </p>
            </div>
            <div className='bannerContainer'>
                <img className='bannerImage' src={bannerImage} alt="banner" />
            </div>
            <div className='resturantsContainer'>
                <Container>
                    <h1 className='resturantsHeading'>Resturants</h1>
                    <Grid container className="root" spacing={2}>
                        <Grid item xs={12} >
                            <Grid container spacing={spacing}>
                                {resturantsLoading && 
                                <div className='loader'>
                                <SkeletonLoader />

                                </div>
                                }
                                {
                                    resturantsData.map((item) => {
                                        return (
                                            <ResturantsCard resturants={item} />
                                        )
                                    })
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </div>
    )
}