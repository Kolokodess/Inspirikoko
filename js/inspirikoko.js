$(document).ready(function(){
	var randomWord;
	newQuote();

	function newQuote(){
		var url ="https://cors-anywhere.herokuapp.com/https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";
		$.getJSON(url, function(value){
		//randomWord = value.quoteText + '--' + value.quoteAuthor + "&hashtags=famousquotes,inspirikoko,kolokodess";
		
		//passing values to the different id's

		$(".quote-text").hide().fadeIn(1000).html(value.quoteText);
		$(".quote-author").hide().fadeIn(1000).html("-" + value.quoteAuthor);
		randomWord = value.quoteText + '--' + value.quoteAuthor + "&hashtags=famousquotes,inspirikoko,kolokodess";
		});
	}

//takes in the tweet function

$('#tweet').on("click", function(){
		window.open("https://twitter.com/intent/tweet?text=" + randomWord);
});

$("#new-quote").on("click", function(){
	newQuote();
});

});


