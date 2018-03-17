info =
  "full_name" : "Ray Villalobos"
  "title" : "Staff Author"
  "links" : [
    { "blog" : "http://iviewsource.com" }
    { "facebook" : "http://facebook.com/iviewsource" }
    { "youtube"  : "http://www.youtube.com/planetoftheweb" }
    { "podcast"  : "http://feeds.feedburner.com/authoredcontent" }
    { "twitter"  : "http://twitter.com/planetoftheweb" }
  ]

# for link in info.links
#   console.log(Object.keys(link) + ":" + Object.values(link))

output = ''

# go through array
for object in info.links
  # go through each object
  for key, value of object
    if object.hasOwnProperty(key)
      output += '<li> <a href = "' + value + '">'
      output += key
      output += "</a></li>"

ulList = document.querySelector("#links")
ulList.innerHTML = output


# objects could be in any order
info2 =
  "full_name" : "Ray Villalobos"
  "title" : "Staff Author"
  "links" :
    "blog" : "http://iviewsource.com"
    "facebook" : "http://facebook.com/iviewsource"
    "youtube"  : "http://www.youtube.com/planetoftheweb"
    "podcast"  : "http://feeds.feedburner.com/authoredcontent"
    "twitter"  : "http://twitter.com/planetoftheweb"


# Put links in index.html list
output2 = ""

for key, value of info2.links
  # console.log key + " " + value
  if info2.links.hasOwnProperty(key)
    output2 += '<li> <a href = "' + value + '">'
    output2 += key
    output2 += "</a></li>"

ulList2 = document.querySelector("#links2")
ulList2.innerHTML = output2
