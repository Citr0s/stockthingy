/**
 * Created by Okabi on 19/07/2016.
 */
var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/:stockSymbol', function(req, res) {
    request('http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=' + req.param('stockSymbol'),
        function (err, response, body) {
            res.send(body);
        })
});

module.exports = router;