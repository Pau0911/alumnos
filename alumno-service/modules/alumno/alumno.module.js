(function () {
    'use strict';

    module.exports = init;

    function init() {
        return {
            AlumnoController: require('./alumno.controller'),
            AlumnoMiddleware: require('./alumno.middleware'),
            AlumnoService: require('./alumno.service'),
            AlumnoModel: require('./alumno.model')
        }
    }

})();