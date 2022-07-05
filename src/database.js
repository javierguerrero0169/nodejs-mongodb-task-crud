import {connect} from 'mongoose'
// import {MONGODB_URI} from './config'
 


(async () => {
    try {
       const db = await connect('mongodb+srv://javierguerrero:javier&&69@cluster0.lxawflx.mongodb.net/crud-mongo?retryWrites=true&w=majority') 
       console.log("db connected to",db.connection.name)
    }catch (error){
        console.error(error)
    }
})()