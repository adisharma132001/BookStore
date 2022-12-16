var db=require('../db');
const { v4: uuidv4 } = require('uuid');


function GetCusts(req, res) {
    var sql="SELECT * FROM customers ";
    db.query(sql,(err,rows,fields)=>{
        if (!err) {
            res.status(200).send(rows);
        }
        else {
            res.status(500).send({error:'Something went wrong!'});
        }
    })
  
}

function GetCust(req, res) {
    var id=req.params.id
    var sql=`SELECT * FROM customers WHERE id=${id} `;
    db.query(sql,(err,rows,fields)=>{
        if (rows!==null) {
            res.status(200).send(rows);
        }
        else if(rows==null) {
            res.status(500).send({ status: 404, message: `Customer with specified id: ${req.params.id} does not exists` });
        }
        else throw err;
    });
    
    
}

function AddCust(req, res) {
       var id=uuidv4()
        var firstname=req.body.firstname
        var lastname=req.body.lastname
        var email= req.body.email
        var city=req.body.city

        var sql=`INSERT INTO customers(id,firstname,lastname,email,city)VALUES("${id}","${firstname}","${lastname}","${email}","${city}")`
        db.query(sql,(err,result)=>{
            if (!err) {
                res.status(201).send({ message: "Customer added successfully"});
            } else {
                throw err;
            }
        });
    
        
}

function DeleteCust(req, res) {
    var id=req.params.id;

    var sql=`DELETE FROM customers WHERE id=${id} `;
    db.query(sql,(err,result)=>{
        if (!err) {
            res.status(201).send({ message: "Customer deleted successfully" });
        } else {
            throw err;
        }
    });

    
    
}

function UpdateCust(req, res) {

    var firstname=req.body.firstname
    var lastname=req.body.lastname
    var email= req.body.email
    var city=req.body.city

    var sql=`UPDATE customers SET firstname=${firstname},lastname=${lastname},email=${email},city=${city}`;
    db.query(sql,(err,result)=>{
        if (!err) {
            res.status(201).send({ message: "Customer updated successfully" });
        } else {
            throw err;
        }
    });

    
}



module.exports = { GetCust, GetCusts, AddCust, DeleteCust, UpdateCust }