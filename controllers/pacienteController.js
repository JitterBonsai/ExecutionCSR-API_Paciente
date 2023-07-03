const router = require('express').Router(),
    paciente = require('../models/pacienteModel'),
    upload = require('../middlewares/upload');

router.post('/upload', upload.single('foto_paciente'), (req, res) => {
    let foto_paciente = req.file.path,
        { nome_paciente, telefone_paciente, celular_paciente, email_paciente, nome_responsavel, telefone_responsavel } = req.body;
    paciente.create({
        nome_paciente,
        telefone_paciente,
        celular_paciente,
        email_paciente,
        nome_responsavel,
        telefone_responsavel,
        foto_paciente
    }).then((result) => {
        res.status(200).send(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
    //res.send({ nome_paciente, foto_paciente });
});

module.exports = router;