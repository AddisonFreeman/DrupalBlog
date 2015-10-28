jQuery(document).on("scroll", function(){
  if (jQuery(document).scrollTop() > 100){
      jQuery("block-title").addClass("shrink");
    } else {
      jQuery("block-title").removeClass("shrink");
    }
});
