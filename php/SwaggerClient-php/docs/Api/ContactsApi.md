# Swagger\Client\ContactsApi

All URIs are relative to *http://206.189.193.36/API*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addContact**](ContactsApi.md#addContact) | **POST** /AddContact.php | Adds a contact to table.
[**deleteContact**](ContactsApi.md#deleteContact) | **POST** /DeleteContact.php | Contact deletion.
[**editContact**](ContactsApi.md#editContact) | **POST** /EditContact.php | Update contact information.
[**searchContact**](ContactsApi.md#searchContact) | **POST** /SearchContacts.php | Searches for contacts with first or last name or email matching search criterion.


# **addContact**
> addContact($contact_item)

Adds a contact to table.

Adds a user to contacts.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\ContactsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$contact_item = new \Swagger\Client\Model\AddContact(); // \Swagger\Client\Model\AddContact | Add the contact.

try {
    $apiInstance->addContact($contact_item);
} catch (Exception $e) {
    echo 'Exception when calling ContactsApi->addContact: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact_item** | [**\Swagger\Client\Model\AddContact**](../Model/AddContact.md)| Add the contact. | [optional]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **deleteContact**
> deleteContact($delete_item)

Contact deletion.

Deletes a contact.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\ContactsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$delete_item = new \Swagger\Client\Model\DeleteContact(); // \Swagger\Client\Model\DeleteContact | Delete by userid and contactid.

try {
    $apiInstance->deleteContact($delete_item);
} catch (Exception $e) {
    echo 'Exception when calling ContactsApi->deleteContact: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **delete_item** | [**\Swagger\Client\Model\DeleteContact**](../Model/DeleteContact.md)| Delete by userid and contactid. | [optional]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **editContact**
> editContact($edit_item)

Update contact information.

Update contact name, email, and phonenumber.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\ContactsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$edit_item = new \Swagger\Client\Model\EditContact(); // \Swagger\Client\Model\EditContact | Edit information associated with a certain userid and contactid.

try {
    $apiInstance->editContact($edit_item);
} catch (Exception $e) {
    echo 'Exception when calling ContactsApi->editContact: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **edit_item** | [**\Swagger\Client\Model\EditContact**](../Model/EditContact.md)| Edit information associated with a certain userid and contactid. | [optional]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **searchContact**
> searchContact($search_item)

Searches for contacts with first or last name or email matching search criterion.

Searches for a contact(s).

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$apiInstance = new Swagger\Client\Api\ContactsApi(
    // If you want use custom http client, pass your client which implements `GuzzleHttp\ClientInterface`.
    // This is optional, `GuzzleHttp\Client` will be used as default.
    new GuzzleHttp\Client()
);
$search_item = new \Swagger\Client\Model\SearchContacts(); // \Swagger\Client\Model\SearchContacts | Search for a contact.

try {
    $apiInstance->searchContact($search_item);
} catch (Exception $e) {
    echo 'Exception when calling ContactsApi->searchContact: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **search_item** | [**\Swagger\Client\Model\SearchContacts**](../Model/SearchContacts.md)| Search for a contact. | [optional]

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

