
var map;
var infoWindow;
var markers = [];




function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 40, lng: -55 },
        zoom: 3,
        mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map']
        }
    });
    var styledMapType = new google.maps.StyledMapType(
        [
            { "elementType": "geometry", "stylers": [{ "color": "#1d2c4d" }] },
            { "elementType": "labels.text.fill", "stylers": [{ "color": "#8ec3b9" }] },
            { "elementType": "labels.text.stroke", "stylers": [{ "color": "#1a3646" }] },
            {
                "featureType": "administrative.country",
                "elementType": "geometry.stroke",
                "stylers": [{ "color": "#4b6878" }]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#64779e" }]
            },
            {
                "featureType": "administrative.province",
                "elementType": "geometry.stroke",
                "stylers": [{ "color": "#4b6878" }]
            },
            {
                "featureType": "landscape.man_made",
                "elementType": "geometry.stroke",
                "stylers": [{ "color": "#334e87" }]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry",
                "stylers": [{ "color": "#023e58" }]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{ "color": "#283d6a" }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#6f9ba5" }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.stroke",
                "stylers": [{ "color": "#1d2c4d" }]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [{ "color": "#023e58" }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#3C7680" }]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{ "color": "#304a7d" }]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#98a5be" }]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [{ "color": "#1d2c4d" }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{ "color": "#2c6675" }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [{ "color": "#255763" }]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#b0d5ce" }]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.stroke",
                "stylers": [{ "color": "#023e58" }]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#98a5be" }]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.stroke",
                "stylers": [{ "color": "#1d2c4d" }]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry.fill",
                "stylers": [{ "color": "#283d6a" }]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [{ "color": "#3a4762" }]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{ "color": "#0e1626" }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{ "color": "#4e6d70" }]
            }
        ], { name: 'Styled Map' });
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');

    infoWindow = new google.maps.InfoWindow();
    showMarkers();
}

function showMarkers() {
    var latlng = new google.maps.LatLng(40, -55);
    createMarker(latlng);

    // var bounds = new google.maps.LatLngBounds();
    // map.fitBounds(bounds);


    // for(var [index, store] of stores.entries()){
    //     var latlng = new google.maps.LatLng(
    //         store["coordinates"]["latitude"],
    //         store["coordinates"]["longitude"]);
    //     var name = store["name"];
    //     var address = store["addressLines"][0];
    //     var hours = store["openStatusText"];
    //     var phone = store["storeNumber"];

    //     bounds.extend(latlng);
    //     createMarker(latlng, name, address, index+1, hours, phone)
    // }
}

function createMarker(latlng) {
    var html = `
        <p>HELLO</p>
        `;

    var marker = new google.maps.Marker({
        map: map,
        position: latlng,
        animation: google.maps.Animation.DROP
    });

    google.maps.event.addListener(marker, 'mouseover', function () {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    });

    google.maps.event.addListener(marker, 'click', function () {
        infoWindow.setContent(html);
        infoWindow.open(map, marker);
    });

    google.maps.event.addListener(marker, 'mouseout', function () {
        marker.setAnimation(null);
    });

    markers.push(marker);
    console.log(markers);
}

let myChart1 = document.getElementById("myChart1").getContext('2d');
let labels1 = ['YES', 'YES BUT IN GREEN'];
let data1 = [69, 31];
let colors1 = ['#49A9EA', '#36CAAB'];


let chart1 = new Chart(myChart1, {
    type: 'doughnut',
    data: {
        labels: labels1,
        datasets: [{
            data: data1,
            backgroundColor: colors1
        }]

    },
    options: {
        title: {
            text: "Do you like doughnuts?",
            display: true
        }
    }
});

let myChart2 = document.getElementById("myChart2").getContext('2d');
let labels2 = ['United States', 'China', 'Ireland', 'United Kingdom'];
let data2 = [849.4, 551.2, 153.3, 151, 4];
let colors2 = ['#49A9EA', '#36CAAB', '#34495E', '#B370CF'];


let chart2 = new Chart(myChart2, {
    type: 'bar',
    data: {
        labels: labels2,
        datasets: [{
            data: data2,
            backgroundColor: colors2
        }]

    },
    options: {
        title: {
            text: "Number of passenger carried in million / 2017.",
            display: true
        },
        legend: {
            display: false
        }
    }
});