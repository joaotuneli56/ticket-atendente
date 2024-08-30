const respository = require('../repositories/produto-repository')

exports.get = async (rew, res, next) => {
    const data = await respository.get();
    return res.status(200).send(data);
}

exports.post = async(req, res) => {
    await respository.create(req.body)
    return res.status(201).sent({mensagem: "Criado com sucesso!"})
}

exports.put = async(req, res) => {
    const id = req.params.id

    await respository.update(id, req.body)
    res.status(204).send({mensagem: "Atualizado com sucesso"})
}