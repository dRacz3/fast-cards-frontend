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
import Submission from './Submission';

/**
 * The SelectWinningSubmission model module.
 * @module model/SelectWinningSubmission
 * @version 0.1.0
 */
class SelectWinningSubmission {
    /**
     * Constructs a new <code>SelectWinningSubmission</code>.
     * @alias module:model/SelectWinningSubmission
     * @param submission {module:model/Submission} 
     */
    constructor(submission) { 
        
        SelectWinningSubmission.initialize(this, submission);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, submission) { 
        obj['submission'] = submission;
    }

    /**
     * Constructs a <code>SelectWinningSubmission</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SelectWinningSubmission} obj Optional instance to populate.
     * @return {module:model/SelectWinningSubmission} The populated <code>SelectWinningSubmission</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SelectWinningSubmission();

            if (data.hasOwnProperty('submission')) {
                obj['submission'] = Submission.constructFromObject(data['submission']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/Submission} submission
 */
SelectWinningSubmission.prototype['submission'] = undefined;






export default SelectWinningSubmission;

