var socialMedia = {
  facebook : 'http://facebook.com/viewsource',
  twitter: 'http://twitter.com/planetoftheweb',
  flickr: 'http://flickr.com/planetotheweb',
  youtube: 'http://youtube.com/planetoftheweb'
};


(function(){

  $('.socialmediaicons').each(function(index, value){

      var listHTML = "<ul>";
        for (key in socialMedia) {
          var iconName = key + ".png";
          var iconPath = "images/" + iconName;
          var theURL = socialMedia[key];

          listHTML += '<li> <a href = "' + theURL + '">';
          listHTML += '<img src= "' + iconPath + '">'
          listHTML += '</img><a/></li>'
        }

      listHTML += "</ul>";
        this.innerHTML = listHTML;
  });

})();


// Rays Solution
var socialList = function() {

  console.log (arguments)
  console.log (this)

  var  output = '<ul>',
    myList = document.querySelectorAll('.socialmediaicons');

  for (var key in arguments[0]) {
    output+= '<li><a href="' + socialMedia[key] + '">' +
      '<img src="images/' + key + '.png" alt="icon for '+key+'">' +
      '</a></li>';
  }
  output+= '</ul>';

  for (var i = myList.length - 1; i >= 0; i--) {
    myList[i].innerHTML = output;
  };
}(socialMedia); // passing object as arguments!
