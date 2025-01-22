// a)
let er_num = /[0-9]+/;
let str = "Tengo 10 manzanas";
console.log(str.match(er_num)[0]);

// b)
er_num = /(ACGT)+/;
str = "El DNA está formado por las bases ACGT, que se combinan para almacenar la información genética";
console.log(str.match(er_num)[0]);

// c)
er_num = /a/g;
str = "La casa es amarilla";
console.log(str.match(er_num).length);

// d)
er_num = /[0-9]+-[0-9]+-[0-9]+/;
str = "La fecha es 15-08-2024";
console.log(str.match(er_num)[0]);
dia = /[0-9]+-/;
mes = /-[0-9]+-/;
año = /-[0-9]+$/;
dia = str.match(dia)[0];
mes = str.match(mes)[0];
año = str.match(año)[0];
console.log("Dia: " + dia.split("-").join("") + " Mes: " + mes.split("-").join("") + " Año: " + año.split("-").join(""));

// e)
er_num = /láctico/g;
str = "Glucosa y ácido láctico son dos metabolitos clave en el proceso de la glucólisis.";
console.log(str.split(er_num).join("pirúvico"));

// f)
er_num = /https:\/\/\S+/;
str = "Visita nuestro sitio en https://www.ejemplo.com";
console.log(str.match(er_num)[0]);