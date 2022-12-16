var mysql=require('mysql');

var connection=mysql.createConnection({
   host:'localhost',
   user:'root',
   password:'',
   database:'bookstore'
});

connection.connect((err)=>{
   if(err) throw err;
   console.log('Connected to mysql server');
});

module.exports=connection;