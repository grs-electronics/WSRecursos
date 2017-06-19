/**
 * Created by retana on 31/05/2017.
 */
const mongoose=require('mongoose');
exports.connectionDB=mongoose.createConnection(require('../config/index').databaseWMS);