# Projeto To-Do-List

Projeto To-Do-List é um projeto que tem a finalidade de organizar melhor suas tarefas do cotidiano, permitindo criar lista de tarefas, exclui-las, edita-las, verifica-las, marca-las se já realizadas e desmarca-las se não realizadas.

projeto segue o padrão MVC (Model-View-Controller), garantindo: Separação entre lógica de negócios (Model), controle das requisições (Controller) e exibição para o usuário (View). Fornece uma estrutura
para gerenciar tarefas usando Node.js, Express, Sequelize e MySQL.

## Tecnologias Utilizadas:

Node.js – Plataforma para execução do JavaScript no backend.
Express.js – Framework para criar e gerenciar rotas de forma eficiente.
Handlebars – Template engine para renderizar páginas dinâmicas.
Sequelize – ORM para interação com o banco de dados MySQL.
MySQL – Banco de dados relacional para armazenar as tarefas.
MySQL2 – Driver para comunicação com MySQL.
Nodemon – Ferramenta para recarregar automaticamente o servidor durante o desenvolvimento.

## Instalação e Configuração:

<<<<<<< HEAD
1. Clonar o repositório:
   git clone <https://github.com/Mateus-Nasc/Projeto-To-Do-List>
   cd nome-do-repositorio
2. Instalar dependências:
   npm install
3. Configurar o banco de dados:
   Certifique-se de que o MySQL está rodando e crie um banco de
   dados chamado nodemvc2.
4. Rodar o projeto:
   npm start

## futuras implementações:

1- Tela de login
2- Tela de registro
3- autenticação JWT
=======
## Estrutura de Pastas:
📂 projeto-To-Do-List
├── 📂 db
│ ├── conn.js  #Conexão com banco de dados MySQL
├── 📂 models
│ ├── Task.js  #Modelo da entidade Task
├── 📂 controllers
│ ├── TaskController.js  #Lógica para manipular tarefas
├── 📂 routes
│ ├── tasksRoutes.js  #Definição das rotas para tarefas
├── 📂 views
│ ├── tasks  #Templates HandleBars
├── 📂 public  #Arquivos estáticos (CSS, JS)
├── index.js  #Configuração principal do servidor
├── package.json  #Dependências e scripts do projeto

### Realizando alterações :
1. implementando tela de login e registro
2. implementando autenticação JWT
>>>>>>> b99b95018291f3ae65704515115f7554a07cd13e
