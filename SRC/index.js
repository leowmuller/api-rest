const express = require(`express`);
const app = express();
const { mostrarInstrutores, exibirInstrutor, cadastrarInstrutores, atualizarInstrutor, atualizarAtivoInstrutor, deletarInstrutor, cadastrarAula, listarAulas, exibirAula, filtrarAulasInstrutor } = require(`./controladores/controladores`)

app.use(express.json()); 
//recurso natiuvo do express que limta a API 
//apenas para uso no formato JSON

//rotas get - obtenção de informações
app.get(`/instrutores`, mostrarInstrutores);
app.get(`/instrutores/:id`, exibirInstrutor);

//rotas post - criação de informações
app.post(`/instrutores`, cadastrarInstrutores);

//rotas put - atualização completa de informações
app.put(`/instrutores/:id`, atualizarInstrutor);

//rotas patch - atualização parcial de informações
app.patch(`/instrutores/:id/ativo`, atualizarAtivoInstrutor);

//rotas delete - exclusão de informações
app.delete(`/instrutores/:id`, deletarInstrutor);


//Exercício-1-----------------------------------------------
// POST /instrutores/:idInstrutor/aulas
app.post(`/instrutores/:idInstrutor/aulas`, cadastrarAula )

// Deve cadastrar uma aula para um instrutor específico. As informações da aula precisam ter, no mínimo, os campos titulo e descricao.

// GET /aulas
// Deve listar todas as aulas da coleção.
app.get(`/aulas`, listarAulas);

// GET /aulas/:id
// Deve detalhar as informações de uma aula.
app.get(`/aulas/:id`, exibirAula);

// GET /instrutores/:idInstrutor/aulas
app.get(`/instrutores/:idInstrutor/aulas`, filtrarAulasInstrutor)
// Deve listar todas as aulas de um instrutor.
//________________________________________________


app.listen(3000);