var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/cadastrar_quadra", function (req, res) {
    usuarioController.cadastrar_quadra(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.get("/grafico_zona_zn", function (req, res) {
    usuarioController.listar_zona_zn(req, res);
});

router.get("/grafico_zona_zs", function (req, res) {
    usuarioController.listar_zona_zs(req, res);
});

router.get("/grafico_zona_zl", function (req, res) {
    usuarioController.listar_zona_zl(req, res);
});

router.get("/grafico_zona_zo", function (req, res) {
    usuarioController.listar_zona_zo(req, res);
});

router.get("/grafico_zona_zc", function (req, res) {
    usuarioController.listar_zona_zc(req, res);
});

module.exports = router;