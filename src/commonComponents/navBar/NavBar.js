import React from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import logo from '../../assets/logo.png';
import Grid from '@material-ui/core/Grid';
import { useStyles } from './NavBarStyle.js';
import TranslateIcon from '@material-ui/icons/Translate';
import Button from '@material-ui/core/Button';
import LoginButton from '../loginButton/LoginButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {Link} from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserDropDown from './UserDrowpDown';
export default function NavBar() {
    const classes = useStyles();
    const authState = useSelector(state => state.UserAuthReducer.isUserLoggedIn)
    return (
        <div className={classes.grow}>
            <React.Fragment>
                <AppBar className={classes.appBar} color='secondry' position="fixed">
                    <Toolbar>
                        <div className={classes.headerContainer}>
                                <div> 
                                   <Link to='/'><img src={logo} alt="logo" /></Link> 
                            </div>
                            <div>
                                <ul className={classes.navList}>
                                    <Hidden xsDown>
                                    <li className={classes.navListText}><TranslateIcon />EN US</li>
                                    </Hidden>
                                    <li className={classes.btnContainer}>
                                        {!authState?
                                         <Link to='/user-login'><LoginButton /></Link>:
                                            <UserDropDown />
                                        }
                                    </li>
                                    <li><ShoppingCartIcon className={classes.cartIcon} /></li>
                                </ul>
                            </div>
                        </div>
                    </Toolbar>
                </AppBar>
                <Toolbar />
            </React.Fragment>
        </div>
    );
}
