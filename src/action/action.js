import { baseURL } from './config';

var axios = require('axios');
export const login = async (data) => {
    try {
        const header = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = axios.post(`${baseURL}/auth/login`, data, header)
        return res.data;
    }
    catch (err) { return err }
}
export const signup = async (data) => {
    try {
        const header = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = axios.post(`${baseURL}/auth/register`, data, header)
        return res.data;
    }
    catch (err) { return err }
}
export const postquery = async () => {
    try { }
    catch (err) { return err }
}
export const getqiery = async () => {
    try { }
    catch (err) { return err }
}