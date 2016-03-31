// YOUR CODE GOES HERE
var variable = 2;

$(window).scroll(function(event) {
  event.preventDefault();

   if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
     var request = $.ajax({
       method: "GET",
       url: ("/tweets.json?page=" + variable)
     });

     request.done(function(data) {
       data.forEach(function(tweet) {

         $(".tweets").append("<li class='tweet'>" + "<div class='body'>" +  tweet["text"] + "</div>" + "<div class='user'>" +  tweet["username"] + "</div>" +"</li>");
       })
     variable ++;
     });
   }
});
