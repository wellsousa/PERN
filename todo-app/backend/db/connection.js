
const Pool = require('pg').Pool

const pool = new Pool({
    user: 'doko',
    password: '1234',
    host: 'localhost',
    port: 5432,
    database: 'personaltasks'
})

module.exports = pool