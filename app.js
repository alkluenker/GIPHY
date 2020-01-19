var topics = ["The Matrix", "Thor", "Stepbrothers", "The Other Guys", "The Hangover", "Limitless", "Elf", "Groundhog Day", "Bedtime Stories", "Bewitched", "The Departed"]


function makeButtons() {
    $("#moviebutton").empty();

    for (var i = 0; i < topics.length; i++) {

        var k = $("<button>");

        k.addClass("movies");

     

        k.attr("data-name", topics[i]);

        k.text(topics[i]);

        $("#moviebutton").append(k);

    }
}

$("#add-movie").on("click", function(event) {
    event.preventDefault();
    
    var newMovie = $("#movie-input").val().trim();

    
    topics.push(newMovie);

 
    makeButtons();
  });

  

$("#moviebutton").on("click", ".movies", function() {
    
    var movieName = $(this).attr("data-name");
    console.log(movieName);

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=fzUhFGJr5hhKrHauSJqFT8FbvAvc15tN&q=" + movieName + "&limit=10&offset=0&rating=G&lang=en"

    
    
    $.ajax({
    
        url: queryURL,
        method: "GET"
    
    }).then(function(response) {

        $("#viewgifs").empty();

        for (a = 0; a < response.data.length; a++) {

            
            var imgURL = response.data[a].images.fixed_height_still.url;
            
            var animatedImageURL = response.data[a].images.fixed_height.url;

           // var rating = response.data[a].rating;

           var responseOne = response.data;
            
            
            var image = $("<img>").attr("src", imgURL);
            
            image.attr("data-still", imgURL);
            
            image.attr("data-animate", animatedImageURL);

            image.attr("data-state", "still");
            
            
            var animatedImage = $("<img>").attr("src", animatedImageURL);
            
            animatedImage.attr("data-animate", animatedImageURL);

            
            
            var b = $("<img>");

            

            image.addClass("gifImages");

            image.addClass("col-md-3");

            
            $("#viewgifs").append(p);
            $("#viewgifs").append(image);
            
            var p = $("<p>").text("Rating: " + responseOne[a].rating);

            //p.addClass("col-md-4");
            
            console.log(p);

            //rating only show up 9 times; it's missing one of the images???

            //can't get the rating to go above the image

            //how to make the images and rating show up in a nice row and column???? it's showing up weird now
            
            
            
        };
        
        $("#viewgifs").on("click", ".gifImages", function() {
            
            
            var state = $(this).attr("data-state");
                
            var stillGif = $(this).attr("data-still");
            

            var animatedGif = $(this).attr("data-animate");

            if (state === "still") {

                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate")
                
            }

            else {

                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");

            }

            console.log(state);
            

            //$(this).attr("src", $(this).attr("data-animate"));

            //console.log(animatedImageURL);

        });

        
        
    });
    
    /*$("#viewgifs").on("click", ".newImages", function() {
        console.log("clicked");
        $.ajax({
    
            url: queryURL,
            method: "GET"
    
        }).then(function(response) {

            for (a = 0; a < 10; a++) {

                var animatedImageURL = response.data[a].images.fixed_height.url;


                var animatedImage = $("<img>").attr("src", animatedImageURL);

            
                $(this).attr("src", animatedImageURL);

                console.log(animatedImageURL);
                //console.log(gifClicked);

            }
        
        })
    

    })*/
}) 

/*function animateImages() {

    console.log("clicked");

}

$(document).on("click", ".gifs", animateImages)


   // var gifs = $(this).attr("data-gifImage");
   // console.log(gifs);


$("#viewgifs").on("click", function() {
    console.log("clicked");
    var state = $(this).attr("data-state");
    console.log(state);
    
})*/




    


makeButtons();