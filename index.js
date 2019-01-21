var myCards = [];//fetch users card list
var swCards = [];//under 5/24 focusing on SW or cashback
var chaseCards = []; //under 5/24, focusing on regular chase cards
var overTravelFocus = []; //when you're over 5/24, focusing on travel
var overCashbackFocus = []; //when you're over 5/24, focusing on cash back

function findCards() {
    numCards = ;//fetch card number
    yesBiz = ;//fetcch if biz ok
    yesSW = ;//focusing on SW or cashback
    creditScore = ; //fetch credit score

    if creditScore < 700 {
        return;
    }

    if numCards < 5 && yesSW {
        return underSW();
    }
    else if numCards < 5 && !yesSW {
        return underNoSW();
    }
    else if numCards > 5 && yesSW {
        return overTravelFocus();
    }
    else if numCards > 5 && !yesSW {
        return overCashBackFocus();
    }
}


//under 5/24, open to business cards
function underSW() {
    var cardSuggestions = [];
    for card in chaseCards {
        if !myCards.includes(card) {
            temp.add(card);
        }
        if cardSuggestions.length == 3 {
            return cardSuggestions;
        }
    }
    if cardSuggestions.length > 0 {
        return cardSuggestions;
    }
    else {
        console.log("WHOOPS. Looks like something went wrong :(")
    }
}

//under 5/24, not open to business cards
function underNoSW() {

}

//over 5/24, open to business cards
function overTravelFocus() {

}

//over 5/24, not open to business cards
function overCashBackFocus() {

}
