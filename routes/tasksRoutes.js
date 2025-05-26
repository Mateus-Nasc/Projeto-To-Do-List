
import express from 'express' //Importa o framework Express.
const router = express.Router() //Cria objeto router, q permite definir rotas separadamente do aplicativo principal.

//Importa o controlador de tarefas, que contém a lógica para manipular requisições HTTP relacionadas às tarefas.
import TaskController from '../controllers/TaskController.js'

//Definição das Rotas
//Quando um usuário acessa '/add' via método GET, o controlador chama createTask, 
//que provavelmente exibe um formulário para adicionar uma nova tarefa.
router.get('/add', TaskController.createTask)

//rota de post que vai salvar os dados do form no bd
router.post('/add', TaskController.createTaskSave)

//rota para deletar dados
router.post('/remove', TaskController.removeTask)

//rota para editar
router.get('/edit/:id', TaskController.updateTask)

//rota para mostrar a task
router.get('/mostre/:id', TaskController.mostreTask)

//rota para atualizar
router.post('/edit', TaskController.updateTaskPost)

//rota para o status da tarefa
router.post('/updatestatus', TaskController.toggleTaskStatus)

//Quando um usuário acessa '/' via método GET, a função showTasks do controlador é 
//chamada, que exibe uma lista de tarefas armazenadas.
router.get('/', TaskController.showTasks)

export default router

//cria rota dps cria no controller