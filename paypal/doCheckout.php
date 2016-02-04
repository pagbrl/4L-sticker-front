<?php 
require 'paypalClass.php';

$paypal = new Paypal();

// Get Transaction Details 
$response = $paypal->request('GetExpressCheckoutDetails', array(
    'TOKEN' => $_GET['TOKEN']
));
$amount = $response['PAYMENTINFO_0_AMT'];
var_dump($response);


// Do transaction
$response = $paypal->request('DoExpressCheckoutPayment', array(
    'TOKEN'                         => $_GET['token'],
    'PAYERID'                       => $_GET['PayerID'],
    'PAYMENTACTION'                 => 'Sale',
    'PAYMENTREQUEST_0_AMT'          => $amount,
    'PAYMENTREQUEST_0_CURRENCYCODE' => 'EUR'
));



?>
