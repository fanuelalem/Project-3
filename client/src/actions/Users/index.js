import {
    GET_USERS,
    GET_USERS_ERROR,
    GET_MATCHES,
    GET_MATCHES_ERROR,
    // GET_CURRENT_USER,
    // GET_CURRENT_USER_ERROR,
} from '../types';


import axios from 'axios';

export const getAllUsers = () => async dispatch => {
    try {
        const { data } = await axios.get('http://localhost:3000/api/user');
        dispatch({ type: GET_USERS, payload: data });
    } catch (e) {
        dispatch({ type: GET_USERS_ERROR, payload: 'Something went wrong, please refresh the page to try again' });
    }
};

 
export const getAllMatches = () => async dispatch => {
    try {
        const { data } = await axios.get('http://localhost:3000/api/user/matches', { headers: { 'authorization': localStorage.getItem('token') } });
        dispatch({ type: GET_MATCHES, payload: data });
        console.log(data,'sdcdc')
    } catch (e) {
        dispatch({ type: GET_MATCHES_ERROR, payload: 'Something went wrong, please refresh the page to try again' });
    }
};



// export const getCurrentUserData = (id) => async dispatch => {
//     try {
//         const { data } = await axios.get(`/api/users/${id}`, { headers: { 'authorization': localStorage.getItem('token') } });
//         dispatch({ type: GET_CURRENT_USER, payload: data });
//     } catch (e) {
//         dispatch({ type: GET_CURRENT_USER_ERROR, payload: 'Something went wrong, please refresh and try again' })
//     }
// }

// {best: data.best, forThem: data.forThem, forMe: data.forMe }