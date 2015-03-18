$(document).ready(function() {
    var quotes = new Array("Hey.", "What.", "Who.", "Nope."),
    randno = quotes[Math.floor( Math.random() * quotes.length )];
    $('.shuf-button').text( randno );
});