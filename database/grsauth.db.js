/**
 * Created by retana on 24/05/2017.
 */
const mongoose=require('mongoose');
exports.connectionDB=mongoose.createConnection(require('../config/index').databaseAuth);