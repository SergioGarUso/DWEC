const arrastrable = document.getElementById('arrastrable');
    const destino = document.getElementById('destino');

    arrastrable.addEventListener('dragstart', (e) => {
      arrastrable.classList.add('dragging');
    });

    arrastrable.addEventListener('dragend', () => {
      arrastrable.classList.remove('dragging');
    });

    destino.addEventListener('dragover', (e) => {
      e.preventDefault();
      destino.classList.add('over');
    });

    destino.addEventListener('dragleave', () => {
      destino.classList.remove('over');
    });

    destino.addEventListener('drop', () => {
      destino.classList.remove('over');
      arrastrable.style.opacity = 0;
      destino.textContent = '¡Lo has logrado!';
    });