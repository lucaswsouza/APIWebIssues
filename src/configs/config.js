const config = {
    user: 'usuario',
    password: 'senha',
    server: 'localhost', // You can use 'localhost\\instance' to connect to named instance
    port: 1433,
    database: 'webissues_db',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: false // Use this if you're on Windows Azure
    }
}

exports.config = config;