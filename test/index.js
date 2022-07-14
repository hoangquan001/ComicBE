require("dotenv").config({ path: `./config/${process.env.NODE_ENV}.env` });
require('../DB/connectDB')();
const  {faker} =require('@faker-js/faker');
const Comic =require('../DB/models/comic');
// const Chapter =require('../DB/models/chapter')
const Genre =require('../DB/models/genre');
// const Page =require('../DB/models/page')
const _ =require('lodash')
async function createComic(){
    let a=faker.name.findName();
    const comicPros={
         name:faker.name.findName(),
         author:faker.name.findName(),
         status:"Đang cập nhật",
         url_img:faker.image.abstract(),
         description : faker.name.findName(),
    }
    const newComic =new Comic(comicPros);
    await newComic.save()
}
async function updateComic(){
   const ListGenre= await Genre.find({}).select({_id:1})
   Comic.find({}).then((listComic)=>{
        listComic.forEach((comic)=>{
            comic.genre=_.sampleSize(ListGenre,2)
            comic.save()
        })
   })
   
}
// updateComic()

async function updateComic(){
    // const ListGenre= await Genre.find({}).select({_id:1});
    const data= await Comic.find({}).limit(10).populate('genre').exec();
    console.log(data[0]);
 }

// updateComic();

async function readComic(){
    Comic.find({}).limit(10).then(function(comic){
        console.log(comic)
    })
}

async function createGenre(){
    const genrePros={
         name:faker.name.findName(),
         description : faker.name.findName(),
    }
    const newGenre =new Genre(genrePros);
    await newGenre.save();
}
function readGenre(){
    Genre.find({}).limit(10).then(function(gen){
        console.log(gen)
    })
}

// for (let index = 0; index < 10; index++) {
// createGenre();
    
// }
// readGenre();
// readComic();

