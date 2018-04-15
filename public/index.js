var setDefinitionText = function (id, text) {
  var span = document.querySelector(id);
  span.innerText = text;
}

var getInputValue = function (id) {
  var input = document.querySelector(id);
  var value = input.value;
  input.value = '';
  return value;
}

window.addEventListener('load', app);
