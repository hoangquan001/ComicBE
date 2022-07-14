const Comic = require('../DB/models/comic')
class comicAPI {

    // Functions for OneComic
    // [GET]
    getOneComic(req, res) {

    }

    //[PUT]
    updateOneComic(req, res) {

    }
    //[POST]
    createOneComic(req, res) {

    }
    //[DELETE]
    deleteOneComic(req, res) {

    }




    // Functions for Many Comic

    
    async getManyComic(req, res) {
        const queryReq=req.query;
        const queryDB =null;
        const keys=Object.keys(queryReq);
        
        keys.forEach((key)=>{

        })
    }
}
module.exports =new comicAPI();