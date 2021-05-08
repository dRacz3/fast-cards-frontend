# FastCards.GameStateMachine

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**roomName** | **String** |  | 
**blackCards** | [**[BlackCard]**](BlackCard.md) |  | 
**whiteCards** | [**[WhiteCard]**](WhiteCard.md) |  | 
**state** | **String** |  | [optional] [default to &#39;STARTING&#39;]
**mode** | **String** |  | [optional] [default to &#39;NORMAL&#39;]
**lastWinner** | [**LastWinnerInfo**](LastWinnerInfo.md) |  | [optional] 
**roundCount** | **Number** |  | [optional] [default to 0]
**currentlyActiveCard** | [**BlackCard**](BlackCard.md) |  | [optional] 
**playerSubmissions** | [**{String: Submission}**](Submission.md) |  | [optional] 
**playerLookup** | [**{String: CardsAgainstHumanityPlayer}**](CardsAgainstHumanityPlayer.md) |  | [optional] 


