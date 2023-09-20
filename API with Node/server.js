require('dotenv').config();
const mongoose = require('mongoose');
const products = require('./models/productmodel');
const express = require('express');
const app = express();

const port = process.env.port||3030;
const dburl = process.env.DBurl

app.use(express.json())  // middleware
app.use(express.urlencoded({ extended:false })) // middleware ??
 
app.get('/', (req, res) => {
    res.send("Hello DataBase!");
});

////////////////////////////////
// CRUD operation on database

// add data in mongodb
app.post('/apidb', async(req, res) => {
    try {
        const data = await products.create(req.body);
        res.status(200).json(data);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message}); 
    }
});

// fetch all data from database ; uing get
app.get('/apidb',async(req, res) => {
    try {
        const data = await products.find({});
        res.status(200).json(data);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
});

// fetch id based data from database
app.get('/apidb/:id', async(req, res) => {
    try {
        const data = await products.findById(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
});

// update data in database based on id
app.put('/apidb/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const product = await products.findByIdAndUpdate(id, req.body);
        if (!product){
            return res.status(404).json({message:`Product not found ${id}`});
        }else{
            res.status(200).json({Before: product, After: await products.findById(id)});
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
});

// remove or delete data from database
app.delete('/apidb/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await products.findByIdAndDelete(id);
        if(!data){
            return res.status(404).json({message:'error: No such product'});
        }
        res.status(200).json({message: 'product has been deleted', data: data});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})
////////////////////////////////
// conect to database
mongoose.connect(dburl)
.then(() => {
    console.log("Database connection")    
    app.get('/hello', (req, res) => {
        res.send("ok got it ");
    });

}).catch(err => {console.log(err)});

////////////////////////////////
// listen to server 
app.listen(port, () => console.log("server is active at " + port))