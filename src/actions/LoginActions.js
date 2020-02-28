import { AccessToken, LoginManager } from 'react-native-fbsdk';
import { firebase } from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

import {
    LOGIN_FAILED,
    LOGIN_SUCCESS,
    LOGGING_IN,
    LOG_OUT_SUCCESS,
    GETTING_GENERAL_SETTINGS,
    GET_GENERAL_SETTINGS_SUCCESS
} from './types';

//////FB LOGIN 

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

        const {user, additionalUserInfo} = fireBaseCredential

        dispatch({type: LOGIN_SUCCESS, payload: {uid: user.uid, isNewUser: additionalUserInfo.isNewUser }})
    }
}

/////PHONE LOGIN

export function phoneLogin() {
    return async(dispatch) => {
        dispatch({ type: LOGGING_IN });
        const confirmation = await auth().signInWithPhoneNumber('+39 3280553181');
        try {
            const response = await confirmation.confirm('111111'); // User entered code
            //check if it's a new user
            const documentSnapshot = await firestore()
                .collection('profiles')
                .doc(response.uid)
                .get();
                if(documentSnapshot.data()) { 
                    dispatch({ type: LOGIN_SUCCESS, payload: {uid: response.uid, isNewUser: false }});
                } else dispatch({ type: LOGIN_SUCCESS, payload: {uid: response.uid, isNewUser: true }});
        } catch (error) {
            dispatch({ type: LOGIN_FAILED, payload: error });
        }
    }
}

//////LOGOUT

export function logOut(navigation) {
    return async(dispatch) => {
       await firebase.auth().signOut();
       navigation.navigate("Login");
       dispatch({type: LOG_OUT_SUCCESS});
    }
}



///////OLD USER LOGGED IN FETCH HIS DETAILS:
///////SETTINGS (PREFERENCES - PICS)

export function getUserSettings(userId) {
    return async(dispatch) => {
        const db = firestore();
        const profileInfo = db.collection('profiles').doc(userId);
        const matchesCollection = db.collection('matches');
        const userLikedEvents = profileInfo.collection('event_reactions').where('like', '==', 1);
        const matchesOne = matchesCollection.where('profile_1', '==', userId).orderBy('time_stamp');
        const matchesTwo = matchesCollection.where('profile_2', '==', userId).orderBy('time_stamp');

        ////GETTING USER SETTINGS
        // dispatch({type: GETTING_GENERAL_SETTINGS});
        // profileInfo.get().then((doc) => {
        //     if(doc.exists) {
        //         const { 
        //             name, 
        //             bio, 
        //             work_title, 
        //             work_place, 
        //             university, 
        //             dob_day, 
        //             dob_month, 
        //             dob_year, 
        //             gender, 
        //             looking_for, 
        //             age_lower, 
        //             age_upper,
        //             img_0, img_1, img_2, img_3, img_4, img_5
        //         } = doc.data();
        //         dispatch({ 
        //             type: GET_GENERAL_SETTINGS_SUCCESS, 
        //             payload: {
        //                 name: name ? name : "",
        //                 bio: bio ? bio : "",
        //                 workTitle: work_title ? work_title : "",
        //                 workPlace: work_place ? work_place : "",
        //                 university: university ? university : "",
        //                 dobDay: dob_day ? dob_day : 1,
        //                 dobMonth: dob_month ? dob_month : 1,
        //                 dobYear: dob_year ? dob_year : 2020,
        //                 gender: gender ? gender : 0,
        //                 lookingFor: looking_for ? looking_for : 0,
        //                 ageMin: age_lower ? age_lower : 18,
        //                 ageMax: age_upper ? age_upper : 99,
        //                 pics: [img_0 ? img_0 : '', img_1 ? img_1 : '', img_2 ? img_2 : '', img_3 ? img_3 : '', img_4 ? img_4 : '', img_5 ? img_5 : '']
        //             } 
        //         })
        //     } else console.log("Dispatch fail")
        // });

        //GET USER LIKED EVENTS
        // SHOULD USE PROMISES INSTEAD OF AWAIT... I THINK
        // const likedEvents = [];
        // await userLikedEvents.get().then((querySnapshot) => {
        //     querySnapshot.forEach((doc) => {
        //         const event = doc.data();
        //         event.id = doc.id;
        //         likedEvents.push(event)
        //     });
        // });
        // likedEvents.forEach((event) => {console.log(event.id)})

        //GET MATCHES AND CHAT
        const matches = [];
        await matchesOne.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const match = doc.data();
                match.id = doc.id
                matches.push(match);
            })
        });
        await matchesTwo.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const match = doc.data();
                match.id = doc.id
                matches.push(match);
            })
        });
        //GET PROFILE INFO 
        matches.forEach((match) => {
            const key = match.profile_1 === userId ? match.profile_2 : match.profile_1;
            
        })
    }
}