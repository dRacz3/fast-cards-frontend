# FastCards.AuthApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUserAuthSignupPost**](AuthApi.md#createUserAuthSignupPost) | **POST** /auth/signup | Create User
[**isMyLoginValidAuthIsMyLoginValidGet**](AuthApi.md#isMyLoginValidAuthIsMyLoginValidGet) | **GET** /auth/is_my_login_valid | Is My Login Valid
[**readUserAuthUsersUserIdGet**](AuthApi.md#readUserAuthUsersUserIdGet) | **GET** /auth/users/{user_id} | Read User
[**readUsersAuthGet**](AuthApi.md#readUsersAuthGet) | **GET** /auth/ | Read Users
[**userLoginAuthLoginPost**](AuthApi.md#userLoginAuthLoginPost) | **POST** /auth/login | User Login



## createUserAuthSignupPost

> TokenResponse createUserAuthSignupPost(userSchema)

Create User

### Example

```javascript
import FastCards from 'fast_cards';

let apiInstance = new FastCards.AuthApi();
let userSchema = new FastCards.UserSchema(); // UserSchema | 
apiInstance.createUserAuthSignupPost(userSchema, (error, data, response) => {
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
 **userSchema** | [**UserSchema**](UserSchema.md)|  | 

### Return type

[**TokenResponse**](TokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## isMyLoginValidAuthIsMyLoginValidGet

> LoginCheckResponse isMyLoginValidAuthIsMyLoginValidGet()

Is My Login Valid

### Example

```javascript
import FastCards from 'fast_cards';
let defaultClient = FastCards.ApiClient.instance;
// Configure Bearer access token for authorization: JWTBearer
let JWTBearer = defaultClient.authentications['JWTBearer'];
JWTBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new FastCards.AuthApi();
apiInstance.isMyLoginValidAuthIsMyLoginValidGet((error, data, response) => {
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

[**LoginCheckResponse**](LoginCheckResponse.md)

### Authorization

[JWTBearer](../README.md#JWTBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readUserAuthUsersUserIdGet

> User readUserAuthUsersUserIdGet(userId)

Read User

### Example

```javascript
import FastCards from 'fast_cards';

let apiInstance = new FastCards.AuthApi();
let userId = 56; // Number | 
apiInstance.readUserAuthUsersUserIdGet(userId, (error, data, response) => {
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
 **userId** | **Number**|  | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## readUsersAuthGet

> [UserSchema] readUsersAuthGet(xToken, opts)

Read Users

### Example

```javascript
import FastCards from 'fast_cards';

let apiInstance = new FastCards.AuthApi();
let xToken = "xToken_example"; // String | 
let opts = {
  'skip': 0, // Number | 
  'limit': 100 // Number | 
};
apiInstance.readUsersAuthGet(xToken, opts, (error, data, response) => {
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
 **xToken** | **String**|  | 
 **skip** | **Number**|  | [optional] [default to 0]
 **limit** | **Number**|  | [optional] [default to 100]

### Return type

[**[UserSchema]**](UserSchema.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## userLoginAuthLoginPost

> TokenResponse userLoginAuthLoginPost(userLoginSchema)

User Login

### Example

```javascript
import FastCards from 'fast_cards';

let apiInstance = new FastCards.AuthApi();
let userLoginSchema = new FastCards.UserLoginSchema(); // UserLoginSchema | 
apiInstance.userLoginAuthLoginPost(userLoginSchema, (error, data, response) => {
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
 **userLoginSchema** | [**UserLoginSchema**](UserLoginSchema.md)|  | 

### Return type

[**TokenResponse**](TokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

