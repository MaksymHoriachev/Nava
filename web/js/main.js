var $autocompleteTop = [
        {label:"Figueira da Foz", value:""},
        {label:"Ibiza", value:""},
        {label:"Palma de Mallorca", value:""},
        {label:"Portofino", value:""},
        {label:"Port Hercules", value:""},
        {label:"Delphia 47", value:""},
        {label:"Sense 55", value:""},
        {label:"Crusier 51", value:""},
        {label:"Crusier 41S", value:""}
    ],
    $countryLi = $('.country-list'),
    $countryBtn = $('#btn-destination'),
    $boatsLi = $('.boats-list'),
    $boatsBtn = $('#btn-boats');

$("#top-search").autocomplete({source: $autocompleteTop});

$countryLi.slice(0, 5).show();
$countryBtn.on('click', function (event) {
    event.preventDefault();
    $('.country-list:hidden').slice(0, 3).fadeIn(500);
    if($('.country-list:hidden').length == 0) {
            $countryBtn.fadeOut(0);
    };
});

$boatsLi.slice(0, 4).show();
$boatsBtn.on('click', function (event) {
    event.preventDefault();
    $('.boats-list:hidden').slice(0, 2).fadeIn(500);
    if($('.boats-list:hidden').length == 0) {
        $boatsBtn.fadeOut(0);
    };
});



























