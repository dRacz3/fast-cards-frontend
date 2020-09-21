# CardsAgainstHumanityDjangoApi.ApiApi

All URIs are relative to *http://10.36.60.241:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiRestAuthLoginCreate**](ApiApi.md#apiRestAuthLoginCreate) | **POST** /api/rest-auth/login/ | 
[**apiRestAuthLogoutCreate**](ApiApi.md#apiRestAuthLogoutCreate) | **POST** /api/rest-auth/logout/ | Calls Django logout method and delete the Token object assigned to the current User object.
[**apiRestAuthLogoutList**](ApiApi.md#apiRestAuthLogoutList) | **GET** /api/rest-auth/logout/ | Calls Django logout method and delete the Token object assigned to the current User object.
[**apiRestAuthPasswordChangeCreate**](ApiApi.md#apiRestAuthPasswordChangeCreate) | **POST** /api/rest-auth/password/change/ | Calls Django Auth SetPasswordForm save method.
[**apiRestAuthPasswordResetConfirmCreate**](ApiApi.md#apiRestAuthPasswordResetConfirmCreate) | **POST** /api/rest-auth/password/reset/confirm/ | Password reset e-mail link is confirmed, therefore this resets the user&#39;s password.
[**apiRestAuthPasswordResetCreate**](ApiApi.md#apiRestAuthPasswordResetCreate) | **POST** /api/rest-auth/password/reset/ | Calls Django Auth PasswordResetForm save method.
[**apiRestAuthRegistrationCreate**](ApiApi.md#apiRestAuthRegistrationCreate) | **POST** /api/rest-auth/registration/ | 
[**apiRestAuthRegistrationVerifyEmailCreate**](ApiApi.md#apiRestAuthRegistrationVerifyEmailCreate) | **POST** /api/rest-auth/registration/verify-email/ | 
[**apiRestAuthUserPartialUpdate**](ApiApi.md#apiRestAuthUserPartialUpdate) | **PATCH** /api/rest-auth/user/ | Reads and updates UserModel fields Accepts GET, PUT, PATCH methods.
[**apiRestAuthUserRead**](ApiApi.md#apiRestAuthUserRead) | **GET** /api/rest-auth/user/ | Reads and updates UserModel fields Accepts GET, PUT, PATCH methods.
[**apiRestAuthUserUpdate**](ApiApi.md#apiRestAuthUserUpdate) | **PUT** /api/rest-auth/user/ | Reads and updates UserModel fields Accepts GET, PUT, PATCH methods.



## apiRestAuthLoginCreate

> Login apiRestAuthLoginCreate(data)



Check the credentials and return the REST Token if the credentials are valid and authenticated. Calls Django Auth login method to register User ID in Django session framework  Accept the following POST parameters: username, password Return the REST Framework Token Object&#39;s key.

### Example

```javascript
import CardsAgainstHumanityDjangoApi from 'cards_against_humanity_django_api';
let defaultClient = CardsAgainstHumanityDjangoApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new CardsAgainstHumanityDjangoApi.ApiApi();
let data = new CardsAgainstHumanityDjangoApi.Login(); // Login | 
apiInstance.apiRestAuthLoginCreate(data, (error, data, response) => {
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


## apiRestAuthLogoutCreate

> apiRestAuthLogoutCreate()

Calls Django logout method and delete the Token object assigned to the current User object.

Accepts/Returns nothing.

### Example

```javascript
import CardsAgainstHumanityDjangoApi from 'cards_against_humanity_django_api';
let defaultClient = CardsAgainstHumanityDjangoApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new CardsAgainstHumanityDjangoApi.ApiApi();
apiInstance.apiRestAuthLogoutCreate((error, data, response) => {
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


## apiRestAuthLogoutList

> apiRestAuthLogoutList()

Calls Django logout method and delete the Token object assigned to the current User object.

Accepts/Returns nothing.

### Example

```javascript
import CardsAgainstHumanityDjangoApi from 'cards_against_humanity_django_api';
let defaultClient = CardsAgainstHumanityDjangoApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new CardsAgainstHumanityDjangoApi.ApiApi();
apiInstance.apiRestAuthLogoutList((error, data, response) => {
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


## apiRestAuthPasswordChangeCreate

> PasswordChange apiRestAuthPasswordChangeCreate(data)

Calls Django Auth SetPasswordForm save method.

Accepts the following POST parameters: new_password1, new_password2 Returns the success/fail message.

### Example

```javascript
import CardsAgainstHumanityDjangoApi from 'cards_against_humanity_django_api';
let defaultClient = CardsAgainstHumanityDjangoApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new CardsAgainstHumanityDjangoApi.ApiApi();
let data = new CardsAgainstHumanityDjangoApi.PasswordChange(); // PasswordChange | 
apiInstance.apiRestAuthPasswordChangeCreate(data, (error, data, response) => {
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


## apiRestAuthPasswordResetConfirmCreate

> PasswordResetConfirm apiRestAuthPasswordResetConfirmCreate(data)

Password reset e-mail link is confirmed, therefore this resets the user&#39;s password.

Accepts the following POST parameters: token, uid,     new_password1, new_password2 Returns the success/fail message.

### Example

```javascript
import CardsAgainstHumanityDjangoApi from 'cards_against_humanity_django_api';
let defaultClient = CardsAgainstHumanityDjangoApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new CardsAgainstHumanityDjangoApi.ApiApi();
let data = new CardsAgainstHumanityDjangoApi.PasswordResetConfirm(); // PasswordResetConfirm | 
apiInstance.apiRestAuthPasswordResetConfirmCreate(data, (error, data, response) => {
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


## apiRestAuthPasswordResetCreate

> PasswordReset apiRestAuthPasswordResetCreate(data)

Calls Django Auth PasswordResetForm save method.

Accepts the following POST parameters: email Returns the success/fail message.

### Example

```javascript
import CardsAgainstHumanityDjangoApi from 'cards_against_humanity_django_api';
let defaultClient = CardsAgainstHumanityDjangoApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new CardsAgainstHumanityDjangoApi.ApiApi();
let data = new CardsAgainstHumanityDjangoApi.PasswordReset(); // PasswordReset | 
apiInstance.apiRestAuthPasswordResetCreate(data, (error, data, response) => {
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


## apiRestAuthRegistrationCreate

> Register apiRestAuthRegistrationCreate(data)



### Example

```javascript
import CardsAgainstHumanityDjangoApi from 'cards_against_humanity_django_api';
let defaultClient = CardsAgainstHumanityDjangoApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new CardsAgainstHumanityDjangoApi.ApiApi();
let data = new CardsAgainstHumanityDjangoApi.Register(); // Register | 
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
import CardsAgainstHumanityDjangoApi from 'cards_against_humanity_django_api';
let defaultClient = CardsAgainstHumanityDjangoApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new CardsAgainstHumanityDjangoApi.ApiApi();
let data = new CardsAgainstHumanityDjangoApi.VerifyEmail(); // VerifyEmail | 
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


## apiRestAuthUserPartialUpdate

> UserDetails apiRestAuthUserPartialUpdate(data)

Reads and updates UserModel fields Accepts GET, PUT, PATCH methods.

Default accepted fields: username, first_name, last_name Default display fields: pk, username, email, first_name, last_name Read-only fields: pk, email  Returns UserModel fields.

### Example

```javascript
import CardsAgainstHumanityDjangoApi from 'cards_against_humanity_django_api';
let defaultClient = CardsAgainstHumanityDjangoApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new CardsAgainstHumanityDjangoApi.ApiApi();
let data = new CardsAgainstHumanityDjangoApi.UserDetails(); // UserDetails | 
apiInstance.apiRestAuthUserPartialUpdate(data, (error, data, response) => {
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


## apiRestAuthUserRead

> UserDetails apiRestAuthUserRead()

Reads and updates UserModel fields Accepts GET, PUT, PATCH methods.

Default accepted fields: username, first_name, last_name Default display fields: pk, username, email, first_name, last_name Read-only fields: pk, email  Returns UserModel fields.

### Example

```javascript
import CardsAgainstHumanityDjangoApi from 'cards_against_humanity_django_api';
let defaultClient = CardsAgainstHumanityDjangoApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new CardsAgainstHumanityDjangoApi.ApiApi();
apiInstance.apiRestAuthUserRead((error, data, response) => {
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


## apiRestAuthUserUpdate

> UserDetails apiRestAuthUserUpdate(data)

Reads and updates UserModel fields Accepts GET, PUT, PATCH methods.

Default accepted fields: username, first_name, last_name Default display fields: pk, username, email, first_name, last_name Read-only fields: pk, email  Returns UserModel fields.

### Example

```javascript
import CardsAgainstHumanityDjangoApi from 'cards_against_humanity_django_api';
let defaultClient = CardsAgainstHumanityDjangoApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new CardsAgainstHumanityDjangoApi.ApiApi();
let data = new CardsAgainstHumanityDjangoApi.UserDetails(); // UserDetails | 
apiInstance.apiRestAuthUserUpdate(data, (error, data, response) => {
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

