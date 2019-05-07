let restaurantsIndex = 0
let showRestaurant = $('.restaurants');

$('#eating').on('click', () => {
    dispearDiv();
    restaurantsIndex = 0;
    showRestaurant.eq(restaurantsIndex).show();
})

$('#dill').on('click', () => {
    dispearDiv();
    restaurantsIndex = 1;
    showRestaurant.eq(restaurantsIndex).show();
})

$('#vox').on('click', () => {
    dispearDiv();
    restaurantsIndex = 2;
    showRestaurant.eq(restaurantsIndex).show();
})

$('#grillid').on('click', () => {
    dispearDiv();
    restaurantsIndex = 3;
    showRestaurant.eq(restaurantsIndex).show();
})

$('#sjávargrillid').on('click', () => {
    dispearDiv();
    restaurantsIndex = 4;
    showRestaurant.eq(restaurantsIndex).show();
})

$('#plusOne').on('click', () => {
    dispearDiv();
    restaurantsIndex += 1;
    showRestaurant.eq(restaurantsIndex).show();
});

$('#minusOne').on('click', () => {
    dispearDiv();
    restaurantsIndex -= 1;
    showRestaurant.eq(restaurantsIndex).show();
});

$('#plusOne-two').on('click', () => {
    dispearDiv();
    restaurantsIndex += 1;
    showRestaurant.eq(restaurantsIndex).show();
});

$('#minusOne-two').on('click', () => {
    dispearDiv();
    restaurantsIndex -= 1;
    showRestaurant.eq(restaurantsIndex).show();
});

$('#plusOne-three').on('click', () => {
    dispearDiv();
    restaurantsIndex += 1;
    showRestaurant.eq(restaurantsIndex).show();
});

$('#minusOne-three').on('click', () => {
    dispearDiv();
    restaurantsIndex -= 1;
    showRestaurant.eq(restaurantsIndex).show();
});

$('#plusOne-four').on('click', () => {
    dispearDiv();
    restaurantsIndex += 1;
    showRestaurant.eq(restaurantsIndex).show();
});

$('#minusOne-four').on('click', () => {
    dispearDiv();
    restaurantsIndex -= 1;
    showRestaurant.eq(restaurantsIndex).show();
});


$('#plusOne-five').on('click', () => {
    dispearDiv();
    restaurantsIndex = 0;
    showRestaurant.eq(restaurantsIndex).show();
});

$('#minusOne-five').on('click', () => {
    dispearDiv();
    restaurantsIndex -= 1;
    showRestaurant.eq(restaurantsIndex).show();
});

const dispearDiv = () => {
    let i = 0;
    for(i = 0; i < showRestaurant.length; i++){
        showRestaurant.eq(i).css({display: 'none'});
    }
}
