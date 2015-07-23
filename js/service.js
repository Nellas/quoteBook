var app = angular.module('quoteBook').service('MainService', function() {

    var quotes;

    this.getData = function() {
        if(localStorage.quotes) { // checks to see if data is saved in local storage
            quotes = JSON.parse(localStorage.getItem('quotes')); // prepares that data to send to the ng-repeat
        } else {
            quotes = [
                { text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
                { text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
                { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
                { text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
                { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
                { text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
                { text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
            ];
        }
        return quotes;
    };

    // add quote function
    this.addData = function(quote, auth) {
        if (quote && auth) {  // verifies that both text fields had information
            quotes.push({text: quote.toString(), author: auth.toString()});
            localStorage.setItem('quotes', JSON.stringify(quotes)); // adds the updated array to local memory
        }

    };

    // remove quote function (ng click)
    this.removeData = function(string) {
        for (var i = quotes.length - 1; i >= 0; i--) {
            if (quotes[i].text.toLowerCase() === string.toLowerCase()) {
                quotes.splice(i, 1);
            }
            localStorage.setItem('quotes', JSON.stringify(quotes)); // adds the updated array to local memory
        }
    };
});