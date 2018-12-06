var configs = require('../configs/config').config;
var mssql = require('mssql');


var ErrorsEventsDAO = function (config) {
    this.configs = config;
}

ErrorsEventsDAO.prototype.buscaErrorsEvents = function (preparedQuery, parameters, cb) {

    const poolCfg = new mssql.ConnectionPool(this.configs, function (err) {
        if (err) {
            if (cb) return cb(err);
            else throw new Error({ err: err, err2: 'Expected a callback' });
        }

        const request = new mssql.Request(poolCfg);


        request.input('COD', parameters);

        request.query(preparedQuery, (err, result) => {

            if (err) {
                if (cb) {
                    return cb(err, null, null, null);
                } else {
                    throw new Error('Expected callback function');
                }
            }

            data = result.recordset ? result.recordset : [];

            cb(err, data);

        });
    });

}

ErrorsEventsDAO.prototype.showErrorsEvents = function (preparedQuery, parameters, cb) {

    const poolCfg = new mssql.ConnectionPool(this.configs, function (err) {
        if (err) {
            if (cb) return cb(err);
            else throw new Error({ err: err, err2: 'Expected a callback' });
        }

        const request = new mssql.Request(poolCfg);


        request.input('ID', parameters);

        request.query(preparedQuery, (err, result) => {

            if (err) {
                if (cb) {
                    return cb(err, null, null, null);
                } else {
                    throw new Error('Expected callback function');
                }
            }

            data = result.recordset ? result.recordset : [];

            cb(err, data);

        });
    });

}


function dbFactory(configs) {
    return new ErrorsEventsDAO(configs);
}

exports.ErrorsEventsDAO = dbFactory(configs);


