import axios from "axios";

const instance = axios.create({
    baseURL: "https://react-my-burger-rw-default-rtdb.firebaseio.com/"
});

export default instance;