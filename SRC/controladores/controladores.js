const express = require(`express`);
const rotas = express();
let { instrutores, aulas } = require(`../dados/banco-de-dados`);


// rotas

const mostrarInstrutores = (req, res) => {
    res.status(200).json(instrutores);
};

const exibirInstrutor = (req, res) => {
    const id = req.params.id
    const instrutor = instrutores.find((item) => {
        return item.id === Number(id);
    });

    if (!instrutor) {
        return res.status(404).json({
            mensagem: `Nenhum instrutor encontrdo para o id informado.`
        });
    };

    return res.json(instrutor);
};

const cadastrarInstrutores = (req, res) => {
    const { nome, email, ativo } = req.body;

    if (!nome) {
        return res.status(400).json({ mensagem: `Nome é obrigatório!` });
    };
    if (!email) {
        return res.status(400).json({ mensagem: `Email é obrigatório!` });
    };


    let novoID = instrutores.length + 1
    const instrutor = {
        id: novoID,
        nome: nome,
        email: email,
        ativo: ativo ?? true
    };

    instrutores.push(instrutor);

    res.status(201).json(instrutor);

};

const atualizarInstrutor = (req, res) => {
    const { nome, email, ativo } = req.body;

    if (!nome) {
        return res.status(400).json({ mensagem: `Nome é obrigatório!` });
    };
    if (!email) {
        return res.status(400).json({ mensagem: `Email é obrigatório!` });
    };

    const instrutor = instrutores.find((item) => {
        const id = req.params.id
        return item.id === Number(id);
    });

    if (!instrutor) {
        return res.status(404).json({
            mensagem: `Nenhum instrutor encontrdo para o id informado.`
        });
    };

    instrutor.nome = nome;
    instrutor.email = email;
    instrutor.ativo = ativo;

    res.status(204).send();
};

const atualizarAtivoInstrutor = (req, res) => {
    const { ativo } = req.body;

    const instrutor = instrutores.find((item) => {
        const id = req.params.id
        return item.id === Number(id);
    });

    if (!instrutor) {
        return res.status(404).json({
            mensagem: `Nenhum instrutor encontrdo para o id informado.`
        });
    };

    instrutor.ativo = ativo;

    res.status(204).send();

};

const deletarInstrutor = (req, res) => {

    const id = req.params.id

    const instrutor = instrutores.find((item) => {
        return item.id === Number(id);
    });

    if (!instrutor) {
        return res.status(404).json({
            mensagem: `Nenhum instrutor encontrdo para o id informado.`
        });
    };

    instrutores = instrutores.filter((instrutor) => {
        return instrutor.id !== Number(id);
    });

    res.status(204).send();
};

const cadastrarAula = (req, res) => {
    const id = Number(req.params.idInstrutor);
    console.log(`cadastrarAula`, id);
    const instrutor = instrutores.find((item) => {
        return item.id === Number(id);
    });
    if (!instrutor) {
        return res.status(404).json({
            mensagem: `Nenhum instrutor encontrdo para o id informado.`
        });
    };

    const { aula, descicao } = req.body;

    if (!aula || !descicao) {
        return res.status(404).json({
            mensagem: `É obrigatório informar aula e descricao.`
        })
    };

    const novoIDdaAula = aulas.length + 1;

    const novaAula = {
        idAula: novoIDdaAula,
        aula,
        descicao,
        idInstrutor: id
    };

    aulas.push(novaAula);

    res.status(201).json(novaAula);

};

const listarAulas = (req, res) => {
    return res.json(aulas)
};

const exibirAula = (req, res) => {
    const id = req.params.id
    console.log(id)
    const aula = aulas.find((item) => {
        return item.idAula === Number(id);
    });
    console.log(aula);

    if (!aula) {
        return res.status(404).json({
            mensagem: `Nenhuma aula foi encontrda para o id informado.`
        });
    };

    return res.json(aula);
};

const filtrarAulasInstrutor = (req, res) => {
    const idInstrutor = Number(req.params.idInstrutor)
    const instrutor = instrutores.find((item) => {
        return item.id === idInstrutor;
    });

    if (!instrutor) {
        return res.status(404).json({
            mensagem: `Nenhum instrutor encontrdo para o id informado.`
        });
    };

    const aulasDoInstrutor = aulas.filter((aulas) => {
        return aulas.idInstrutor === idInstrutor
    });

    res.json(aulasDoInstrutor);

};



//exportação
module.exports = {
    mostrarInstrutores,
    exibirInstrutor,
    cadastrarInstrutores,
    atualizarInstrutor,
    atualizarAtivoInstrutor,
    deletarInstrutor,
    cadastrarAula,
    listarAulas,
    exibirAula,
    filtrarAulasInstrutor
};