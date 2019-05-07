let restaurantsIndex = 0
let showRestaurant = document.getElementsByClassName('restaurants');

document.getElementById('plusOne').addEventListener('click', () => {
    dispearDiv();
    restaurantsIndex += 1;
    if(restaurantsIndex > 4) {
        restaurantsIndex = 0;
    }
    showRestaurant[restaurantsIndex].style.display = "block";
});

document.getElementById('minusOne').addEventListener('click', () => {
    dispearDiv();
    restaurantsIndex -= 1;
    if(restaurantsIndex < 0) {
        restaurantsIndex = 4;
    }
    showRestaurant[restaurantsIndex].style.display = "block";
});

const dispearDiv = () => {
    let i = 0;
    for(i = 0; i < showRestaurant.length; i++){
        showRestaurant[restaurantsIndex].style.display = "none";
    }
}

const appearDiv = (n) => {
    dispearDiv();
    restaurantsIndex = n;
    showRestaurant[restaurantsIndex].style.display = "block";
}
