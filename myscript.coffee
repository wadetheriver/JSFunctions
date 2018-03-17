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


# for...in is "of" in CS
for key, value of info
  console.log key + " " + value

  if key is "links"
    for link in info.links
      console.log(Object.keys(link) + ":" + Object.values(link))
