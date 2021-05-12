/**
 * fast-cards
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import SelectWinningSubmission from './SelectWinningSubmission';
import Submission from './Submission';
import WhiteCard from './WhiteCard';

/**
 * The CardsAgainstHumanityPlayer model module.
 * @module model/CardsAgainstHumanityPlayer
 * @version 0.1.0
 */
class CardsAgainstHumanityPlayer {
    /**
     * Constructs a new <code>CardsAgainstHumanityPlayer</code>.
     * @alias module:model/CardsAgainstHumanityPlayer
     * @param username {String} 
     * @param cardsInHand {Array.<module:model/WhiteCard>} 
     */
    constructor(username, cardsInHand) { 
        
        CardsAgainstHumanityPlayer.initialize(this, username, cardsInHand);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, username, cardsInHand) { 
        obj['username'] = username;
        obj['cards_in_hand'] = cardsInHand;
    }

    /**
     * Constructs a <code>CardsAgainstHumanityPlayer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CardsAgainstHumanityPlayer} obj Optional instance to populate.
     * @return {module:model/CardsAgainstHumanityPlayer} The populated <code>CardsAgainstHumanityPlayer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CardsAgainstHumanityPlayer();

            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('cards_in_hand')) {
                obj['cards_in_hand'] = ApiClient.convertToType(data['cards_in_hand'], [WhiteCard]);
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
            if (data.hasOwnProperty('votes')) {
                obj['votes'] = ApiClient.convertToType(data['votes'], [SelectWinningSubmission]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} username
 */
CardsAgainstHumanityPlayer.prototype['username'] = undefined;

/**
 * @member {Array.<module:model/WhiteCard>} cards_in_hand
 */
CardsAgainstHumanityPlayer.prototype['cards_in_hand'] = undefined;

/**
 * @member {Number} points
 * @default 0
 */
CardsAgainstHumanityPlayer.prototype['points'] = 0;

/**
 * @member {String} current_role
 * @default 'PLAYER'
 */
CardsAgainstHumanityPlayer.prototype['current_role'] = 'PLAYER';

/**
 * @member {Array.<module:model/Submission>} submissions
 */
CardsAgainstHumanityPlayer.prototype['submissions'] = undefined;

/**
 * @member {Array.<module:model/SelectWinningSubmission>} votes
 */
CardsAgainstHumanityPlayer.prototype['votes'] = undefined;






export default CardsAgainstHumanityPlayer;

