mapboxgl.accessToken = "pk.eyJ1IjoidHNhcmRpbmVzIiwiYSI6ImNrNGE2YTAxcTAwdnYzbHJ1MXcyY2Y1d2MifQ.t6og8BTQXs-4lr2AvHcycw";
  let map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v1",
    center: [55.9508, 3.3615],
    zoom: 15.5,
    bearing: 27,
    pitch: 45
  })

  let places = {
    "airport": {
      bearing: 27,
      center: [55.9508, 3.3615],
      zoom: 15.5,
      pitch: 0
    },
    "city-center": {
      duration: 6000,
      center: [55.9533, 3.1883],
      bearing: 150,
      zoom: 15,
      pitch: 0
    }
  };

  window.onscroll = function() {
    let placeNames = Object.keys(places);
    for (var i = 0; i < placeNames.length; i++) {
      if (isElementOnScreen(placeName)) {
        setActivePlace(placeName);
        break;
      }
    }
  }

  let activePlaceName = "airport";
  function setActivePlace(placeName) {
    if (placeName === activePlaceName) return;
    
    map.flyTo(places[placeName]);
    
    document.getElementById(placeName).setAttribute("class", "active");
    document.getElementById(activePlaceName).setAttribute("class", "");
    
    activePlaceName = placeName;
  }

  function isElementOnScreen(id) {
    let element = document.getElementById(id),
        bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0;
  }

