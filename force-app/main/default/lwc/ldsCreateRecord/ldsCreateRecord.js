import { LightningElement } from 'lwc';
import Contact_OBJECT from '@salesforce/schema/Contact';
import First_Name_FIELD from '@salesforce/schema/Contact.FirstName';
import { createRecord } from 'lightning/uiRecordApi';

export default class LdsCreateRecord extends LightningElement {
    handleButtonClick(){
        const recordInput = { apiName: Contact_OBJECT.objectApiName, fields: { FirstName: First_Name_FIELD.fieldApiName } };
    }; 
    createRecord(recordInput){
        then(result => {
            console.log(result);
        }).catch(error => {
            console.error(error);
        });
    }
}