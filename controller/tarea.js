/**
 * Created by retana on 31/05/2017.
 */
const mongoose=require('mongoose');
const connectionDB=require('../database/wms.db').connectionDB;
const passport = require('passport');

let TareaSchema= new mongoose.Schema({
    fechaAsignacion: {type:String,require:false},
    fechaInicio: {type:String,require:false},
    fechaFinalizacion: {type:String,require:false},
    estado: {type:String,require:false},//finalizada - No iniciada - pausada
    detalleTarea: {type:Object,require:false},
    documento: {type:Object,require:false},
    operario: {type:Object,require:false},
    prioridad: {type:String,require:false},
    comentario: {type:String,require:false},
    tipo: {type:String,require:false},
    duracion:{type:String,require:false},
    transporte:{type:Object,require:false}
});

const tarea=connectionDB.model('tarea',TareaSchema);

exports.add=(req,res) =>{
    tarea.create(req.body,function (err,data) {
        if(err)console.error(err);
        res.json({data:'Tarea Ingresada '});
    });
}
exports.list=(req,res)=>{
    tarea.find((err,data)=>{
        if(err)console.error(err);
        res.json(data);
    });
}

exports.listaOperario=(req,res)=>{
  tarea.find({'operario._id':req.query._id},(err,data)=>{
    if(err)console.error(err);
    res.json(data);
  });
}
