(function () {
    var mongoose = require('mongoose');

    var Schema = mongoose.Schema;

    var AlumnoSchema = new Schema({
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: Number,
            required: true
        },
        course: {
            type: String,
            required: true
        },
        grade: {
            type: Number,
            required: true
        },

       
    });

    module.exports = mongoose.model('alumnos', AlumnoSchema);
})();