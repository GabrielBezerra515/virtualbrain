const configuracoes = {
    banco: {
        server: "grupo4.database.windows.net",
        user: "adimin",
        password: "#Gfgrupo4",
        database: "Virtual",
        options: {
            enableArithAbort: true,
            encrypt: true
        },
        pool: {
            max: 4,
            min: 1,
            idleTimeoutMillis: 30000,
            connectionTimeout: 5000
        }
    }
}
 
const sql = require('mssql');
sql.on('error', err => {
    console.error(`Erro de Conexão: ${err}`);
});


function connection() {
  sql.close();
  return sql.connect(configuracoes.banco)
} 

module.exports = {
    connection: connection,
    sql: sql
}