# FastCards.CardsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBlackCardCardsBlackPut**](CardsApi.md#createBlackCardCardsBlackPut) | **PUT** /cards/black | Create Black Card
[**createWhiteCardCardsWhitePut**](CardsApi.md#createWhiteCardCardsWhitePut) | **PUT** /cards/white | Create White Card



## createBlackCardCardsBlackPut

> BlackCard createBlackCardCardsBlackPut(blackCard)

Create Black Card

### Example

```javascript
import FastCards from 'fast_cards';
let defaultClient = FastCards.ApiClient.instance;
// Configure Bearer access token for authorization: JWTBearer
let JWTBearer = defaultClient.authentications['JWTBearer'];
JWTBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new FastCards.CardsApi();
let blackCard = new FastCards.BlackCard(); // BlackCard | 
apiInstance.createBlackCardCardsBlackPut(blackCard, (error, data, response) => {
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
 **blackCard** | [**BlackCard**](BlackCard.md)|  | 

### Return type

[**BlackCard**](BlackCard.md)

### Authorization

[JWTBearer](../README.md#JWTBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createWhiteCardCardsWhitePut

> WhiteCard createWhiteCardCardsWhitePut(whiteCard)

Create White Card

### Example

```javascript
import FastCards from 'fast_cards';
let defaultClient = FastCards.ApiClient.instance;
// Configure Bearer access token for authorization: JWTBearer
let JWTBearer = defaultClient.authentications['JWTBearer'];
JWTBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new FastCards.CardsApi();
let whiteCard = new FastCards.WhiteCard(); // WhiteCard | 
apiInstance.createWhiteCardCardsWhitePut(whiteCard, (error, data, response) => {
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
 **whiteCard** | [**WhiteCard**](WhiteCard.md)|  | 

### Return type

[**WhiteCard**](WhiteCard.md)

### Authorization

[JWTBearer](../README.md#JWTBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

