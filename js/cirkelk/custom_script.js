
$(document).ready(function(){

	$('.customPmenuLeftPane li a:contains("Type3menu")').parent().hide();

	//Mega menu
	$('#StanderePumperdropDown .innerDropdown > .wrapper-item >li>a, #pMenuSublevels #pMenuSublevelsbdy #pMenuSublevelsl1 > li > a.active').click(function(event) {
		event.preventDefault();
		return false;
	});
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
	  $('h2#relatedProductsHeader').show();
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

  // Open/close basket terms readmor

  $( ".openTermsText" ).click(function() {
    $('.TermsTextDiv').toggleClass('active');
    getHeightOfTermsDiv = $('.TermsTextDiv').height();
    getHeightOfTermsDiv = parseInt(getHeightOfTermsDiv, 10) - 500;
    $('#ShopContent').css('padding-bottom', getHeightOfTermsDiv);
  });

  $( "#closeTermsTop" ).click(function() {
    $('.TermsTextDiv').toggleClass('active');
    $('#ShopContent').css('padding-bottom', '0');
  });

  $( "#closeTermsBottom" ).click(function() {
    $('.TermsTextDiv').toggleClass('active');
    $('#ShopContent').css('padding-bottom', '0');
  });

	// Iframe Check
	var searchQuery = location.search;
	var iframeParam = '';

	if(searchQuery.length > 0 && searchQuery.indexOf('iframe') > -1){

		iframeParam = searchQuery.split('?')[1].split('=');

		if(iframeParam[0] == 'iframe' && iframeParam[1] == 'true'){
			$('body').addClass('page-iframed');
		}

	}else if(top.location!= self.location) {

        parent.postMessage({
            url:self.location.href
        },"https://www.hamag.dk");

	}

});

function setVisibilityForRelatedAndSupplementedProducts() {
    var relatedProducts = $('.product-related .plist').length + $(".product-related div .tab-desktop .product-bdy").length;
    if (relatedProducts) {
        $('.product-related').addClass('active');

        var relatedProd = $('.product-related .plist').length;
        if (relatedProd !== "undefined" && relatedProd.length > 0) {
            $('#relatedProductsHeader').show();
        } else {
            $('#relatedProductsHeader').hide();
        }
    }
}
