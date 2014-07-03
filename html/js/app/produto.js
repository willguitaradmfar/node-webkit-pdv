'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Produto Schema
 */
var ProdutoSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    codigo: {
        type: Number,
        required: true        
    },
    nome: {
        type: String
    },
    descricao: {
        type: String
    },
    preco: {
        type: Number
    }

    
});

mongoose.model('Produto', ProdutoSchema);

