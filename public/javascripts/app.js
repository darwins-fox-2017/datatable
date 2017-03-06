console.log("Hello from scriptjs");

$(document).ready(function() {
  readPerson()
})

function readPerson() {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/persons',
    success: function(docs) {
      docs.forEach(function(doc) {
        console.log(doc);
      })
    }
  })
}
