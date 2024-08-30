const mongose = require('mongose')
const Produto = mongose.model('Produto')

exports.get = async() => {
    const result = await Produto.find()
    return result
}

exports.create = async(data) =>{
    const produto =  Produto(data)
    await produto.save()
}

exports.update = async(id, data) => {
    await Produto.findByIdAndUpdate(id , {
        $set:{
            titulo : data.titulo,
            preco : data.preco
        }
    })
}