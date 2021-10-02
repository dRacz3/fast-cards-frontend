/**
 * fast-cards
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import BlackCard from './BlackCard';
import WhiteCard from './WhiteCard';

/**
 * The Submission model module.
 * @module model/Submission
 * @version 0.2.0
 */
class Submission {
    /**
     * Constructs a new <code>Submission</code>.
     * @alias module:model/Submission
     * @param blackCard {module:model/BlackCard} 
     * @param whiteCards {Array.<module:model/WhiteCard>} 
     */
    constructor(blackCard, whiteCards) { 
        
        Submission.initialize(this, blackCard, whiteCards);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, blackCard, whiteCards) { 
        obj['black_card'] = blackCard;
        obj['white_cards'] = whiteCards;
    }

    /**
     * Constructs a <code>Submission</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Submission} obj Optional instance to populate.
     * @return {module:model/Submission} The populated <code>Submission</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Submission();

            if (data.hasOwnProperty('black_card')) {
                obj['black_card'] = BlackCard.constructFromObject(data['black_card']);
            }
            if (data.hasOwnProperty('white_cards')) {
                obj['white_cards'] = ApiClient.convertToType(data['white_cards'], [WhiteCard]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/BlackCard} black_card
 */
Submission.prototype['black_card'] = undefined;

/**
 * @member {Array.<module:model/WhiteCard>} white_cards
 */
Submission.prototype['white_cards'] = undefined;






export default Submission;

