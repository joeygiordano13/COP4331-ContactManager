# Swagger\Client\UsersApi

All URIs are relative to *https://virtserver.swaggerhub.com/joeygiordano13/CookieBookAPI/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**doLogin**](UsersApi.md#doLogin) | **POST** /Login.php | Logs in as a user for contact manager.


# **doLogin**
> doLogin($login_item)

Logs in as a user for contact manager.

User login.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\UsersApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$login_item = new \Swagger\Client\Model\Login(); // \Swagger\Client\Model\Login | Login

try {
    $apiInstance->doLogin($login_item);
} catch (Exception $e) {
    echo 'Exception when calling UsersApi->doLogin: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login_item** | [**\Swagger\Client\Model\Login**](../Model/Login.md)| Login | [optional]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

