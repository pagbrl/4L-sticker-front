<?php 
require 'paypalClass.php';

if (isset($_GET["amount"])) {
    $amount = $_GET["amount"];

    if ($amount <= 3) {
        $amount = 3;
    };
} else {
    $amount = 3;
};

$paypal = new Paypal();

$params = array(
    'RETURNURL' => 'http://4l-front.dev/paypal/doCheckout.php',
    'CANCELURL' => 'http://4l-front.dev/',

    'PAYMENTREQUEST_0_AMT'             => $amount,
    'PAYMENTREQUEST_0_CURRENCYCODE'    => 'EUR'
);
$token = $paypal->request('SetExpressCheckout', $params);   
if ($token) {
    $url = "https://www.sandbox.paypal.com/webscr?cmd=_express-checkout&useraction=commit&token=". $token;
    header("Location: $url");
    exit;
}
