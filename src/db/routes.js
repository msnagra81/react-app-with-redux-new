// import {express} from 'express'
// import {bodyParser} from 'body-parser'
// import {mysql} from 'mysql'

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const upload = require('express-fileupload');
require('dotenv').config(); 

const connection = mysql.createPool({
  host     : process.env.REACT_APP_DB_HOST,
  port     : process.env.REACT_APP_DB_PORT,
  user     : process.env.REACT_APP_USER, 
  password : process.env.REACT_APP_PASSWORD,
  database : process.env.REACT_APP_DB
});


const app = express();

app.use(upload());
app.use(bodyParser.json(),function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // app.use(bodyParser.urlencoded({ extended: false }))
    next();
    });

app.get('/Products', function(req, res){

    // connection.getConnection(function( err, connection){
        connection.query('SELECT * from product_details where isDeleted =0', function(error, results, fields){
            if(error) throw error;

            res.send(results)
        })
    })
// });

app.post('/api/addProduct', function(req,res){
    console.log(req.body)
    var title= req.body.modelName;
    var price = req.body.price;
    var company = req.body.company;
    var info = JSON.stringify(req.body.info);
    var img = req.body.fileName;

    connection.query("INSERT INTO product_details (title, img, price, company, info, inCart, count, total)"
    +" VALUES('"+title+"','"+img+"',"+price+",'"+company+"','"+info+"',"+0+","+0+","+0+")", function(error, results, fields){
        if(error){
            console.log(error)
            return res.send(error)
        }

        res.send(results)
    })
})

app.post('/uploadImage',function(req,res){
    if(req.files === null){
        return ({msg: "No file uploaded"});
    }

    const file = req.files.file;

    file.mv(`${__dirname}/../../public/img/${file.name}`, function(err){
        if(err){
            console.log(err);
            res.send("Error Occured");
            return res.status(500).send(err);
        }
        else{
            res.send("File Uploaded successfully!")
        }
    })    
})

app.post('/deleteProduct',function(req,res){
    let id = req.body.prodId
    connection.query("UPDATE product_details set isDeleted=1 where id="+id), function(error, results, fields){
        if(error){
            console.log(error)
            return res.send(error)
        }

        res.send(results)
    }


})

app.listen(3001, () => {
    console.log('Go to http://localhost:3001/Products so you can see the data.');
   });