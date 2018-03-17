$(document).ready () ->
  $.getJSON 'data.json', (info) ->
    output = ''
    for object in info.links
      # console.log object
      # each array element is an object
      for key, value of object
        if object.hasOwnProperty(key)
          output +='<li><a href = "' + value + '">'
          output += key + '"</a>"</li>'

    $("#links").append(output)
    return
  return
