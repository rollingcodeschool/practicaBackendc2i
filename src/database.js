import mongoose from "mongoose";

// const url = 'mongodb://localhost:27017/cafeteriac2i'; //bd local
const url = 'mongodb+srv://mdanielacardozo:mtkZQ5FjoyI9ZEIk@clusterdani.7tfbsbj.mongodb.net/cafeteria'; //bdPublicada
// const url = 'mongodb+srv://comisionc2i:C18PDiw8EH8lfZTr@clustercomision2i.xkgumte.mongodb.net/cafec2i'; //bdPublicada

// mongoose.connect(url);
// const connection = mongoose.connection;
// connection.once('open',()=>{
//     console.log('BD conectada')
// })
const connectDB = async ()=>{
    try{
        await mongoose.connect(url);
        console.log('BD connectada')
    }catch(error){
        console.log(error)
    }
}
connectDB();