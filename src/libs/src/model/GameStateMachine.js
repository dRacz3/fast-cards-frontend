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
import BlackCard from './BlackCard';
import CardsAgainstHumanityPlayer from './CardsAgainstHumanityPlayer';
import Submission from './Submission';
import WhiteCard from './WhiteCard';

/**
 * The GameStateMachine model module.
 * @module model/GameStateMachine
 * @version 0.0.1
 */
class GameStateMachine {
    /**
     * Constructs a new <code>GameStateMachine</code>.
     * @alias module:model/GameStateMachine
     * @param roomName {String} 
     * @param blackCards {Array.<module:model/BlackCard>} 
     * @param whiteCards {Array.<module:model/WhiteCard>} 
     */
    constructor(roomName, blackCards, whiteCards) { 
        
        GameStateMachine.initialize(this, roomName, blackCards, whiteCards);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, roomName, blackCards, whiteCards) { 
        obj['room_name'] = roomName;
        obj['black_cards'] = blackCards;
        obj['white_cards'] = whiteCards;
    }

    /**
     * Constructs a <code>GameStateMachine</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GameStateMachine} obj Optional instance to populate.
     * @return {module:model/GameStateMachine} The populated <code>GameStateMachine</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GameStateMachine();

            if (data.hasOwnProperty('room_name')) {
                obj['room_name'] = ApiClient.convertToType(data['room_name'], 'String');
            }
            if (data.hasOwnProperty('black_cards')) {
                obj['black_cards'] = ApiClient.convertToType(data['black_cards'], [BlackCard]);
            }
            if (data.hasOwnProperty('white_cards')) {
                obj['white_cards'] = ApiClient.convertToType(data['white_cards'], [WhiteCard]);
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('round_count')) {
                obj['round_count'] = ApiClient.convertToType(data['round_count'], 'Number');
            }
            if (data.hasOwnProperty('currently_active_card')) {
                obj['currently_active_card'] = BlackCard.constructFromObject(data['currently_active_card']);
            }
            if (data.hasOwnProperty('player_submissions')) {
                obj['player_submissions'] = ApiClient.convertToType(data['player_submissions'], {'String': Submission});
            }
            if (data.hasOwnProperty('player_lookup')) {
                obj['player_lookup'] = ApiClient.convertToType(data['player_lookup'], {'String': CardsAgainstHumanityPlayer});
            }
        }
        return obj;
    }


}

/**
 * @member {String} room_name
 */
GameStateMachine.prototype['room_name'] = undefined;

/**
 * @member {Array.<module:model/BlackCard>} black_cards
 */
GameStateMachine.prototype['black_cards'] = undefined;

/**
 * @member {Array.<module:model/WhiteCard>} white_cards
 */
GameStateMachine.prototype['white_cards'] = undefined;

/**
 * @member {String} state
 * @default 'STARTING'
 */
GameStateMachine.prototype['state'] = 'STARTING';

/**
 * @member {Number} round_count
 * @default 0
 */
GameStateMachine.prototype['round_count'] = 0;

/**
 * @member {module:model/BlackCard} currently_active_card
 */
GameStateMachine.prototype['currently_active_card'] = undefined;

/**
 * @member {Object.<String, module:model/Submission>} player_submissions
 */
GameStateMachine.prototype['player_submissions'] = undefined;

/**
 * @member {Object.<String, module:model/CardsAgainstHumanityPlayer>} player_lookup
 */
GameStateMachine.prototype['player_lookup'] = undefined;






export default GameStateMachine;

