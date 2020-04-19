# Api alumno


- POST
* http://localhost:3000/alumnos 

Permite crear un alumno con los siguientes atributos:
* "firstName": "Paula"
* "lastName": "Gómez"
* "phoneNumber": 3123121
* "email": "pau@gmail.com"
* "course": "matematicas"
* "grade": 4

- GET
* http://localhost:3000/alumnos
- Permite obtener la colección de alumnos (Body)

* http://localhost:3000/alumnos/id
- Permite obtener la información de alumno con el id asociado

* http://localhost:3000/alumnos/course/nombrecurso
  Permite obtener el promedio por curso (Body)

- PUT
* http://localhost:3000/alumnos/id
- Permite actualizar la información del alumno con el id asociado

- DELETE
* http://localhost:3000/alumnos/id
- Permite eliminar un alumno con el id asociado

- PUT
* http://localhost:3000/alumnos/course/nombrecurso
- Modifica todos los alumnos que cumplan con el mismo nombre del curso, en el body enviamos el atributo así: "grade": 4 








 
