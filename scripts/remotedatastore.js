(function (window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery;
    function RemoteDataStore(url) {
        if (!url) {
            throw new Error('No remote URL supplied.');
        }
        this.serverUrl = url;
    }

    RemoteDataStore.prototype.add = function (key, val) {
        //call jquery's $.post method 2send value to serverUrl
        $.post(this.serverUrl, val, function (serverResponse) {
            console.log(serverResponse);
        });
    };

    App.RemoteDataStore = RemoteDataStore;

    RemoteDataStore.prototype.getAll = function (cb) {
        //make get call to the URL
        //pass in anonymous function that calls 'cb' callback
        $.get(this.serverUrl, function (serverResponse) {
            console.log(serverResponse);
            cb(serverResponse);
        });
    };

    RemoteDataStore.prototype.get = function (key, cb) {
        // make get call to server, but pass email address
        // so that it returns just one order
        // then call the function "cb" on the response
        $.get(this.serverUrl + '/' + key, function (serverResponse) {
            console.log(serverResponse);
            cb(serverResponse);
        });
    };

    RemoteDataStore.prototype.remove = function (key) {
        //call server URL using the ajax delete command
        $.ajax(this.serverUrl + '/' + key, {
            type: 'DELETE' });
    };

    window.App = App;
})(window);