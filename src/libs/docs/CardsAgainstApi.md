# FastCards.CardsAgainstApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNewGameGameNewPost**](CardsAgainstApi.md#createNewGameGameNewPost) | **POST** /game/new | Create New Game
[**joinGameGameJoinPost**](CardsAgainstApi.md#joinGameGameJoinPost) | **POST** /game/join | Join Game
[**leaveGameGameLeavePost**](CardsAgainstApi.md#leaveGameGameLeavePost) | **POST** /game/leave | Leave Game
[**listModesGameModesGet**](CardsAgainstApi.md#listModesGameModesGet) | **GET** /game/modes | List Modes
[**listRoomsGameRoomsGet**](CardsAgainstApi.md#listRoomsGameRoomsGet) | **GET** /game/rooms | List Rooms
[**refreshGameRefreshGet**](CardsAgainstApi.md#refreshGameRefreshGet) | **GET** /game/refresh | Refresh
[**selectWinnerGameSelectwinnerPost**](CardsAgainstApi.md#selectWinnerGameSelectwinnerPost) | **POST** /game/selectwinner | Select Winner
[**startGameGameStartGamePost**](CardsAgainstApi.md#startGameGameStartGamePost) | **POST** /game/start_game | Start Game
[**submitCardsGameSubmitPost**](CardsAgainstApi.md#submitCardsGameSubmitPost) | **POST** /game/submit | Submit Cards



## createNewGameGameNewPost

> GameStateMachine createNewGameGameNewPost(roomName, gamePreferences)

Create New Game

### Example

```javascript
import FastCards from 'fast_cards';
let defaultClient = FastCards.ApiClient.instance;
// Configure Bearer access token for authorization: JWTBearer
let JWTBearer = defaultClient.authentications['JWTBearer'];
JWTBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new FastCards.CardsAgainstApi();
let roomName = "roomName_example"; // String | 
let gamePreferences = new FastCards.GamePreferences(); // GamePreferences | 
apiInstance.createNewGameGameNewPost(roomName, gamePreferences, (error, data, response) => {
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
 **roomName** | **String**|  | 
 **gamePreferences** | [**GamePreferences**](GamePreferences.md)|  | 

### Return type

[**GameStateMachine**](GameStateMachine.md)

### Authorization

[JWTBearer](../README.md#JWTBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## joinGameGameJoinPost

> GameStatePlayerView joinGameGameJoinPost(roomName)

Join Game

### Example

```javascript
import FastCards from 'fast_cards';
let defaultClient = FastCards.ApiClient.instance;
// Configure Bearer access token for authorization: JWTBearer
let JWTBearer = defaultClient.authentications['JWTBearer'];
JWTBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new FastCards.CardsAgainstApi();
let roomName = "roomName_example"; // String | 
apiInstance.joinGameGameJoinPost(roomName, (error, data, response) => {
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
 **roomName** | **String**|  | 

### Return type

[**GameStatePlayerView**](GameStatePlayerView.md)

### Authorization

[JWTBearer](../README.md#JWTBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## leaveGameGameLeavePost

> Object leaveGameGameLeavePost(roomName)

Leave Game

### Example

```javascript
import FastCards from 'fast_cards';
let defaultClient = FastCards.ApiClient.instance;
// Configure Bearer access token for authorization: JWTBearer
let JWTBearer = defaultClient.authentications['JWTBearer'];
JWTBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new FastCards.CardsAgainstApi();
let roomName = "roomName_example"; // String | 
apiInstance.leaveGameGameLeavePost(roomName, (error, data, response) => {
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
 **roomName** | **String**|  | 

### Return type

**Object**

### Authorization

[JWTBearer](../README.md#JWTBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listModesGameModesGet

> [String] listModesGameModesGet()

List Modes

### Example

```javascript
import FastCards from 'fast_cards';
let defaultClient = FastCards.ApiClient.instance;
// Configure Bearer access token for authorization: JWTBearer
let JWTBearer = defaultClient.authentications['JWTBearer'];
JWTBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new FastCards.CardsAgainstApi();
apiInstance.listModesGameModesGet((error, data, response) => {
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

**[String]**

### Authorization

[JWTBearer](../README.md#JWTBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## listRoomsGameRoomsGet

> RoomListing listRoomsGameRoomsGet()

List Rooms

### Example

```javascript
import FastCards from 'fast_cards';
let defaultClient = FastCards.ApiClient.instance;
// Configure Bearer access token for authorization: JWTBearer
let JWTBearer = defaultClient.authentications['JWTBearer'];
JWTBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new FastCards.CardsAgainstApi();
apiInstance.listRoomsGameRoomsGet((error, data, response) => {
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

[**RoomListing**](RoomListing.md)

### Authorization

[JWTBearer](../README.md#JWTBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## refreshGameRefreshGet

> GameStatePlayerView refreshGameRefreshGet(roomName)

Refresh

### Example

```javascript
import FastCards from 'fast_cards';
let defaultClient = FastCards.ApiClient.instance;
// Configure Bearer access token for authorization: JWTBearer
let JWTBearer = defaultClient.authentications['JWTBearer'];
JWTBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new FastCards.CardsAgainstApi();
let roomName = "roomName_example"; // String | 
apiInstance.refreshGameRefreshGet(roomName, (error, data, response) => {
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
 **roomName** | **String**|  | 

### Return type

[**GameStatePlayerView**](GameStatePlayerView.md)

### Authorization

[JWTBearer](../README.md#JWTBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## selectWinnerGameSelectwinnerPost

> GameStatePlayerView selectWinnerGameSelectwinnerPost(roomName, selectWinningSubmission)

Select Winner

### Example

```javascript
import FastCards from 'fast_cards';
let defaultClient = FastCards.ApiClient.instance;
// Configure Bearer access token for authorization: JWTBearer
let JWTBearer = defaultClient.authentications['JWTBearer'];
JWTBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new FastCards.CardsAgainstApi();
let roomName = "roomName_example"; // String | 
let selectWinningSubmission = new FastCards.SelectWinningSubmission(); // SelectWinningSubmission | 
apiInstance.selectWinnerGameSelectwinnerPost(roomName, selectWinningSubmission, (error, data, response) => {
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
 **roomName** | **String**|  | 
 **selectWinningSubmission** | [**SelectWinningSubmission**](SelectWinningSubmission.md)|  | 

### Return type

[**GameStatePlayerView**](GameStatePlayerView.md)

### Authorization

[JWTBearer](../README.md#JWTBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## startGameGameStartGamePost

> GameStatePlayerView startGameGameStartGamePost(roomName)

Start Game

### Example

```javascript
import FastCards from 'fast_cards';
let defaultClient = FastCards.ApiClient.instance;
// Configure Bearer access token for authorization: JWTBearer
let JWTBearer = defaultClient.authentications['JWTBearer'];
JWTBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new FastCards.CardsAgainstApi();
let roomName = "roomName_example"; // String | 
apiInstance.startGameGameStartGamePost(roomName, (error, data, response) => {
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
 **roomName** | **String**|  | 

### Return type

[**GameStatePlayerView**](GameStatePlayerView.md)

### Authorization

[JWTBearer](../README.md#JWTBearer)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## submitCardsGameSubmitPost

> GameStatePlayerView submitCardsGameSubmitPost(roomName, whiteCard)

Submit Cards

### Example

```javascript
import FastCards from 'fast_cards';
let defaultClient = FastCards.ApiClient.instance;
// Configure Bearer access token for authorization: JWTBearer
let JWTBearer = defaultClient.authentications['JWTBearer'];
JWTBearer.accessToken = "YOUR ACCESS TOKEN"

let apiInstance = new FastCards.CardsAgainstApi();
let roomName = "roomName_example"; // String | 
let whiteCard = [new FastCards.WhiteCard()]; // [WhiteCard] | 
apiInstance.submitCardsGameSubmitPost(roomName, whiteCard, (error, data, response) => {
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
 **roomName** | **String**|  | 
 **whiteCard** | [**[WhiteCard]**](WhiteCard.md)|  | 

### Return type

[**GameStatePlayerView**](GameStatePlayerView.md)

### Authorization

[JWTBearer](../README.md#JWTBearer)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

