jQuery(document).ready(function() {
  jQuery(function() {
    jQuery(document).ready(function(){
      var parallaxObj = ["input", "values", "here"];
      enableParallax(parallaxObj);
    });
  });

  // This function currently accepts an array of target selectors in the form
  // of strings, cycled through for parallax effects.
  function enableParallax(targetsObj) {
    jQuery.each(targetsObj, function(){
      var currentObj = jQuery(this.toString());

      if (currentObj.length > 0) {                // check if object exists on page
        jQuery(window).scroll(function() {

          if (isScrolledIntoView(currentObj)) {   //On Scroll, check if object is in view

            // Calculate position of top of target element relative to top of page
            // and height of target element
            var divTop = currentObj.offset().top;
            var divHeight = currentObj.height();

            // Calculate distance scrolled from top,
            // the center of the viewport (necessary for calculations),
            // and the height of the viewport
            var docViewTop = jQuery(window).scrollTop();
            var docViewSize = jQuery(window).height();
            var docViewCenter = docViewTop + (docViewSize / 2);

            // Calculate the full range of effective parallax movement on the page
            var fullRange = docViewSize + divHeight;

            // My head hurts too much to explain this one. Ask Kyle.
            var currPosition = docViewCenter - (divTop - (docViewSize / 2));

            // Calculate percentage location of current position baseed on full range of parallax movement
            var currPercentage = (currPosition / fullRange) * 100;

            // Set percentage based on calculation
            var coords = '50% ' + currPercentage + '%';

            // Apply background Position and apply background-size: Cover to avoid image tiling
            currentObj.css({ "backgroundPosition": coords, "backgroundSize": "cover" });
          }
        }).scroll();
      }
    });
  }

  // Determines if each element passed to enableParallax is in the viewport and
  // passes through TRUE when element dimensions first are visible in viewport
  function isScrolledIntoView(elem) {
    var docViewTop = jQuery(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = jQuery(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemTop <= docViewBottom) && (elemBottom >= docViewTop));
  }
});
