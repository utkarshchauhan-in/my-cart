import axios from 'axios';
let port = process.env.PORT;
if (port == null || port == "") {
  port = 'https://localhost:8080';
}
const url=port+"/products/";

export default function apiService(index, range, callback){
    const apiUrl= url+index+'/'+range
    axios.get(apiUrl).then(response => {
       if(callback) callback(response.data);
       else console.log(response)
    }).catch(error => {
          console.log(error)
    })
}