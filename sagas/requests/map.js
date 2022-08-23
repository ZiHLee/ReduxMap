import axios from 'axios';

export function requestGetMap(){
    return axios.request({
        method: 'get',
        url: "https://62fc57abe4bcaf535194c4f1.mockapi.io/zhtestapi/maps"
    })
}
