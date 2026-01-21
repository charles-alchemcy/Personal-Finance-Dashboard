import axios from 'axios';
export const getUserData = (userId) => {
    return axios.get(`/api/user-data/${userId}`);
};