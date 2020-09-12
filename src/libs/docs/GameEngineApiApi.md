# CardsAgainstHumanityDjangoApi.GameEngineApiApi

All URIs are relative to *http://localhost:8000*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gameEngineApiGameroundprofiledataCreate**](GameEngineApiApi.md#gameEngineApiGameroundprofiledataCreate) | **POST** /game_engine_api/gameroundprofiledata/ | 
[**gameEngineApiGameroundprofiledataList**](GameEngineApiApi.md#gameEngineApiGameroundprofiledataList) | **GET** /game_engine_api/gameroundprofiledata/ | 
[**gameEngineApiGameroundprofiledataPartialUpdate**](GameEngineApiApi.md#gameEngineApiGameroundprofiledataPartialUpdate) | **PATCH** /game_engine_api/gameroundprofiledata/{id}/ | 
[**gameEngineApiGameroundprofiledataRead**](GameEngineApiApi.md#gameEngineApiGameroundprofiledataRead) | **GET** /game_engine_api/gameroundprofiledata/{id}/ | 
[**gameEngineApiGameroundprofiledataUpdate**](GameEngineApiApi.md#gameEngineApiGameroundprofiledataUpdate) | **PUT** /game_engine_api/gameroundprofiledata/{id}/ | 
[**gameEngineApiProfilesList**](GameEngineApiApi.md#gameEngineApiProfilesList) | **GET** /game_engine_api/profiles/ | 
[**gameEngineApiProfilesPartialUpdate**](GameEngineApiApi.md#gameEngineApiProfilesPartialUpdate) | **PATCH** /game_engine_api/profiles/{id}/ | 
[**gameEngineApiProfilesRead**](GameEngineApiApi.md#gameEngineApiProfilesRead) | **GET** /game_engine_api/profiles/{id}/ | 
[**gameEngineApiProfilesUpdate**](GameEngineApiApi.md#gameEngineApiProfilesUpdate) | **PUT** /game_engine_api/profiles/{id}/ | 
[**gameEngineApiSessionMycardsList**](GameEngineApiApi.md#gameEngineApiSessionMycardsList) | **GET** /game_engine_api/session/{session_id}/mycards/ | 
[**gameEngineApiSessionOpsDelete**](GameEngineApiApi.md#gameEngineApiSessionOpsDelete) | **DELETE** /game_engine_api/session/{session_id}/ops/ | 
[**gameEngineApiSessionOpsList**](GameEngineApiApi.md#gameEngineApiSessionOpsList) | **GET** /game_engine_api/session/{session_id}/ops/ | 
[**gameEngineApiSessionOpsUpdate**](GameEngineApiApi.md#gameEngineApiSessionOpsUpdate) | **PUT** /game_engine_api/session/{session_id}/ops/ | 
[**gameEngineApiSessionProfilesList**](GameEngineApiApi.md#gameEngineApiSessionProfilesList) | **GET** /game_engine_api/session/{session_id}/profiles | 
[**gameEngineApiSessionRoundsList**](GameEngineApiApi.md#gameEngineApiSessionRoundsList) | **GET** /game_engine_api/session/{session_id}/rounds | 
[**gameEngineApiSessionSubmissionsList**](GameEngineApiApi.md#gameEngineApiSessionSubmissionsList) | **GET** /game_engine_api/session/{session_id}/submissions/ | 
[**gameEngineApiSessionViewList**](GameEngineApiApi.md#gameEngineApiSessionViewList) | **GET** /game_engine_api/session/{session_id}/view | 
[**gameEngineApiSessionsCreate**](GameEngineApiApi.md#gameEngineApiSessionsCreate) | **POST** /game_engine_api/sessions/ | 
[**gameEngineApiSessionsList**](GameEngineApiApi.md#gameEngineApiSessionsList) | **GET** /game_engine_api/sessions/ | 
[**gameEngineApiSessionsPartialUpdate**](GameEngineApiApi.md#gameEngineApiSessionsPartialUpdate) | **PATCH** /game_engine_api/sessions/{session_id}/ | 
[**gameEngineApiSessionsRead**](GameEngineApiApi.md#gameEngineApiSessionsRead) | **GET** /game_engine_api/sessions/{session_id}/ | 
[**gameEngineApiSessionsUpdate**](GameEngineApiApi.md#gameEngineApiSessionsUpdate) | **PUT** /game_engine_api/sessions/{session_id}/ | 



## gameEngineApiGameroundprofiledataCreate

> GameRoundProfileData gameEngineApiGameroundprofiledataCreate(data)



### Example

```javascript
import CardsAgainstHumanityDjangoApi from 'cards_against_humanity_django_api';
let defaultClient = CardsAgainstHumanityDjangoApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new CardsAgainstHumanityDjangoApi.GameEngineApiApi();
let data = new CardsAgainstHumanityDjangoApi.GameRoundProfileData(); // GameRoundProfileData | 
apiInstance.gameEngineApiGameroundprofiledataCreate(data, (error, data, response) => {
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
 **data** | [**GameRoundProfileData**](GameRoundProfileData.md)|  | 

### Return type

[**GameRoundProfileData**](GameRoundProfileData.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameEngineApiGameroundprofiledataList

> InlineResponse2002 gameEngineApiGameroundprofiledataList(opts)



### Example

```javascript
import CardsAgainstHumanityDjangoApi from 'cards_against_humanity_django_api';
let defaultClient = CardsAgainstHumanityDjangoApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new CardsAgainstHumanityDjangoApi.GameEngineApiApi();
let opts = {
  'page': 56 // Number | A page number within the paginated result set.
};
apiInstance.gameEngineApiGameroundprofiledataList(opts, (error, data, response) => {
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
 **page** | **Number**| A page number within the paginated result set. | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameEngineApiGameroundprofiledataPartialUpdate

> GameRoundProfileData gameEngineApiGameroundprofiledataPartialUpdate(id, data)



### Example

```javascript
import CardsAgainstHumanityDjangoApi from 'cards_against_humanity_django_api';
let defaultClient = CardsAgainstHumanityDjangoApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new CardsAgainstHumanityDjangoApi.GameEngineApiApi();
let id = 56; // Number | A unique integer value identifying this game round profile data.
let data = new CardsAgainstHumanityDjangoApi.GameRoundProfileData(); // GameRoundProfileData | 
apiInstance.gameEngineApiGameroundprofiledataPartialUpdate(id, data, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this game round profile data. | 
 **data** | [**GameRoundProfileData**](GameRoundProfileData.md)|  | 

### Return type

[**GameRoundProfileData**](GameRoundProfileData.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameEngineApiGameroundprofiledataRead

> GameRoundProfileData gameEngineApiGameroundprofiledataRead(id)



### Example

```javascript
import CardsAgainstHumanityDjangoApi from 'cards_against_humanity_django_api';
let defaultClient = CardsAgainstHumanityDjangoApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new CardsAgainstHumanityDjangoApi.GameEngineApiApi();
let id = 56; // Number | A unique integer value identifying this game round profile data.
apiInstance.gameEngineApiGameroundprofiledataRead(id, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this game round profile data. | 

### Return type

[**GameRoundProfileData**](GameRoundProfileData.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameEngineApiGameroundprofiledataUpdate

> GameRoundProfileData gameEngineApiGameroundprofiledataUpdate(id, data)



### Example

```javascript
import CardsAgainstHumanityDjangoApi from 'cards_against_humanity_django_api';
let defaultClient = CardsAgainstHumanityDjangoApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new CardsAgainstHumanityDjangoApi.GameEngineApiApi();
let id = 56; // Number | A unique integer value identifying this game round profile data.
let data = new CardsAgainstHumanityDjangoApi.GameRoundProfileData(); // GameRoundProfileData | 
apiInstance.gameEngineApiGameroundprofiledataUpdate(id, data, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this game round profile data. | 
 **data** | [**GameRoundProfileData**](GameRoundProfileData.md)|  | 

### Return type

[**GameRoundProfileData**](GameRoundProfileData.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameEngineApiProfilesList

> InlineResponse2003 gameEngineApiProfilesList(opts)



### Example

```javascript
import CardsAgainstHumanityDjangoApi from 'cards_against_humanity_django_api';
let defaultClient = CardsAgainstHumanityDjangoApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new CardsAgainstHumanityDjangoApi.GameEngineApiApi();
let opts = {
  'search': "search_example", // String | A search term.
  'page': 56 // Number | A page number within the paginated result set.
};
apiInstance.gameEngineApiProfilesList(opts, (error, data, response) => {
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

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameEngineApiProfilesPartialUpdate

> Profile gameEngineApiProfilesPartialUpdate(id, data)



### Example

```javascript
import CardsAgainstHumanityDjangoApi from 'cards_against_humanity_django_api';
let defaultClient = CardsAgainstHumanityDjangoApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new CardsAgainstHumanityDjangoApi.GameEngineApiApi();
let id = 56; // Number | A unique integer value identifying this profile.
let data = new CardsAgainstHumanityDjangoApi.Profile(); // Profile | 
apiInstance.gameEngineApiProfilesPartialUpdate(id, data, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this profile. | 
 **data** | [**Profile**](Profile.md)|  | 

### Return type

[**Profile**](Profile.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameEngineApiProfilesRead

> Profile gameEngineApiProfilesRead(id)



### Example

```javascript
import CardsAgainstHumanityDjangoApi from 'cards_against_humanity_django_api';
let defaultClient = CardsAgainstHumanityDjangoApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new CardsAgainstHumanityDjangoApi.GameEngineApiApi();
let id = 56; // Number | A unique integer value identifying this profile.
apiInstance.gameEngineApiProfilesRead(id, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this profile. | 

### Return type

[**Profile**](Profile.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameEngineApiProfilesUpdate

> Profile gameEngineApiProfilesUpdate(id, data)



### Example

```javascript
import CardsAgainstHumanityDjangoApi from 'cards_against_humanity_django_api';
let defaultClient = CardsAgainstHumanityDjangoApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new CardsAgainstHumanityDjangoApi.GameEngineApiApi();
let id = 56; // Number | A unique integer value identifying this profile.
let data = new CardsAgainstHumanityDjangoApi.Profile(); // Profile | 
apiInstance.gameEngineApiProfilesUpdate(id, data, (error, data, response) => {
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
 **id** | **Number**| A unique integer value identifying this profile. | 
 **data** | [**Profile**](Profile.md)|  | 

### Return type

[**Profile**](Profile.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameEngineApiSessionMycardsList

> gameEngineApiSessionMycardsList(sessionId)



### Example

```javascript
import CardsAgainstHumanityDjangoApi from 'cards_against_humanity_django_api';
let defaultClient = CardsAgainstHumanityDjangoApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new CardsAgainstHumanityDjangoApi.GameEngineApiApi();
let sessionId = "sessionId_example"; // String | 
apiInstance.gameEngineApiSessionMycardsList(sessionId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sessionId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## gameEngineApiSessionOpsDelete

> gameEngineApiSessionOpsDelete(sessionId)



### Example

```javascript
import CardsAgainstHumanityDjangoApi from 'cards_against_humanity_django_api';
let defaultClient = CardsAgainstHumanityDjangoApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new CardsAgainstHumanityDjangoApi.GameEngineApiApi();
let sessionId = "sessionId_example"; // String | 
apiInstance.gameEngineApiSessionOpsDelete(sessionId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sessionId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## gameEngineApiSessionOpsList

> gameEngineApiSessionOpsList(sessionId)



### Example

```javascript
import CardsAgainstHumanityDjangoApi from 'cards_against_humanity_django_api';
let defaultClient = CardsAgainstHumanityDjangoApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new CardsAgainstHumanityDjangoApi.GameEngineApiApi();
let sessionId = "sessionId_example"; // String | 
apiInstance.gameEngineApiSessionOpsList(sessionId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sessionId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## gameEngineApiSessionOpsUpdate

> gameEngineApiSessionOpsUpdate(sessionId)



### Example

```javascript
import CardsAgainstHumanityDjangoApi from 'cards_against_humanity_django_api';
let defaultClient = CardsAgainstHumanityDjangoApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new CardsAgainstHumanityDjangoApi.GameEngineApiApi();
let sessionId = "sessionId_example"; // String | 
apiInstance.gameEngineApiSessionOpsUpdate(sessionId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sessionId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## gameEngineApiSessionProfilesList

> InlineResponse2002 gameEngineApiSessionProfilesList(sessionId, opts)



### Example

```javascript
import CardsAgainstHumanityDjangoApi from 'cards_against_humanity_django_api';
let defaultClient = CardsAgainstHumanityDjangoApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new CardsAgainstHumanityDjangoApi.GameEngineApiApi();
let sessionId = "sessionId_example"; // String | 
let opts = {
  'page': 56 // Number | A page number within the paginated result set.
};
apiInstance.gameEngineApiSessionProfilesList(sessionId, opts, (error, data, response) => {
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
 **sessionId** | **String**|  | 
 **page** | **Number**| A page number within the paginated result set. | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameEngineApiSessionRoundsList

> InlineResponse2004 gameEngineApiSessionRoundsList(sessionId, opts)



### Example

```javascript
import CardsAgainstHumanityDjangoApi from 'cards_against_humanity_django_api';
let defaultClient = CardsAgainstHumanityDjangoApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new CardsAgainstHumanityDjangoApi.GameEngineApiApi();
let sessionId = "sessionId_example"; // String | 
let opts = {
  'page': 56 // Number | A page number within the paginated result set.
};
apiInstance.gameEngineApiSessionRoundsList(sessionId, opts, (error, data, response) => {
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
 **sessionId** | **String**|  | 
 **page** | **Number**| A page number within the paginated result set. | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameEngineApiSessionSubmissionsList

> InlineResponse2005 gameEngineApiSessionSubmissionsList(sessionId, opts)



### Example

```javascript
import CardsAgainstHumanityDjangoApi from 'cards_against_humanity_django_api';
let defaultClient = CardsAgainstHumanityDjangoApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new CardsAgainstHumanityDjangoApi.GameEngineApiApi();
let sessionId = "sessionId_example"; // String | 
let opts = {
  'page': 56 // Number | A page number within the paginated result set.
};
apiInstance.gameEngineApiSessionSubmissionsList(sessionId, opts, (error, data, response) => {
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
 **sessionId** | **String**|  | 
 **page** | **Number**| A page number within the paginated result set. | [optional] 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameEngineApiSessionViewList

> gameEngineApiSessionViewList(sessionId)



### Example

```javascript
import CardsAgainstHumanityDjangoApi from 'cards_against_humanity_django_api';
let defaultClient = CardsAgainstHumanityDjangoApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new CardsAgainstHumanityDjangoApi.GameEngineApiApi();
let sessionId = "sessionId_example"; // String | 
apiInstance.gameEngineApiSessionViewList(sessionId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sessionId** | **String**|  | 

### Return type

null (empty response body)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## gameEngineApiSessionsCreate

> GameSession gameEngineApiSessionsCreate(data)



### Example

```javascript
import CardsAgainstHumanityDjangoApi from 'cards_against_humanity_django_api';
let defaultClient = CardsAgainstHumanityDjangoApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new CardsAgainstHumanityDjangoApi.GameEngineApiApi();
let data = new CardsAgainstHumanityDjangoApi.GameSession(); // GameSession | 
apiInstance.gameEngineApiSessionsCreate(data, (error, data, response) => {
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
 **data** | [**GameSession**](GameSession.md)|  | 

### Return type

[**GameSession**](GameSession.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameEngineApiSessionsList

> InlineResponse2006 gameEngineApiSessionsList(opts)



### Example

```javascript
import CardsAgainstHumanityDjangoApi from 'cards_against_humanity_django_api';
let defaultClient = CardsAgainstHumanityDjangoApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new CardsAgainstHumanityDjangoApi.GameEngineApiApi();
let opts = {
  'search': "search_example", // String | A search term.
  'page': 56 // Number | A page number within the paginated result set.
};
apiInstance.gameEngineApiSessionsList(opts, (error, data, response) => {
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

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameEngineApiSessionsPartialUpdate

> GameSession gameEngineApiSessionsPartialUpdate(sessionId, data)



### Example

```javascript
import CardsAgainstHumanityDjangoApi from 'cards_against_humanity_django_api';
let defaultClient = CardsAgainstHumanityDjangoApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new CardsAgainstHumanityDjangoApi.GameEngineApiApi();
let sessionId = "sessionId_example"; // String | A unique value identifying this game session.
let data = new CardsAgainstHumanityDjangoApi.GameSession(); // GameSession | 
apiInstance.gameEngineApiSessionsPartialUpdate(sessionId, data, (error, data, response) => {
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
 **sessionId** | **String**| A unique value identifying this game session. | 
 **data** | [**GameSession**](GameSession.md)|  | 

### Return type

[**GameSession**](GameSession.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gameEngineApiSessionsRead

> GameSession gameEngineApiSessionsRead(sessionId)



### Example

```javascript
import CardsAgainstHumanityDjangoApi from 'cards_against_humanity_django_api';
let defaultClient = CardsAgainstHumanityDjangoApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new CardsAgainstHumanityDjangoApi.GameEngineApiApi();
let sessionId = "sessionId_example"; // String | A unique value identifying this game session.
apiInstance.gameEngineApiSessionsRead(sessionId, (error, data, response) => {
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
 **sessionId** | **String**| A unique value identifying this game session. | 

### Return type

[**GameSession**](GameSession.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gameEngineApiSessionsUpdate

> GameSession gameEngineApiSessionsUpdate(sessionId, data)



### Example

```javascript
import CardsAgainstHumanityDjangoApi from 'cards_against_humanity_django_api';
let defaultClient = CardsAgainstHumanityDjangoApi.ApiClient.instance;
// Configure HTTP basic authorization: Basic
let Basic = defaultClient.authentications['Basic'];
Basic.username = 'YOUR USERNAME';
Basic.password = 'YOUR PASSWORD';

let apiInstance = new CardsAgainstHumanityDjangoApi.GameEngineApiApi();
let sessionId = "sessionId_example"; // String | A unique value identifying this game session.
let data = new CardsAgainstHumanityDjangoApi.GameSession(); // GameSession | 
apiInstance.gameEngineApiSessionsUpdate(sessionId, data, (error, data, response) => {
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
 **sessionId** | **String**| A unique value identifying this game session. | 
 **data** | [**GameSession**](GameSession.md)|  | 

### Return type

[**GameSession**](GameSession.md)

### Authorization

[Basic](../README.md#Basic)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

