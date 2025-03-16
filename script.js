
function copiarReset() {
    const resetText = document.getElementById('resetText').innerText;
    navigator.clipboard.writeText(resetText).then(() => {
      alert('Reset copiado al portapapeles.');
    }, (err) => {
      alert('Error al copiar: ' + err);
    });
  }

  function descargarReset() {
    const resetText = document.getElementById('resetText').innerText;
    const blob = new Blob([resetText], { type: 'text/plain' });
    const enlace = document.createElement('a');
    enlace.href = window.URL.createObjectURL(blob);
    enlace.download = 'SIVRA_reset.txt';
    enlace.click();
  }
