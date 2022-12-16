const { v4: uuidv4 } = require('uuid');

var db=require('../db');


function GetSellers(req, res) {
    var sql="SELECT * FROM sellers ";
    db.query(sql,(err,rows,fields)=>{
        if (!err) {
            res.status(200).send(rows);
        }
        else {
            res.status(500).send({error:'Something went wrong!'});
        }
    })
  
}

function GetSeller(req, res) {
    var id=req.params.id
    var sql=`SELECT * FROM sellers WHERE id=${id} `;
    db.query(sql,(err,rows,fields)=>{
        if (rows!==null) {
            res.status(200).send(rows);
        }
        else if(rows==null) {
            res.status(500).send({ status: 404, message: `Seller with specified id: ${req.params.id} does not exists` });
        }
        else throw err;
    });
    
    
}

function AddSeller(req, res) {
       var id=uuidv4()
        var firstname=req.body.firstname
        var bookname=req.body.bookname
        var email= req.body.email    

        var sql=`INSERT INTO sellers(id,firstname,bookname,email)VALUES("${id}","${firstname}","${bookname}","${email}")`
        db.query(sql,(err,result)=>{
            if (!err) {
                res.status(201).send({ message: "Sellers added successfully" });
            } else {
                throw err;
            }
        });
    
        
}

function DeleteSeller(req, res) {
    var id=req.params.id;

    var sql=`DELETE FROM sellers WHERE id=${id} `;
    db.query(sql,(err,result)=>{
        if (!err) {
            res.status(201).send({ message: "Seller deleted successfully" });
        } else {
            throw err;
        }
    });

    
    
}

function UpdateSeller(req, res) {

    var firstname=req.body.firstname
    var lastname=req.body.lastname
    var email= req.body.email
    var city=req.body.city

    var sql=`UPDATE sellers SET firstname=${firstname},bookname=${bookname},email=${email}`;
    db.query(sql,(err,result)=>{
        if (!err) {
            res.status(201).send({ message: "Seller updated successfully" });
        } else {
            throw err;
        }
    });

    
}



module.exports = { GetSeller, GetSellers, AddSeller, DeleteSeller, UpdateSeller }