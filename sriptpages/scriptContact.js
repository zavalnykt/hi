const coordinates = [48.90843588901165, 24.68240570485038];
const mapElement = document.getElementById("map");
const map = L.map(mapElement).setView(coordinates, 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const marker = L.marker(coordinates).addTo(map);

marker.bindPopup("Наша домівка!").openPopup();