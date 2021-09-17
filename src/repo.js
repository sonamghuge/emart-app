import axios from "axios";

let url ='http://localhost:4000';

export function getAnimals(){
    return axios.get(`${url}/animals`)
    .then(response=> response.data)
}