var express = require('express');
var router = express.Router();
const petsController = require("../controllers/petsController");
const servicosController = require("../controllers/servicosController");

router.get('/', (req, res) => {
    res.render("index");
})
router.get('/pets', petsController.index);

router.get('/servicos', (req, res) => {
    res.render("servicos")
});

router.get('/cadastro', (req, res) => {
        res.render("cadastro")
});

router.get('/login', (req, res) => {
            res.render("login")
});

router.get('/contato', (req, res) => {
            res.render("contato")
});

module.exports = router;
