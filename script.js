$(function() {
q
  "use strict"

  var init = "No items yet!";
  var counter = 0;

  // Initial Cart
  $(".counter").html(init);

  // Add Items To Basket
  function addToBasket() {
    counter++;
    $(".counter").html(counter).animate({
      'opacity' : '0'
    },300, function() {
      $(".counter").delay(300).animate({
        'opacity' : '1'
      })
    })
  }

  // Add To Basket Animation
  $("button").on("click", function() {
    addToBasket(); $(this).parent().parent().find(".product_overlay").css({
      'transform': ' translateY(0px)',
      'opacity': '1',
      'transition': 'all ease-in-out .45s'
    }).delay(1500).queue(function() {
      $(this).css({
        'transform': 'translateY(-500px)',
        'opacity': '0',
        'transition': 'all ease-in-out .45s'
      }).dequeue();
    });
  });
});


/*
  Slidemenu
*/
(function() {
	var $body = document.body
	, $menu_trigger = $body.getElementsByClassName('menu-trigger')[0];

	if ( typeof $menu_trigger !== 'undefined' ) {
		$menu_trigger.addEventListener('click', function() {
			$body.className = ( $body.className == 'menu-active' )? '' : 'menu-active';
		});
	}

}).call(this);

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
  this.classList.toggle("active");
  var dropdownContent = this.nextElementSibling;
  if (dropdownContent.style.display === "block") {
  dropdownContent.style.display = "none";
  } else {
  dropdownContent.style.display = "block";
  }
  });
}
new Vue({
  el: '#app',
  data: {
sellixmain: [
  {
    name: 'Fullz',
    image: './images/Fullz.png',
    price: '0.50',
    id: '624bf777363ea',
    des: 'ssn fullname addy',
    colour: 'product--red'
  },

  {
    name: 'NordVPN Logs',
    image: './images/nord.png',
    price: '0.50',
    id: '5478697654rgtyrh',
    des: 'Nord Vpn Logs',
    colour: 'product--blue'
  },

  {
    name: 'Yahoo Logs',
    image: './images/yahoo.png',
    price: '0.50',
    id: '5478697654rgtyrh',
    des: 'LQ Yahoo Logs',
    colour: 'product--black'
  }
]



}})
