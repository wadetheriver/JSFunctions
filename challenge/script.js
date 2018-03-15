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
          listHTML += '</img><a/>'
          listHTML += "</li>"
        }

      listHTML += "</ul>";
        this.innerHTML = listHTML;
  });

})();
