
-- traigo el analitico y el proyecto en la misma consulta
SELECT profe_analitico.rapida AS rapidita, profe_aproyecto.rapida AS proyecto, carrera.carrera_nombre, curso.curso ,profesores.dni, profesores.apellido, profesores.nombre, materia.id_materia, materia.materia_nombre, rapida.diasem , rapida.id_rapida 
FROM rapida 
INNER JOIN profesores ON profesores.dni = rapida.profesor
INNER JOIN materia ON rapida.materia=materia.id_materia 
INNER JOIN carrera ON rapida.carrera=carrera.id_carrera 
INNER JOIN curso ON rapida.curso = curso.idcurso 
LEFT JOIN profe_analitico ON rapida.id_rapida=profe_analitico.rapida 
LEFT JOIN profe_aproyecto ON profe_aproyecto.rapida = rapida.id_rapida

WHERE carrera.`id_carrera`<>11
ORDER BY carrera.carrera_nombre, curso.curso



-- traigo analitico y proyecto en la misma consulta, filtrado por dni
SELECT profe_analitico.rapida AS rapidita, profe_aproyecto.rapida AS proyecto, carrera.carrera_nombre, curso.curso ,profesores.apellido, profesores.nombre, materia.id_materia, materia.materia_nombre, rapida.diasem , rapida.id_rapida FROM rapida INNER JOIN profesores ON profesores.dni = rapida.profesor
INNER JOIN materia ON rapida.materia=materia.id_materia INNER JOIN carrera ON rapida.carrera=carrera.id_carrera INNER JOIN curso ON rapida.curso = curso.idcurso 
LEFT JOIN profe_analitico ON rapida.id_rapida=profe_analitico.rapida
LEFT JOIN profe_aproyecto ON rapida.id_rapida=profe_aproyecto.rapida
WHERE rapida.profesor=16713869