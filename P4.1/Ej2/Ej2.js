function factorial(n) {
   var resultado = 1;

   for (var i = 2; i <= n; i++) {
       resultado *= i;
   }

   return resultado;
}

