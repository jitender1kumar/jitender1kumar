const express = require('express');
const connectDB = require('./db/db');

// express
const app = express();
//body parser
app.use(express.json());


const bodyParser = require('body-parser');


app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
 });

connectDB();
const qtyperouter = require('./router/qtyperoutes')
const router = require('./router/routes')
const basetyperouter = require('./router/basetyperoutes')
const productrouter = require('./router/productroutes')
const pprouter = require('./router/pproutes')
const ivoicerouter = require('./router/ivoicerouter')
const itemsrouter = require('./router/itemsrouter')
const taxrouter = require('./router/taxrouter')
const dinerouter = require('./router/dinerouter')
const floorrouter = require('./router/floorroutes')
const chairouter = require('./router/chairrouter')
const chairsgetbytableidrouter = require('./router/chairsgetbytableidrouter')
const customersouter = require('./router/customersroutes')
const getproductbycategoryrouter = require('./router/getproductbycategoryid')
const chairsrunningorderrouter = require('./router/chairsrunningorderrouter')
const getorderrecordbydate = require('./router/getorderbydate')

app.use('/ctype', router)
app.use('/qtype', qtyperouter)
app.use('/basetype', basetyperouter)
app.use('/pro', productrouter)
app.use('/pp', pprouter)
app.use('/ivoice', ivoicerouter)
app.use('/tax', taxrouter)
app.use('/itm', itemsrouter)
app.use('/dine', dinerouter)
app.use('/floor', floorrouter)   
app.use('/chairsgetbytableid', chairsgetbytableidrouter)       
app.use('/chair', chairouter)
app.use('/customers', customersouter)
app.use('/productbycategory', getproductbycategoryrouter)
app.use('/chairsrunningorder', chairsrunningorderrouter)
app.use('/getorderrecordbydate', getorderrecordbydate)
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));