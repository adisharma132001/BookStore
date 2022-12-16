
var db=require('../db');

function purchase(req, res) {
    var sql=`SELECT * FROM books WHERE bookname=${req.params.bookname} `;
    db.query(sql,(err,rows,fields)=>{
        if (!err) {
            var id=rows._id
            var bookname= rows.bookname
            var author=rows.author
            var price=rows.price

            var sql=`INSERT INTO purchase(id,bookname,author,price)VALUES("${id}","${bookname}","${author}","${price}")`
            db.query(sql,(err,result)=>{
                if (!err) {
                    res.status(201).send({ message: "Book purchased successfully" });
                } else {
                    throw err;
                }
            });
        }
        else {
            res.status(500).send({error:'Something went wrong!'});
        }
    })
  
   
}

function Getpurchased(req, res) {

   var sql="SELECT * FROM purchase ";
    db.query(sql,(err,rows,fields)=>{
        if (!err) {
            res.status(200).send(rows);
        }
        else {
            res.status(500).send({error:'Something went wrong!'});
        }
    })
  
}

module.exports = { purchase,Getpurchased }