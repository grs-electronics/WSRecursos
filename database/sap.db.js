/**
 * Created by retana on 23/05/2017.
 */

'use strict'

const dbString = require('../config/index').databaseSAP;
const hdb = require('hdb');
const client = hdb.createClient(dbString);
client.on('error', function (err) {
    console.error('Error de red al contactar el servidor de base de datos', err);
});

exports.connectionDB = client.connect(function (err) {
    if (err) return console.error('Error al conectar a Base de datos');
});
