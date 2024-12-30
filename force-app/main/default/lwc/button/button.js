import { api, LightningElement } from 'lwc';

export default class Button extends LightningElement {

    @api label;
    @api icon; 

    handleButton(event){
        this.dispatchEvent(new CustomEvent('buttonClick',{
            // bubble : true
        }))
    }

}