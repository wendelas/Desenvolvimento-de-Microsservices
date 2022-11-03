const mongoose = require("mongoose");

const SchemaUsers = new mongoose.Schema({
    iduser: { type: String, required: true},
    nome_banco: { type: String, required: true },
    tipo_conta: { type: String, required: true},
    nome_titular: { type: String, required: true},
    limite_cartao: { type: String, required: true }
  });
  module.exports = mongoose.model("financeiro", SchemaUsers);