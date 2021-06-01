function initMap() {
  let map = new google.maps.Map(document.getElementById('map'), {
    zoom: 6,
    center: {lat: 47.825197, lng: 31.285201}
  });

  setMarkers(map);
}

// Data for the markers consisting of a name, a LatLng and a zIndex for the
// order in which these markers should display on top of each other.
let shops = [
  ['Вул. Ковельська, 45', 50.444011, 30.493478],
  ['Вул. Сенаторки Левчанівської, 2', 50.505095, 30.489442],
  ['Вул. Станіславського, 52В', 50.432259, 30.603154],
  ['Вул. Арцеулова, 16', 50.388674, 30.495508],
  ['Б-Р Дружби Народів, 6', 50.456571, 30.365145],
  ['Вул. Гордіюк, 2', 50.416029, 30.459642],
  ['Вул. Даньшина, 2', 50.467242, 30.629648],
  ['Вул. Конякіна, 7А', 50.440170, 30.443179],
];

function setMarkers(map) {
  // Adds markers to the map.

  // Marker sizes are expressed as a Size of X,Y where the origin of the image
  // (0,0) is located in the top left of the image.

  // Origins, anchor positions and coordinates of the marker increase in the X
  // direction to the right and in the Y direction down.
  let image = {
    url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(20, 32),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 32)
  };
  // Shapes define the clickable region of the icon. The type defines an HTML
  // <area> element 'poly' which traces out a polygon as a series of X,Y points.
  // The final coordinate closes the poly by connecting to the first coordinate.
  let shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: 'poly'
  };
  let markers = shops.map(function(shop) {
    return new google.maps.Marker({
      position: {lat: shop[1], lng: shop[2]},
      map: map,
      icon: image,
      shape: shape,
      title: shop[0]
    });
  });


}
