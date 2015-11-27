
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

});
