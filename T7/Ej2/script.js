/* Función para convertir la lista de Pokemons a una tabla HTML */
function convertirATabla(pokemons) {
    // Limpiamos la tabla antes de agregar los datos nuevos, por si ya existía una con otros datos
    $('#pokemonTable tbody').empty();
  
    // Para cada pokemon, lo agregamos a la tabla
    pokemons.forEach(function(pokemon) {
      // Creamos una fila para cada Pokémon
      const fila = $("<tr></tr>");
      const nombreCelda = $("<td></td>").text(pokemon.name);
      
      // Creamos una celda para la URL como enlace clicable
      const urlCelda = $("<td></td>");
      const enlace = $("<a></a>")
        .attr("href", pokemon.url)    // Establecemos la URL como href
        .text(pokemon.url)            // El texto del enlace también será la URL
        .attr("target", "_blank");    // Establecemos que el enlace se abra en una nueva pestaña
  
    
      // Añadimos el enlace a la celda de URL
      urlCelda.append(enlace);

      // Añadimos las celdas a la fila
      fila.append(nombreCelda, urlCelda);

      $.get(pokemon.url, function(pokemon) {
         
        // Añadimos las celdas a la fila
        fila.append("<td>"+ pokemon.base_experience + "</td>");
        console.log(pokemon.base_experience);
      });
  
      
  
      // Añadimos la fila a la tabla
      $('#pokemonTable tbody').append(fila);
    });
  }
  
  
  $(document).ready(function() {
    const url = "https://pokeapi.co/api/v2/pokemon/";    
  
    // Hacemos la petición GET a la API
    $.get(url, function(data) {
      // Aquí recibimos la respuesta JSON desde la API.
      console.log(data);  
      
      // Llamamos a la función para convertir los datos en una tabla
      convertirATabla(data.results);  
    });
  });