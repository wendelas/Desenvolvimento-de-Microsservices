const cfg = ()=>{
    return{
        jwt_secret:"V$CoD#",
        jwt_expires:"1d",
        salt:10,
        db:"mongodb://localhost:27017/mydb?directConnection=true"
        //db:"mongodb+srv://localhost/?readPreference=primary&ssl=false"
    }
}

module.exports = cfg();

//mongodb://localhost:27017/?readPreference=primary&ssl=false&directConnection=true
//mongodb+srv://localhost/?readPreference=primary&ssl=false