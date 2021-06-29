import axios from 'axios';
const url="http://localhost:3000/products/";

export default function apiService(index, range, callback){
    const apiUrl= url+index+'/'+range
    axios.get(apiUrl).then(response => {
       if(callback) callback(response.data);
       else console.log(response)
    }).catch(error => {
          console.log(error)
    })
}