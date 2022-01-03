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
    //and then call func that is passed in with email as a parameter
    CheckList.prototype.addClickHandler = function(func) {
        this.$element.on('click', 'input', function (event) {
            var email = event.target.value;
            this.removeRow(email);
            func(email);
        }.bind(this));
    };

    //th method that adds new row to checklist
    CheckList.prototype.addRow = function (gettyOrder) {
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

        let description = '  Order: ';

        if (gettyOrder.image1) {
            description += gettyOrder.image1 + '; ';
        }

        if (gettyOrder.image2) {
            description += gettyOrder.image2 + '; ';
        }

        if (gettyOrder.image3) {
            description += gettyOrder.image3 + '; ';
        }

        if (gettyOrder.image4) {
            description += gettyOrder.image4 + '; ';
        }

        if (gettyOrder.image5) {
            description += gettyOrder.image5 + '; ';
        }

        if (gettyOrder.image6) {
            description += gettyOrder.image6 + '; ';
        }

        if (gettyOrder.image7) {
            description += gettyOrder.image7 + '; ';
        }

        if (gettyOrder.image8) {
            description += gettyOrder.image8 + '; ';
        }

        if (gettyOrder.image9) {
            description += gettyOrder.image9 + '; ';
        }

        if (gettyOrder.image10) {
            description += gettyOrder.image10 + '; ';
        }

        if (gettyOrder.image11) {
            description += gettyOrder.image11 + '; ';
        }

        if (gettyOrder.image12) {
            description += gettyOrder.image12 + '; ';
        }

        description += ' (' + gettyOrder.emailAddress + ')';

        $label.append($checkbox);
        $label.append(description);
        $div.append($label);

        this.$element = $div;
    }
    App.CheckList = CheckList;
    window.App = App;
})(window);