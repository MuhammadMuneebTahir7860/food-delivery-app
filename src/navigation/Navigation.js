import NavBar from "../commonComponents/navBar/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "../modules/LandingPage/LandingPage";
import Footer from "../commonComponents/footer/Footer";
import DishesPage from "../modules/dishesPage/DishesPage";
import UserLogin from "../userAuth/userLogin/UserLogin";
import UserSignup from '../userAuth/signUp/UserSignup';
import PublicRoute from "../customDefinedRouting/PublicRouting";
import { useSelector } from "react-redux";
import SplashScreen from "../splashScreen/SplashScreen";
import GetCurrentUserUidHook from "../userCommoncustomHooks/GetCurrentUserUidHook";
import GetUserOnAuthStateChangedHook from "../userCommoncustomHooks/GetUserOnAuthStateChangedHook";
export default function Navigation() {
  const authState = useSelector(state => state.UserAuthReducer.isUserLoggedIn)
  const[loading]=GetUserOnAuthStateChangedHook();
  const[uid]=GetCurrentUserUidHook();
  console.log(loading);
  if(loading ){
      return (
          <SplashScreen />
      )
  }
    return (
        <Router>
            <NavBar />
            <Switch>
            <Route exact path="/">
            <LandingPage />
          </Route>
          <PublicRoute path="/user-login" auth={authState}>
                    <UserLogin />
                 </PublicRoute>  
                <PublicRoute path='/user-signup' auth={authState}>
                    <UserSignup />
                </PublicRoute>
          <Route path='/resturants/:name'>
              <DishesPage />
          </Route>
            </Switch>
            <Footer />
        </Router>
    )
}