// var StcpDB = require('../utils/dbConnections').StcpDB;
var ErrorsEventsDAO = require('../model/ErrorsEventsDAO').ErrorsEventsDAO;

function buscaErrorsEvents (req, res) {
    var query = "SELECT TOP 10 issue_id, issue_name FROM issues WHERE folder_id = 12 AND issue_name LIKE @COD;";
    var param = req.params.name + '%';
    
    ErrorsEventsDAO.buscaErrorsEvents(query, param, function(err, result, fields) {
        if(err) {
            console.log(err)
            return res.status(500).send('Internal error');
        }

        if(result){
            var data = result;
        }

        res.json({ status: 'success', field: 'errors_events', data: data });
    });

}

function showErrorsEvents (req, res) {
    var query = "SELECT i.issue_id, i.issue_name, d.descr_text, c.comment_text FROM issues AS i LEFT JOIN issue_descriptions AS d ON i.issue_id = d.issue_id RIGHT JOIN changes AS g ON i.issue_id = g.issue_id RIGHT JOIN comments AS c ON g.change_id = c.comment_id WHERE i.folder_id = 12 AND i.issue_id = @ID;"
    var param = req.params.id;

    ErrorsEventsDAO.showErrorsEvents(query, param, function(err, result, fields){
        if(err) {
            return res.status(500).send('Internal error');
        }

        if (result) {
            var data = result;
        }

        res.json({status: 'success', field: 'errors_events', data: data});
    });
}

exports.errorsEventsController = {
    buscaErrorsEvents: buscaErrorsEvents,
    showErrorsEvents: showErrorsEvents
}