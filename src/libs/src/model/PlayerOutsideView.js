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
import Submission from './Submission';

/**
 * The PlayerOutsideView model module.
 * @module model/PlayerOutsideView
 * @version 0.0.1
 */
class PlayerOutsideView {
    /**
     * Constructs a new <code>PlayerOutsideView</code>.
     * @alias module:model/PlayerOutsideView
     * @param username {String} 
     */
    constructor(username) { 
        
        PlayerOutsideView.initialize(this, username);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, username) { 
        obj['username'] = username;
    }

    /**
     * Constructs a <code>PlayerOutsideView</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PlayerOutsideView} obj Optional instance to populate.
     * @return {module:model/PlayerOutsideView} The populated <code>PlayerOutsideView</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PlayerOutsideView();

            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('points')) {
                obj['points'] = ApiClient.convertToType(data['points'], 'Number');
            }
            if (data.hasOwnProperty('current_role')) {
                obj['current_role'] = ApiClient.convertToType(data['current_role'], 'String');
            }
            if (data.hasOwnProperty('submissions')) {
                obj['submissions'] = ApiClient.convertToType(data['submissions'], [Submission]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} username
 */
PlayerOutsideView.prototype['username'] = undefined;

/**
 * @member {Number} points
 * @default 0
 */
PlayerOutsideView.prototype['points'] = 0;

/**
 * @member {String} current_role
 * @default 'PLAYER'
 */
PlayerOutsideView.prototype['current_role'] = 'PLAYER';

/**
 * @member {Array.<module:model/Submission>} submissions
 */
PlayerOutsideView.prototype['submissions'] = undefined;






export default PlayerOutsideView;

