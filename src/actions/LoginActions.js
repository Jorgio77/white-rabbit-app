import { AccessToken, LoginManager } from 'react-native-fbsdk';
import { firebase } from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';

import {
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    LOGGING_IN,
    LOG_OUT_SUCCESS
} from './types';

// FB Login in 2 steps:
// "classic": login the app to FB
// FireBase: We take the token from the FB credential and pass it to FireBase

export function fbLogin(){
    return async(dispatch) => {
        dispatch({ type: LOGGING_IN });
        await LoginManager.logInWithPermissions(['public_profile']).then(
            function(result) {
            if (result.isCancelled) {
                console.log('Login was cancelled');
            } else {
                console.log('Login was successful with permissions: '
                + result.grantedPermissions.toString());
            }
            },
            function(error) {
            dispatch({ type: LOGIN_FAILED, payload: error });
            }
        );

        const accessToken = await AccessToken.getCurrentAccessToken();

        if (!accessToken) {
            dispatch({ type: LOGIN_FAILED, payload: "could not retrieve access token" });
        }
    
        const credential = firebase.auth.FacebookAuthProvider.credential(accessToken.accessToken);
    
        const fireBaseCredential = await firebase.auth().signInWithCredential(credential);
        console.log(fireBaseCredential);
        const {user, additionalUserInfo} = fireBaseCredential
        dispatch({type: LOGIN_SUCCESS, payload: {uid: user.uid, isNewUser: additionalUserInfo.isNewUser }})
    }
}



export function phoneLogin() {
    return async(dispatch) => {
        dispatch({ type: LOGGING_IN });
        const confirmation = await auth().signInWithPhoneNumber('+39 3280553181');
        try {
            const response = await confirmation.confirm('111111'); // User entered code
            dispatch({ type: LOGIN_SUCCESS, payload: {uid: response.uid, isNewUser: false }});
        } catch (error) {
            dispatch({ type: LOGIN_FAILED, payload: error });
        }
    }
}

export function logOut(navigation) {
    return async(dispatch) => {
       await firebase.auth().signOut();
       navigation.navigate("Login");
       dispatch({type: LOG_OUT_SUCCESS});
    }
    
}