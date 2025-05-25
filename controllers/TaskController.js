//Importa o modelo Task, que representa as tarefas armazenadas no banco de dados.
import { raw } from 'express'
import Task from '../models/Task.js'

//Define uma classe TaskController que centraliza a lógica relacionada às tarefas.
//export default permite que essa classe seja importada em outros arquivos.
export default class TaskController {

    //Método estático que é chamado quando uma requisição GET chega à rota correspondente.
    //Usa res.render('tasks/create') para renderizar a página create.handlebars,
    //permitindo que o usuário veja um formulário para adicionar uma nova tarefa.
    static createTask(req, res) {
        res.render('tasks/create')
    }

    //É criado um objeto task com as informações coletadas. Em seguida, o método 
    //Task.create(task) é chamado com o objeto task como parâmetro. Essa chamada
    //é precedida por await, o que significa que o método espera que a operação
    //de inserção no banco de dados seja concluída antes de prosseguir.
    static async createTaskSave(req, res) {

        const task = {
            title: req.body.title,
            description: req.body.description,
            done: false
        }

        if (task.title === '' || task.description === '') {
            return res.render('tasks/create')
        }

        //validacoes e processar dados

        await Task.create(task)

        res.redirect('/tasks')
    }

    // O código extrai o identificador da tarefa a ser removida a partir do corpo da requisição (req.body.id).
    // Exclusão no banco: Utiliza o método destroy do modelo Task para deletar o registro que atende à condição { id: id }.
    // Redirecionamento: Após a remoção, chama res.redirect('/tasks') para redirecionar o usuário para a rota que lista todas as tarefas.
    static async removeTask(req, res) {

        const id = req.body.id

        await Task.destroy({ where: {id: id} })

        res.redirect('/tasks')
    }

    // Prepara a edição de uma tarefa, buscando os dados atuais e exibindo-os em uma página de edição.
    // Aqui o identificador é obtido dos parâmetros da rota (req.params.id). Prepara a edição de uma tarefa,
    // Buscando a tarefa: O método findOne é usado para localizar a tarefa que corresponde ao ID informado, com a opção { raw: true }, 
    // o que faz com que o retorno seja um objeto simples (sem instâncias especiais do ORM).
    // A função então renderiza a página tasks/edit, passando o objeto task para preencher os campos de edição.
    static async updateTask(req, res) {

        const id = req.params.id

        const task = await Task.findOne({ where: {id: id}, raw: true})

        res.render('tasks/edit', { task })
    }


    //Processa a atualização de uma tarefa após a submissão do formulário de edição.
    //Captura do ID e dos novos dados: O ID da tarefa vem do req.body.id, enquanto os novos valores (título e descrição) 
    //são extraídos de req.body.title e req.body.description.
    //Atualização no banco: O método update do modelo Task é acionado, atualizando o 
    //registro que corresponde ao ID informado com os novos valores.
    static async updateTaskPost(req, res) {

        const id = req.body.id

        const task = {
            title: req.body.title,
            description: req.body.description
        }

        await Task.update(task, {where: {id: id}})

        res.redirect('/tasks')//Após atualizar, o usuário é redirecionado para /tasks, onde verá a lista atualizada.
    }


    static async mostreTask(req, res) {

        const id = req.params.id //identificador é obtido dos parâmetros da rota 

        const task = await Task.findOne({ where: {id: id}, raw: true})

        res.render('tasks/mostre', { task })
    }


    // Alterna o status (feito/não feito) de uma tarefa.
    // O identificador da tarefa é novamente obtido de req.body.id. O novo status é determinado pela condição:
    // Se req.body.done for igual a '0', a propriedade done é definida como true (indicando que a tarefa foi concluída).
    // Caso contrário, é definida como false.
    static async toggleTaskStatus(req, res) {

        const id = req.body.id

        const task = {
            done: req.body.done === '0' ? true : false //se 0 troca para true senao para false
        }

        await Task.update(task, {where: {id: id}}) //O método update atualiza o registro correspondente com o novo status.

        res.redirect('/tasks')
    }

    //Usa res.render('tasks/all') para exibir a página all.handlebars, que 
    //contém uma lista de todas as tarefas registradas.
    static async showTasks(req, res) {
        //resgatando dados
        //Busca de todas as tarefas: O método findAll do modelo Task recupera todos os registros da tabela, novamente com { raw: true } para um objeto simples.
        //Renderização da lista: A view tasks/all é renderizada, recebendo o array de tarefas (tasks) para exibição.
        const tasks = await Task.findAll({raw: true})

        res.render('tasks/all', {tasks})
    }


}