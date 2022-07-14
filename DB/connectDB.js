const mongoose = require('mongoose');

module.exports = async() => {

    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Db Connected');
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
 
};