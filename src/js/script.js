var $element = $('input[type="range"]');
var $output = $('output');

function updateOutput(el, val) {
  el.textContent = val;
}

$element
  .rangeslider({
    polyfill: false,
    onInit: function() {
      updateOutput($output[0], this.value);
    }
  })
  .on('input', function() {
    updateOutput($output[0], this.value);
  });