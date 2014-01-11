'use strict';
//var qs = require('querystring');
//var request = require('request');
var settings = require('../config/settings.js');

exports.storeThing = function(req, res) {
    
};

exports.getThing = function(req, res) {

};

// Not required until we find out if we need to get a new oauth token
/*exports.oauthCallback = function(req, res) {
    var code = req.query.code;
    if(!code) {
        return res.json(500, {message: 'Missing OAuth Code.'});
    }
    var oauth = {
        client_id: settings.thingiverse.clientID,
        client_secret: settings.thingiverse.clientSecret,
        code: code
    };
    request('https://www.thingiverse.com/login/oauth/access_token', {form: oauth}, function (error, response, body) {
        if(error) {
            return res.json(500, {message: 'Oauth token request failed.'});
        }
        if(response.statusCode === 200) {
            //Example token: access_token=8346bf838064ca05ddac56de88252743&token_type=Bearer
            var bodyParsed = qs.parse(body);
            if(parsed && parsed.access_token) {
                return res.json({})
            }
        }
    })
};*/
