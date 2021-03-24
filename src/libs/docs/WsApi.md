# FastCards.WsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getWsGet**](WsApi.md#getWsGet) | **GET** /ws/ | Get



## getWsGet

> AnyType getWsGet()

Get

### Example

```javascript
import FastCards from 'fast_cards';

let apiInstance = new FastCards.WsApi();
apiInstance.getWsGet((error, data, response) => {
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

[**AnyType**](AnyType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

