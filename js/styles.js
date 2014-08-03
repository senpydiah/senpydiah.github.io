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

$(".fancybox")
    .attr('rel', 'gallery')
    .fancybox({
        padding    : 0,
        margin     : 5,
        nextEffect : 'fade',
        prevEffect : 'none',
        autoCenter : false,
        afterLoad  : function () {
            $.extend(this, {
                aspectRatio : false,
                type    : 'html',
                width   : '100%',
                height  : '100%',
                content : '<div class="fancybox-image" style="background-image:url(' + this.href + '); background-size: cover; background-position:50% 50%;background-repeat:no-repeat;height:100%;width:100%;" /></div>'
            });
        }
    });