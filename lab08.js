$(document).ready(function() {
    // GET A LIST OF 'THINGS' FROM THE SERVER AS HTML DATA
    $('#features').click(function(e) {

      // don't allow the anchor to visit the link
      e.preventDefault();

      $.ajax({
          url: "/topTen.html",
          dataType: "html",
          type: "GET",
          data: { format: "html-list"},
          success: function(data) {
              console.log("SUCCESS HTML:", data);
              $("#content").html(data);

          },
      });
  });


});