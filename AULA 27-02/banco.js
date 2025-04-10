const Sequelize = require('sequelize')
const sequelize = new Sequelize('exemplo','root','',{
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log('Conectado com sucesso')
}).catch(function(erro){
    console.log('Falha ao conectar: '+erro)
})

const Agendamento = sequelize.define('agendamento',{
    nome:{
        type: Sequelize.STRING
    },
    email:{
        type: Sequelize.STRING
    },
    telefone:{
        type: Sequelize.STRING
    },
    cpf:{
        type: Sequelize.STRING
    },
    data:{
        type: Sequelize.STRING
    },
    hora:{
        type: Sequelize.STRING
    }
})

//Agendamento.sync({force: true})

Agendamento.create({
    nome: 'Mariana Ocireu',
    email: 'mariana.ocireu69@fatec.sp.gov.br',
    telefone: '11977962863',
    cpf: '165446888878',
    data: '2025-02-28',
    hora: '00:00'
})