const mongoClient = require('mongodb').MongoClient

const dataBase = {
    name: null
} 
module.exports.connect = function(done){
    const url = 'mongodb://localhost:27017'
    const dbName = 'artfest'

    mongoClient.connect(url,(err,data)=>{
        if(err) return done(err)
        dataBase.name = data.db(dbName)
    })
    done()
}
module.exports.get = () => {
    return dataBase.name
}