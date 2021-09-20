import axios from "axios";

let url ='http://localhost:8080';

export function getProducts(){
    return axios.get(`${url}/products`)
    .then(response=> response.data)
}

export function getFashions(){
    return axios.get(`${url}/Products/all`)
    .then(response=> response.data)
}

export function getHome(){
    return axios.get(`${url}/home`)
    .then(response=> response.data)
}

export function getElectronics(){
    return axios.get(`${url}/Products/getbyCatid/9`)
    .then(response=> response.data)
}

export function getSport(){
    return axios.get(`${url}/Products/all`)
    .then(response=> response.data)
}

export function getWomens(){
    return axios.get(`${url}/Category/getbyCatid/10`)
    .then(response=> response.data)
}

export function getKids(){
    return axios.get(`${url}/Products/getbyCatid/12`)
    .then(response=> response.data)
}

export function getTelevision(){
    return axios.get(`${url}/Products/getbyCatid/13`)
    .then(response=> response.data)
}


export function getReferigerator(){
    return axios.get(`${url}/Products/getbyCatid/14`)
    .then(response=> response.data)
}

export function getWashingmachine(){
    return axios.get(`${url}/Products/getbyCatid/15`)
    .then(response=> response.data)
}

export function getMobiles(){
    return axios.get(`${url}/Products/getbyCatid/7`)
    .then(response=> response.data)
}



export function getLaptops(){
    return axios.get(`${url}/Products/getbyCatid/9`)
    .then(response=> response.data)
}


export function getCricket(){
    return axios.get(`${url}/Products/getbyCatid/16`)
    .then(response=> response.data)
}


export function getFootball(){
    return axios.get(`${url}/Products/getbyCatid/17`)
    .then(response=> response.data)
}


export function getBadminton(){
    return axios.get(`${url}/Products/getbyCatid/18`)
    .then(response=> response.data)
}

export function getCameras(){
    return axios.get(`${url}/Products/getbyCatid/8`)
    .then(response=> response.data)
}

export function getWwatches(){
    return axios.get(`${url}/Products/getbyCatid/22`)
    .then(response=> response.data)
}

export function getWfragrances(){
    return axios.get(`${url}/Products/getbyCatid/21`)
    .then(response=> response.data)
}

export function getBeautyproducts(){
    return axios.get(`${url}/Products/getbyCatid/19`)
    .then(response=> response.data)
}

export function getJwellery(){
    return axios.get(`${url}/Products/getbyCatid/20`)
    .then(response=> response.data)
}

export function getMwatches(){
    return axios.get(`${url}/Products/getbyCatid/23`)
    .then(response=> response.data)
}

export function getMfragrances(){
    return axios.get(`${url}/Products/getbyCatid/25`)
    .then(response=> response.data)
}

export function getWallets(){
    return axios.get(`${url}/Products/getbyCatid/24`)
    .then(response=> response.data)
}

export function getMens(){
    return axios.get(`${url}/Products/getbyCatid/11`)
    .then(response=> response.data)
}