let instrutores = [
    {
        id: 1,
        nome: `André`,
        email: `andre@email.com`,
        ativo: true
    },
    {
        id: 2,
        nome: `Julia`,
        email: `jilia@email.com`,
        ativo: true
    },
    {
        id: 3,
        nome: `Igor`,
        email: `igor@email.com`,
        ativo: true
    },
];

let aulas = [
    {
        idAula: 1,
        aula: `Geografia`,
        descicao: `Geografia completa`,
        idInstrutor: 1
    },
    {
        idAula: 2,
        aula: `História`,
        descicao: `História completa`,
        idInstrutor: 3
    },
    {
        idAula: 3,
        aula: `Portugues`,
        descicao: `Analise morfologica`,
        idInstrutor: 2
    }
];

module.exports = {
    instrutores,
    aulas
}

