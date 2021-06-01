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
  ['вул. Грабовського 7А', 50.719626, 25.313861],
  ['вул. Ковельська 45', 50.744574, 25.303666],
  ['вул. Сенаторки Левчанівської, 2', 50.742948, 25.319406],
  ['вул. Станіславського 52В', 50.719571, 25.306607],
  ['вул. Чорновола,44', 50.7502517, 25.3577504],
  ['вул.Арцеулова, 16', 50.7596906, 25.3412712],
  ['вул.Шопена,13', 50.7502946, 25.3354382],
  ['пр.Молоді, 8/В, бар Барель', 50.763073, 25.3700609],
  ['б-р Дружби Народів, 2г', 50.7175798, 25.3094129],
  ['б-р Дружби Народів, 6', 50.7197373, 25.3099855],
  ['вул. Гордіюк 2', 50.7758419, 25.355089],
  ['вул. Гордіюк 39', 50.7691347, 25.3659522],
  ['вул. Даньшина 2', 50.729255, 25.2942376],
  ['вул. Конякіна, 7А', 50.7720475, 25.3581271],
  ['вул. Конякіна, 9б', 50.7704103, 25.3567258],
  ['вул.Кравчука 46Г', 50.7584432, 25.3545826],
  ['вул.Рівненська,76', 50.7479739, 25.4392755],
  ['вул.Рівненська,87', 50.7481175, 25.4391923],
  ['пр.Винниченка,47А', 50.750325, 25.3267122],
  ['пр.Відродження,8', 50.7469446, 25.3775819],
  ['пр.Волі, 43', 50.744219, 25.347905],
  ['пр.Грушевського, 3', 50.7550662, 25.3335528],
  ['пр.Соборності, 15', 50.7615048, 25.364081],
  ['пр.Соборності, 32', 50.758941, 25.359333],
  ['пр.Соборності, 9', 50.7647175, 25.3670489],
  ['вул. Волинської Дивізії 1', 50.6416093, 26.2636752],
  ['вул. О. Новака 66/14', 50.611393, 26.2562849],
  ['вул. Привокзальна,1Б', 50.6267409, 26.2384249],
  ['вул. С.Бандери 60', 50.6113226, 26.2718181],
  ['вул.Ковельська, 108', 50.8549711, 24.3205577],
  ['вул.Ковельська, 44',50.8506022, 24.3190522],
  ['вул.Луцька, 43', 50.8423679, 24.3222134],
  ['вул. Енергетиків 11', 51.3399533, 25.8519743],
  ['м-н Вараш 43\\16', 51.3532677, 25.8454913],
  ['мікрорайон Будівельників 71\\Б', 51.3435401, 25.8500721],
  ['пр-т. Шевченка 14', 51.3464887, 25.8486706],
  ['вул. Грушевського, 1', 51.2127247, 24.7021562],
  ['б-р. Лесі Українки 11', 51.2178584, 24.707855],
  ['вул. Відродження 4', 51.2053441, 24.6631641],
  ['вул. Незалежності, 80/3', 51.2116734, 24.7133554],
  ['вул. Театральна, 8 кор. 3', 51.2155478, 24.7054215],
  ['вул. Дружби, 6', 50.7247307, 24.1589954],
  ['вул. Рилеєва, 60-Б', 50.7356572, 24.1378459],
  ['пр-т. Перемоги 23', 50.7225302, 24.1728845],
  ['вул.Ковельська,5/4', 51.5974138, 24.9550067],
  ['вул.Луцька, 45  ', 50.504085, 24.7709154],
  ['вул. В.Стуса,20', 50.3960186, 24.2426975],
  ['вул.Чкалова,61', 50.8435206, 25.4463701],
  ['вул.Белгородська,2', 51.3368511, 26.6158165],
  ['вул.Соборна,1', 51.3378548, 26.6055322],
  ['с.Заріччя, вул. Героїв Майдану,4  ', 50.8383827, 24.27994],
  ['смт. Благодатне, вул. Перемоги, 23', 50.6639977, 24.2330365],
  ['смт. Турійськ, вул. Ковельська, 2', 51.0872552, 24.5239901],
  ['смт. Шацьк, вул. Степана Шковороди 29В', 51.490809,23.9184464],
  ['смт.Іваничі вул.Валова ,1а', 50.6389879, 24.3526275],
  ['смт.Ратне вул.Центральна 2/70', 51.6614468, 24.5312487],
];

function setMarkers(map) {
  // Adds markers to the map.

  // Marker sizes are expressed as a Size of X,Y where the origin of the image
  // (0,0) is located in the top left of the image.

  // Origins, anchor positions and coordinates of the marker increase in the X
  // direction to the right and in the Y direction down.
  const image = {
    url: './/img/svg/marker.svg',
    // This marker is 20 pixels wide by 32 pixels high.
    scaledSize: new google.maps.Size(35,35),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(18, 35)
  };
  // Shapes define the clickable region of the icon. The type defines an HTML
  // <area> element 'poly' which traces out a polygon as a series of X,Y points.
  // The final coordinate closes the poly by connecting to the first coordinate.

  let infowindow = new google.maps.InfoWindow();
  let markers = shops.map(function(shop) {
    let marker = new google.maps.Marker({
      position: {lat: shop[1], lng: shop[2]},
      map: map,
      icon: image,
      title: shop[0]
    });
    google.maps.event.addListener(marker, 'click', function() {
      map.setZoom(13);
      map.panTo(marker.getPosition());
      infowindow.setContent('<div class="marker__info">' +
                            shop[0] +
                            '</div>');
      infowindow.open(map, marker);
    });
    return marker;
  });

  document.querySelectorAll('.accordeon__header').forEach(item => {
    item.addEventListener('click', event => {
      let map_lat = item.getAttribute('map-lat');
      let map_lng = item.getAttribute('map-lng');
      map.panTo(new google.maps.LatLng(Number(map_lat), Number(map_lng)));
      map.setZoom(12);
    });
  });


  document.querySelectorAll('.accordeon__body li a').forEach(item => {
    item.addEventListener('click', event => {
      let marker_lat = item.getAttribute('markerLatLng').split(',')[0];
      let marker_lng = item.getAttribute('markerLatLng').split(',')[1];
      for(let i = 0; i < Object.keys(markers).length; i++) {
        if (marker_lat == markers[i].getPosition().lat() && marker_lng == markers[i].getPosition().lng()) {
          google.maps.event.trigger(markers[i], 'click');
        }
      }
      return false;
   });
  });
}
