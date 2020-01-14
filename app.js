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

function showMovieTitle() {
}

$("#moviebutton").on("click", ".movies", function() {
    
    var movieName = $(this).attr("data-name");
    console.log(movieName);

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=fzUhFGJr5hhKrHauSJqFT8FbvAvc15tN&q=" + movieName + "&limit=25&offset=0&rating=G&lang=en"
    
    $.ajax({
    
        url: queryURL,
        method: "GET"
    
    }).then(function(response) {

        $("#viewgifs").empty();

        for (a = 0; a < 10; a++) {

            var imgURL = response.data[a].images.original.url;

            var image = $("<img>").attr("src", imgURL)
        
            $("#viewgifs").append(image);

        }
    
    });

}) 

    




makeButtons();