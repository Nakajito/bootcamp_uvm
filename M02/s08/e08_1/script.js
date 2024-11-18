/* 1.Declara un array denominado "participantes" con los siguientes nombres: Elena, Carlos, Javier, Laura, Miguel, Patricia (supongamos que estos son losparticipantes en un concurso y sus posiciones actuales).*/

let participantes =[
    "Elena", "Carlos", "Javier", "Laura", "Miguel", "Patricia" 
];

/* 2.Muestra la clasificación actual.*/
console.log(participantes);

/* 3. A medida que el concurso avanza, se realizan ajustes en las posiciones del array: */
/* 4. Laura supera a Javier */
let index2 = 2;
let index3 = 3;
[participantes[index2], participantes[index3]] = [participantes[index3], participantes[index2]];

/* 5. Patricia es descalificada y se elimina del concurso */
participantes.pop();

/* 6.Se incorporan dos nuevos concursantes, Raúl y Sofía, situándose detrás de Elena y antes de Carlos */
participantes.splice(1, 0, "Raúl", "Sofía");

/* 7. Una nueva participante, Carmen, toma la posición principal en la clasificación */

participantes.unshift("Carmen");

/* 8.Imprime la clasificación actualizada y verifica que se haya realizado correctamente */
console.log(participantes);