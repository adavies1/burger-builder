import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-builder-ea6d0.firebaseio.com/'
});

export default instance;