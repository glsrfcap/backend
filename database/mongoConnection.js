const mongoose = require('mongoose')

const URI = 'mongodb+srv://migueljorge34:lEsCHzXnbD57CigD@test.kqstuyc.mongodb.net/'

const databaseConnection = async () => {
    if(!global.mongoose){
        mongoose.set('strictQuery',false)
        global.mongoose = await mongoose.connection(URI)
    }
}


databaseConnection.on('error',console.error(console, 'MongoDB connectiong error'))

databaseConnection.once('open', () => {
    console.log('Connected to MongoDB')
})

export default databaseConnection