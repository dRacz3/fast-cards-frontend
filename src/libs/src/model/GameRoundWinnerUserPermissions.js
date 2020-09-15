/**
 * CardsAgainstHumanity-Django API
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

import ApiClient from '../ApiClient';
import GameRoundWinnerUserContentType from './GameRoundWinnerUserContentType';

/**
 * The GameRoundWinnerUserPermissions model module.
 * @module model/GameRoundWinnerUserPermissions
 * @version v1
 */
class GameRoundWinnerUserPermissions {
    /**
     * Constructs a new <code>GameRoundWinnerUserPermissions</code>.
     * @alias module:model/GameRoundWinnerUserPermissions
     * @param name {String} 
     * @param codename {String} 
     */
    constructor(name, codename) { 
        
        GameRoundWinnerUserPermissions.initialize(this, name, codename);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, codename) { 
        obj['name'] = name;
        obj['codename'] = codename;
    }

    /**
     * Constructs a <code>GameRoundWinnerUserPermissions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GameRoundWinnerUserPermissions} obj Optional instance to populate.
     * @return {module:model/GameRoundWinnerUserPermissions} The populated <code>GameRoundWinnerUserPermissions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GameRoundWinnerUserPermissions();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('codename')) {
                obj['codename'] = ApiClient.convertToType(data['codename'], 'String');
            }
            if (data.hasOwnProperty('content_type')) {
                obj['content_type'] = GameRoundWinnerUserContentType.constructFromObject(data['content_type']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GameRoundWinnerUserPermissions.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GameRoundWinnerUserPermissions.prototype['name'] = undefined;

/**
 * @member {String} codename
 */
GameRoundWinnerUserPermissions.prototype['codename'] = undefined;

/**
 * @member {module:model/GameRoundWinnerUserContentType} content_type
 */
GameRoundWinnerUserPermissions.prototype['content_type'] = undefined;






export default GameRoundWinnerUserPermissions;
