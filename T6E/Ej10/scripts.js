const capa = document.getElementById('capa');
        const boton = document.getElementById('boton');
        const closeButton = document.getElementById('closeButton');

        capa.addEventListener('scroll', () => {
            const { scrollTop, scrollHeight, clientHeight } = capa;
            if (scrollTop + clientHeight >= scrollHeight) {
                boton.style.display = 'block';
            }
        });

        closeButton.addEventListener('click', () => {
            capa.remove();
            boton.remove();
        });