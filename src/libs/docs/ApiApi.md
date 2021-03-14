# SnippetsApi.ApiApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiRestAuthRegistrationCreate**](ApiApi.md#apiRestAuthRegistrationCreate) | **POST** /api/rest-auth/registration/ | 
[**apiRestAuthRegistrationVerifyEmailCreate**](ApiApi.md#apiRestAuthRegistrationVerifyEmailCreate) | **POST** /api/rest-auth/registration/verify-email/ | 



## apiRestAuthRegistrationCreate

> Register apiRestAuthRegistrationCreate(data)



### Example

```javascript
import SnippetsApi from 'snippets_api';
let defaultClient = SnippetsApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new SnippetsApi.ApiApi();
let data = new SnippetsApi.Register(); // Register | 
apiInstance.apiRestAuthRegistrationCreate(data, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**Register**](Register.md)|  | 

### Return type

[**Register**](Register.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## apiRestAuthRegistrationVerifyEmailCreate

> VerifyEmail apiRestAuthRegistrationVerifyEmailCreate(data)



### Example

```javascript
import SnippetsApi from 'snippets_api';
let defaultClient = SnippetsApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new SnippetsApi.ApiApi();
let data = new SnippetsApi.VerifyEmail(); // VerifyEmail | 
apiInstance.apiRestAuthRegistrationVerifyEmailCreate(data, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**VerifyEmail**](VerifyEmail.md)|  | 

### Return type

[**VerifyEmail**](VerifyEmail.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

