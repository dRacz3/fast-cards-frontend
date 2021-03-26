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
 * The Room model module.
 * @module model/Room
 * @version 0.0.1
 */
class Room {
    /**
     * Constructs a new <code>Room</code>.
     * @alias module:model/Room
     * @param roomName {String} 
     * @param playerCount {Number} 
     */
    constructor(roomName, playerCount) { 
        
        Room.initialize(this, roomName, playerCount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, roomName, playerCount) { 
        obj['room_name'] = roomName;
        obj['player_count'] = playerCount;
    }

    /**
     * Constructs a <code>Room</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Room} obj Optional instance to populate.
     * @return {module:model/Room} The populated <code>Room</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Room();

            if (data.hasOwnProperty('room_name')) {
                obj['room_name'] = ApiClient.convertToType(data['room_name'], 'String');
            }
            if (data.hasOwnProperty('player_count')) {
                obj['player_count'] = ApiClient.convertToType(data['player_count'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} room_name
 */
Room.prototype['room_name'] = undefined;

/**
 * @member {Number} player_count
 */
Room.prototype['player_count'] = undefined;






export default Room;

