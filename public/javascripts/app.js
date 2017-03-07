console.log("Hello from scriptjs");

$(document).ready(function() {
  readPerson()
})

function readPerson() {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/persons',
    success: function(docs) {
      $('#PersonTable').html('')
      docs.forEach(function(doc) {
        $('#PersonTable').append(`<tr>
            <td>${doc.name}</td>
            <td>${doc.position}</td>
            <td>${doc.office}</td>
            <td>${doc.age}</td>
            <td>${doc.startDate}</td>
            <td>${doc.salary}</td>
          </tr>`)
      })
    },
    error: function(err) {
      console.log(err);
    }
  })
}

function createPerson() {
  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/persons',
    data: {
      // fill this shit with data form.
    },
    success: function(doc) {

    },
    error : function(err) {
      console.log(err);
    }
  })
}

function updatePerson(url) {
  $.ajax({
    type: 'PUT',
    url: url,
    data: {
      // fi;; this shit with another data
    },
    success: function(doc) {
      // log docs maybe ?
    },
    error: function(err) {
      console.log(err);
    }
  })
}
