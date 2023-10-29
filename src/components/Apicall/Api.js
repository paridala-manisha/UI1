import axios from 'axios';

const url = "http://localhost:3006/details";

export const getDetails = async () => {
    return await axios.get(url);
}

// export const editDetails = async () => {
//     return await axios.put(url);
// }

// export const deleteDetails = async () => {
//     return await axios.delete(url);
// }

// export const createDetails = async () => {
//     return await axios.post(url);
// }