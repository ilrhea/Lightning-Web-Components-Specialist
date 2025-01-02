import { api, LightningElement, wire } from 'lwc';
import CONTACT_NAME_FIELD from '@salesforce/schema/Contact.Name';
import { getFieldValue, getRecord } from 'lightning/uiRecordApi';

export default class WireGetRecordProperty extends LightningElement {

    @api
    recordId;

    @wire(getRecord, { recordId: '$recordId', fields: [CONTACT_NAME_FIELD] })
    contact; 

    get name(){
        return getFieldValue(this.contact.data, CONTACT_NAME_FIELD);
    }
    
}