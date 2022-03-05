

import { userAuth, db } from '../../config/Firebase';

export const userLogin = (userData,setLoginLoading) => async (dispatch) => {
    try {
        setLoginLoading(true)
        const userCredential = await userAuth.signInWithEmailAndPassword(userData?.email, userData?.password);
        const user = userCredential.user;
        dispatch(
            {
                type: 'LOGIN',
                payload: user,
            }
        );
    }
    catch (error) {
        alert(error.message)
    }
    finally {
        setLoginLoading(false)
    }
}

// Above Code for Login Action

export const userSignUp = (userData, setSignUpLoading) => async (dispatch) => {
    try {
        setSignUpLoading(true)
        const userCredential = await userAuth.createUserWithEmailAndPassword(userData?.email, userData?.password);
        const user = userCredential.user;
        const saveUserToDB = await db.collection('users').add({ ...userData, Uid: user.uid })
        dispatch(
            {
                type: 'SIGN_UP',
                payload: user,
            }
        );
    }
    catch (error) {
        alert(error.message)
    }
    finally {
        setSignUpLoading(false)
    }
}

// Above Code for SignUp Action

export const userLogout = () => async (dispatch) => {
    try {
        await userAuth.signOut();
        dispatch(
            {
                type: 'LOGOUT',
            }
        );
    }
    catch (error) {
        console.log(error.message);
    }
}

// Above Code for Logout Action

export const GetUserOnAuthStateChanged = (setLoading) => async (dispatch) => {
    try {
        await userAuth.onAuthStateChanged((user) => {
            if (user) {
                dispatch({
                    type: "GET_USER_ON_AUTH_STATE_CHANGED",
                    payload: user,
                })
            }
        })
    }
    catch (error) {
        console.log(error.message);
    }
    finally {
        // setLoading(false)
    }
}

// Above Code for GetUserOnAuthStateChanged Action


export const GetCurrentUserUid = (setUid) => async (dispatch) => {
    try {
        await userAuth.onAuthStateChanged((user) => {
            if (user) {
                setUid(user.uid)
            }
        })
    }
    catch (error) {
        console.log(error.message);
    }
    finally {

    }
}

// Above Code for GetCurrentUserUid Action



export const GetCurrentUserData = (setUserDetailsLoading) => async (dispatch) => {
    try {
        setUserDetailsLoading(true)
        const data = await db.collection('users').get();
        const userDataArray = [];
        data.forEach(item => {
            userDataArray.push({ docId: item.id, ...item.data() });
        });
        dispatch(
            {
                type: 'GET_CURRENT_USER_DATA',
                payload: userDataArray,
            }
        )
    }
    catch (error) {
        console.log(error.message)
    }
    finally {
        setUserDetailsLoading(false)
    }
}

// Above Code for GetCurrentUserData Action
