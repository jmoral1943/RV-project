let restaurantsIndex = 0
let showRestaurant = $('.restaurants');

$('#eating').on('click', () => {
    let i = 0;
    restaurantsIndex = 0;
    for(i = 0; i < showRestaurant.length; i++){
        showRestaurant.eq(i).css({display: 'none'});
    }

    showRestaurant.eq(restaurantsIndex).show();
})

$('#dill').on('click', () => {
    let i = 0;
    restaurantsIndex = 1;
    for(i = 0; i < showRestaurant.length; i++){
        showRestaurant.eq(i).css({display: 'none'});
    }

    showRestaurant.eq(restaurantsIndex).show();
})

$('#vox').on('click', () => {
    let i = 0;
    restaurantsIndex = 2;
    for(i = 0; i < showRestaurant.length; i++){
        showRestaurant.eq(i).css({display: 'none'});
    }

    showRestaurant.eq(restaurantsIndex).show();
})

$('#grillid').on('click', () => {
    let i = 0;
    restaurantsIndex = 3;
    for(i = 0; i < showRestaurant.length; i++){
        showRestaurant.eq(i).css({display: 'none'});
    }

    showRestaurant.eq(restaurantsIndex).show();
})

$('#sjávargrillid').on('click', () => {
    let i = 0;
    restaurantsIndex = 4;
    for(i = 0; i < showRestaurant.length; i++){
        showRestaurant.eq(i).css({display: 'none'});
    }

    showRestaurant.eq(restaurantsIndex).show();
})

$('#plusOne').on('click', () => {
    let i = 0;
    restaurantsIndex += 1;
    for(i = 0; i < showRestaurant.length; i++){
        showRestaurant.eq(i).css({display: 'none'});
    }
    showRestaurant.eq(restaurantsIndex).show();
});

$('#minusOne').on('click', () => {
    let i = 0;
    restaurantsIndex -= 1;
    for(i = 0; i < showRestaurant.length; i++){
        showRestaurant.eq(i).css({display: 'none'});
    }

    showRestaurant.eq(restaurantsIndex).show();
});

$('#plusOne-two').on('click', () => {
    let i = 0;
    restaurantsIndex += 1;
    for(i = 0; i < showRestaurant.length; i++){
        showRestaurant.eq(i).css({display: 'none'});
    }
    showRestaurant.eq(restaurantsIndex).show();
});

$('#minusOne-two').on('click', () => {
    let i = 0;
    restaurantsIndex -= 1;
    for(i = 0; i < showRestaurant.length; i++){
        showRestaurant.eq(i).css({display: 'none'});
    }

    showRestaurant.eq(restaurantsIndex).show();
});

$('#plusOne-three').on('click', () => {
    let i = 0;
    restaurantsIndex += 1;
    for(i = 0; i < showRestaurant.length; i++){
        showRestaurant.eq(i).css({display: 'none'});
    }
    showRestaurant.eq(restaurantsIndex).show();
});

$('#minusOne-three').on('click', () => {
    let i = 0;
    restaurantsIndex -= 1;
    for(i = 0; i < showRestaurant.length; i++){
        showRestaurant.eq(i).css({display: 'none'});
    }

    showRestaurant.eq(restaurantsIndex).show();
});

$('#plusOne-four').on('click', () => {
    let i = 0;
    restaurantsIndex += 1;
    for(i = 0; i < showRestaurant.length; i++){
        showRestaurant.eq(i).css({display: 'none'});
    }
    showRestaurant.eq(restaurantsIndex).show();
});

$('#minusOne-four').on('click', () => {
    let i = 0;
    restaurantsIndex -= 1;
    for(i = 0; i < showRestaurant.length; i++){
        showRestaurant.eq(i).css({display: 'none'});
    }

    showRestaurant.eq(restaurantsIndex).show();
});


$('#plusOne-five').on('click', () => {
    let i = 0;
    restaurantsIndex = 0;
    for(i = 0; i < showRestaurant.length; i++){
        showRestaurant.eq(i).css({display: 'none'});
    }
    showRestaurant.eq(restaurantsIndex).show();
});

$('#minusOne-five').on('click', () => {
    let i = 0;
    restaurantsIndex -= 1;
    for(i = 0; i < showRestaurant.length; i++){
        showRestaurant.eq(i).css({display: 'none'});
    }

    showRestaurant.eq(restaurantsIndex).show();
});
