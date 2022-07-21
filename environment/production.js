module.exports = {
    dbUrl: `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.hefps.mongodb.net/twitter?retryWrites=true&w=majority`,
    cert: "/etc/letsencrypt/live/www.dyma-project.site/fullchain.pem",
    key: "/etc/letsencrypt/live/www.dyma-project.site/privkey.pem",
}