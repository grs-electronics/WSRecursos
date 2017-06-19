const connectionDB = require('../database/sap.db').connectionDB;
const passport = require('passport');


exports.verificarArticulo= (req, res) => {
        connectionDB.exec('SELECT \"ItemCode\", CAST(\"IntrSerial\" AS nvarchar(60)) AS \"NumeroDeSerie\", \"WhsCode\" AS \"CodigoDeBodega\" FROM TEST_GT.OSRI WHERE \"Status\" = 0 AND IFNULL("SuppSerial", "IntrSerial")=\''+req.query.articulo+'\'', function (err, rows) {
        if (err) return console.error('Error al ejecutar consulta (verificarArticulo): ', err);
        res.json(rows);
    });
}
