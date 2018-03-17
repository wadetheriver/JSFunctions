$(document).ready(function() {
  $.getJSON('data.json', function(info) {
    var i, key, len, object, output, ref, value;
    output = '';
    ref = info.links;
    for (i = 0, len = ref.length; i < len; i++) {
      object = ref[i];
// console.log object
// each array element is an object
      for (key in object) {
        value = object[key];
        if (object.hasOwnProperty(key)) {
          output += '<li><a href = "' + value + '">';
          output += key + '"</a>"</li>';
        }
      }
    }
    $("#links").append(output);
  });
});
