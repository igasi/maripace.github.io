// Filename: app.js
define([
  'jquery',
  'onepagescroll',
  'responsivemobilemenu',
], function($, onepage_scroll, responsivemobilemenu){

  var initialize = $(document).ready(function(){
      $(".main").onepage_scroll({
        sectionContainer: "section",
        responsiveFallback: false,
        loop: true
      });
    });
  return {
    initialize: initialize
  };
});