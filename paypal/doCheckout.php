<?php 
require 'paypalClass.php';

$paypal = new Paypal();

// Get Transaction Details 
$response = $paypal->request('GetExpressCheckoutDetails', array(
    'TOKEN' => $_GET['token']
));
// $amount = $response['PAYMENTINFO_0_AMT'];
// echo '<pre>';
// print_r($_REQUEST);
// print_r($response);
// echo '</pre>';

// echo $_GET['token'];
// echo '<br>';
// echo $_GET['PayerID'];
// echo '<br>';

// Do transaction
$response2 = $paypal->request('DoExpressCheckoutPayment', array(
    'TOKEN'                         => $_GET['token'],
    'PAYERID'                       => $_GET['PayerID'],
    'PAYMENTACTION'                 => 'Sale',
    'PAYMENTREQUEST_0_AMT'          => 5,
    'PAYMENTREQUEST_0_CURRENCYCODE' => 'EUR'
));
echo '<pre>';
print_r($_REQUEST);
echo '</pre>';


?>
