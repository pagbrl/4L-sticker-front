<?php 

class Paypal{

    protected $user = "theo-facilitator_api1.kleman.fr";
    protected $password = "VRJUESXFY3WK2CBJ";
    protected $signature = "AFcWxV21C7fd0v3bYYYRCpSSRl31A3zVEh2v3TrMj2uz1Nr4I2BIXHJF";
    protected $endpoint = "https://api-3T.sandbox.paypal.com/nvp";

    public function __construct($prod = null){
        if ($prod) {
            $this->user = "";
            $this->password = "";
            $this->signature = "";
            $this->endpoint = "https://api-3T.paypal.com/nvp";
        }
    }

    public function request($method, $params){
        $params = array_merge($params, array(
            'METHOD'    => $method,
            'VERSION'   => '74.0',
            'USER'      => $this->user,
            'PWD'       => $this->password,
            'SIGNATURE' => $this->signature,
        ));
        $params = http_build_query($params);
        
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_URL             => $this->endpoint,
            CURLOPT_POST            => 1,
            CURLOPT_POSTFIELDS      => $params,
            CURLOPT_RETURNTRANSFER  => 1,
            CURLOPT_SSL_VERIFYPEER  => false,
            CURLOPT_SSL_VERIFYHOST  => false,
            CURLOPT_VERBOSE         => 1
        ));
        $response = curl_exec($curl);
        curl_close($curl);
        $token = explode('&', $response);
        $token = $token[0];
        $token = substr($token,6);
        return $token;
    }
}
