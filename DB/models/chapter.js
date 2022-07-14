const mongoose = require('mongoose');
const Schema= mongoose.Schema;
const chapterSchema = new Schema({
    name:{ type:String ,require: true},
    chapter:{ type: Number , require:true },
    update:{ type:Date, require:true},
    comic:[{ type: mongoose.SchemaTypes.ObjectId, ref:'comic'}]
})  
const Chapter = mongoose.model('chapter',chapterSchema);
module.exports =  Chapter;