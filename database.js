const{
    createPool
} = require('mysql');

const pool = createPool({
    host: "localhost",
    user: "root",
    passward: "",
    database: "test",
    connectionLimit:10
})

pool.query(`select * from  tbl_contact`, (err, result, fields)=>{
    if (err) {
        return console.log(err);
    }
    return console.log(result);
})