
$(document).ready(function(){

  // Product Details Accordion script
  $('.accordion-navigation').each(function(){
    var target = $(this);
    var link = target.find('.accordion-toggle');

    link.on('click', function(e){
      e.preventDefault();
      target.toggleClass('active');
    });
  });

  // Relocate the onClick function on AddToBasket
  var onclick = $('.product-basket img').attr('onclick');
  $('.product-basket-button').attr('onclick', onclick);

  //Customer dropdown menu scripts
  $( "#customerMenuInner" ).on( "click", function() {
        $('.customerDropdown').toggleClass('active');
    });
    $(document).mouseup(function (e)
    {
        var container = $(".customerMenuBdy");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $('.customerDropdown').removeClass('active');
            }
    });

    // Frontpage Slider
    $('.frontpage-slider li').each(function(){
      var target = $(this);
      var imgUrl = $(this).find('img').attr('src');
      target.attr('style', 'background-image:url(' + imgUrl + ')');
    });

    // Check Related Products
    var relatedProducts = $('.product-related .plist').length;
    if(relatedProducts){
      $('.product-related').addClass('active');
    }

    // Basket related

      // Prevent Default on basket links
      $('.basket-navigation a, .checkout-navigation a').on('click', function(e){
        e.preventDefault();
      });

      // Basket Empty Basket
      var emptyOnClick = $('.buttonClearBasket').attr('onclick');
      $('.empty-basket').attr('onclick', emptyOnClick);

      // Basket Update Basket
      var updateOnClick = $('.buttonUpdateBasket').attr('onclick');
      $('.update-basket').attr('onclick', updateOnClick);

      // Basket Back
      var backOnClick = $('.buttonNavPrev').attr('onclick');
      $('.basket-back').attr('onclick', backOnClick);

      // Basket Forward
      var forwardOnClick = $('.buttonNavNext').attr('onclick');
      $('.basket-forward').attr('onclick', forwardOnClick);

});
