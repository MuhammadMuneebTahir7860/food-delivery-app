import React from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { Link } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import UseUserSignup from './UseUserSignup';
import Input from '@material-ui/core/Input';
import { useStyles } from './UserSignupStyle';
import DialogTitle from '@material-ui/core/DialogTitle';
import LockIcon from '@material-ui/icons/Lock';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
export default function UserSignup() {
    const classes = useStyles();
    const [signupHandler,signupLoading,setSignupLoading,email,setEmail,password,setPassword,country,setCountry,city, setCity,phoneNumber,setPhoneNumber,userName,setUserName] = UseUserSignup();
    return (
        <div>
            <div className={classes.signupForm} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">
                    <LockIcon className={classes.avatarImage} alt="lock-image" />
                </DialogTitle>
                <DialogContent>
                    <p className={classes.signupHeading}>SignUp</p>
                    <DialogContentText style={{ textAlign: 'center' }}>
                        Buy all your favorite items in one place
                    </DialogContentText>
                    <Input
                        autoFocus
                        margin="dense"
                        id="username"
                        placeholder="Username"
                        type="text"
                        fullWidth
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    /><br /><br /><br />
                    <Input
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
                        id="number"
                        placeholder="Phone Number"
                        type="number"
                        fullWidth
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    /><br /><br /><br />
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel id="demo-simple-select-outlined-label">Country</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    onChange={(e)=>setCountry(e.target.value)}
                                    value={country}
                                    label="Country"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value="Faisalabad">Pakistan</MenuItem>
                                    <MenuItem value="Lahore">UK</MenuItem>
                                    <MenuItem value="Islamabad">India</MenuItem>
                                    <MenuItem value="Islamabad">Dubai</MenuItem>
                                    <MenuItem value="Islamabad">Canada</MenuItem>
                                    <MenuItem value="Islamabad">Germany</MenuItem>
                                    <MenuItem value="Islamabad">Austrailia</MenuItem>
                                    <MenuItem value="Islamabad">England</MenuItem>
                                    <MenuItem value="Islamabad">South Africa</MenuItem>
                                </Select>
                            </FormControl><br />
                            <br />
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel id="demo-simple-select-outlined-label">City</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    id="demo-simple-select-outlined"
                                    onChange={(e)=>setCity(e.target.value)}
                                    value={city}
                                    label="City"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value="Faisalabad">Faisalabad</MenuItem>
                                    <MenuItem value="Lahore">Lahore</MenuItem>
                                    <MenuItem value="Islamabad">Islamabad</MenuItem>
                                    <MenuItem value="Islamabad">Karachi</MenuItem>
                                    <MenuItem value="Islamabad">Sialkot</MenuItem>
                                    <MenuItem value="Islamabad">Gujranwala</MenuItem>
                                    <MenuItem value="Islamabad">Peshawar</MenuItem>
                                    <MenuItem value="Islamabad">Quetta</MenuItem>
                                    
                                </Select>
                            </FormControl>
                        <br /><br /><br />
                        <Input
                            margin="dense"
                            id="password"
                            placeholder="Passowrd"
                            type="password"
                            fullWidth
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        /><br /><br /><br />
                        {signupLoading?<CircularProgress disableShrink />
                        :
                         <button onClick={signupHandler}  class="button"><span>Signup</span></button>
}
                        <br />
                </DialogContent>
            </div>
            </div>
            );
}
