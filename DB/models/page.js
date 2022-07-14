const mongoose = require('mongoose');

const Schema= mongoose.Schema;

const pageSchema = new Schema({
    pagenums:{ type: Number , require:true },
    url_img :{ type:String, require:true},
    chapter:[{ type: mongoose.SchemaTypes.ObjectId, ref:'chapter'}]
})
const Page = mongoose.model('chapter',pageSchema);
module.exports =  Page;