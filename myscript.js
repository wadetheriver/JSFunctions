var request;
if (window.XMLHttpRequest) {
	request=new XMLHttpRequest();
} else {
	request=new ActiveXObject("Microsoft.XMLHTTP");
}

// get local file "data.json"
request.open('GET', 'data.json');
request.onreadystatechange = function() {
	if ((request.status === 200) &&
		(request.readyState === 4)) {

      info = JSON.parse(request.responseText);

			var output='';
      // got through array
			for (var i = 0; i <= info.links.length-1; i++) {
        object=info.links[i];
				for (key in object) {
          // go through each object
					if (object.hasOwnProperty(key)) {
						output += '<li>' +
						'<a href = "' + object[key] +
						'">' + key + '</a>';
						'</li>';
			    }
				}
			}

			var update = document.getElementById('links');
			update.innerHTML = output;


	} //ready
} //event
request.send();
