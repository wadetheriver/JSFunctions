var i, info, key, len, link, ref, value;

info = {
  "full_name": "Ray Villalobos",
  "title": "Staff Author",
  "links": [
    {
      "blog": "http://iviewsource.com"
    },
    {
      "facebook": "http://facebook.com/iviewsource"
    },
    {
      "youtube": "http://www.youtube.com/planetoftheweb"
    },
    {
      "podcast": "http://feeds.feedburner.com/authoredcontent"
    },
    {
      "twitter": "http://twitter.com/planetoftheweb"
    }
  ]
};

// for...in is "of" in CS
for (key in info) {
  value = info[key];
  console.log(key + " " + value);
  if (key === "links") {
    ref = info.links;
    for (i = 0, len = ref.length; i < len; i++) {
      link = ref[i];
      console.log(Object.keys(link) + ":" + Object.values(link));
    }
  }
}
