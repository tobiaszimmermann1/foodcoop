jQuery(document).ready( function($) {

var orderTotal = 0;

$(".foodcoop-list-number").on('change', function() {

  orderTotal = 0;

  $(".foodcoop-list-number").each(function() {

    itemId = $(this).attr("id");
    currentId = "#price-" + itemId;
    itemPrice = $(currentId).text();
    itemPrice = parseFloat(itemPrice);
    itemNumber = $(this).val();
    itemNumber = parseFloat(itemNumber);

    var itemTotal = itemNumber * itemPrice;

    orderTotal = orderTotal + itemTotal;

  })

  var orderTotalText = "Total Bestellung: CHF " + orderTotal.toFixed(2);

  $("#foodcoop-order-total").text(orderTotalText);

});


// AJAX CALL FOR ADD TO CART ACTION



});
