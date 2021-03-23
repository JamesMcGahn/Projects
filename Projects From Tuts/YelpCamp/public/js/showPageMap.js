mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: "map", // container ID
    style: "mapbox://styles/mapbox/light-v10", // style URL
    center: campground, // starting position [lng, lat]
    zoom: 10, // starting zoom
});

new mapboxgl.Marker()
    .setLngLat(campground)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(
                `<h3>${campTitle}`
            )
    )
    .addTo(map)