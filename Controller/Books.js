const { v4: uuidv4 } = require('uuid');

var db=require('../db');


function GetBooks(req, res) {
    var sql="SELECT * FROM books ";
    db.query(sql,(err,rows,fields)=>{
        if (!err) {
            res.status(200).send(rows);
        }
        else {
            res.status(500).send({error:'Something went wrong!'});
        }
    })
  
}

function GetBook(req, res) {
    var id=req.params.id
    var sql=`SELECT * FROM books WHERE id=${id} `;
    db.query(sql,(err,rows,fields)=>{
        if (rows!==null) {
            res.status(200).send(rows);
        }
        else if(rows==null) {
            res.status(500).send({ status: 404, message: `Book with specified id: ${req.params.id} does not exists` });
        }
        else throw err;
    });
    
    
}

function AddBook(req, res) {
       var id=uuidv4()
       
        var bookname=req.body.bookname
        var author= req.body.author
        var price=req.body.price        

        var sql=`INSERT INTO books(id,bookname,author,price)VALUES("${id}","${bookname}","${author}","${price}")`
        db.query(sql,(err,result)=>{
            if (!err) {
                res.status(201).send({ message: "Book added successfully" });
            } else {
                throw err;
            }
        });
    
        
}

function DeleteBook(req, res) {
    var id=req.params.id;

    var sql=`DELETE FROM books WHERE id=${id} `;
    db.query(sql,(err,result)=>{
        if (!err) {
            res.status(201).send({ message: "Book deleted successfully" });
        } else {
            throw err;
        }
    });

    
    
}

function UpdateBook(req, res) {

   
    var bookname=req.body.bookname
    var author= req.body.author
    var price=req.body.price

    var sql=`UPDATE books SET bookname=${bookname},author=${author},price=${price}`;
    db.query(sql,(err,result)=>{
        if (!err) {
            res.status(201).send({ message: "Book updated successfully" });
        } else {
            throw err;
        }
    });

    
}



module.exports = { GetBook, GetBooks, AddBook, DeleteBook, UpdateBook }