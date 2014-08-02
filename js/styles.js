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
    var $parentGroup = $this.parents('.navButtonParent');
    var filterGroup = $parentGroup.attr('data-filter-group');
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

  // change active class on buttons
  $('.navButtonParent').on('click','li', function(){
     $(this).addClass('active').siblings().removeClass('active');
  });
  
});