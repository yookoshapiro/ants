$(document).ready(function (evt)
{
    'use strict';

    var hill = HillFactory();

    setInterval(function() {
        hill.newAnt().live();
        $('#counter').html(hill.countAnts());
    }, 1000);

});