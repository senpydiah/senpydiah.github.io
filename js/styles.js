$( function() {
  // init Isotope
  var $container = $('.iso').isotope({
    itemSelector: '.infographics'
  });

  // store filter for each group
  var filters = {};

  $('#filters').on( 'click', '.navbutton', function() {
    var $this = $(this);
    // get group key
    var $buttonGroup = $this.parents('.navbar-collapse');
    var filterGroup = $buttonGroup.attr('data-filter-group');
    // set filter for group
    filters[ filterGroup ] = $this.attr('data-filter');
    // combine filters
    var filterValue = '';
    for ( var prop in filters ) {
      filterValue += filters[ prop ];
    }
    // set filter for Isotope
    $container.isotope({ filter: filterValue });
  });

  // change is-checked class on buttons
  $('.navbar-collapse').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'navbutton', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });
  
});