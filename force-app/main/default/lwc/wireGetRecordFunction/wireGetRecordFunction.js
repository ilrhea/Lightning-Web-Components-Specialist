import { getFieldValue, getRecord } from 'lightning/uiRecordApi';
import { api, LightningElement, wire } from 'lwc';
import Contact_Name_Field from '@salesforce/schema/Contact.Name';

export default class WireGetRecordFunction extends LightningElement {

    @api recordId;
    data; 
    error; 
    @wire(getRecord, { recordId: '$recordId', fields: [Contact_Name_Field] })
    wiredContact(){
        console.log(); 
        if(data){
            this.data = data; 
            this.error = undefined;
        }
        else if(error){
            this.error = error; 
            this.data = undefined; 
        }
    }

    get name(){
        return getFieldValue(this.data, Contact_Name_Field);
    }
}