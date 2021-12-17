(function (window) {
    'use strict';
    let App = window.App || {};
    let $ = window.jQuery;
    function CheckList(selector) {
        if (!selector) {
            throw new Error('No selector provided');
        }
        this.$element = $(selector);
        if (this.$element.length === 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    }

    //when checkbox is clicked, get emailaddress from row
    //andthen call func that is passed in with email as a parameter
    CheckList.prototype.addClickHandler = function(func) {
        this.$element.on('click', 'input', function (event) {
            var email = event.target.value;
            this.removeRow(email);
            func(email);
        }.bind(this));
    };

    //th method that adds new row to checklist
    CheckList.prototype.addRow = function (gettyOrder) {
        // remove any existing rows that match email address
        this.removeRow(gettyOrder.emailAddress);
        //create new instance of row, using order info
        var rowElement = new Row(gettyOrder);
        // add new row instances $element property to the checklist
        this.$element.append(rowElement.$element);
    };

    CheckList.prototype.removeRow = function (email) {
        this.$element
        .find('[value="' + email + '"]')
        .closest('[data-getty-order="checkbox"]')
        .remove();
    };

    //each row is 1 outstanding order
    function Row(gettyOrder) {
        let $div = $('<div></div>', {
            'data-getty-order': 'checkbox',
            'class': 'checkbox'
        });
    let $label = $('<label></label>');

        let $checkbox = $('<input></input>', {
            type: 'checkbox',
            value: gettyOrder.emailAddress
        });

        let description = gettyOrder.size + ' ';
        if (gettyOrder.flavor) {
            description += gettyOrder.flavor + ' ';
        }

        
        description += gettyOrder.getty + ', ';
        description += ' (' + gettyOrder.emailAddress + ')';
        description += ' [' + gettyOrder.strength + 'x]';

        $label.append($checkbox);
        $label.append(description);
        $div.append($label);

        this.$element = $div;
    }
    App.CheckList = CheckList;
    window.App = App;
})(window);