const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'work'
});

connection.connect((err) => {
    if (err) {
        console.error('Erreur de connection à la base de donnée: ', err);
        return;
    }
    console.log('Connecté à la base de donnée !')
});

module.exports = connection;

//JAVA_HOME="..." dans bashrc
