var de = {};
module['exports'] = de;
de.title = "German";
de.address = require("./address");
de.company = require("./company");
de.internet = require("./internet");
de.lorem = require("./lorem");
de.name = require("./name");
de.phone_number = require("./phone_number");
de.cell_phone = require("./cell_phone");
var self = this;
var Address = require('./address');
self.address = bindAll(new Address(self));

function bindAll(obj) {
    Object.keys(obj).forEach(function(meth) {
        if (typeof obj[meth] === 'function') {
            obj[meth] = obj[meth].bind(obj);
        }
    });
    return obj;
}
