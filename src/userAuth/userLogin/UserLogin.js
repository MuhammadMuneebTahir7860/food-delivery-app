
import React from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { Link } from 'react-router-dom';
import UseUserLogin from './UseUserLogin';
import CircularProgress from '@material-ui/core/CircularProgress';
import Input from '@material-ui/core/Input';
import { useStyles } from './UserLoginStyle';
import DialogTitle from '@material-ui/core/DialogTitle';
import LockIcon from '@material-ui/icons/Lock';
export default function UserLogin() {
    const classes = useStyles();
    const [loginHandler,loginLoading,setLoginLoading,email,setEmail,password,setPassword,country,setCountry,city, setCity,phoneNumber,setPhoneNumber,userName,setUserName] = UseUserLogin();
    return (
        <div>
            <div className={classes.loginForm} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                    <LockIcon className={classes.avatarImage} alt="lock-image" />
                </DialogTitle>
                <DialogContent>
                    <p className={classes.loginHeading}>Login</p>
                    <DialogContentText style={{ textAlign: 'center' }}>
                        Buy all your favorite items in one place
                    </DialogContentText>
                    <Input
                        autoFocus
                        margin="dense"
                        id="email"
                        placeholder="Email"
                        type="email"
                        fullWidth
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    /><br /><br /><br />
                        <Input
                            margin="dense"
                            id="password"
                            placeholder="Passowrd"
                            type="password"
                            fullWidth
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        /><br /><br /><br />
                        {loginLoading ? <CircularProgress disableShrink />
                        :
                         <button onClick={loginHandler}  class="button"><span>Login </span></button>
                        }
                        <br />
                        <DialogContentText className={classes.signupBtnContainer}>
                            Don't have an account? <Link to='/user-signup' className={classes.signupBtn}>Signup </Link>
                        </DialogContentText>
                </DialogContent>
            </div>
            </div>
            );
}
