const express = require('express');
const connectDB = require("./config/config");

const app = express();
const port = process.env.PORT || 3000;

connectDB();
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: "API da Biblioteca Digital funcionando!" });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});