# FastCards.UserApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUserAuthSignupPost**](UserApi.md#createUserAuthSignupPost) | **POST** /auth/signup | Create User
[**userLoginAuthLoginPost**](UserApi.md#userLoginAuthLoginPost) | **POST** /auth/login | User Login



## createUserAuthSignupPost

> TokenResponse createUserAuthSignupPost(userSchema)

Create User

### Example

```javascript
import FastCards from 'fast_cards';

let apiInstance = new FastCards.UserApi();
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


## userLoginAuthLoginPost

> TokenResponse userLoginAuthLoginPost(userLoginSchema)

User Login

### Example

```javascript
import FastCards from 'fast_cards';

let apiInstance = new FastCards.UserApi();
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

