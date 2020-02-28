import {
    GET_GENERAL_SETTINGS_SUCCESS
  } from '../actions/types';
  
    const INITIAL_STATE = {
        name: "",
        bio: "",
        workTitle: "",
        workPlace: "",
        university: "",
        dobDay: 1,
        dobMonth: 1,
        dobYear: 2020,
        gender: 0,
        lookingFor: 0,
        ageMin: 18,
        ageMax: 99,
        pics: ['','','','','','']
    };
  
    export default function (state = INITIAL_STATE, action) {
      switch (action.type) {
        case GET_GENERAL_SETTINGS_SUCCESS:
            const {name, bio, work_title, work_place, university, dob_day, dob_month, dob_year, gender, looking_for, age_lower, age_upper, pics} = action.payload
            return {
                ...state, 
                name: name ? name : "",
                bio: bio ? bio : "",
                workTitle: work_title ? work_title : "",
                workPlace: work_place ? work_place : "",
                university: university ? university : "",
                dobDay: dob_day ? dob_day : 1,
                dobMonth: dob_month ? dob_month : 1,
                dobYear: dob_year ? dob_year : 2020,
                gender: gender ? gender : 0,
                lookingFor: looking_for ? looking_for : 0,
                ageMin: age_lower ? age_lower : 18,
                ageMax: age_upper ? age_upper : 99,
                pics: pics
            }
        default:
          return state;
      }
    }
  