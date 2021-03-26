/**
 * fast-cards
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import GameStateMachine from '../model/GameStateMachine';
import GameStatePlayerView from '../model/GameStatePlayerView';
import HTTPValidationError from '../model/HTTPValidationError';
import RoomListing from '../model/RoomListing';
import SelectWinningSubmission from '../model/SelectWinningSubmission';
import WhiteCard from '../model/WhiteCard';

/**
* CardsAgainst service.
* @module api/CardsAgainstApi
* @version 0.0.1
*/
export default class CardsAgainstApi {

    /**
    * Constructs a new CardsAgainstApi. 
    * @alias module:api/CardsAgainstApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createNewGameGameNewPost operation.
     * @callback module:api/CardsAgainstApi~createNewGameGameNewPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GameStateMachine} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create New Game
     * @param {String} roomName 
     * @param {module:api/CardsAgainstApi~createNewGameGameNewPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GameStateMachine}
     */
    createNewGameGameNewPost(roomName, callback) {
      let postBody = null;
      // verify the required parameter 'roomName' is set
      if (roomName === undefined || roomName === null) {
        throw new Error("Missing the required parameter 'roomName' when calling createNewGameGameNewPost");
      }

      let pathParams = {
      };
      let queryParams = {
        'room_name': roomName
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JWTBearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GameStateMachine;
      return this.apiClient.callApi(
        '/game/new', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the joinGameGameJoinPost operation.
     * @callback module:api/CardsAgainstApi~joinGameGameJoinPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GameStatePlayerView} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Join Game
     * @param {String} roomName 
     * @param {module:api/CardsAgainstApi~joinGameGameJoinPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GameStatePlayerView}
     */
    joinGameGameJoinPost(roomName, callback) {
      let postBody = null;
      // verify the required parameter 'roomName' is set
      if (roomName === undefined || roomName === null) {
        throw new Error("Missing the required parameter 'roomName' when calling joinGameGameJoinPost");
      }

      let pathParams = {
      };
      let queryParams = {
        'room_name': roomName
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JWTBearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GameStatePlayerView;
      return this.apiClient.callApi(
        '/game/join', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the leaveGameGameLeavePost operation.
     * @callback module:api/CardsAgainstApi~leaveGameGameLeavePostCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Leave Game
     * @param {String} roomName 
     * @param {module:api/CardsAgainstApi~leaveGameGameLeavePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */
    leaveGameGameLeavePost(roomName, callback) {
      let postBody = null;
      // verify the required parameter 'roomName' is set
      if (roomName === undefined || roomName === null) {
        throw new Error("Missing the required parameter 'roomName' when calling leaveGameGameLeavePost");
      }

      let pathParams = {
      };
      let queryParams = {
        'room_name': roomName
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JWTBearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/game/leave', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the listRoomsGameRoomsGet operation.
     * @callback module:api/CardsAgainstApi~listRoomsGameRoomsGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RoomListing} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Rooms
     * @param {module:api/CardsAgainstApi~listRoomsGameRoomsGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/RoomListing}
     */
    listRoomsGameRoomsGet(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JWTBearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = RoomListing;
      return this.apiClient.callApi(
        '/game/rooms', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the refreshGameRefreshGet operation.
     * @callback module:api/CardsAgainstApi~refreshGameRefreshGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GameStatePlayerView} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Refresh
     * @param {String} roomName 
     * @param {module:api/CardsAgainstApi~refreshGameRefreshGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GameStatePlayerView}
     */
    refreshGameRefreshGet(roomName, callback) {
      let postBody = null;
      // verify the required parameter 'roomName' is set
      if (roomName === undefined || roomName === null) {
        throw new Error("Missing the required parameter 'roomName' when calling refreshGameRefreshGet");
      }

      let pathParams = {
      };
      let queryParams = {
        'room_name': roomName
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JWTBearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GameStatePlayerView;
      return this.apiClient.callApi(
        '/game/refresh', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the selectWinnerGameSelectwinnerPost operation.
     * @callback module:api/CardsAgainstApi~selectWinnerGameSelectwinnerPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GameStatePlayerView} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Select Winner
     * @param {String} roomName 
     * @param {module:model/SelectWinningSubmission} selectWinningSubmission 
     * @param {module:api/CardsAgainstApi~selectWinnerGameSelectwinnerPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GameStatePlayerView}
     */
    selectWinnerGameSelectwinnerPost(roomName, selectWinningSubmission, callback) {
      let postBody = selectWinningSubmission;
      // verify the required parameter 'roomName' is set
      if (roomName === undefined || roomName === null) {
        throw new Error("Missing the required parameter 'roomName' when calling selectWinnerGameSelectwinnerPost");
      }
      // verify the required parameter 'selectWinningSubmission' is set
      if (selectWinningSubmission === undefined || selectWinningSubmission === null) {
        throw new Error("Missing the required parameter 'selectWinningSubmission' when calling selectWinnerGameSelectwinnerPost");
      }

      let pathParams = {
      };
      let queryParams = {
        'room_name': roomName
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JWTBearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GameStatePlayerView;
      return this.apiClient.callApi(
        '/game/selectwinner', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the startGameGameStartGamePost operation.
     * @callback module:api/CardsAgainstApi~startGameGameStartGamePostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GameStatePlayerView} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start Game
     * @param {String} roomName 
     * @param {module:api/CardsAgainstApi~startGameGameStartGamePostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GameStatePlayerView}
     */
    startGameGameStartGamePost(roomName, callback) {
      let postBody = null;
      // verify the required parameter 'roomName' is set
      if (roomName === undefined || roomName === null) {
        throw new Error("Missing the required parameter 'roomName' when calling startGameGameStartGamePost");
      }

      let pathParams = {
      };
      let queryParams = {
        'room_name': roomName
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JWTBearer'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GameStatePlayerView;
      return this.apiClient.callApi(
        '/game/start_game', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the submitCardsGameSubmitPost operation.
     * @callback module:api/CardsAgainstApi~submitCardsGameSubmitPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GameStatePlayerView} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Submit Cards
     * @param {String} roomName 
     * @param {Array.<module:model/WhiteCard>} whiteCard 
     * @param {module:api/CardsAgainstApi~submitCardsGameSubmitPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/GameStatePlayerView}
     */
    submitCardsGameSubmitPost(roomName, whiteCard, callback) {
      let postBody = whiteCard;
      // verify the required parameter 'roomName' is set
      if (roomName === undefined || roomName === null) {
        throw new Error("Missing the required parameter 'roomName' when calling submitCardsGameSubmitPost");
      }
      // verify the required parameter 'whiteCard' is set
      if (whiteCard === undefined || whiteCard === null) {
        throw new Error("Missing the required parameter 'whiteCard' when calling submitCardsGameSubmitPost");
      }

      let pathParams = {
      };
      let queryParams = {
        'room_name': roomName
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['JWTBearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GameStatePlayerView;
      return this.apiClient.callApi(
        '/game/submit', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
