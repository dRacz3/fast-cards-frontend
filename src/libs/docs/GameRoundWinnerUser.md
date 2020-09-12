# CardsAgainstHumanityDjangoApi.GameRoundWinnerUser

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** |  | [optional] [readonly] 
**password** | **String** |  | 
**lastLogin** | **Date** |  | [optional] 
**isSuperuser** | **Boolean** | Designates that this user has all permissions without explicitly assigning them. | [optional] 
**username** | **String** | Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. | 
**firstName** | **String** |  | [optional] 
**lastName** | **String** |  | [optional] 
**email** | **String** |  | [optional] 
**isStaff** | **Boolean** | Designates whether the user can log into this admin site. | [optional] 
**isActive** | **Boolean** | Designates whether this user should be treated as active. Unselect this instead of deleting accounts. | [optional] 
**dateJoined** | **Date** |  | [optional] 
**groups** | [**[GameRoundWinnerUserGroups]**](GameRoundWinnerUserGroups.md) |  | [optional] [readonly] 
**userPermissions** | [**[GameRoundWinnerUserPermissions]**](GameRoundWinnerUserPermissions.md) |  | [optional] [readonly] 


