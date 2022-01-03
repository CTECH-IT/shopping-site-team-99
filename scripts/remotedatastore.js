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

    RemoteDataStore.prototype.add = function (val) {
        //call jquery's $.post method 2send value to serverUrl
        $.post(this.serverUrl, val, function (serverResponse) {
            console.log(serverResponse);
        });
    };

    App.RemoteDataStore = RemoteDataStore;

    RemoteDataStore.prototype.getAll = function (func) {
        //make get call to the URL
        //pass in anonymous function that calls "func" on the result
        $.get(this.serverUrl, function (serverResponse) {
            console.log(serverResponse);
            func(serverResponse);
        });
    };

    RemoteDataStore.prototype.get = function (key, func) {
        // make get call to server, but pass email address
        // so that it returns just one order
        // then call the function "func" on the response
        $.get(this.serverUrl + '?emailAddress=' + key, function (serverResponse) {
            console.log(serverResponse);
            func(serverResponse);
        });
    };

    RemoteDataStore.prototype.remove = function (key) {
        //call server URL using the ajax delete command
        $.ajax(this.serverUrl + '?emailAddress=' + key, {type: 'DELETE'});
    };

    window.App = App;
})(window);