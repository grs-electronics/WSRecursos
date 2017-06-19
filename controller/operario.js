/**
 * Created by retana on 24/05/2017.
 */

const mongoose=require('mongoose');
const connectionDB = require('../database/grsauth.db').connectionDB;

let UserSchema   = new mongoose.Schema({
    username: {type:String,require:true},
    password: { type: String, required: true },
    name: { type: String, required:     true },
    rol: {type:String,required:true}
});

const operario=connectionDB.model('users',UserSchema);
const passport = require('passport');

exports.trabajador=(req,res)=>{
    operario.find({rol:'WMS-OPERARIO'},(err,data)=>{
        if(err)console.log(err);
        res.json(data);
    });
};