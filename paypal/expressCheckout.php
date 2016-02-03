<?php 
require 'paypalClass.php';

if (isset($_GET["amount"])) {
    $amount = $_GET["amount"];
} else {
    $amount = 5;
};

$paypal = new Paypal();

$params = array(
    'RETURNURL' => 'http://4l-front.dev/',
    'CANCELURL' => 'http://4l-front.dev/don',

    'PAYMENTREQUEST_0_AMT'             => $amount,
    'PAYMENTREQUEST_0_CURRENCYCODE'    => 'EUR'
);
$token = $paypal->request('SetExpressCheckout', $params);   
if ($token) {
    var_dump($token);
    $url = "https://www.sandbox.paypal.com/webscr?cmd=_express-checkout&useraction=commit&token=". $token;
    header("Location: $url");
    exit;
}
