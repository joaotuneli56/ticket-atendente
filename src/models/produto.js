const mongose = require('mongose')
const Schema = mongose.Schema;

const schema = new Schema({
    titulo: {
        type: String,
        require: true,
        trim: true
    },
    preço: {
        type: Number,
        required: true
    }
})

module.exports = mongose.model('Produto', schema);