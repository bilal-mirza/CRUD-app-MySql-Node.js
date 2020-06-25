var express = require('express'); //import express library
var mysql = require('mysql')
var app = express(); 
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'nodedb'
})
const port = process.env.PORT || 3000
// Conneciton check
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
});

// Index route
app.get('/', function(req,res) {              
    res.send('<h1>Welcome to CRUD app</h1>');               
 });

// Insert product 1
app.get('/addprod1', (req, res) => {
    let post = {name:'adidas shoe', price:'250'};
    let sql = 'INSERT INTO products SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Product 1 added...');
    });
});

// Insert product 2
app.get('/addprod2', (req, res) => {
    let post = {name:'nike shoe', price:'450'};
    let sql = 'INSERT INTO products SET ?';
    let query = db.query(sql, post, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Product 2 added...');
    });
});

// Display all products
app.get('/listprod', (req, res) => {
    db.query('SELECT * FROM products', (err, rows, fields) => {
        if (!err)
            res.send(rows);   //this will show all products as a response from server on browser
        else
            console.log(err);
    })
});

// Display product by id
app.get('/listprod/:id', (req, res) => {
    db.query('SELECT * FROM products WHERE id = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
});
   
// Update product price
app.get('/update/:id', (req, res) => {
    let newPrice = '5000';    // new price
    let sql = `UPDATE products SET price = '${newPrice}' WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Price Updated...');
    });
});

// Delete post
app.get('/delete/:id', (req, res) => {
    let sql = `DELETE FROM products WHERE id = ${req.params.id}`;
    let query = db.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Product deleted...');
    });
});

app.listen(port,() => {
    console.log(`Server running at port `+port);
  });
