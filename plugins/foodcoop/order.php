<?php
global $woocommerce;

header('Access-Control-Allow-Origin: *');

require_once("../../../wp-load.php");


$products = $_POST['products'];

foreach ($products as $key => $value) {
    if ($value >= 1) {

      WC()->cart->add_to_cart($key, $value);

    }
}

header("Location: https://foodcoop.neues-food-depot.ch/warenkorb/");

die();

?>
