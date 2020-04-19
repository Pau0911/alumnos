(function () {
    'use strict';

    module.exports = {
        createAlumno: createAlumno,
        fetchAlumnos: fetchAlumnos,
        fetchAlumnoById: fetchAlumnoById,
        updateAlumno: updateAlumno,
        deleteAlumno: deleteAlumno,
        fetchCourse: fetchCourse,
        getCourse:getCourse
    };

    var AlumnoModel = require('./alumno.module')().AlumnoModel;

    function createAlumno(alumno) {
        return AlumnoModel.create(alumno);
    }

    function fetchAlumnos() {
        return AlumnoModel.find({})
            .exec();
    }

    function fetchAlumnoById(alumnoId) {
        return AlumnoModel.findById(alumnoId)
            .exec();
    }

    function updateAlumno(alumnoId, alumno) {
        return AlumnoModel
            .findByIdAndUpdate(alumnoId, alumno, { new: true })
            .exec();
    }

    function deleteAlumno(alumnoId) {
        return AlumnoModel
            .findByIdAndRemove(alumnoId)
            .exec();
    }

    function fetchCourse(courseAl,gradeAl) { 
        return AlumnoModel.updateMany({ course: courseAl}, {"$set": {"grade": gradeAl}})
        .exec() }

    function getCourse(courseAl) { 
        return AlumnoModel.find({ course: courseAl})
        .exec() }

})();