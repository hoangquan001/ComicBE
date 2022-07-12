const mongoose = require('mongoose');
const Schema= mongoose.Schema;
const chapterSchema = new Schema({
    name:{ type:String ,require: true},
    chapter:{ type: Number , require:true },
    update:{ type:Date, require:true},
    idComic:[{ type: mongoose.SchemaTypes.ObjectId, ref:'comic'}]
})  
const chapter = mongoose.model('chapter',chapterSchema);
module.exports =  chapter;