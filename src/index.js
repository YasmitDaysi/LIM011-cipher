const btnCifrar = document.getElementById('btnCifrar');
const btnDecifrar = document.getElementById('btnDecifrar');
const btnRefresh = document.getElementById('btnRefresh');
btnCifrar.addEventListener('click', () => {
  const offset = document.getElementById('numDesplazamiento').value;
  const string = document.getElementById('txtCifrar').value;
  document.getElementById('txtDecifrar').value = window.cipher.encode(offset, string);
});
btnDecifrar.addEventListener('click', () => {
  const offset = document.getElementById('numDesplazamiento').value;
  const string = document.getElementById('txtCifrar').value;
  document.getElementById('txtDecifrar').value = window.cipher.decode(offset, string);
});
btnRefresh.addEventListener('click', () => {
  document.getElementById('numDesplazamiento').value = '';
  document.getElementById('txtCifrar').value = '';
  document.getElementById('txtDecifrar').value = '';
});
