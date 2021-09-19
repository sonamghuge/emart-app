import axios from "axios";

let url ='http://localhost:4000';

export function getProducts(){
    return axios.get(`${url}/products`)
    .then(response=> response.data)
}

export function getFashions(){
    return axios.get(`${url}/fashions`)
    .then(response=> response.data)
}