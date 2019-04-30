module.exports = Object.freeze({
    "host":     process.env.DB_HOST || "localhost",
    "dialect":  process.env.DB_DIALECT || "postgres",
    "username": process.env.DB_USER || 'user',
    "password": process.env.DB_PASSWORD || 'user',
    "database": process.env.DB_NAME || 'simstomat'
});
