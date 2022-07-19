# javascript

// must be location id, got from accuweather.com and search the location, then look for url.
locations = []

url = "http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/"

queryParameters = {
    apiKey: apiKey,
    language = en-us,
    details = true,
    metric = true,
}

for (var i in locations){
    var location = locations[i];
    $.ajax({
        url: url+location,
        data: queryParameters,
        method: "GET",
        dataType: "json"
    }).done(function(json){
        get07FC(json);
        get19FC(json);
    }).fail(function(xhr, status, errorThrown) {
        $("#text").html("Error").append(ErrorThrown).append("Status: "+status);
    });
}

function get07FC(json) {
    // iterate through time and get 07:00 am forecast.
    // if failed, get first one.
}

function get19FC(json) {
    // iterate through time and get 07:00 am forecast.
    // if failed, get last one.
}

