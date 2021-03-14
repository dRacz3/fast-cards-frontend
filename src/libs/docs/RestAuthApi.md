# SnippetsApi.RestAuthApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**restAuthLoginCreate**](RestAuthApi.md#restAuthLoginCreate) | **POST** /rest-auth/login/ | 
[**restAuthLogoutCreate**](RestAuthApi.md#restAuthLogoutCreate) | **POST** /rest-auth/logout/ | Calls Django logout method and delete the Token object assigned to the current User object.
[**restAuthLogoutList**](RestAuthApi.md#restAuthLogoutList) | **GET** /rest-auth/logout/ | Calls Django logout method and delete the Token object assigned to the current User object.
[**restAuthPasswordChangeCreate**](RestAuthApi.md#restAuthPasswordChangeCreate) | **POST** /rest-auth/password/change/ | Calls Django Auth SetPasswordForm save method.
[**restAuthPasswordResetConfirmCreate**](RestAuthApi.md#restAuthPasswordResetConfirmCreate) | **POST** /rest-auth/password/reset/confirm/ | Password reset e-mail link is confirmed, therefore this resets the user&#39;s password.
[**restAuthPasswordResetCreate**](RestAuthApi.md#restAuthPasswordResetCreate) | **POST** /rest-auth/password/reset/ | Calls Django Auth PasswordResetForm save method.
[**restAuthRegistrationCreate**](RestAuthApi.md#restAuthRegistrationCreate) | **POST** /rest-auth/registration/ | 
[**restAuthRegistrationVerifyEmailCreate**](RestAuthApi.md#restAuthRegistrationVerifyEmailCreate) | **POST** /rest-auth/registration/verify-email/ | 
[**restAuthUserPartialUpdate**](RestAuthApi.md#restAuthUserPartialUpdate) | **PATCH** /rest-auth/user/ | Reads and updates UserModel fields Accepts GET, PUT, PATCH methods.
[**restAuthUserRead**](RestAuthApi.md#restAuthUserRead) | **GET** /rest-auth/user/ | Reads and updates UserModel fields Accepts GET, PUT, PATCH methods.
[**restAuthUserUpdate**](RestAuthApi.md#restAuthUserUpdate) | **PUT** /rest-auth/user/ | Reads and updates UserModel fields Accepts GET, PUT, PATCH methods.



## restAuthLoginCreate

> Login restAuthLoginCreate(data)



Check the credentials and return the REST Token if the credentials are valid and authenticated. Calls Django Auth login method to register User ID in Django session framework  Accept the following POST parameters: username, password Return the REST Framework Token Object&#39;s key.

### Example

```javascript
import SnippetsApi from 'snippets_api';
let defaultClient = SnippetsApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new SnippetsApi.RestAuthApi();
let data = new SnippetsApi.Login(); // Login | 
apiInstance.restAuthLoginCreate(data, (error, data, response) => {
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
 **data** | [**Login**](Login.md)|  | 

### Return type

[**Login**](Login.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## restAuthLogoutCreate

> restAuthLogoutCreate()

Calls Django logout method and delete the Token object assigned to the current User object.

Accepts/Returns nothing.

### Example

```javascript
import SnippetsApi from 'snippets_api';
let defaultClient = SnippetsApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new SnippetsApi.RestAuthApi();
apiInstance.restAuthLogoutCreate((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## restAuthLogoutList

> restAuthLogoutList()

Calls Django logout method and delete the Token object assigned to the current User object.

Accepts/Returns nothing.

### Example

```javascript
import SnippetsApi from 'snippets_api';
let defaultClient = SnippetsApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new SnippetsApi.RestAuthApi();
apiInstance.restAuthLogoutList((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## restAuthPasswordChangeCreate

> PasswordChange restAuthPasswordChangeCreate(data)

Calls Django Auth SetPasswordForm save method.

Accepts the following POST parameters: new_password1, new_password2 Returns the success/fail message.

### Example

```javascript
import SnippetsApi from 'snippets_api';
let defaultClient = SnippetsApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new SnippetsApi.RestAuthApi();
let data = new SnippetsApi.PasswordChange(); // PasswordChange | 
apiInstance.restAuthPasswordChangeCreate(data, (error, data, response) => {
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
 **data** | [**PasswordChange**](PasswordChange.md)|  | 

### Return type

[**PasswordChange**](PasswordChange.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## restAuthPasswordResetConfirmCreate

> PasswordResetConfirm restAuthPasswordResetConfirmCreate(data)

Password reset e-mail link is confirmed, therefore this resets the user&#39;s password.

Accepts the following POST parameters: token, uid,     new_password1, new_password2 Returns the success/fail message.

### Example

```javascript
import SnippetsApi from 'snippets_api';
let defaultClient = SnippetsApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new SnippetsApi.RestAuthApi();
let data = new SnippetsApi.PasswordResetConfirm(); // PasswordResetConfirm | 
apiInstance.restAuthPasswordResetConfirmCreate(data, (error, data, response) => {
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
 **data** | [**PasswordResetConfirm**](PasswordResetConfirm.md)|  | 

### Return type

[**PasswordResetConfirm**](PasswordResetConfirm.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## restAuthPasswordResetCreate

> PasswordReset restAuthPasswordResetCreate(data)

Calls Django Auth PasswordResetForm save method.

Accepts the following POST parameters: email Returns the success/fail message.

### Example

```javascript
import SnippetsApi from 'snippets_api';
let defaultClient = SnippetsApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new SnippetsApi.RestAuthApi();
let data = new SnippetsApi.PasswordReset(); // PasswordReset | 
apiInstance.restAuthPasswordResetCreate(data, (error, data, response) => {
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
 **data** | [**PasswordReset**](PasswordReset.md)|  | 

### Return type

[**PasswordReset**](PasswordReset.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## restAuthRegistrationCreate

> Register restAuthRegistrationCreate(data)



### Example

```javascript
import SnippetsApi from 'snippets_api';
let defaultClient = SnippetsApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new SnippetsApi.RestAuthApi();
let data = new SnippetsApi.Register(); // Register | 
apiInstance.restAuthRegistrationCreate(data, (error, data, response) => {
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


## restAuthRegistrationVerifyEmailCreate

> VerifyEmail restAuthRegistrationVerifyEmailCreate(data)



### Example

```javascript
import SnippetsApi from 'snippets_api';
let defaultClient = SnippetsApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new SnippetsApi.RestAuthApi();
let data = new SnippetsApi.VerifyEmail(); // VerifyEmail | 
apiInstance.restAuthRegistrationVerifyEmailCreate(data, (error, data, response) => {
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


## restAuthUserPartialUpdate

> UserDetails restAuthUserPartialUpdate(data)

Reads and updates UserModel fields Accepts GET, PUT, PATCH methods.

Default accepted fields: username, first_name, last_name Default display fields: pk, username, email, first_name, last_name Read-only fields: pk, email  Returns UserModel fields.

### Example

```javascript
import SnippetsApi from 'snippets_api';
let defaultClient = SnippetsApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new SnippetsApi.RestAuthApi();
let data = new SnippetsApi.UserDetails(); // UserDetails | 
apiInstance.restAuthUserPartialUpdate(data, (error, data, response) => {
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
 **data** | [**UserDetails**](UserDetails.md)|  | 

### Return type

[**UserDetails**](UserDetails.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## restAuthUserRead

> UserDetails restAuthUserRead()

Reads and updates UserModel fields Accepts GET, PUT, PATCH methods.

Default accepted fields: username, first_name, last_name Default display fields: pk, username, email, first_name, last_name Read-only fields: pk, email  Returns UserModel fields.

### Example

```javascript
import SnippetsApi from 'snippets_api';
let defaultClient = SnippetsApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new SnippetsApi.RestAuthApi();
apiInstance.restAuthUserRead((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**UserDetails**](UserDetails.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## restAuthUserUpdate

> UserDetails restAuthUserUpdate(data)

Reads and updates UserModel fields Accepts GET, PUT, PATCH methods.

Default accepted fields: username, first_name, last_name Default display fields: pk, username, email, first_name, last_name Read-only fields: pk, email  Returns UserModel fields.

### Example

```javascript
import SnippetsApi from 'snippets_api';
let defaultClient = SnippetsApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new SnippetsApi.RestAuthApi();
let data = new SnippetsApi.UserDetails(); // UserDetails | 
apiInstance.restAuthUserUpdate(data, (error, data, response) => {
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
 **data** | [**UserDetails**](UserDetails.md)|  | 

### Return type

[**UserDetails**](UserDetails.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

