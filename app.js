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

makeButtons();