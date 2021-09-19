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

export function getHome(){
    return axios.get(`${url}/home`)
    .then(response=> response.data)
}

export function getElectronics(){
    return axios.get(`${url}/electronics`)
    .then(response=> response.data)
}

export function getSport(){
    return axios.get(`${url}/sport`)
    .then(response=> response.data)
}

export function getWomen(){
    return axios.get(`${url}/women`)
    .then(response=> response.data)
}

export function getMen(){
    return axios.get(`${url}/men`)
    .then(response=> response.data)
}