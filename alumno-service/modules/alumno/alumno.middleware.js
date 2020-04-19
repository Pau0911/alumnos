(function () {
    'use strict';

    module.exports = {
        addAlumno: addAlumno,
        getAlumnos: getAlumnos,
        getAlumnoById: getAlumnoById,
        modifyAlumno: modifyAlumno,
        removeAlumno: removeAlumno,
        updateCourse: updateCourse,
        getAverage:getAverage
    };

    var AlumnoService = require('./alumno.module')().AlumnoService;

    function addAlumno(req, res, next) {

        AlumnoService.createAlumno(req.body)
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(error) {
            next(error);
        }

    }

    function getAlumnos(req, res, next) {

        AlumnoService.fetchAlumnos()
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(err) {
            next(err);
        }

    }

    function getAlumnoById(req, res, next) {

        AlumnoService.fetchAlumnoById(req.params.alumnoId)
            .then(success)
            .catch(failure);

        function success(data) {
            req.response = data;
            next();
        }

        function failure(err) {
            next(err);
        }

    }

    function modifyAlumno(req, res, next) {
        AlumnoService.updateAlumno(req.params.alumnoId, req.body)
            .then(success)
            .catch(error);

        function success(data) {
            req.response = data;
            next();
        }

        function error(err) {
            next(err);
        }
    }

    function removeAlumno(req, res, next) {

        AlumnoService.deleteAlumno(req.params.alumnoId)
            .then(success)
            .catch(error);

        function success(data) {
            req.response = data;
            next();
        }

        function error(err) {
            next(err);
        }

    }
    function updateCourse(req, res, next) { 
        AlumnoService.fetchCourse(req.params.course,Number(req.body.grade))
        .then(success)
        .catch(failure);
         function success(data) { 
             req.response = data;
             next(); 
            } 
        function failure(err) { 
            next(err); 
        } }


        function getAverage(req, res, next) { 
            AlumnoService.getCourse(req.params.course)
            .then(success)
            .catch(failure);
             function success(data) { 
                 req.response = average(data);
                
                 next(); 
                } 
            function failure(err) { next(err); 
            } } 
        
        function average(data){
            var numAlumnos=Object.keys(data).length;
            var grades=0;
            data.map(alumno => grades=grades+alumno.grade)
            
            return grades/numAlumnos

        }


})();
