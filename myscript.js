var i, info, info2, key, len, object, output, output2, ref, ref1, ulList, ulList2, value;

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

// for link in info.links
//   console.log(Object.keys(link) + ":" + Object.values(link))
output = '';

ref = info.links;
// go through array
for (i = 0, len = ref.length; i < len; i++) {
  object = ref[i];
// go through each object
  for (key in object) {
    value = object[key];
    if (object.hasOwnProperty(key)) {
      output += '<li> <a href = "' + value + '">';
      output += key;
      output += "</a></li>";
    }
  }
}

ulList = document.querySelector("#links");

ulList.innerHTML = output;

// objects could be in any order
info2 = {
  "full_name": "Ray Villalobos",
  "title": "Staff Author",
  "links": {
    "blog": "http://iviewsource.com",
    "facebook": "http://facebook.com/iviewsource",
    "youtube": "http://www.youtube.com/planetoftheweb",
    "podcast": "http://feeds.feedburner.com/authoredcontent",
    "twitter": "http://twitter.com/planetoftheweb"
  }
};

// Put links in index.html list
output2 = "";

ref1 = info2.links;
for (key in ref1) {
  value = ref1[key];
  // console.log key + " " + value
  if (info2.links.hasOwnProperty(key)) {
    output2 += '<li> <a href = "' + value + '">';
    output2 += key;
    output2 += "</a></li>";
  }
}

ulList2 = document.querySelector("#links2");

ulList2.innerHTML = output2;
