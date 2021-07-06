import axios from 'axios';

let host = 'http://localhost:3000';
if (process.env.NODE_ENV == 'production') {
  host = 'https://uc-cart.herokuapp.com';
}
const url=host+"/products/";

export default function apiService(index, range, callback){
    const apiUrl= url+index+'/'+range
    axios.get(apiUrl).then(response => {
       if(callback) callback(response.data);
       else console.log(response)
    }).catch(error => {
          console.log(error)
    })
}