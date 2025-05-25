import express from "express"
import exphbs from "express-handlebars"
import conn from "./db/conn.js"

const app = express()

import Task from "./models/Task.js" //Import o modelo Task para interagir com tarefas no bd.

//Importa as rotas tasksRoutes, que definem endpoints para manipular tarefas.
import tasksRoutes from './routes/tasksRoutes.js'

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

//midleware para conseguir ler oq vem no corpo da req
app.use( 
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())
app.use(express.static('public'))

//Usa as rotas definidas no file tasksRoutes.js, aplicando tds as rotas relacionadas a tarefas sob o caminho /tasks.
app.use('/tasks', tasksRoutes)

conn.sync()
.then(() => {
    app.listen(3000)
})
.catch((err) => console.log(err))                               