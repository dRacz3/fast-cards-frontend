/**
 * Snippets API
 * Test description
 *
 * The version of the OpenAPI document: v1
 * Contact: contact@snippets.local
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import BlackCard from '../model/BlackCard';
import InlineResponse200 from '../model/InlineResponse200';
import InlineResponse2001 from '../model/InlineResponse2001';
import Login from '../model/Login';
import PasswordChange from '../model/PasswordChange';
import PasswordReset from '../model/PasswordReset';
import PasswordResetConfirm from '../model/PasswordResetConfirm';
import Register from '../model/Register';
import UserDetails from '../model/UserDetails';
import VerifyEmail from '../model/VerifyEmail';
import WhiteCard from '../model/WhiteCard';

/**
* Api service.
* @module api/ApiApi
* @version v1
*/
export default class ApiApi {

    /**
    * Constructs a new ApiApi. 
    * @alias module:api/ApiApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the apiBlackCardsList operation.
     * @callback module:api/ApiApi~apiBlackCardsListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.search A search term.
     * @param {Number} opts.page A page number within the paginated result set.
     * @param {module:api/ApiApi~apiBlackCardsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */
    apiBlackCardsList(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'search': opts['search'],
        'page': opts['page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse200;
      return this.apiClient.callApi(
        '/api/black_cards/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiBlackCardsPartialUpdate operation.
     * @callback module:api/ApiApi~apiBlackCardsPartialUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BlackCard} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} cardId A unique integer value identifying this black card.
     * @param {module:model/BlackCard} data 
     * @param {module:api/ApiApi~apiBlackCardsPartialUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BlackCard}
     */
    apiBlackCardsPartialUpdate(cardId, data, callback) {
      let postBody = data;
      // verify the required parameter 'cardId' is set
      if (cardId === undefined || cardId === null) {
        throw new Error("Missing the required parameter 'cardId' when calling apiBlackCardsPartialUpdate");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling apiBlackCardsPartialUpdate");
      }

      let pathParams = {
        'card_id': cardId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = BlackCard;
      return this.apiClient.callApi(
        '/api/black_cards/{card_id}/', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiBlackCardsRead operation.
     * @callback module:api/ApiApi~apiBlackCardsReadCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BlackCard} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} cardId A unique integer value identifying this black card.
     * @param {module:api/ApiApi~apiBlackCardsReadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BlackCard}
     */
    apiBlackCardsRead(cardId, callback) {
      let postBody = null;
      // verify the required parameter 'cardId' is set
      if (cardId === undefined || cardId === null) {
        throw new Error("Missing the required parameter 'cardId' when calling apiBlackCardsRead");
      }

      let pathParams = {
        'card_id': cardId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = BlackCard;
      return this.apiClient.callApi(
        '/api/black_cards/{card_id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiBlackCardsUpdate operation.
     * @callback module:api/ApiApi~apiBlackCardsUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BlackCard} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} cardId A unique integer value identifying this black card.
     * @param {module:model/BlackCard} data 
     * @param {module:api/ApiApi~apiBlackCardsUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BlackCard}
     */
    apiBlackCardsUpdate(cardId, data, callback) {
      let postBody = data;
      // verify the required parameter 'cardId' is set
      if (cardId === undefined || cardId === null) {
        throw new Error("Missing the required parameter 'cardId' when calling apiBlackCardsUpdate");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling apiBlackCardsUpdate");
      }

      let pathParams = {
        'card_id': cardId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = BlackCard;
      return this.apiClient.callApi(
        '/api/black_cards/{card_id}/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiRestAuthLoginCreate operation.
     * @callback module:api/ApiApi~apiRestAuthLoginCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Login} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check the credentials and return the REST Token if the credentials are valid and authenticated. Calls Django Auth login method to register User ID in Django session framework  Accept the following POST parameters: username, password Return the REST Framework Token Object's key.
     * @param {module:model/Login} data 
     * @param {module:api/ApiApi~apiRestAuthLoginCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Login}
     */
    apiRestAuthLoginCreate(data, callback) {
      let postBody = data;
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling apiRestAuthLoginCreate");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Login;
      return this.apiClient.callApi(
        '/api/rest-auth/login/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiRestAuthLogoutCreate operation.
     * @callback module:api/ApiApi~apiRestAuthLogoutCreateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Calls Django logout method and delete the Token object assigned to the current User object.
     * Accepts/Returns nothing.
     * @param {module:api/ApiApi~apiRestAuthLogoutCreateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    apiRestAuthLogoutCreate(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/rest-auth/logout/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiRestAuthLogoutList operation.
     * @callback module:api/ApiApi~apiRestAuthLogoutListCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Calls Django logout method and delete the Token object assigned to the current User object.
     * Accepts/Returns nothing.
     * @param {module:api/ApiApi~apiRestAuthLogoutListCallback} callback The callback function, accepting three arguments: error, data, response
     */
    apiRestAuthLogoutList(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/api/rest-auth/logout/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiRestAuthPasswordChangeCreate operation.
     * @callback module:api/ApiApi~apiRestAuthPasswordChangeCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PasswordChange} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Calls Django Auth SetPasswordForm save method.
     * Accepts the following POST parameters: new_password1, new_password2 Returns the success/fail message.
     * @param {module:model/PasswordChange} data 
     * @param {module:api/ApiApi~apiRestAuthPasswordChangeCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PasswordChange}
     */
    apiRestAuthPasswordChangeCreate(data, callback) {
      let postBody = data;
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling apiRestAuthPasswordChangeCreate");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PasswordChange;
      return this.apiClient.callApi(
        '/api/rest-auth/password/change/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiRestAuthPasswordResetConfirmCreate operation.
     * @callback module:api/ApiApi~apiRestAuthPasswordResetConfirmCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PasswordResetConfirm} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Password reset e-mail link is confirmed, therefore this resets the user's password.
     * Accepts the following POST parameters: token, uid,     new_password1, new_password2 Returns the success/fail message.
     * @param {module:model/PasswordResetConfirm} data 
     * @param {module:api/ApiApi~apiRestAuthPasswordResetConfirmCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PasswordResetConfirm}
     */
    apiRestAuthPasswordResetConfirmCreate(data, callback) {
      let postBody = data;
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling apiRestAuthPasswordResetConfirmCreate");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PasswordResetConfirm;
      return this.apiClient.callApi(
        '/api/rest-auth/password/reset/confirm/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiRestAuthPasswordResetCreate operation.
     * @callback module:api/ApiApi~apiRestAuthPasswordResetCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PasswordReset} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Calls Django Auth PasswordResetForm save method.
     * Accepts the following POST parameters: email Returns the success/fail message.
     * @param {module:model/PasswordReset} data 
     * @param {module:api/ApiApi~apiRestAuthPasswordResetCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PasswordReset}
     */
    apiRestAuthPasswordResetCreate(data, callback) {
      let postBody = data;
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling apiRestAuthPasswordResetCreate");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = PasswordReset;
      return this.apiClient.callApi(
        '/api/rest-auth/password/reset/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiRestAuthRegistrationCreate operation.
     * @callback module:api/ApiApi~apiRestAuthRegistrationCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Register} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/Register} data 
     * @param {module:api/ApiApi~apiRestAuthRegistrationCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Register}
     */
    apiRestAuthRegistrationCreate(data, callback) {
      let postBody = data;
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling apiRestAuthRegistrationCreate");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Register;
      return this.apiClient.callApi(
        '/api/rest-auth/registration/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiRestAuthRegistrationVerifyEmailCreate operation.
     * @callback module:api/ApiApi~apiRestAuthRegistrationVerifyEmailCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VerifyEmail} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/VerifyEmail} data 
     * @param {module:api/ApiApi~apiRestAuthRegistrationVerifyEmailCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VerifyEmail}
     */
    apiRestAuthRegistrationVerifyEmailCreate(data, callback) {
      let postBody = data;
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling apiRestAuthRegistrationVerifyEmailCreate");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = VerifyEmail;
      return this.apiClient.callApi(
        '/api/rest-auth/registration/verify-email/', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiRestAuthUserPartialUpdate operation.
     * @callback module:api/ApiApi~apiRestAuthUserPartialUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reads and updates UserModel fields Accepts GET, PUT, PATCH methods.
     * Default accepted fields: username, first_name, last_name Default display fields: pk, username, email, first_name, last_name Read-only fields: pk, email  Returns UserModel fields.
     * @param {module:model/UserDetails} data 
     * @param {module:api/ApiApi~apiRestAuthUserPartialUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserDetails}
     */
    apiRestAuthUserPartialUpdate(data, callback) {
      let postBody = data;
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling apiRestAuthUserPartialUpdate");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = UserDetails;
      return this.apiClient.callApi(
        '/api/rest-auth/user/', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiRestAuthUserRead operation.
     * @callback module:api/ApiApi~apiRestAuthUserReadCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reads and updates UserModel fields Accepts GET, PUT, PATCH methods.
     * Default accepted fields: username, first_name, last_name Default display fields: pk, username, email, first_name, last_name Read-only fields: pk, email  Returns UserModel fields.
     * @param {module:api/ApiApi~apiRestAuthUserReadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserDetails}
     */
    apiRestAuthUserRead(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = UserDetails;
      return this.apiClient.callApi(
        '/api/rest-auth/user/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiRestAuthUserUpdate operation.
     * @callback module:api/ApiApi~apiRestAuthUserUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Reads and updates UserModel fields Accepts GET, PUT, PATCH methods.
     * Default accepted fields: username, first_name, last_name Default display fields: pk, username, email, first_name, last_name Read-only fields: pk, email  Returns UserModel fields.
     * @param {module:model/UserDetails} data 
     * @param {module:api/ApiApi~apiRestAuthUserUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserDetails}
     */
    apiRestAuthUserUpdate(data, callback) {
      let postBody = data;
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling apiRestAuthUserUpdate");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = UserDetails;
      return this.apiClient.callApi(
        '/api/rest-auth/user/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiWhiteCardsList operation.
     * @callback module:api/ApiApi~apiWhiteCardsListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2001} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} opts.search A search term.
     * @param {Number} opts.page A page number within the paginated result set.
     * @param {module:api/ApiApi~apiWhiteCardsListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2001}
     */
    apiWhiteCardsList(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'search': opts['search'],
        'page': opts['page']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2001;
      return this.apiClient.callApi(
        '/api/white_cards/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiWhiteCardsPartialUpdate operation.
     * @callback module:api/ApiApi~apiWhiteCardsPartialUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WhiteCard} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} cardId A unique integer value identifying this white card.
     * @param {module:model/WhiteCard} data 
     * @param {module:api/ApiApi~apiWhiteCardsPartialUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WhiteCard}
     */
    apiWhiteCardsPartialUpdate(cardId, data, callback) {
      let postBody = data;
      // verify the required parameter 'cardId' is set
      if (cardId === undefined || cardId === null) {
        throw new Error("Missing the required parameter 'cardId' when calling apiWhiteCardsPartialUpdate");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling apiWhiteCardsPartialUpdate");
      }

      let pathParams = {
        'card_id': cardId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = WhiteCard;
      return this.apiClient.callApi(
        '/api/white_cards/{card_id}/', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiWhiteCardsRead operation.
     * @callback module:api/ApiApi~apiWhiteCardsReadCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WhiteCard} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} cardId A unique integer value identifying this white card.
     * @param {module:api/ApiApi~apiWhiteCardsReadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WhiteCard}
     */
    apiWhiteCardsRead(cardId, callback) {
      let postBody = null;
      // verify the required parameter 'cardId' is set
      if (cardId === undefined || cardId === null) {
        throw new Error("Missing the required parameter 'cardId' when calling apiWhiteCardsRead");
      }

      let pathParams = {
        'card_id': cardId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = WhiteCard;
      return this.apiClient.callApi(
        '/api/white_cards/{card_id}/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the apiWhiteCardsUpdate operation.
     * @callback module:api/ApiApi~apiWhiteCardsUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/WhiteCard} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} cardId A unique integer value identifying this white card.
     * @param {module:model/WhiteCard} data 
     * @param {module:api/ApiApi~apiWhiteCardsUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/WhiteCard}
     */
    apiWhiteCardsUpdate(cardId, data, callback) {
      let postBody = data;
      // verify the required parameter 'cardId' is set
      if (cardId === undefined || cardId === null) {
        throw new Error("Missing the required parameter 'cardId' when calling apiWhiteCardsUpdate");
      }
      // verify the required parameter 'data' is set
      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling apiWhiteCardsUpdate");
      }

      let pathParams = {
        'card_id': cardId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Basic'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = WhiteCard;
      return this.apiClient.callApi(
        '/api/white_cards/{card_id}/', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
