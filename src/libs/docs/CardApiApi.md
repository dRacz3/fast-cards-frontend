# CardsAgainstHumanityDjangoApi.CardApiApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cardApiBlackCardsList**](CardApiApi.md#cardApiBlackCardsList) | **GET** /card-api/black_cards/ | 
[**cardApiBlackCardsPartialUpdate**](CardApiApi.md#cardApiBlackCardsPartialUpdate) | **PATCH** /card-api/black_cards/{card_id}/ | 
[**cardApiBlackCardsRead**](CardApiApi.md#cardApiBlackCardsRead) | **GET** /card-api/black_cards/{card_id}/ | 
[**cardApiBlackCardsUpdate**](CardApiApi.md#cardApiBlackCardsUpdate) | **PUT** /card-api/black_cards/{card_id}/ | 
[**cardApiWhiteCardsList**](CardApiApi.md#cardApiWhiteCardsList) | **GET** /card-api/white_cards/ | 
[**cardApiWhiteCardsPartialUpdate**](CardApiApi.md#cardApiWhiteCardsPartialUpdate) | **PATCH** /card-api/white_cards/{card_id}/ | 
[**cardApiWhiteCardsRead**](CardApiApi.md#cardApiWhiteCardsRead) | **GET** /card-api/white_cards/{card_id}/ | 
[**cardApiWhiteCardsUpdate**](CardApiApi.md#cardApiWhiteCardsUpdate) | **PUT** /card-api/white_cards/{card_id}/ | 



## cardApiBlackCardsList

> InlineResponse200 cardApiBlackCardsList(opts)



### Example

```javascript
import CardsAgainstHumanityDjangoApi from 'cards_against_humanity_django_api';
let defaultClient = CardsAgainstHumanityDjangoApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new CardsAgainstHumanityDjangoApi.CardApiApi();
let opts = {
  'search': "search_example", // String | A search term.
  'page': 56 // Number | A page number within the paginated result set.
};
apiInstance.cardApiBlackCardsList(opts, (error, data, response) => {
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
 **search** | **String**| A search term. | [optional] 
 **page** | **Number**| A page number within the paginated result set. | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cardApiBlackCardsPartialUpdate

> BlackCard cardApiBlackCardsPartialUpdate(cardId, data)



### Example

```javascript
import CardsAgainstHumanityDjangoApi from 'cards_against_humanity_django_api';
let defaultClient = CardsAgainstHumanityDjangoApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new CardsAgainstHumanityDjangoApi.CardApiApi();
let cardId = 56; // Number | A unique integer value identifying this black card.
let data = new CardsAgainstHumanityDjangoApi.BlackCard(); // BlackCard | 
apiInstance.cardApiBlackCardsPartialUpdate(cardId, data, (error, data, response) => {
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
 **cardId** | **Number**| A unique integer value identifying this black card. | 
 **data** | [**BlackCard**](BlackCard.md)|  | 

### Return type

[**BlackCard**](BlackCard.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## cardApiBlackCardsRead

> BlackCard cardApiBlackCardsRead(cardId)



### Example

```javascript
import CardsAgainstHumanityDjangoApi from 'cards_against_humanity_django_api';
let defaultClient = CardsAgainstHumanityDjangoApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new CardsAgainstHumanityDjangoApi.CardApiApi();
let cardId = 56; // Number | A unique integer value identifying this black card.
apiInstance.cardApiBlackCardsRead(cardId, (error, data, response) => {
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
 **cardId** | **Number**| A unique integer value identifying this black card. | 

### Return type

[**BlackCard**](BlackCard.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cardApiBlackCardsUpdate

> BlackCard cardApiBlackCardsUpdate(cardId, data)



### Example

```javascript
import CardsAgainstHumanityDjangoApi from 'cards_against_humanity_django_api';
let defaultClient = CardsAgainstHumanityDjangoApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new CardsAgainstHumanityDjangoApi.CardApiApi();
let cardId = 56; // Number | A unique integer value identifying this black card.
let data = new CardsAgainstHumanityDjangoApi.BlackCard(); // BlackCard | 
apiInstance.cardApiBlackCardsUpdate(cardId, data, (error, data, response) => {
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
 **cardId** | **Number**| A unique integer value identifying this black card. | 
 **data** | [**BlackCard**](BlackCard.md)|  | 

### Return type

[**BlackCard**](BlackCard.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## cardApiWhiteCardsList

> InlineResponse2001 cardApiWhiteCardsList(opts)



### Example

```javascript
import CardsAgainstHumanityDjangoApi from 'cards_against_humanity_django_api';
let defaultClient = CardsAgainstHumanityDjangoApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new CardsAgainstHumanityDjangoApi.CardApiApi();
let opts = {
  'search': "search_example", // String | A search term.
  'page': 56 // Number | A page number within the paginated result set.
};
apiInstance.cardApiWhiteCardsList(opts, (error, data, response) => {
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
 **search** | **String**| A search term. | [optional] 
 **page** | **Number**| A page number within the paginated result set. | [optional] 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cardApiWhiteCardsPartialUpdate

> WhiteCard cardApiWhiteCardsPartialUpdate(cardId, data)



### Example

```javascript
import CardsAgainstHumanityDjangoApi from 'cards_against_humanity_django_api';
let defaultClient = CardsAgainstHumanityDjangoApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new CardsAgainstHumanityDjangoApi.CardApiApi();
let cardId = 56; // Number | A unique integer value identifying this white card.
let data = new CardsAgainstHumanityDjangoApi.WhiteCard(); // WhiteCard | 
apiInstance.cardApiWhiteCardsPartialUpdate(cardId, data, (error, data, response) => {
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
 **cardId** | **Number**| A unique integer value identifying this white card. | 
 **data** | [**WhiteCard**](WhiteCard.md)|  | 

### Return type

[**WhiteCard**](WhiteCard.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## cardApiWhiteCardsRead

> WhiteCard cardApiWhiteCardsRead(cardId)



### Example

```javascript
import CardsAgainstHumanityDjangoApi from 'cards_against_humanity_django_api';
let defaultClient = CardsAgainstHumanityDjangoApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new CardsAgainstHumanityDjangoApi.CardApiApi();
let cardId = 56; // Number | A unique integer value identifying this white card.
apiInstance.cardApiWhiteCardsRead(cardId, (error, data, response) => {
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
 **cardId** | **Number**| A unique integer value identifying this white card. | 

### Return type

[**WhiteCard**](WhiteCard.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## cardApiWhiteCardsUpdate

> WhiteCard cardApiWhiteCardsUpdate(cardId, data)



### Example

```javascript
import CardsAgainstHumanityDjangoApi from 'cards_against_humanity_django_api';
let defaultClient = CardsAgainstHumanityDjangoApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new CardsAgainstHumanityDjangoApi.CardApiApi();
let cardId = 56; // Number | A unique integer value identifying this white card.
let data = new CardsAgainstHumanityDjangoApi.WhiteCard(); // WhiteCard | 
apiInstance.cardApiWhiteCardsUpdate(cardId, data, (error, data, response) => {
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
 **cardId** | **Number**| A unique integer value identifying this white card. | 
 **data** | [**WhiteCard**](WhiteCard.md)|  | 

### Return type

[**WhiteCard**](WhiteCard.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

