function init() {

}

let currentProgress = 0;

$('#onePercent').click(function() {

    currentProgress = currentProgress + 1;

    $('#myProgress').attr("style", "width: " + currentProgress + "%");

});

$('#threePercent').click(function() {

    currentProgress = currentProgress + 3;

    $('#myProgress').attr("style", "width: " + currentProgress + "%");

});

$('#sevenPercent').click(function() {

    currentProgress = currentProgress + 7;

    $('#myProgress').attr("style", "width: " + currentProgress + "%");

});

$(document).ready(init);

