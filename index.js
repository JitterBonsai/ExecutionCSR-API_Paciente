const express = require('express')
const app = express();
const categorias = require('./controllers/pacienteController.js')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(categorias);
app.listen('3002', () => {
    console.log('esta online');
});