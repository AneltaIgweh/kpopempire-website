/* Store links for every "Join the beta" button.
   Change the URL string on the ios line, or the URL string on the android line.
   That is the switch from the public beta to the live store.
   Also replace the same URL in the href of each button in the HTML,
   so the button still works if a browser blocks scripts.
   Live App Store:  https://apps.apple.com/app/id6831214430
   Live Google Play: https://play.google.com/store/apps/details?id=com.anelta.kpopempire
*/
(function () {
  var store = {
    ios: "https://testflight.apple.com/join/BGDXc8wW",
    android: "https://play.google.com/apps/testing/com.anelta.kpopempire"
  };
  var nodes = document.querySelectorAll("[data-store]");
  for (var i = 0; i < nodes.length; i++) {
    var key = nodes[i].getAttribute("data-store");
    if (store[key]) nodes[i].setAttribute("href", store[key]);
  }
})();
