[
  {
    "key": "title",
    "type": "text"
  },
  {
    "key": "subtitle",
    "type": "text"
  },
  {
    "key": "content",
    "type": "ace"
  },
  {
    "type": "tabarray",
    "items": {
      "type": "section",
      "tabKey": "title",
      "items": [
        {
          "key": "slides[].title",
          "onChange": function (evt) {
            //var value = $(evt.target).val();
            //if (value) alert(value);
          }
        },
        {
          "key": "slides[].content",
          "type": "ace",
          "aceMode": "html"
        },
        {
          "type": "submit",
          "title": "Presentation Done! - Let's have a stroll in the park!"
        }    
      ]
    }
  }
]
