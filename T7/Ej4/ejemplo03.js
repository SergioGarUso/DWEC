$(document).ready(function () {
    let isLoading = false;    // Bandera para evitar múltiples solicitudes al mismo tiempo
    
    // Identificador inicial para las imágenes de Lorem Picsum
    //// Usamos la variable imageId para asegurarnos de que cada imagen cargada tenga un ID diferente, lo que evita que se repitan.  
    let imageId = 1;          
  
    // Función para cargar más imágenes desde Lorem Picsum
    function cargarMasImagenes(cantidad = 6) {
      // Evitamos múltiples cargas simultáneas
      if (isLoading) return;
      
      isLoading = true;
      $("#loading").show(); // Mostramos el indicador de carga
  
      for (let i = 0; i < cantidad; i++) {
        const imagen = $("<img>")
          .attr("src", `https://picsum.photos/id/${imageId}/300/200`)  // URL de imagen de Lorem Picsum
          .attr("alt", `Imagen aleatoria ${imageId}`)                  // Texto alternativo
          .on("load", function () {
            // Agregamos la clase cuando la imagen se haya cargado
            $(this).addClass("loaded");
          })
          .on("error", function () {
            console.error("Error al cargar la imagen.");
          });
  
        const contenedorImagen = $("<div></div>")
          .addClass("image-item")
          .append(imagen);
  
        $("#imageContainer").append(contenedorImagen);
  
        imageId++; // Incrementamos el ID para obtener IDs diferentes para imágenes diferentes
      }
  
      // Simular un retraso en la carga
      setTimeout(function () {
        isLoading = false;
        $("#loading").hide(); // Ocultamos el indicador de carga
      }, 1000);
    }
  
    // Detectamos el scroll cuando el usuario llega al final de la página
    $(window).on("scroll", function () {
      if (
        $(window).scrollTop() + $(window).height() >=  $(document).height() - 100) {
            // Cargamos más imágenes al llegar cerca del final  
            cargarMasImagenes(6); 
      }
    });
  
    // Cargar las primeras imágenes al iniciar
    cargarMasImagenes(12);
  });