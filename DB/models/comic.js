const mongoose = require('mongoose');
const Schema= mongoose.Schema;
const date = new Date();
const nowYear= date.getFullYear();
const comicSchema = new Schema({
    name: {  type:String, require:true,maxLength:100 },
    author: {  type:String, default: null  },
    status: {   type:String, enum:["Đang cập nhật", "Hoàn thành"], default:"Hoàn thành"   } ,
    url_img:{  type:String,   },
    year:{  type:Number,
        min: nowYear-20,
        max: nowYear,
        default:nowYear
    },
    description: { type:String, default:"Chưa cập nhật"}, 
    genre:[{type: Schema.Types.ObjectId, ref:'genre'}],
    updated : {type:Date , default: Date.now}

})
const Comic = mongoose.model('comic', comicSchema); 
module.exports = Comic;


// enum:(()=>{ 
//     let curYear=(new Date()).getFullYear();
//     let listYear=[]
//     for (let i=0; i<20;i++){
//         listYear[i]=curYear-19+i;
//     }
//     return listYear;
// })()