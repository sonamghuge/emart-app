import axios from "axios";

let url ='http://localhost:8080';

export function getProducts(){
    return axios.get(`${url}/Products/all`)
    .then(response=> response.data)
}

export function getFashions(){
    return axios.get(`${url}/fashions`)
    .then(response=> response.data)
}