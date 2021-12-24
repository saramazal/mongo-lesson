const mongoose = require('mongoose')

const username = "#";
const password = "#";
connectionString = `#`


exports.connect = async function connect() {
    try {
        console.log('connecting ..')
        await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useCreateIndex: true
        }//,err => { if (err){ throw err} }
        )

        //success
        console.log('Mongo connected!')
    } catch (error) {
        console.error('Not Connected', error.message)
    }
}
