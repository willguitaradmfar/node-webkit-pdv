'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Venda Schema
 */
var VendaSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    codigo: {
        type: Number,
        required: true        
    },
    descricao: {
        type: String        
    },
    vendadetalhe: [{
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
        qtde: {
            type: Number
        },
        preco: {
            type: Number
        }
    }]
});

mongoose.model('Venda', VendaSchema);

