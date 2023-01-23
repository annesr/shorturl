const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/hello', {
    useNewUrlParser:true, useUnifiedTopology:true

})



var counterSchema =
    {
        id: { type: String },
        seq: { type: Number }
    }

var Count = mongoose.model('Counter', counterSchema);


const sch ={
    id:{
     type:Number,
    },
    urlCode:{
     type:String,
    },
    mainurl:{
     type:String,
     required:true
    },
    baseurl:{
     type:String,
     required:true
    },
    shorturl:{
        type:String
    }
 
}


const x= mongoose.model('table',sch)


module.exports = {
    x:x,
    Count:Count
}



































































// const mongoose = require('mongoose')

// const shortid =require('shortid')

// //const hey = require('../../test')

// //const file = require('../../test')


// mongoose.connect('mongodb://127.0.0.1:27017/hello', {
//     useNewUrlParser:true, useUnifiedTopology:true

// })
// //mongoose.set('strictQuery', true)

// var counterSchema = mongoose.Schema(
//     {
//         _id: { type: String, required: true },
//         sequence_value: { type: Number, default: 1 }
//     }
// );

// var Counters = mongoose.model('Counters', counterSchema);


// // const m =new Counters ({
// //     _id :1
// //     })
    
// //     m.save().then(()=>{
// //         console.log(m);
    
// //     }).catch((error) => {
// //         console.log('error', error);
// //     })





// var sch =mongoose.Schema({
//     id:{
//      type:String,
//      required:true
     
//     },
//     shortid:{
//      type:String,
//      required:true,
//      default:shortid.generate
//     },
//     mainurl:{
//      type:String,
//      required:true
//     },
//     baseurl:{
//      type:String,
//      required:true
//     }
 
// })

 

// const x= mongoose.model('table',sch)
// // const modal = mongoose.model('model', x)






// // const getitem = () => {

// //     try {
// //        x.find({lean: true},(err, docs) => {
// //         if (err) console.log(err);
// //         else console.log(docs)
// //        })

       
// //     } catch (error) {
// //         console.log(error);
// //     }
    
// // }

// // getitem()


// // const y =new x ({
// // id:1,
// // mainurl:'www.google.com',
// // baseurl:'127.0.0.1:27017'
// // })

// // y.save().then(()=>{
// //     console.log(y);

// // }).catch((error) => {
// //     console.log('error', error);
// // })


// // async function getres() {
// //     try {
// //         const res =await x.find().sort({_id:-1}).limit(1)

// //         console.log(res[0]._id);

// //     } catch (error) {
// //         console.log(error.message);
        
// //     }
    
// // }

// // getres()


//  module.exports= { x }