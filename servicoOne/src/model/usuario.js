const mongoose = require("mongoose");

const SchemaUsers = new mongoose.Schema({
    nomeusuario: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    senha: String,
    nomecompleto: { type: String, required: true,},
    telefone: { type: String, required: true },
    datacriacao: { type: Date, default: Date.now },
    status: { type: String}
  });
  module.exports = mongoose.model("usuario", SchemaUsers);