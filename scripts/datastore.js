(function (window) {
    'use strict';

    let App = window.App || {};

    function DataStore() {
        this.data = {};
    }

    DataStore.prototype.add = function (key,val) {
        this.data[key] = val;
    };

    DataStore.prototype.get = function (key) {
        $.get(this.serverUrl + '?emailAddress=' + key, function (serverResponse) {
            console.log(serverResponse);
            cb(serverResponse);
        });
    };

    DataStore.prototype.getAll = function () {
        return this.data;
    };

    DataStore.prototype.remove = function(key) {
        $.ajax(this.serverUrl + '?emailAddress' + key, { type: 'DELETE' });
    };

    App.DataStore = DataStore;
    window.App = App;

})(window);