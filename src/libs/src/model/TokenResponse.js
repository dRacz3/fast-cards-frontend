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

import ApiClient from '../ApiClient';

/**
 * The TokenResponse model module.
 * @module model/TokenResponse
 * @version 0.0.1
 */
class TokenResponse {
    /**
     * Constructs a new <code>TokenResponse</code>.
     * @alias module:model/TokenResponse
     * @param accessToken {String} 
     */
    constructor(accessToken) { 
        
        TokenResponse.initialize(this, accessToken);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, accessToken) { 
        obj['access_token'] = accessToken;
    }

    /**
     * Constructs a <code>TokenResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TokenResponse} obj Optional instance to populate.
     * @return {module:model/TokenResponse} The populated <code>TokenResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TokenResponse();

            if (data.hasOwnProperty('access_token')) {
                obj['access_token'] = ApiClient.convertToType(data['access_token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} access_token
 */
TokenResponse.prototype['access_token'] = undefined;






export default TokenResponse;
