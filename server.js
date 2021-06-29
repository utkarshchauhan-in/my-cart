const express = require('express')
const axios = require('axios')
const cors = require('cors')
const app = express();

const url="https://run.mocky.io/v3/05e9651d-528e-4d7c-a60b-bae8f09684c6";

let productList=[];
let total=0;

axios.get(url).then(response => {
    productList=response.data.products;
    total=productList.length;
}).catch(error => {
    console.log(error);
})

app.get('/products/:index/:range', cors(), (req, res) => {
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