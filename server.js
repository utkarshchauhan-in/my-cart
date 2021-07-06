const express = require('express')
const axios = require('axios')
const path = require('path');
const app = express();

// serve static assets normally
app.use(express.static(__dirname + '/dist'));

app.get('/', function (request, response) {
  response.sendFile(path.resolve(__dirname, 'index.html'));
});

const url="https://run.mocky.io/v3/05e9651d-528e-4d7c-a60b-bae8f09684c6";

let productList=[];
let total=0;

let requiredKeys= ["gender", "productName", "brand", "primaryColour", "searchImage", "price", "productId" ]

function filterData(data){
    let filtered=[];
    data.forEach(element => {
        let obj={};
        requiredKeys.forEach(key => {
            obj[key]=element[key];
        });
        filtered.push(obj);
    });
    return filtered;
}

axios.get(url).then(response => {
    productList=filterData(response.data.products);
    total=productList.length;
}).catch(error => {
    console.log(error);
})

app.get('/products/:index/:range', (req, res) => {
    let index=req.params.index;
    let range=req.params.range;
    let products=[...productList].splice(index, range);
    const response= {
        products: products,
        total: total
    };
    res.send(response);
});

const port = 3000;
app.listen(port, () => console.log(`Listening on port ${port}..`));