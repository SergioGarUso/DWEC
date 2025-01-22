
    
    
    

    function menu() {
        const form = document.getElementById("menuForm");
        const resultadoDiv = document.getElementById("resultado");
        const calcularMenu = () => {
            let total = 0;
            let resumen = "Has seleccionado:\n";
    
            // Recoger entrantes seleccionados
            const entrantes = form.querySelectorAll('input[name="entrante"]:checked');
            if (entrantes.length > 0) {
                resumen += "Entrantes:\n";
                entrantes.forEach((entrante) => {
                    const precio = 10;
                    total += precio;
                    resumen += ` - ${entrante.value} (€${precio})\n`;
                });
            }
    
            // Recoger segundo plato seleccionado
            const segundo = form.querySelector('input[name="segundo"]:checked');
            if (segundo) {
                const precio = 10;
                total += precio;
                resumen += `Segundo plato:\n - ${segundo.value} (€${precio})\n`;
            }
    
            // Recoger postre seleccionado
            const postre = form.querySelector('select[name="postre"]');
            const opcionSeleccionada = postre.options[postre.selectedIndex];
            const precioPostre = 10;
            total += precioPostre;
            resumen += `Postre:\n - ${opcionSeleccionada.value} (€${precioPostre})\n`;
    
            // Mostrar el resumen y total
            resumen += `\nTotal: €${total}`;
            resultadoDiv.textContent = resumen;
        };
    }
    // Función para calcular los valores seleccionados y sus precios
    function resetForm() {
        form.reset(); // Reinicia el formulario
        resultadoDiv.textContent = ""; // Limpia el resultado
    }

    // Función para deseleccionar todo
   

