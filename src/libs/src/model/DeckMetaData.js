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

/**
 * The DeckMetaData model module.
 * @module model/DeckMetaData
 * @version 0.2.0
 */
class DeckMetaData {
    /**
     * Constructs a new <code>DeckMetaData</code>.
     * @alias module:model/DeckMetaData
     * @param idName {String} 
     * @param description {String} 
     * @param name {String} 
     * @param icon {String} 
     */
    constructor(idName, description, name, icon) { 
        
        DeckMetaData.initialize(this, idName, description, name, icon);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, idName, description, name, icon) { 
        obj['id_name'] = idName;
        obj['description'] = description;
        obj['name'] = name;
        obj['icon'] = icon;
    }

    /**
     * Constructs a <code>DeckMetaData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeckMetaData} obj Optional instance to populate.
     * @return {module:model/DeckMetaData} The populated <code>DeckMetaData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeckMetaData();

            if (data.hasOwnProperty('id_name')) {
                obj['id_name'] = ApiClient.convertToType(data['id_name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('official')) {
                obj['official'] = ApiClient.convertToType(data['official'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('icon')) {
                obj['icon'] = ApiClient.convertToType(data['icon'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id_name
 */
DeckMetaData.prototype['id_name'] = undefined;

/**
 * @member {String} description
 */
DeckMetaData.prototype['description'] = undefined;

/**
 * @member {Boolean} official
 * @default false
 */
DeckMetaData.prototype['official'] = false;

/**
 * @member {String} name
 */
DeckMetaData.prototype['name'] = undefined;

/**
 * @member {String} icon
 */
DeckMetaData.prototype['icon'] = undefined;






export default DeckMetaData;

