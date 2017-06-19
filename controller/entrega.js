/**
 * Created by retana on 23/05/2017.
 */
const connectionDB = require('../database/sap.db').connectionDB;
const passport = require('passport');

/*exports.pendientes= [
        passport.authenticate('bearer', { session: false }),
        (req, res) => {
        connectionDB.exec('SELECT \"DocEntry\",\"DocNum\",CASE when \"CANCELED\" = \'Y\' then \'Cancelled\' ELse \'Not Cancelled\' END as \"Canceled\",	CASE when \"DocStatus\" = \'C\' then \'Closed\' Else \'Open\' end as \"DocStatus\",\"CardName\",\"Address2\" as \"Entrega\" FROM TEST_GT.\"ORDR\" WHERE \"DocStatus\"=\'O\' AND \"DocType\"=\'I\'', function (err, rows) {
                if (err) return console.error('Error al ejecutar consulta (EntregasPendientes): ', err);
                res.json(rows);
            });
        },
];*/

exports.pendientes= (req, res) => {
        connectionDB.exec('SELECT \"DocEntry\",\"DocNum\",CASE when \"CANCELED\" = \'Y\' then \'Cancelled\' ELse \'Not Cancelled\' END as \"Canceled\",	CASE when \"DocStatus\" = \'C\' then \'Closed\' Else \'Open\' end as \"DocStatus\",\"CardName\",\"Address2\" as \"Entrega\" FROM TEST_GT.\"ORDR\" WHERE \"DocStatus\"=\'O\' AND \"DocType\"=\'I\'', function (err, rows) {
        if (err) return console.error('Error al ejecutar consulta (EntregasPendientes): ', err);
        res.json(rows);
    });
}
exports.prueba=function () {
        connectionDB.exec('SELECT \"DocEntry\",\"DocNum\",CASE when \"CANCELED\" = \'Y\' then \'Cancelled\' ELse \'Not Cancelled\' END as \"Canceled\",	CASE when \"DocStatus\" = \'C\' then \'Closed\' Else \'Open\' end as \"DocStatus\",\"CardName\",\"Address2\" as \"Entrega\" FROM TEST_GT.\"ORDR\" WHERE \"DocStatus\"=\'O\' AND \"DocType\"=\'I\'', function (err, rows) {
                if (err) return console.error('Error al ejecutar consulta (EntregasPendientes): ', err);
                console.log(rows);
        });
};

exports.detalle=(req,res)=>{
        connectionDB.exec('Select "ItemCode","Dscription","Quantity" from TEST_GT."RDR1" where "DocEntry"='+req.query.DocEntry,function (err,rows) {
                res.json(rows);
        });
};